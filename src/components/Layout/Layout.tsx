import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

export const Layout = () => {
    return (
        <>
            <header className="w-full bg-red-900 text-white px-2 py-2 flex items-center justify-between">
                <NavLink to="/">Main</NavLink>
                <NavLink to="/first">First</NavLink>
                <NavLink to="/second">Second</NavLink>
            </header>
            <Outlet/>
        </>
    );
};