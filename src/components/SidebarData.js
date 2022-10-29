import React from "react";
import * as BiIcons from 'react-icons/bi';
import * as HiIcons from 'react-icons/hi';
import * as CiIcons from 'react-icons/ci';
import * as AiIcons from 'react-icons/ai';

export const SidebarData = [
    {
      title: 'Home',
      path: '/',
      icon: <AiIcons.AiFillHome />,
      cName: 'nav-text'
    },
    {
      title: 'Tasks List',
      path: '/task',
      icon: <BiIcons.BiTask />,
      cName: 'nav-text'
    },
    {
      title: 'About',
      path: '/about',
      icon: <HiIcons.HiOutlineUser />,
      cName: 'nav-text'
    },
    {
      title: 'Timeline',
      path: '/timeline',
      icon: <CiIcons.CiViewTimeline />,
      cName: 'nav-text'
    }
  ];