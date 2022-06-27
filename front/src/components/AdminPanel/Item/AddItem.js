import React, { useState, useEffect } from 'react';
import './AddItem.css';

const AddItem = (props) => {
	const [ itemAuthor, setItemAuthor ] = useState();
	const [ itemTitle, setItemTitle ] = useState();
	const [ itemCategory, setItemCategory ] = useState('');
	let maxDate = new Date();
	let isItemValid = true;
	let [ categories, setCategories ] = useState('');
	const [ itemDate, setItemDate ] = useState(maxDate.toLocaleDateString('lt-LT'));
	let [ isLoading, setIsLoading ] = useState(true);

	function fetchCategories() {
		fetch('http://localhost:3001/api/v1/categories/').then((response) => response.json()).then((data) => {
			setCategories(data.data.categories);
			setIsLoading(false);
		});
	}

	useEffect(() => {
		fetchCategories();
	}, []);

	const handleSubmit = (e) => {
		console.log(itemAuthor);
		if (itemAuthor === '   ') {
			console.log('is empty');
		}
		e.preventDefault();
		let itemAuthorFirstLetter = itemAuthor[0].toUpperCase();
		let upperCaseitemAuthor = itemAuthorFirstLetter + itemAuthor.slice(1);
		console.log('bonk');
		if (isItemValid) {
			props.addItem({
				Author: upperCaseitemAuthor,
				Date: itemDate,
				Title: itemTitle,
				Category: itemCategory
			});
		}
	};

	function itemAuthorAdd(e) {
		setItemAuthor(e.target.value);
	}

	function itemTitleAdd(e) {
		setItemTitle(e.target.value);
	}

	function itemCategoryAdd(e) {
		setItemCategory(e.target.value);
	}
	function itemDateAdd(e) {
		setItemDate(e.target.value);
	}

	return (
		<div className="AddItem container-fluid">
			<form className="AddItem-form row" onSubmit={handleSubmit}>
				<h3 className="AddItem-title col-lg-12 col-md-12 col-sm-12"> Pridėti knygą</h3>

				<div className="col-lg-6 col-md-12 col-sm-12 itemAddForm">
					<input
						className="AddItem-input"
						type="text"
						name="itemAuthor"
						required
						maxLength="50"
						minLength="2"
						placeholder="Autorius"
						onChange={itemAuthorAdd}
					/>
				</div>

				<div className="col-lg-6 col-md-12 col-sm-12 itemAddForm">
					<input
						id="additem-Title"
						className="AddItem-input"
						type="text"
						name="itemTitle"
						required
						maxLength="40"
						minLength="2"
						placeholder="Pavadinimas "
						onChange={itemTitleAdd}
					/>
				</div>

				<div className="col-lg-6 col-md-12 col-sm-12 itemAdd">
					<select
						className="AddItem-input"
						onChange={(e) => {
							setCategories(e.target.value);
						}}
						name="restaurant"
					>
						<option selected="true" hidden value="">
							Kategorija
						</option>
						{!isLoading &&
							categories.map((categories) => <option value={categories.Name}>{categories.Name}</option>)}
					</select>
				</div>

				<div className="col-lg-6 col-md-12 col-sm-12 itemAdd">
					<input
						className="AddItem-input"
						type="date"
						name="itemDate"
						required
						min={maxDate.toLocaleDateString('lt-LT')}
						placeholder="Grąžinti iki ..."
						onChange={itemDateAdd}
						value={itemDate}
					/>
				</div>
				<div className="col-lg-3 col-md-12 col-sm-12">
					<button id="button-itemAdd" type="submit">
						{' '}
						Pridėti
					</button>
				</div>
			</form>
		</div>
	);
};

export default AddItem;
