import { useState } from "react";
import { Nav, NavItem, NavLink } from "react-bootstrap";
import ProductCategori from "./ProductCategori";
import ProductInfo from "./ProductInfo";
import ProductPicture from "./ProductPicture";



const ProductPage = () => {

    const [activeTab, setActiveTab] = useState(1)
    return (<div className="productPage">
        <p >مدیریت محصولات</p>
        <Nav variant="tabs" defaultActiveKey={activeTab}>
            <NavItem>
                <NavLink eventKey="1" onClick={()=>{setActiveTab(1)}}>نام محصول</NavLink>
            </NavItem>
            <NavItem>
                <NavLink eventKey="2"onClick={()=>{setActiveTab(2)}}>تصاویر محصول</NavLink>
            </NavItem>
            <NavItem >
                <NavLink eventKey="3" onClick={()=>{setActiveTab(3)}}>گروه بندی محصول</NavLink>
            </NavItem>        
        </Nav>
        {
             activeTab===1?<ProductInfo/>:activeTab===2?<ProductPicture/>:<ProductCategori/>
        }
    </div>

    )
}
export default ProductPage;