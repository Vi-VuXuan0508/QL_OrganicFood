var express = require('express');
var router = express.Router();
var checkLogin = require('../common/authenticate');
var productsController = require('../controller/products')
var categoryController = require('../controller/categories')
var upload = require('../common/upload');


router.use(checkLogin.check), function(req, res, next) {
  res.render('products');
}  

router.get('/', async function(req, res, next) {
  let productsList = await productsController.getProductsList()
  res.render('products', { productsList });
});

/* GET Add products. */
router.get('/add_products', async function(req, res, next) {
  let categoryList = await categoryController.getCategoryList()
  res.render('add_products', {categoryList});
});


var middleAddProducts = [checkLogin.check, upload.single('image')]
/* POST Add products. */
router.post('/add_products', middleAddProducts, async function(req, res, next) {
  let {body} = req
  if(req.file){
    let imgUrl = req.file.originalname
    body = {...body, image: imgUrl}
  }
  await productsController.add_products(body)
  res.redirect('/products')
});

/* GET Edit products. */
router.get('/edit_products/:id', middleAddProducts, async function(req, res, next) {
  let products = await productsController.getProductByID(req.params)
  let categoryList = await categoryController.getCategoryList()
  res.render('edit_products', {products, categoryList});
});

/* POST Edit products. */
router.post('/edit_products/:id', middleAddProducts, async function(req, res, next) {
  let {params, body} = req
  if(req.file){
    let imgUrl = req.file.originalname
    body = {...body, image: imgUrl}
  }
  await productsController.edit_products(params, body)
  res.redirect('/products')
});









///CATEGORY

/* GET category products. */
router.get('/category_products', async function(req, res, next) {
  let categoryList = await categoryController.getCategoryList()
  res.render('category_products', { categoryList });
});

/* GET Add category products. */
router.get('/add_category', async function(req, res, next) {
  res.render('add_category');
});

/* POST Add category products. */
router.post('/add_category', async function(req, res, next) {
  await categoryController.add_category(req.body)
  res.redirect('/products/category_products')
});

/* GET Edit category. */
router.get('/edit_category/:id', async function(req, res, next) {
  let category = await categoryController.getCategoryByID(req.params)
  res.render('edit_category', { category });
});

/* POST Edit category. */
router.post('/edit_category/:id', async function(req, res, next) {
  await categoryController.edit_category(req.params, req.body)
  res.redirect('/products/category_products')
});



///Delete
router.delete('/delete_products/:id', async function(req, res, next) {
  let {params} = req
  await productsController.remove_products(params)
  res.json({res: true});
});

router.delete('/delete_category/:id', async function(req, res, next) {
  let {params} = req
  await categoryController.remove_category(params)
  res.json({res: true});
});





///Search
router.get('/search/:value', async function(req, res, next) {
  let {params} = req
  let result = await productsController.search(params)
  let categoryList = await categoryController.getCategoryList()
  res.send({result, categoryList});
});

module.exports = router;
