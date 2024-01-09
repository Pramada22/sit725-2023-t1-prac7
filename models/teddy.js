let client = require('../dbConnection');

let collection = client.db().collection('Teddys');

function postTeddy(teddy, callback) {
    collection.insertOne(teddy,callback);
}

function getAllTeddys(callback) {
    collection.find({}).toArray(callback);
}

module.exports = {postTeddy,getAllTeddys}