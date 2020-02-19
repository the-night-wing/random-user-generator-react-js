import React from "react";

import "./GenderFilter.scss";

export const GenderFilter = ({ onGenderPick, onGenderEnable }) => {
    // console.log(onGenderPick);
    // console.log(onGenderEnable);
    return (
        <div className="gender-filter">
            <div className="gender">
                <label className="radio">
                    <input
                        type="radio"
                        name="gender"
                        value="m"
                        id=""
                        onClick={() => onGenderPick("male")}
                    />
                    <span>Male</span>
                </label>
                <label className="radio">
                    <input
                        type="radio"
                        name="gender"
                        value="f"
                        id=""
                        onChange={() => onGenderPick("female")}
                    />
                    <span>Female</span>
                </label>
            </div>
            <div className="switch">
                <input
                    type="checkbox"
                    id="cbx"
                    style={{ display: "none" }}
                    onChange={onGenderEnable}
                />
                <label htmlFor="cbx" className="toggle">
                    <span></span>
                </label>
                <label htmlFor="cbx">Enable Gender Filter</label>
            </div>
        </div>
    );
};
