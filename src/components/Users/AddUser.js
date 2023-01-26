import React from 'react';

const AddUser = (props) => {
    const addUserHandler = (event) => {
        event.preventDefault();

    }
	return (
		<div>
			<form onSubmit={addUserHandler}>
				<label htmlFor='username'>이름</label>
				<input id='username' type='text' />
                <label htmlFor='age'>나이</label>
				<input id='age' type='number' />
                <button type='submit'>사용자 추가</button>
			</form>
		</div>
	);
};

export default AddUser;
