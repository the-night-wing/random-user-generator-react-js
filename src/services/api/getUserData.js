// let userData;

class userAPI {
    userData;

    makeAPICall = async () => {
        const apiResult = await fetch("https://randomuser.me/api/");
        // console.log("object");
        const userData = await apiResult.json();
        console.log(userData);

        return userData;
    };

    generateUserData = async () => {
        const apiCall = await this.makeAPICall();
        // apiCall.then(data => {
        //     this.userData = data.results[0];
        //     console.log(this.userData);
        // });
        this.userData = apiCall.results[0];
        console.log(this.userData);
    };

    getUserData = () => {
        return this.userData;
    };

    parseEmail = () => {
        return this.userData.email;
    };

    parseName = () => {
        const nameObj = this.userData.name;
        return nameObj.first + " " + nameObj.last;
    };

    parseBirthDate = () => {
        return this.userData.dob.date.split("T")[0];
    };
    parsePhone = () => {
        return this.userData.phone;
    };
    parseImage = () => {
        console.log(this.getUserData());
        return this.userData.picture.large;
    };
    parseLogin = () => {
        const loginObj = this.userData.login;
        return `Login: ${loginObj.username}, password: ${loginObj.password}`;
    };
    parseLocation = () => {
        const locationObj = this.userData.location;
        return `${locationObj.country}, ${locationObj.city}, ${locationObj.street.number} ${locationObj.street.name}`;
    };
}

// genereteUserData();
// const showUserData = () => {
//     console.log(userData);
// };

// const returnUserData = () => {
//     // let userData;

//     genereteUserData().then(data => {
//         userData = data;
//     });
//     console.log(userData);
//     // return userData;
// };

export { userAPI };
