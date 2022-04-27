import { useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import {nanoid} from "nanoid"
import { addTodo } from "../Redux/action";
import { Link } from "react-router-dom";

export const Todo = () => {
    const dispatch = useDispatch();
    const todo = useSelector((store) => store.todos);

    const [text, setText] = useState("");

    const handleChange = (ele) => {
        setText(ele.target.value)
    }

    const handleAdd = () => {
        dispatch(addTodo({
            id: nanoid(),
            title: text,
            status: false
        }))

        // dispatch(addTodo(text))
    }

    return (
        <div className="main">
            <div className="input">
                <input onChange={handleChange} type="text" placeholder="Add Todo"/>
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