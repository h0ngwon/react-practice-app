import React, { useState } from 'react';
import Card from '../UI/Card';
import styles from './AddUser.module.css';
import Button from '../UI/Button';

const AddUser = (props) => {
	const [userName, setUserName] = useState('');
	const [userAge, setUserAge] = useState('');

	const addUserHandler = (event) => {
		event.preventDefault();
		
        if(userName.trim().length === 0 || userAge.trim().length === 0) {
            return;
        }

        if(+userAge < 1) {
            return;
        }
        props.onAddUser(userName, userAge);
		setUserName('');
		setUserAge('');
	};

	const userNameHandler = (event) => {
		setUserName(event.target.value);
	};

	const userAgeHandler = (event) => {
		setUserAge(event.target.value);
	};
	return (
		<Card className={styles.input}>
			<form onSubmit={addUserHandler}>
				<label htmlFor='username'>이름</label>
				<input
					id='username'
					value={userName}
					type='text'
					onChange={userNameHandler}
				/>

				<label htmlFor='age'>나이</label>
				<input
					id='age'
					value={userAge}
					type='number'
					onChange={userAgeHandler}
				/>

				<Button type='submit'>사용자 추가</Button>
			</form>
		</Card>
	);
};

export default AddUser;
