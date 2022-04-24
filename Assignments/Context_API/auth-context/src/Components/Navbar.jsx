import { useContext } from "react"
import { AuthContext  } from "../Contexts/AuthContext"

export const Navbar = () => {
    const {status, isAuth, toggleAuth} = useContext(AuthContext);



    const handleChange = () => {

        const user = {
                    "email": "eve.holt@reqres.in",
                    "password": "cityslicka"
                }
        console.log("Hello")
         fetch("https://reqres.in/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
            })
            .then(response => response.json())
            .then(data => {
                (status ? toggleAuth(null) : toggleAuth(data))
            })

            .catch((error) => {
                console.log(error)
            })

    }

    return (
        <nav style={{
            display: "flex",
            justifyContent: "end",
            padding: "15px",
            fontSize: "28px",
            border: "1px solid red",
            margin: "10px"
        }}>
        
        <button style={{
            padding: "10px",
            fontSize: "large",
            background: "black",
            color: "white",
            border: "none"
        }}
        onClick={() => {
            handleChange();
            isAuth()
        }}>{status ? "Logout": "Login"}</button>
        </nav>
    )
}