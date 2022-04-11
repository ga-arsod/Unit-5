import {useState} from "react";
import { TodoInput } from "./Todo.input";
import { TodoItem } from "./TodoItem";
import { nanoid } from "nanoid"
function Todo() {
    const [todoList, setTodoList] = useState([])

    const getData = (todo) => {
        
        const payload = {
            title: todo,
            status: false,
            id: nanoid(4)
        }
        // console.log(payload);
        setTodoList([...todoList, payload]);
    }

    const handleStatus = (id) => {
        setTodoList(
            todoList.map((elem) => (elem.id === id ? {...elem, status: !elem.status} : elem))
        )
    }

    return <div className="container">
        

        {todoList.map((elem) => (
            <TodoItem todo = {elem} handleStatus = {handleStatus}/> 
        ))}

        <TodoInput getData={getData}/>
    </div>
}

export {Todo};