const router = require("express").Router();
const userControllers = require("../../controllers/userControllers");

router.route("/")
    .get(userControllers.findAll)
    .post(userControllers.create);
router.route("/:id")
    .get(userControllers.findById)
    .delete(userControllers.remove)
    .put(userControllers.update)


module.exports = router;