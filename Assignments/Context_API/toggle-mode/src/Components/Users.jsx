
import { ToggleContext } from "../Contexts/ToggleContext";
import{ useContext } from "react"

export const Users = () => {
    const data = [
        {
            name: "Nrupul Dev",
            img: "https://cdn.dribbble.com/users/2364329/screenshots/5930135/aa.jpg",
            location: "Bangalore, India",
            line:"",
            level: 15,
            points: 4723
        },
        {
            name: "Sandhya",
            img: "https://1.bp.blogspot.com/-gz3ECbOByh0/YSyMST7rT_I/AAAAAAAAWYs/stFJ90JJpx0v3ewmmK6HMYiUmIvpNMriACLcBGAsYHQ/s1041/girl-cartoon-cute-dp-images%2B%25281%2529.jpg",
            location: "Bangalore, India",
            line: "",
            level: 11,
            points: 2339
        },
        {
            name: "Elon Tusk",
            img: "https://pbs.twimg.com/media/Dm1neA0X4AEMmnR.jpg",
            location: "California, USA",
            line: "",
            level: 6,
            points: 1884
        }
    ];

    const {toggle} = useContext(ToggleContext);

    return (
        <div style={{
            background: toggle ? "white": "#292E33",
            color: toggle ? "#292E33": "white"
        }} className="Users">
            <div className="active">
                <h3>Active Users</h3>
                <p>for August 2020</p>
            </div>

            <div className="userList">
                {data.map((elem, key) => {
                    return <div key={key}>
                        <div className="userInfo">
                            <img src={elem.img} alt="" />
                            <div>
                                <h4>{elem.name}</h4>
                                <p>{elem.location}</p>
                            </div>
                        </div>
                        <hr />
                        <div className="level">
                            <h5>Professional Level {elem.level}</h5>
                            <h4>{elem.points} Points</h4>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}