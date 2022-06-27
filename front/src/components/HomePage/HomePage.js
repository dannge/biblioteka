import React, { useState, useEffect } from 'react';
import './HomePage.css';

function HomePage(props) {
	const [ items, setItems ] = useState([]);
	let [ isLoading, setIsLoading ] = useState(true);

	function fetchItems() {
		fetch('http://localhost:3001/api/v1/items/').then((response) => response.json()).then((data) => {
			setItems(data.data.items);
			setIsLoading(false);
		});
	}

	useEffect(() => {
		fetchItems();
	}, []);

	return (
		<div className="container">
			<h2>Knygos</h2>
			{!isLoading &&
							items.map((items) => (
								
			<>				
			<h3>{items.Author} </h3>
			<div>{items.Title}</div>
			<div>{items.Category}</div>
			<div>Gražinti iki  {items.Date} dienos.</div>
			
			</>
		))}	

		</div>
	);
}

export default HomePage;
