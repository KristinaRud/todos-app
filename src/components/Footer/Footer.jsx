import {useContext} from 'react';
import Checkbox from '../Checkbox'

import './Footer.scss'
import {TodoContext} from "../../context";

const Footer = () => {
	const {completeAllToDo, toDoes} = useContext(TodoContext)
	const allCheck = toDoes.some(el => el.completed !== true)

	return (
		<footer className="g-footer">
			<Checkbox onChange={completeAllToDo} checked={!allCheck}
			>
				<span>
	                Все задачи выполнены
	            </span>
			</Checkbox>
		</footer>
	);
};

export default Footer;
