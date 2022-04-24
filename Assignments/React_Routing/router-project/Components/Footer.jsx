import { Link } from "react-router-dom";

export const Footer = () => {

    return (
        <div className="footer">
            <div className="brands">
                <img className="icons" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/1200px-2021_Facebook_icon.svg.png" alt="" />

                <img className="icons" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png" alt="" />
                
                <img className = "icons" src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png" alt="" />

                <img className="icons" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png" alt="" />
            </div>

            <div className="footerEx">
                <Link to={"/faq"}>FAQ</Link>
                <Link to={"/"}>Opportunities</Link>
            </div>
        </div>
    )
}