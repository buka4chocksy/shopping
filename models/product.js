var mongoose = require('mongoose');

var productSchema = mongoose.Schema({
    productname:{ type : String, required : true},
    price:{type:Number, required:true},
    quantity:{type:Number, required:true},
    time:Date

})
module.exports = mongoose.model('products',productSchema);