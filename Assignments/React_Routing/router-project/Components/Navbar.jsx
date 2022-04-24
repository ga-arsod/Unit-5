import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {faBagShopping, faSearch, faAppleWhole} from "@fortawesome/free-solid-svg-icons"


export const Navbar = () => {
    const nav = [
        {title: "Store", to: "/store"},
        {title: "Mac", to: ""},
        {title: "iPad", to: ""},
        {title: "iPhone", to: ""},
        {title: "Watch", to: ""},
        {title: "AirPds", to: ""},
        {title: "TV & Home", to: ""},
        {title: "About Us", to: "/about"},
        {title: "FAQ", to: "/faq"},
        {title: "Support", to: "/support"},
    ];

    return (
        <div className="nav">
            <Link to=""><FontAwesomeIcon icon={faAppleWhole}/></Link>

            {nav.map((elem, ind) => (
                <Link key={ind} to={elem.to}>{elem.title}</Link>
            ))}

            <Link to=""><FontAwesomeIcon icon={faSearch}/></Link>
            <Link to=""><FontAwesomeIcon icon={faBagShopping}/></Link>
        </div>
    )
}