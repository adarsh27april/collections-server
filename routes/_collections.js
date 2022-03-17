const express = require("express");
const { createCollection, getCollection } = require('../controllers/collections')

const collectionRouter = express.Router();

collectionRouter.post('/', createCollection)
collectionRouter.get('/', getCollection)

module.exports = collectionRouter;
