import { useContext } from "react";
import { Collapse } from "react-bootstrap";
import { Link } from "react-router-dom"
import { MenuContext } from "../../../Stores/Context/MenuContext";

const MenuItem = ({ title, icon, subMenus ,index}) => {
    const{activeMenu,selectMenu}=useContext(MenuContext);

 


    return (


        <li className={activeMenu===index ? "active" : ""}>
            <a className="nav-link" onClick={()=>{selectMenu(index)}}>
                <i className={icon}></i>
                <span className="title">{title}</span>
                <span className="fa fa-chevron-left"></span>
            </a>
            <div className="nav child_menu">
                <Collapse in={activeMenu===index}>
                    <ul>
                        {
                            subMenus && subMenus.map((value) => {
                                return (<li>
                                    <Link className="nav-link" to={value.to}>
                                        <a>
                                            <i className={value.icon}>
                                            </i>
                                            <span className="title">
                                                {value.title}
                                            </span>
                                        </a>

                                    </Link>

                                </li>
                                )

                            }
                            )
                        }
                    </ul>
                </Collapse>
            </div>

        </li>

    )
}




export default MenuItem;