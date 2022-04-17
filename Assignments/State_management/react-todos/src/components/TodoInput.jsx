import { useState } from "react"
import { nanoid } from "nanoid";

export const TodoInput = ({getData}) => {
    const [text, setText] = useState()

    return <div>
        <input id="keyBox" type="text" onKeyPress={ (e) => {
        if(e.key == "Enter") {
            // console.log("Hello")
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
        }
    }
    } placeholder="Add a To-Do..." onChange={(elem) => {
                setText(elem.target.value)
            }}/>
    </div>
}