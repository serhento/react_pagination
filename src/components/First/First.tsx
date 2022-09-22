import React from 'react';
import {Link, Outlet} from "react-router-dom";

export const First = () => {
    return (
        <div>
            <h1>First Page</h1>
            <ul className="flex justify-center underline">
                <li className="">
                    <Link to="contacts">Our Contacts</Link>
                </li>
                <li className="ml-6 underline">
                    <Link to="team">Our Team</Link>
                </li>
            </ul>

            <Outlet/>
            {/*Можно и так, а не в основных роутах*/}
            {/*<Routes>*/}
            {/*    <Route path="contacts" element={<p>Our contacts</p>}/>*/}
            {/*    <Route path="team" element={<p>Our team</p>}/>*/}
            {/*</Routes>*/}
        </div>
    );
};