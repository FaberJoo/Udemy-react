import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

const users = [
	{
		name: 'max',
		age: '12',
		id: Math.round(Math.random()).toString(),
	},
	{
		name: 'dk',
		age: '26',
		id: Math.round(Math.random()).toString(),
	},
];

function App() {
	const [Users, setUsers] = useState(users);

	const onAddUser = (userName, userAge) => {
		setUsers((prevUsers) => {
			return [
				{
					name: userName,
					age: userAge,
					id: Math.round(Math.random()).toString(),
				},
				...prevUsers,
			];
		});
	};

	return (
		<div>
			<AddUser onAddUser={onAddUser} />
			<UsersList users={Users} />
		</div>
	);
}

export default App;
