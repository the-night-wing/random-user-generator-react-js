import React from "react";

import "./UpdateUser.scss";

export const UpdateUser = ({ onUpdateUserClick }) => {
    return (
        <div className="update-user" onClick={onUpdateUserClick}>
            Update User
        </div>
    );
};
