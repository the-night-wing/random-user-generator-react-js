import React from "react";

import "./UserImage.scss";

export const UserImage = ({ imageSource }) => {
    return (
        <div className="user-image">
            <div className="image-box">
                <img src={imageSource} alt="User" />
            </div>

            <div className="line"></div>
        </div>
    );
};
