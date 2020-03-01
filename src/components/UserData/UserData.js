import React from "react";

import "./UserData.scss";

import uniqid from "uniqid";

export const UserData = ({ items, hovered }) => {
    return (
        <div className="user-data">
            {items.map((el, index) => {
                return (
                    <div
                        key={uniqid()}
                        className={`user-data__text ${
                            hovered === index ? "active" : "hidden"
                        }`}
                    >
                        <p>
                            {(function() {
                                switch (index) {
                                    case 0:
                                        return "Hello, my name is";
                                    case 1:
                                        return "My email is:";
                                    case 2:
                                        return "I was born on:";
                                    case 3:
                                        return "My address is:";
                                    case 4:
                                        return "My phone number is:";
                                    case 5:
                                        return "My login data is:";
                                    default:
                                        return "My another info";
                                }
                            })()}
                        </p>
                        <div>{el}</div>
                    </div>
                );
            })}
        </div>
    );
};
