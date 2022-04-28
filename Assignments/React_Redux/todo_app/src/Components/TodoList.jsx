import { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import {nanoid} from "nanoid"
import { addTodo } from "../Redux/action";
import { Link } from "react-router-dom";

export const Todo = () => {
    const dispatch = useDispatch();
    const todo = useSelector((store) => store.todos);
    console.log(todo)

    const [text, setText] = useState("");

    const handleChange = (ele) => {
        setText(ele.target.value)
    }

    const handleAdd = () => {
        const payload = {
            id: nanoid(),
            title: text,
            status: false
        }

        fetch("http://localhost:5000/todos", {
            body: JSON.stringify(payload),
            method: "POST",
            headers: {
                "content-type": "application/json"
            }
        })
        .then(setText(""))
        .then(getData)

        // dispatch(addTodo(text))
    }

    useEffect(() => {
        getData();
    }, [])

    const getData = () => {
        fetch("http://localhost:5000/todos")
        .then((res) => res.json())
        .then(data => {
            dispatch(addTodo(data));
            // console.log(data)
        })
    }

    return (
        <div className="main">
            <div className="input">
                <input value={text} onChange={handleChange} type="text" placeholder="Add Todo"/>
                <button onClick={handleAdd}>Submit</button>
            </div>

            <div className="list">
                {todo.map((ele, id) => {
                    return <Link to={`/todo/${ele.id}`}>
                        <h4 key={ele.id}>{id + 1}. {ele.title}</h4>
                    </Link>
                })}
            </div>
        </div>
    )
}