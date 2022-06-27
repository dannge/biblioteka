import React, { useState, useEffect } from 'react';
import './EditItem.css';

const EditItem = (props) => {
	const [ item, setItem ] = useState(props.currentItem);
	const [ editAuthor, setEditAuthor ] = useState(props.currentItem.Author);
	const [ editTitle, setEditTitle ] = useState(props.currentItem.Title);
	const [ editCategory, setEditCategory ] = useState(props.currentItem.Category);
	let maxDate = new Date();
	const [ editCategoryName, setEditCategoryName ] = useState(props.currentItem.Category);
	const [ editDate, setEditDate ] = useState(props.currentItem.Date.split('T')[0]);
	let [ categories, setCategories ] = useState('');
	let [ isLoading, setIsLoading ] = useState(true);

	useEffect(
		() => {
			setItem(props.currentItem);
		},
		[ props ]
	);

	function fetchCategories() {
		fetch('http://localhost:3001/api/v1/categories/').then((response) => response.json()).then((data) => {
			setCategories(data.data.categories);
			setIsLoading(false);
			console.log(categories);
		});
	}

	useEffect(() => {
		fetchCategories();
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		let updatedItem = {
			_id: item._id,
			Author: editAuthor,
			Title: editTitle,
			Category: editCategory,
			Date: editDate
		};
		props.updateItem(item._id, updatedItem);
	};

	return (
		<div className="EditItem container-fluid">
			<form className="EditItem-form row" onSubmit={handleSubmit}>
				<h3 className="EditItem-title col-lg-12 col-md-12 col-sm-12"> Atnaujinti knygą</h3>

				<div className="col-lg-6 col-md-12 col-sm-12  itemEdit">
					<input
						className="EditItem-input "
						type="text"
						Author="itemAuthor"
						required
						maxLength="50"
						minLength="2"
						placeholder="Autorius"
						value={editAuthor}
						onChange={(e) => {
							setEditAuthor(e.target.value);
						}}
					/>
				</div>

				<div className="col-lg-6 col-md-12 col-sm-12 itemEdit">
					<input
						id="editItem-Title"
						className="EditItem-input "
						type="text"
						name="itemTitle"
						required
						maxLength="40"
						minLength="2"
						placeholder="Pavadinimas"
						value={editTitle}
						onChange={(e) => {
							setEditTitle(e.target.value);
						}}
					/>
				</div>

				<div className="col-lg-6 col-md-12 col-sm-12  itemEdit">
					<select
						className="EditItem-input "
						value={editCategoryName}
						onChange={(e) => {
							setEditCategoryName(e.target.value);
						}}
						required
						name="restaurant"
					>
						<option selected="true" hidden value="">
							Kategorija
						</option>
						{!isLoading &&
							categories.map((categories) => <option value={categories.Name}>{categories.Name}</option>)}
					</select>
				</div>

				<div className="col-lg-6 col-md-12 col-sm-12">
					<input
						className="EditItem-input "
						type="date"
						name="itemDate"
						required
						min={maxDate.toLocaleDateString('en-CA')}
						placeholder="Grąžinti iki ..."
						value={editDate}
						onChange={(e) => {
							setEditDate(e.target.value);
						}}
					/>
				</div>
				<div className="col-lg-3 col-md-12 col-sm-12">
					<button id="button-itemUpdate">Atnaujinti</button>
				</div>
				<div className="col-lg-3 col-md-12 col-sm-12">
					<button
						id="button-itemCancel"
						className="col-lg-6 col-md-12 col-sm-12"
						onClick={() => props.setEditing(false)}
					>
						Atšaukti
					</button>
				</div>
			</form>
		</div>
	);
};

export default EditItem;
