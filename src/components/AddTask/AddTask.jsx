import {useRef, useContext} from 'react';

import Button from "../Button";
import {TodoContext} from "../../context";
import Api from "../../api";
import './AddTask.scss'

const AddTask = () => {

	const inputRef = useRef(null);

	const {addToDo, countTasksToDo} = useContext(TodoContext);

	const handleAddToDo = async (e) => {
		e.preventDefault();
		const value = inputRef.current.value
		if (value.length === 0) return;
		const task = await Api.createTask(value);
		addToDo(task);
		countTasksToDo();
		inputRef.current.value = '';
	}

	return (
		<div className="add-task">
			<form onSubmit={handleAddToDo} className="form-task">
				<input ref={inputRef}
				       className="task-massage"
				       maxLength={50}
				       placeholder='Description of my new task'
				       type='text'
				/>
				<Button className="task-btn" type="submit">Добавить задачу</Button>
			</form>
		</div>

	);
};

export default AddTask;
