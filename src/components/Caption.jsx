import '../scss/caption.scss';
import React from 'react';

const Caption = () => {
	return (
		<div className="caption">
			<label className="caption__inputTitle" htmlFor="addtodo">
				ToDo List
				<input className="caption__input" id="addtodo" placeholder="Добавьте задачу" />
			</label>
			<button className="caption__add-btn">Добавить</button>
		</div>
	);
};

export default Caption;