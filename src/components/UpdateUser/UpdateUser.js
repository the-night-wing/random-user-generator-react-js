import React from "react";

import "./UpdateUser.scss";

// import "ldbutton";

export const UpdateUser = ({ onUpdateUserClick }) => {
    return (
        <div className="update-user" onClick={onUpdateUserClick}>
            <div className="loadingio-spinner-reload-b61byp0clge">
                <div className="arrow">
                    <div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
            <span>Update User</span>
        </div>
        // <link rel="stylesheet" type="text/css" href="path/to/your/loading.css"/>
        // <div className="btn btn-primary ld-ext-left">
        //     My Button
        //     <div className="ld ld-ring ld-spin"></div>
        // </div>
    );
};
