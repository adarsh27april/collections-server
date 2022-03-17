const mongoose = require('mongoose')

const collectionSchema = new mongoose.Schema({
    title: String,
    collection: [],
})

const collectionModel = mongoose.model('collectionModel', collectionSchema);

module.exports = collectionModel;
