import '../scss/todoblock.scss';
import React from 'react';
import Caption from './Caption';
import Todo from './Todo';

const mockTodoList = [
	{text: 'Сверстать список', id: 1},
	{text: 'Создать список', id: 2},
	{text: 'Закончить список', id: 3},
];

const Todoblock = () => {
	return (
		<div className="todoblock">
			<div className="todoblock__container">
				<Caption />
				<Todo todoList={mockTodoList} />
			</div>
		</div>
	);
};

export default Todoblock;