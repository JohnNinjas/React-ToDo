import React, { useState, useRef } from 'react';
import editImg from '../assets/img/edit.svg';
import trashImg from '../assets/img/trash.svg';

const TodoElement = ({ text, id, deleteTodo }) => {
	const [editingText, setEditingText] = useState(false);
	const [todoText, setTodoText] = useState(text);
	const inputRef = useRef();

	const handleEdit = () => {
		setTodoText(inputRef.current.value);
		setEditingText(false);
	};

	return (
		<li className="todo__container">
			<img
				className="todo__btn"
				src={editImg} alt="edit"
				onClick={() => setEditingText(true)}
			/>
			{ editingText ?
				<div className="todo__editing-block">
					<input type="text" className="todo__edit-text-field" defaultValue={todoText} ref={inputRef} />
					<button className="todo__save-edit-text-btn" onClick={handleEdit} />
				</div>
				:
				<span className="todo__text" onDoubleClick={() => setEditingText(true)}>{todoText}</span>
			}
			<img className="todo__btn" src={trashImg} alt="delete" onClick={() => deleteTodo(id)} />
		</li>
	);
};

export default TodoElement;