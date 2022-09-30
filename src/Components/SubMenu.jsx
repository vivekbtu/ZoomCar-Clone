
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// PAGE CSS 

const SidebarLink = styled(Link)`
display: flex;
color: black;
justify-content: space-between;
align-items: center;
padding: 20px;
list-style: none;
height: 60px;
text-decoration: none;
font-size: 16px;

&:hover {
	background: #e5e8ec;
	cursor: pointer;
}
`;


const SidebarLabel = styled.span`
margin-left: 40px;
`;

const DropdownLink = styled(Link)`

&:hover {
	cursor: pointer;
}
`;

const SubMenu = ({ item }) => {
const [subnav, setSubnav] = useState(false);

const showSubnav = () => setSubnav(!subnav);

return (
	<>
	<SidebarLink to={item.path}
	onClick={item.subNav && showSubnav}
    >
		<div>
		{/* {item.icon} */}
		<SidebarLabel>{item.title}</SidebarLabel>
		</div>
		<div>
		{item.subNav && subnav
			? item.iconOpened
			: item.subNav
			? item.iconClosed
			: null}
		</div>
	</SidebarLink>
	{subnav &&
		item.subNav.map((item) => {
		return (
			<DropdownLink >
			
			<SidebarLabel>{item.title}</SidebarLabel>
			</DropdownLink>
		);
		})}
	</>
);
};

export default SubMenu;
