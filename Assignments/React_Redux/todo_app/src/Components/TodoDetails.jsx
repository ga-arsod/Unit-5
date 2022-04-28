import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom";
import { deleteTodo } from "../Redux/Todos/action";

export const TodoDetails = () => {
    const todo = useSelector((store) => store.todos);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const id = useParams().id;
    const [details, setDetails] = useState({});

    useEffect(() => {
        getData();
    },[]);

    const getData = () => {
        fetch(`http://localhost:5000/todos/${id}`)
        .then((res) => res.json())
        .then(data => {
            setDetails(data)
            // console.log(data)
        })
    }


    const handleChange = () => {
        
        setDetails({
            ...details,
            status: !details.status
        })
    }

    // console.log(detail)

    const handleRemove = () => {
        // const newList = todo.filter((ele) => ele.id !== detail.id)

        fetch(`http://localhost:5000/todos/${id}`, {
            method: "DELETE"
        });

        dispatch(deleteTodo(details.id));
        navigate("/")
    }

    console.log(todo);

    return (
        <div>
            <h3>{details.title}</h3>
            <p>Status : {details.status ? "Completed": "Not Completed"}</p>
            <button onClick={handleChange}>{details.status ? "Not Completed" : "Completed"}</button>

            <button onClick={handleRemove}>Delete</button>
        </div>
    )
}