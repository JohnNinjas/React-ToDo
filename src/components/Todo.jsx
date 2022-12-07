import '../scss/todo.scss';
import React from 'react';
import editImg from '../assets/img/edit.svg';
import trashImg from '../assets/img/trash.svg';

const Todo = ({ todoList }) => {
	return (
		<ul className="todo">
			{todoList.map((elem) => (
				<li className="todo__container" key={elem.id}>
					<img className="todo__btn" src={editImg} alt="edit" />
					<span className="todo__text">{elem.text}</span>
					<img className="todo__btn" src={trashImg} alt="delete" />
				</li>
			))}
		</ul>
	);
};

export default Todo;