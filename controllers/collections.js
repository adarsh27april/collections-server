const mongoose = require("mongoose")

/**
 * Create a collection
 */
const createCollection = async (req, res) => {
    console.log('create Collection body : ', req.body)
    console.log('create Collection header : ', req.headers)
    res.send('createCollection')
}

const getCollection = async (req, res) => {
    console.log('get Collection body : ', req.authorisation)
    res.send('getCollection')
}
module.exports = { createCollection, getCollection };