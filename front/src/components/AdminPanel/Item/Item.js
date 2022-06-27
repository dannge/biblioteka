import React, { useState, Fragment, useEffect } from 'react';
import AddItem from './AddItem';
import EditItem from './EditItem';
import ListItem from './ListItem';
import 'bootstrap/dist/css/bootstrap.css';

const Item = () => {
	const [ items, setItems ] = useState({});
	const [ currentItem, setCurrentItem ] = useState({});
	const [ editing, setEditing ] = useState(false);

	const fetchData = async () => {
		await fetch('http://localhost:3001/api/v1/items').then((response) => response.json()).then((data) => {
			setItems(data.data.items);
			console.log(data.data.items);
		});
	};

	useEffect(() => {
		fetchData();
	}, []);

	const addItem = async (items) => {
		console.log(items);

		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(items)
		};
		await fetch('http://localhost:3001/api/v1/items/', requestOptions).then((response) => response.json());
		fetchData();
	};

	const deleteItem = async (id) => {
		console.log(id);
		await fetch('http://localhost:3001/api/v1/items/' + id, { method: 'DELETE' });

		setItems(items.filter((items) => items.id !== id));
		fetchData();
	};

	const updateItem = (id, updatedItem) => {
		setEditing(false);
		const requestOptions = {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(updatedItem)
		};
		fetch('http://localhost:3001/api/v1/items/' + id, requestOptions).then((response) => response.json());

		setItems(items.map((items) => (items._id === id ? updatedItem : items)));
	};

	const editRow = (item) => {
		setEditing(true);

		setCurrentItem(item);
	};

	return (
		<div className=" container-fluid itemsContainer">
			<div className="row itemPage">
				<div className=" col-lg-12 col-md-12 col-sm-12">
					<div className="itemEnter">
						{editing ? (
							<Fragment>
								<EditItem
									editing={editing}
									setEditing={setEditing}
									currentItem={currentItem}
									updateItem={updateItem}
								/>
							</Fragment>
						) : (
							<Fragment>
								<AddItem addItem={addItem} />
							</Fragment>
						)}
					</div>

					<div className="ItemsListContainer ">
						<ListItem className="ItemList " items={items} editRow={editRow} deleteItem={deleteItem} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Item;
