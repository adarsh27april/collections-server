const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
})

userSchema.methods.speak = function speak() {
    let uname = this.username ? `my username: ${this.username}` : `!! username missing !!`
    let pass = this.password ? `my password: ${this.password}` : `!! password missing !!`
    console.log(uname, pass);
}

const userModel = mongoose.model('userModel', userSchema);

module.exports = userModel;