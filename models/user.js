const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    id: { type: String },
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    bio: { type: String },
    image: { type: String }
});

module.exports = User = mongoose.model("users", UserSchema);