import React, { Component } from "react";
import { UserImage } from "../UserImage/UserImage";
import { UserData } from "../UserData/UserData";
import { UserHovers } from "../UserHovers/UserHovers";

import "./User.scss";

export default class User extends Component {
    render() {
        const { user, items, onHover, hovered, hoverItems } = this.props;
        console.log(user);
        return (
            <div className="user">
                <UserImage imageSource={user.parseImage()} />
                <UserData items={items} hovered={hovered} />
                <UserHovers
                    onHover={onHover}
                    items={hoverItems}
                    hovered={hovered}
                />
            </div>
        );
    }
}
