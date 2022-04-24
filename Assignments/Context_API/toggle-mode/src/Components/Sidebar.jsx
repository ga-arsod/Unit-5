import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import {faCaretSquareDown, faChartBar} from "@fortawesome/free-regular-svg-icons";
import {faChartSimple, faCartArrowDown, faSignsPost, faComments, faFileLines, faGear} from "@fortawesome/free-solid-svg-icons";
import { ToggleContext } from "../Contexts/ToggleContext";
import{ useContext } from "react"

export const Sidebar = () => {
    const {toggle} = useContext(ToggleContext);

    return(
        <div style={{
            background: toggle ? "white": "black",
            color: toggle ? "black": "white"
        }} className="sidebar">
            <img src="https://freesvg.org/img/winkboy.png" alt="abc" />
            <div className="icons">
                <FontAwesomeIcon id="chart" icon={faChartSimple} />
                <FontAwesomeIcon icon={faCartArrowDown} />
                <FontAwesomeIcon icon={faSignsPost} />
                <FontAwesomeIcon icon={faComments} />
                <FontAwesomeIcon icon={faFileLines} />
                <FontAwesomeIcon icon={faGear} />
            </div>
        </div>
    )
}