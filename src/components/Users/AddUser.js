import React, { useState } from 'react';
import Card from '../UI/Card';
import styles from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) => {
	const [userName, setUserName] = useState('');
	const [userAge, setUserAge] = useState('');
	const [error, setError] = useState();

	const addUserHandler = (event) => {
		event.preventDefault();

		if (userName.trim().length === 0 || userAge.trim().length === 0) {
			setError({
				title: '잘못된 값을 입력하셨습니다.',
				message: '이름과 나이를 정확하게 입력해주세요.',
			});
			return;
		}

		if (+userAge < 1) {
			setError({
				title: '잘못된 값을 입력하셨습니다.',
				message: '나이를 정확하게 입력해주세요.',
			});
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

    const errorHandler = () => {
        setError(null);
    }

	return (
		<>
			{error && (
				<ErrorModal
					title={error.title}
					message={error.message}
                    onConfirm={errorHandler}
				/>
			)}
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
		</>
	);
};

export default AddUser;
