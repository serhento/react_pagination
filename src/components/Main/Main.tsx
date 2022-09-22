import React from 'react';
import {HuaweiIcon} from "../../Icons/HuaweiIcon";
import {useToggle} from "../../hook/useToggle";

export const Main = () => {

    const [isVisible, toggleVisible] = useToggle(true);

    return (
        <div>
            <h2>Main</h2>
            <button className="border border-black rounded-md" onClick={toggleVisible}>Toggle Icon</button>
            {isVisible && <HuaweiIcon/>}
        </div>
    );
};