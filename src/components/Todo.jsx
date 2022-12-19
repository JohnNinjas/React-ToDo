import '../scss/todo.scss';
import React from 'react';
import TodoElement from './TodoElement';

const Todo = ({ todoList, deleteTodo }) => {
	return (
		<ul className="todo">
			{todoList.map((elem) => (
				<TodoElement key={elem.id} text={elem.text} id={elem.id} deleteTodo={deleteTodo} />
			))}
		</ul>
	);
};

export default Todo;