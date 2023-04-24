import {useState, useRef, useContext, useCallback} from 'react';
import cx from "classnames";

import {ReactComponent as FavoriteLogo} from "./images/favorite.svg";
import {ReactComponent as MessageLogo} from "./images/message.svg";
import {ReactComponent as RemoveLogo} from "./images/remove.svg";
import Checkbox from "../Checkbox";
import {TodoContext} from "../../context";

const ItemTodo = ({message, favorite, completed, id}) => {
	const [edit, setEdit] = useState(true);
	const [currentMessage, setCurrentMessage] = useState(message)
	const inputRef = useRef();
	const {updateTodo, toDoes, deleteToDo, completeToDo, favoriteToDo} = useContext(TodoContext)

	const editItemTodo = () => {
		setEdit(!edit);
		updateTodo(currentMessage, id)
	}

	const handleKeyDown = useCallback((e)=>{
		if(e.key==="Enter"){
			editItemTodo();
		}
	}, [currentMessage])


	return (
		<li className={cx("list-todo", {'completed-todo': completed}, {edit: !edit}, {"favorite-todo": favorite})}>
			<Checkbox checked={completed} onChange={() => completeToDo(id)}>
				<input disabled={edit || completed} ref={inputRef} maxLength={50} type="text"
				       value={currentMessage}
					   onKeyDown={handleKeyDown}
				       onChange={() => {  setCurrentMessage(inputRef.current.value)  }}
				/>
			</Checkbox>
			<div className="list-actions">
				<button type="button" className="btn-action" disabled={completed} onClick={() => favoriteToDo(id)}>
					<FavoriteLogo className={cx("svg-icon icon-favorite", {active: favorite})}/></button>
				<button type="button" className="btn-action" disabled={completed} onClick={editItemTodo}><MessageLogo
					className={cx("svg-icon icon-message", {active: !edit})}/></button>
				<button type="button" className="btn-action" onClick={() => deleteToDo(id)}><RemoveLogo
					className="svg-icon icon-remove"/></button>
			</div>
		</li>
	);
};

export default ItemTodo;
