import axios from "axios";

const ProductAPI = {
    create: function (productObject) {
        return axios.post("/api/products/add", productObject); 
    // },
    // login: function (dbObject) {
    //     return axios.post("/api/users/login", dbObject); 
    // },
    // getUsers: function () {
    //     return axios.get("/api/users");
    }
}

export default ProductAPI;