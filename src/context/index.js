import {createContext, useState, useReducer} from "react";
import Api from '../api/index';
import reducer, {initialState} from "../reducer";
import * as actions from "../actions";
import {sortTaskByGroup} from "../helpers";

export const TodoContext = createContext({})


const ToDoProvider = ({children}) => {
    const [toDoes, setToDoes] = useState([]);
    const [state, dispatch]=useReducer(reducer, initialState);
    const [countTasks, setCountTasks]= useState(0);

    const countTasksToDo=()=>{
        dispatch({type:actions.COUNT_TASKS});
        setCountTasks(state.count);
    }
    const addToDo = (value) => setToDoes((prev) => sortTaskByGroup([...prev, value]))

    const updateTodo = (message, id) => {

        const update = toDoes.map(el => {
            if (el.id === id) {
                el.message = message;
            }
            return el;

        })

        setToDoes(sortTaskByGroup([...update]))
    }

    const deleteToDo = (id) => {

        if (Api.removeTask(id)) {
            const update = toDoes.filter(el => el.id !== id)
            setToDoes(sortTaskByGroup([...update]))
        }
    }
    const completeToDo = (id) =>{
        const update = toDoes.map(el => {
            if (el.id === id){
                el.completed = !el.completed;
            }
            return el;
        })
        setToDoes(sortTaskByGroup([...update]))
    }

    const favoriteToDo =(id)=> {
        const update = toDoes.map(el => {
            if (el.id === id){
                el.favorite = !el.favorite;
            }
            return el;
        })
        setToDoes(sortTaskByGroup([...update]))
    }

    const completeAllToDo = () => {
        if(Api.completeAllTasks(toDoes)){
            const update = toDoes.map(el=> {
                el.completed = !el.completed;
                return el;
            })
            setToDoes(sortTaskByGroup([...update]))
        }
    }

    return (
        <TodoContext.Provider value={{toDoes, addToDo, updateTodo,deleteToDo, completeToDo,favoriteToDo,completeAllToDo, countTasksToDo, countTasks}}>
            {children}
        </TodoContext.Provider>)

}

export default ToDoProvider;
