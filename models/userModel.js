const mongoose = require("../config/database")
// crearte a schema
const userSchema = new mongoose.schema({
    name:String,
    email:String
});
var userModel = mongoose.model('users',userSchema);
module.exports = mongoose.model("Users", userModel)