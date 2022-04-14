import { useState } from "react"
import { nanoid } from "nanoid";

export const TodoInput = ({getData}) => {
    const [text, setText] = useState()

    // const getDatafun = async () => {
    //     await getData();
    // }
    

    return <div>
        <input type="text" placeholder="Enter ToDo" onChange={(elem) => {
                setText(elem.target.value)
            }}/>
            <button onClick={() => {
                const payload = {
                    id: nanoid(5),
                    title: text,
                    status: false
                };

                fetch("http://localhost:5000/todos", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(payload)
                }).then(() => {
                    getData();
                })
            }}>Add ToDo</button>
    </div>
}