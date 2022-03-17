const mongoose = require("mongoose")
const userModel = require("../models/users");

const registerUser = async (req, res) => {
    console.log(req.body)
    const { username, password } = req.body;

    let user = await userModel.findOne({ username });
    if (user) {
        return res.status(500).json({
            msg: `User with username: ${username} already exist`,
            success: false,
        })
    }

    user = new userModel({ username, password });
    await user.save();
    user.speak();

    let data = { msg: 'register Success', username, success: true }
    res.status(200).json(data)
}

const loginUser = async (req, res) => {
    console.log(req.body)
    const { username, password } = req.body;

    let user = await userModel.findOne({ username });
    if (!user) {
        return res.status(404).json({ msg: `${username} doesn't exist`, success: false })

    } else if (user.password !== password) {
        return res.status(404).json({ msg: `Wrong Password`, success: false })
    }
    res.status(200).json({ msg: `Login Success`, success: true, username })
}

module.exports = { registerUser, loginUser }
