var productService = require('../service/products');

exports.getProductsList = async function getProductsList(){
    return await productService.getProductsList()
  }

exports.add_products = async function addProductsList(params){
    let {image, name, price, published, id_category} = params
    let newProducts = {
        image: image,
        name: name,
        price: price,
        published: published,
        id_category: id_category
    }
    await productService.add_products(newProducts)
  }


  exports.getProductByID = async function getProductByID(params){
    let {id} = params
    
    return await productService.getProductByID(id)
  }

  exports.edit_products = async function editProductsList(params, body){  
    let {id} = params
    let {image, name, price, published, id_category} = body
    let products = {id, image, name, price, published, id_category}
    await productService.edit_products(products)
  }

  exports.remove_products = async function removeProductsList(params){
    let {id} = params
    await productService.remove_products(id)
  }

  exports.search = async function search(params){
    let {value} = params
    return await productService.search(value)
  }