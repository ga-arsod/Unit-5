import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {faBagShopping, faSearch, faAppleWhole} from "@fortawesome/free-solid-svg-icons"


export const Navbar = () => {
    const nav = [
        {title: "Store", to: "/store"},
        {title: "Mac", to: "/store"},
        {title: "iPad", to: "/store"},
        {title: "iPhone", to: "/store"},
        {title: "Watch", to: "/store"},
        {title: "AirPds", to: "/store"},
        {title: "TV & Home", to: "/store"},
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