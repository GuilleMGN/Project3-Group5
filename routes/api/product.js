const router = require("express").Router;
const Product = require("../../models/product")
const ProductControllers = require("../../controllers/ProductControllers");

router.route("/")
   .get(ProductControllers.findAll)
   .post(ProductControllers.create)

router.post("/add", (req,res)=>{
    const newProducts = new Product(req.body);
    newProducts.save()
    .then(result=>{
        res.send(result)
    })
    .catch(err=>{
        res.status(400).send(err)
    })
})