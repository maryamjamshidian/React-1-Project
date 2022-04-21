

import { useContext } from "react";
import { MenuContext } from "../../../Stores/Context/MenuContext";
import MenuItem from "./MenuItem";


const Menu = () => {


    const {menuList} = useContext(MenuContext)


    return (


        <div className="menu_section">

            <ul className="nav side-menu page-sidebar-menu side-show">
                {menuList && menuList.map((value,index) => {
                    return (
                        <MenuItem key={value.id}  index={index} title={value.title} icon={value.icon} subMenus={value.subMenus} to={value.to} />
                    )
                })
                }

            </ul>

        </div>)
}
export default Menu;