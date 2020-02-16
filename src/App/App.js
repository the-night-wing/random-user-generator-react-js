import React, { Component } from "react";
import "./App.css";

import User from "../components/User/User";

import { userAPI } from "../services/api/getUserData";

class App extends Component {
    state = {
        // api: null,
        user: null,
        isLoaded: false,
        hovereditem: 0
    };
    // console.log(userData);
    // console.log(user);

    onItemHover = ind => {
        this.setState({
            hovereditem: ind
        });
    };

    componentDidMount() {
        const api = new userAPI();
        api.generateUserData().then(() => {
            console.log(api);
            this.setState({
                user: api,
                isLoaded: true
            });
        });
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

        if (isLoaded) console.log(user);
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
            />
        ) : (
            "loading"
        );
        const loading = "Loading...";
        return <div className="App">{isLoaded ? body : loading}</div>;
    }
}

export default App;
