const router = require("express").Router();
const userRoutes = require("./users");
const path = require("path");

router.use("/users", userRoutes);

router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../../client/build/index.html"))
})

module.exports = router;