var express = require('express');
var router = express.Router();

var productsControllers = require('../controllers/productControllers');
 
router.post('/create', productsControllers.addProduct);
router.post('/delete',productsControllers.deleteProduct);
router.post('/update', productsControllers.updateProduct);
router.get('/',productsControllers.viewProducts);
router.get('/view/:id',productsControllers.viewproductByid);
module.exports = router;