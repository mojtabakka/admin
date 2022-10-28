
import React, { useState } from 'react'
import * as MdIcons from 'react-icons/md'

import './index.css'
import { items } from '../../../confing/sibarMenueConfig'
import SidebarItem from './sidbarItems'
const Sidebar = ({ depthStep, depth }) => {
    const [SidebarStatus, SetSidebarStatus] = useState(false);
    const [sidebarStatusToDown, SetSidebarStatusToDown] = useState(false);
    const opneSidebar = () => SetSidebarStatus(!SidebarStatus);
    const opneSidebarToDown = () => SetSidebarStatusToDown(!sidebarStatusToDown);
    const opneSidebarFromChild = () => {
        if (SidebarStatus == false) {
            SetSidebarStatus(true);
        }
    }
    return (
        <>

            <div className={` ${SidebarStatus ? "md:fixed sm:fixed  lg:static fixed" : 'flex-none inline-block'}  `}  style={{ boxShadow:"-2px -2px 10px gray"}}>
                <div className={`${SidebarStatus ? "w-96 " : 'w-24'} h-screen   transition shadow overflow-hidden  bg-gray-100 text-white r`} style={{ transition: "200ms ease-in-out" }} >
                    <div onClick={opneSidebar} className="w-full cursor-pointer text-center rounded inline-block p-1 " style={{ backgroundColor: "#08A45C" }}> <MdIcons.MdOutlineDoubleArrow style={{ transition: "200ms linear" }} className={` inline-block text-xl ${SidebarStatus ? '-rotate-180' : "rotate-0"}  transform-gpu"`}  /></div>
                    {items.map((sidebarItem, index) => (
                        <SidebarItem
                            onOpenSidebar={opneSidebarFromChild}
                            sidebarStatus={SidebarStatus}
                            key={`${sidebarItem.name}${index}`}
                            depthStep={depthStep}
                            depth={depth}
                            {...sidebarItem}
                        />
                    ))}
                </div>
            </div>
        </>

    );
}
export default Sidebar;
