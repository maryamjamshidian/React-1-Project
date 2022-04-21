import { Offcanvas, OffcanvasHeader, OffcanvasTitle, OffcanvasBody } from "react-bootstrap"
import MenuProvider from "../../../Stores/Context/MenuContext";
import Menu from "./Menu";

const Sidebar = ({ showSidebarToggle }) => {



    return (
        <Offcanvas scroll={true} className="offcanvas" placement="start" backdrop={false} show={showSidebarToggle}>
            <OffcanvasHeader className="offcanvas-header">
                <OffcanvasTitle>
                    <h6>مدیریت فاکتور</h6>
                </OffcanvasTitle>
            </OffcanvasHeader>
            <OffcanvasBody className="offcanvas-body">
         <MenuProvider>
             <Menu/>
         </MenuProvider>

            </OffcanvasBody>
        </Offcanvas>
    )

}
export default Sidebar;