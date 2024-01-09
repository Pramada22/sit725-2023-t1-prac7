let express = require('express');
let router = express.Router();
let controller = require('../controllers/controller');

router.post('/', function(req,res){
    controller.postTeddy(req,res);
});

router.get('/', (req,res)=>{
    controller.getAllTeddys(req,res);
});

router.delete('/', (req,res)=>{
    controller.getAllTeddys(req,res);
});


module.exports = router;