import FileSaver from "file-saver";

class userAPI {
    constructor(genderFilter) {
        // super(props);
        this.userData = undefined;
        this.genderFilter = genderFilter;
    }
    // userData;

    makeAPICall = async () => {
        const urlToFetch = `https://randomuser.me/api/${
            this.genderFilter.status ? `?gender=${this.genderFilter.type}` : ""
        }`;
        let userData;
        try {
            const apiResult = await fetch(urlToFetch);
            userData = await apiResult.json();
            console.log(userData);
        } catch (error) {
            console.log(error);
        }
        console.log("object");

        // console.log(arguments);

        return userData;
    };

    downloadUserData = async () => {
        // console.log(this.userData);
        const jsonData = await JSON.stringify(this.userData);
        const blob = new Blob([jsonData], { type: "text/plain;charset=utf-8" });
        FileSaver.saveAs(blob, `${this.parseName(true)}.json`);
    };

    downloadUserImage = () => {
        FileSaver.saveAs(this.parseImage(), "UserImage.jpg");
    };

    generateUserData = async () => {
        const apiCall = await this.makeAPICall();
        if (typeof apiCall === "object") {
            this.userData = apiCall.results[0];
        }
        // else {
        // this.userData = [];
        // }
        console.log(this.userData);
    };

    getUserData = () => {
        return this.userData;
    };

    parseEmail = () => {
        return this.userData.email;
    };

    parseName = (download = false) => {
        const nameObj = this.userData.name;
        return nameObj.first + `${download ? "_" : " "}` + nameObj.last;
    };

    parseBirthDate = () => {
        return this.userData.dob.date.split("T")[0];
    };
    parsePhone = () => {
        return this.userData.phone;
    };
    parseImage = () => {
        // console.log(this.getUserData());
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
