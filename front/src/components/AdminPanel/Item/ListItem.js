import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { FaRegEdit } from 'react-icons/fa';
import Table from 'react-bootstrap/Table';

const ListItem = (props) => (
	<Table striped bordered responsive="lg" hover variant="dark">
		<thead>
			<tr>
				<th>Autorius</th>
				<th>Pavadinimas</th>
				<th>Kategorija</th>
				<th>Grąžinimo data</th>
				<th>Veiksmai</th>
			</tr>
		</thead>
		<tbody>
			{props.items.length > 0 ? (
				props.items.map((item) => (
					<tr key={item._id}>
						<td>{item.Author}</td>
						<td>{item.Title}</td>
						<td>{item.Category}</td>
						<td>{item.Date}</td>
						<td>
							<button
								onClick={() => {
									props.editRow(item);
								}}
								className="button btn-warning ms-3"
							>
								<FaRegEdit />
							</button>
							<button onClick={() => props.deleteItem(item._id)} className="button  btn-danger ms-3">
								<FaTrash />
							</button>
						</td>
					</tr>
				))
			) : (
				<tr>
					<td colSpan={3}>No item</td>
				</tr>
			)}
		</tbody>
	</Table>
);

export default ListItem;
