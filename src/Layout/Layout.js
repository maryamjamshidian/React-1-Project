import { useState } from "react";
import { Stack } from "react-bootstrap";
import Content from "../Viwes/Components/Content/Content";
import Header from "../Viwes/Components/Header/Header";
import Menu from "../Viwes/Components/Sidebar/Menu";
import Sidebar from "../Viwes/Components/Sidebar/Sidebar";


const Layout=()=>{
 const[showSidebar,setShowSidebar]=useState(true)
  
 const HandelSidebar=()=>{
setShowSidebar(!showSidebar)
 }

return(
<>
<Stack className="main" gap={1} style={{   marginRight:showSidebar?230:0}}>
    <Header showSidebarToggle={HandelSidebar}/>
<Content/> 
</Stack>
<Sidebar showSidebarToggle={showSidebar}/>



</>



)


}
export default Layout;