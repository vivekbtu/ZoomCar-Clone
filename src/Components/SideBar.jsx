
import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
// import { SidebarData } from "./SidebarData";
// import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";
import SubMenu from "./SubMenu";
import { SidebarData } from "./SideBarData";
import HomeNavbar from "./HomeNavbar";

const Nav = styled.div`
background: #15171c;
height: 80px;
display: flex;
justify-content: flex-start;
align-items: center;
`;

const NavIcon = styled(Link)`
margin-left: 2rem;
font-size: 1rem;
height: 60px;
display: flex;
justify-content: flex-start;
align-items: center;

`;

// side bar css 

const SidebarNav = styled.nav`
background: #ffffff;
width: 350px;
height: 100vh;
display: flex;
justify-content: center;
position: fixed;
top: 0;
left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
transition: 350ms;

`;

const SidebarWrap = styled.div`
width: 100%;

`;

const Sidebar = () => {
const [sidebar, setSidebar] = useState(false);

const showSidebar = () => setSidebar(!sidebar);

return (
	<>
	<IconContext.Provider value={{ color: "#fff" }}>
		<Nav>
		<NavIcon to="#">
			<FaIcons.FaBars onClick={showSidebar} />
		</NavIcon>
   
		{/* NEW NAVBAR CODE START */}
        
        <HomeNavbar/>

        {/* NEW NAVBAR CODE END */}
    
		</Nav>
        </IconContext.Provider>

        {/* INSIDE SIDE BAR CODE AND CSS */}

        <IconContext.Provider value={{ 
            color: "black"
             }}>   
		<SidebarNav sidebar={sidebar} onClick={showSidebar}>
		<SidebarWrap>

            {/* cross sign code */}

			{/* <NavIcon to="#">
			<AiIcons.AiOutlineClose onClick={showSidebar} />
			</NavIcon> */}

			{SidebarData.map((item, index) => {
			return <SubMenu item={item} key={index} />;
			})}
		</SidebarWrap>
		</SidebarNav>
    </IconContext.Provider>
    
	</>
);
};

export default Sidebar;
