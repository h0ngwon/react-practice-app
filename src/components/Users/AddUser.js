import React, { useRef, useState } from 'react';
import Card from '../UI/Card';
import styles from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) => {
	const nameInputRef = useRef();
	const ageInputRef = useRef();
	const [error, setError] = useState();

	const addUserHandler = (event) => {
		event.preventDefault();

		const enteredName = nameInputRef.current.value;
		const enteredAge = ageInputRef.current.value;

		if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
			setError({
				title: '잘못된 값을 입력하셨습니다.',
				message: '이름과 나이를 정확하게 입력해주세요.',
			});
			return;
		}

		if (+enteredAge < 1) {
			setError({
				title: '잘못된 값을 입력하셨습니다.',
				message: '나이를 정확하게 입력해주세요.',
			});
			return;
		}
		props.onAddUser(enteredName, enteredAge);
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
	};

	const errorHandler = () => {
		setError(null);
	};

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
					<input id='username' type='text' ref={nameInputRef} />

					<label htmlFor='age'>나이</label>
					<input id='age' type='number' ref={ageInputRef} />

					<Button type='submit'>사용자 추가</Button>
				</form>
			</Card>
		</>
	);
};

export default AddUser;
