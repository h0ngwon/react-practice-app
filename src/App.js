import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';

function App() {
	const [usersList, setUsersList] = useState([]);

	const addUserHandler = (name, age) => {
		setUsersList((prevList) => {
			return [
				...prevList,
				{ id: Math.random().toString(), name: name, age: age },
			];
		});
	};

	return (
		<div>
			<AddUser onAddUser={addUserHandler} />
			<UserList users={usersList} />
		</div>
	);
}

export default App;
