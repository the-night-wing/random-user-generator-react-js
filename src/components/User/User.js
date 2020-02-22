import React, { Component } from "react";

import { UserImage } from "../UserImage/UserImage";
import { UserData } from "../UserData/UserData";
import { UserHovers } from "../UserHovers/UserHovers";
import { GenderFilter } from "../GenderFilter/GenderFilter";
import { UpdateUser } from "../UpdateUser/UpdateUser";
import { ExportUserData } from "../ExportUserData/ExportUserData";

import "./User.scss";

export default class User extends Component {
    render() {
        const {
            user,
            items,
            onHover,
            hovered,
            hoverItems,
            onUpdateUserClick,
            onGenderPick,
            onGenderEnable
        } = this.props;
        // console.log(user);
        return (
            <div className="user">
                <UserImage imageSource={user.parseImage()} />
                <UserData items={items} hovered={hovered} />
                <UserHovers
                    onHover={onHover}
                    items={hoverItems}
                    hovered={hovered}
                />
                <UpdateUser onUpdateUserClick={onUpdateUserClick} />
                <GenderFilter
                    onGenderPick={onGenderPick}
                    onGenderEnable={onGenderEnable}
                />
                <ExportUserData
                    downloadImage={user.downloadUserImage}
                    downloadData={user.downloadUserData}
                />
            </div>
        );
    }
}
