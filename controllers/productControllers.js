var model = require('../models/product');
var multer = require('multer');

exports.addProduct = function(req,res) {

    var data ={
        productname:req.body.productname,
        price:req.body.price,
        quantity:req.body.quantity,
        time:Date.now()

    }
    model.create(data , function(err){
        if(err) res.json({err:err,message:'Error Adding Products'});
        res.json({message:'Product Added Successfully'});

    })

}

exports.deleteProduct = function(req,res){
    var product_id = {_id:req.body.product_id}
    model.findByIdAndRemove(product_id, function(err){
        if(err) res.json({err:err, message:'this product Was not deleted successfully!'});
        res.json({message:'Deletion process was Successfully made!'});


    })
}
exports.updateProduct = function(req,res){
    var product_id = req.body.product_id

    var option = {
        productname:req.body.productname,
        quantity:req.body.quantity
    }
model.findByIdAndUpdate(product_id,option, function(err, data){
    if(err) res.json({err:err, message:'error updating product'});
    res.json({message:'Product Update sucessful!'});

})
}
exports.viewProducts = function(req,res){
    model.find({}, function(err ,data ){
        if(err) res.json({err:err, message:'error Viewing Products'});
        res.json({message:data});

    })
}

exports.viewproductByid = function(req,res){
    var product_id = req.params.id
    model.findById(product_id, function(err, data){
        if(err) res.json({err:err, message:'Product does not exist'});
        res.json({data});

    })

}
