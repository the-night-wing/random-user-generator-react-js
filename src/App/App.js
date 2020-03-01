import React, { Component } from "react";
import "./App.css";

import User from "../components/User/User";
import { Header } from "../components/Header/Header";
import { LoadingSpinner } from "../components/LoadingSpinner/LoadingSpinner";
import { ErrorPage } from "../components/ErrorPage/ErrorPage";

import { userAPI } from "../services/api/getUserData";

class App extends Component {
    state = {
        // api: null,
        user: null,
        isLoaded: false,
        errorOcured: false,
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
            this.setState(
                {
                    user: api
                },
                () => {
                    this.checkLoadedData();
                    this.checkOnErrorData();
                }
            );
        });
    };

    checkLoadedData = () => {
        const { user } = this.state;

        if (typeof user.userData === "object") {
            this.setState({
                isLoaded: true
            });
        }
    };

    checkOnErrorData = () => {
        const { user } = this.state;

        if (user.userData === "Error") {
            this.setState(
                {
                    errorOcured: true
                },
                () => console.log(this.state)
            );
        }
    };

    onUpdateUserClick = () => {
        this.setState(
            {
                isLoaded: false,
                errorOcured: false
            },
            () => this.getUserData()
        );
        // this.getUserData()
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
        const { user, isLoaded, errorOcured, hovereditem } = this.state;

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
        console.log(isLoaded + " isLoaded");
        const userCard = isLoaded ? (
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
        ) : errorOcured ? (
            <ErrorPage onUpdateUserClick={this.onUpdateUserClick} />
        ) : (
            <LoadingSpinner />
        );
        // const userCard = <ErrorPage />;
        // const loading = <LoadingSpinner />;
        return (
            <div className="App">
                <Header />
                {userCard}
                {/* {isLoaded ? body : loading} */}
            </div>
        );
    }
}

// TODO  Media queries
// TODO  Routing for a group of people
// TODO  Error handling  --- is for router
// TODO  Exporting data and image           DONE
// TODO  Password filter
// TODO  nationality filter
// https://medium.com/@NaveenDA/creating-a-custom-404-notfound-page-with-react-routers-56af9ad67807

export default App;
