import React from "react";

import "./UserHovers.scss";

import uniqid from "uniqid";

export const UserHovers = ({ items, onHover, hovered }) => {
    return (
        <div className="user-hovers">
            {items.map((el, ind) => {
                return (
                    <li
                        key={uniqid()}
                        className={`${el.className} ${
                            hovered === ind ? "active" : ""
                        }`}
                        onMouseOver={() => onHover(ind)}
                    ></li>
                );
            })}
        </div>
    );
};
