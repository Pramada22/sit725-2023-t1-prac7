let collection = require('../models/teddy');

const postTeddy = (req,res) => {
    let teddy = req.body;
    collection.postTeddy(teddy, (err,result) => {
        if (!err) {
            res.json({statusCode:201,data:result,message:'success'});
        }
    });
}

const getAllTeddys = (req,res) => {
    collection.getAllTeddys((error,result)=>{
        if (!error) {
            res.json({statusCode:200,data:result,message:'success'});
        }
    });
}

const deleteTeddy = (req,res) => {
    let teddy = req.body;
    collection.deleteOne(teddy, (err,result) => {
        if (!err) {
            res.json({statusCode:201,data:result,message:'success'});
        }
    });
}

module.exports = {postTeddy,getAllTeddys}