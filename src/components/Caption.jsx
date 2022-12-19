import '../scss/caption.scss';
import React, { useRef, useEffect } from 'react';

const Caption = ({ add }) => {
	const inputRef = useRef(null);
	
	const handleSubmit = () => {
		if (inputRef.current) {
			add(inputRef.current.value);
		}
	};

	useEffect(() => {
		if (inputRef.current) {
			inputRef.current.focus();
		}
	}, [inputRef]);

	return (
		<div className="caption">
			<label className="caption__inputTitle" htmlFor="addtodo">
				ToDo List
				<input
					className="caption__input"
					id="addtodo"
					placeholder="Добавьте задачу"
					defaultValue=""
					ref={inputRef}
				/>
			</label>
			<button className="caption__add-btn" onClick={handleSubmit} >Добавить</button>
		</div>
	);
};

export default Caption;