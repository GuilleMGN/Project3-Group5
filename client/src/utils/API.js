import axios from "axios";

const API = {
    register: function (userObject) {
        return axios.post("/api/users/signup", userObject); 
    },
    login: function (dbObject) {
        return axios.post("/api/users/login", dbObject); 
    },
    getUsers: function () {
        return axios.get("/api/users");
    }
}

export default API;