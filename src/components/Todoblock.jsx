import '../scss/todoblock.scss';
import React, { useState } from 'react';
import Caption from './Caption';
import Todo from './Todo';

const mockTodoList = [
	{text: 'Сверстать список', id: 1},
	{text: 'Создать список', id: 2},
	{text: 'Закончить список', id: 3},
];

const Todoblock = () => {
	const [todoList, setTodoList] = useState(mockTodoList);
	const addTodo = (todoText) => {
		let lastId = todoList[todoList.length-1].id;

		if (!todoText) {
			return;
		}

		setTodoList([
			...todoList,
			{
				text: todoText,
				id: lastId + 1,
			},
		]);
	};

	const deleteHandle = (id) => {
		setTodoList(
			todoList.filter(item => item.id !== id)
		);
	};

	return (
		<div className="todoblock">
			<div className="todoblock__container">
				<Caption add={addTodo} />
				<Todo todoList={todoList} deleteTodo={deleteHandle} />
			</div>
		</div>
	);
};

export default Todoblock;