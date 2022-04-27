import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom";
import { deleteTodo } from "../Redux/action";

export const TodoDetails = () => {
    const todo = useSelector((store) => store.todos);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    let data;

    todo.map((e) => {
        if(e.id === useParams().id) {
            data = e;
        }
    });

    const [detail, setDetail] = useState(data);

    const handleChange = () => {
        
        setDetail({
            ...detail,
            status: !detail.status
        })
    }

    // console.log(detail)

    const handleRemove = () => {
        // const newList = todo.filter((ele) => ele.id !== detail.id)

        dispatch(deleteTodo(detail.id));
        navigate("/")
    }

    console.log(todo);

    return (
        <div>
            <h3>{detail.title}</h3>
            <p>Status : {detail.status ? "Completed": "Not Completed"}</p>
            <button onClick={handleChange}>{detail.status ? "Not Completed" : "Completed"}</button>

            <button onClick={handleRemove}>Delete</button>
        </div>
    )
}