import { AuthContext  } from "../Contexts/AuthContext"
import { useContext } from "react";

export const UserStatus = () => {
    const {status, token} = useContext(AuthContext);

    return (
        <p>User Token: {token}</p>
    )
}