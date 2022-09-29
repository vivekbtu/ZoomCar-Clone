
import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import { IoPerson } from "react-icons/io5";

export const SidebarData = [
	{
		title: "Login or Signup",
		path: "/loginSignup",
		icon: <IoPerson />,
		// iconClosed: <RiIcons.RiArrowDownSFill />,
		// iconOpened: <RiIcons.RiArrowUpSFill />,

	},
	{
		title: "Change City",
		path: "/changecity",
		// icon: <IoIcons.IoIosPaper />,
		// iconClosed: <RiIcons.RiArrowDownSFill />,
		// iconOpened: <RiIcons.RiArrowUpSFill />,

	},
	{
		title: "Become a Host",
		path: "/becomeahost",
		// icon: <FaIcons.FaPhone />,
	},
	{
		title: "Zoomcar Fleet Vehicles Policies",
		path: "/events",
		// icon: <FaIcons.FaEnvelopeOpenText />,

		// iconClosed: <RiIcons.RiArrowDownSFill />,
		// iconOpened: <RiIcons.RiArrowUpSFill />,

	},
	{
		title: "Zoomcar Host Vehicles Policies",
		path: "/sup",
		// icon: <IoIcons.IoMdHelpCircle />,
	},
	{
		title: "Help & Support",
		path: "/support",
		// icon: <IoIcons.IoMdHelpCircle />,
	},
];
