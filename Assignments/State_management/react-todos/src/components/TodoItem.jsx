import { useState } from "react";

export const TodoItem = ({todo, index, todos, setTodo}) => {
    const [checked, setChecked] = useState(false);

    const handleCheck = () => {
        setChecked(todo.status ? false: true)
    }

    return (
        <div className="TodoList">
            <div className="TodoLeft">
                <input className="check" type="checkbox" checked={checked}  onClick={() => {
                    todo.status = true
                    handleCheck();

                    setTimeout(() => {
                        fetch("http://localhost:5000/completed", {
                        method: "POST",
                        headers: {
                            "content-type": "application/json"
                        },
                        body: JSON.stringify(todo)
                        });

                        const newTodos = [...todos];
                        newTodos.splice(index, 1);
                        setTodo(newTodos);

                        fetch(`http://localhost:5000/todos/${todo.id}`, {
                            method: "DELETE"
                        });

                    }, 500);

                }}/>
                <p>{todo.title}</p>
            </div>
        </div>
    )
}