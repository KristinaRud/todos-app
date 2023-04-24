import {useContext} from 'react';

import ItemTodo from "./ItemTodo";

import {TodoContext} from "../../context";

import './ListTask.scss'

const ListTask = () => {

	const {toDoes} = useContext(TodoContext);

	let todoList = toDoes.map(({message, favorite, completed, id}) => (
		<ItemTodo
			key={id}
			message={message}
			id={id}
			favorite={favorite}
			completed={completed}/>
	))

	return (
		<div className="list-wrapper">
			<ul className="list-tasks">
				{todoList}
			</ul>
		</div>
	);
};

export default ListTask;
