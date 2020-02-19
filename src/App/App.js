import React, { Component } from "react";
import "./App.css";

import User from "../components/User/User";
import { Header } from "../components/Header/Header";

import { userAPI } from "../services/api/getUserData";

class App extends Component {
    state = {
        // api: null,
        user: null,
        isLoaded: false,
        hovereditem: 0,
        genderFilter: {
            status: false,
            type: "male"
        }
    };
    // console.log(userData);
    // console.log(user);

    onItemHover = ind => {
        this.setState({
            hovereditem: ind
        });
    };

    getUserData = () => {
        const { genderFilter } = this.state;
        const api = new userAPI(genderFilter);
        api.generateUserData().then(() => {
            console.log(api);
            this.setState({
                user: api,
                isLoaded: true
            });
        });
    };

    onUpdateUserClick = () => {
        this.getUserData();
    };

    onGenderFilterSwitch = type => {
        console.log(type + "  ```type");
        this.setState(state => {
            console.log(state.genderFilter);
            const genderFilter = { ...state.genderFilter };
            genderFilter.type = type;
            console.log(genderFilter);
            return { genderFilter };
        });
    };
    onGenderFilterEnable = () => {
        this.setState(state => {
            const genderFilter = { ...state.genderFilter };
            console.log(state.genderFilter);
            genderFilter.status = !genderFilter.status;
            console.log(genderFilter);
            return { genderFilter };
        });
    };

    componentDidMount() {
        this.getUserData();
    }

    render() {
        const { user, isLoaded, hovereditem } = this.state;

        const hoverItems = [
            {
                className: "name"
            },
            {
                className: "email"
            },
            {
                className: "dob"
            },
            {
                className: "address"
            },
            {
                className: "phone"
            },
            {
                className: "login"
            }
        ];

        // if (isLoaded) console.log(user);
        const body = isLoaded ? (
            <User
                user={user}
                items={[
                    user.parseName(),
                    user.parseEmail(),
                    user.parseBirthDate(),
                    user.parseLocation(),
                    user.parsePhone(),
                    user.parseLogin()
                ]}
                onHover={this.onItemHover}
                hovered={hovereditem}
                hoverItems={hoverItems}
                onUpdateUserClick={this.onUpdateUserClick}
                onGenderPick={type => this.onGenderFilterSwitch(type)}
                onGenderEnable={this.onGenderFilterEnable}
            />
        ) : (
            "loading"
        );
        const loading = "Loading...";
        return (
            <div className="App">
                <Header />
                {isLoaded ? body : loading}
            </div>
        );
    }
}

export default App;
