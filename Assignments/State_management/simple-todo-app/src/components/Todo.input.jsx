import { useState } from "react"

export const TodoInput = ({getData}) => {
    const [text , setText] = useState("");

    return (
        <div className="todoInput">
        <input onChange={(e) => {
            // console.log(e.target.value)
            setText(e.target.value);
        }} type="text" placeholder="Enter todo"/>
        <button onClick={() => {getData(text)}}>+</button>
        </div>
    )
}