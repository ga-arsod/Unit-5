import { useState, useEffect } from "react";
import { CompletedToDo } from "./completeItem";

export const Completed = () => {
    const [todo, setTodo] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const res = await fetch("http://localhost:5000/completed")
        
        const data = await res.json();
        setTodo(data)
    }

    return (
        <div className="container">
            {todo.map(elem => (
                <CompletedToDo todo={elem} getData={getData}/>
            ))}
        </div>
    )
}