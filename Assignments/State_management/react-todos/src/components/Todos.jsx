import { useState, useEffect } from "react";
import { TodoInput } from "./TodoInput";
import { TodoItem } from "./TodoItem";

export const ToDos = () => {
    const [todo, setTodo] = useState([]);

    useEffect(() => {
        getData();
    }, []);


    const getData = async () => {
        const res = await fetch("http://localhost:5000/todos")
        
        const data = await res.json();
        setTodo(data)
    }

    return (
        <div>
            <TodoInput getData = {getData} />
            <div className="container">
                {todo.map((elem, index) => (
                <TodoItem todo={elem} index={index} todos={todo} setTodo={setTodo}/>
            ))}
            </div>
        </div>
    )
}