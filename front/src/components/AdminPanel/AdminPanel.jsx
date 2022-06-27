import React, { useState } from 'react';

import './AdminPanel.css';
import Users from './Users/Users';

import Item from './Item/Item';

const AdminPanel = () => {
	let [ adminPage, setAdminPage ] = useState('users');
	return (
		<div className="adminPage">
			<h1>Administracinis puslapis</h1>
			<div className="adminNav">
				<button
					onClick={() => {
						setAdminPage('users');
					}}
				>
					Vartotojai
				</button>

				<button
					onClick={() => {
						setAdminPage('items');
					}}
				>
					Knygos
				</button>
			</div>
			{adminPage === 'users' && (
				<div className="adminUsersPanel">
					<Users />
				</div>
			)}

			{adminPage === 'items' && (
				<div className="adminHistoryPanel">
					<Item />
				</div>
			)}
		</div>
	);
};

export default AdminPanel;
