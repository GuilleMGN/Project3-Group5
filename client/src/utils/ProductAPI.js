import axios from "axios";

const ProductAPI = {
    create: function (productObject) {
        return axios.post("/api/product/add", productObject); 
    },
    getProduct: function () {
        return axios.get("/api/product");
    }
}

export default ProductAPI;