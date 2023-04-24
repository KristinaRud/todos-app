import {useContext, useCallback, useMemo} from 'react';

import {TodoContext} from "../../context";
import './Header.scss'

const Header = () => {
	const {toDoes, countTasks} = useContext(TodoContext)

	const handleCountComplete = () => {
		let currentCount = toDoes.length;
		toDoes.forEach(el => {
			if (el.completed) {
				--currentCount
			}

		})
		return currentCount / toDoes.length * 100;
	}
	// const counterCompleted = useCallback(()=> handleCountComplete(),[toDoes])
	const counterCompleted = useMemo(() => handleCountComplete(), [toDoes])

	return (
		<header className="g-header">
			<h1>Task Manager</h1>
			<div className="header-desc">
				{/*<p>Процент не выполненых задач {counterCompleted()}%</p>*/}
				<p>Процент не выполненых задач {counterCompleted}%</p>
				<p>Количество созданных задач за сессию: {countTasks}</p>
			</div>
		</header>
	);
};

export default Header;
