var express = require('express');
var productsController = require('../controller/products')
var router = express.Router();

 /* GET Index page. */
 router.get('/products', async function(req, res, next) {
    let productsList = await productsController.getProductsList()
    res.json(productsList)
  });

  
/* GET Login page. */
router.get('/products/:id', async function(req, res, next) {
    let products = await productsController.getProductByID(req.params)
    res.json(products)
  });

module.exports = router;