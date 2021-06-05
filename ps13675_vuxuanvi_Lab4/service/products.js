var categoryService = require('./categories')
var categoryModels = require('../models/categoryModels')
var productsModels = require('../models/productsModels')

// var productsList = [
//     {id: 1, name: 'Simply Organic, Garlic Powder, 3.64 oz (103 g)', price: 1000, published: '2020-09-08', id_category: 1, image: 'http://localhost:3000/images/0.png'},
//     {id: 2, name: 'Arrowhead Mills, Organic Yellow Cornmeal, 22 oz (623 g)', price: 2000, published: '2020-09-08', id_category: 5, image: 'http://localhost:3000/images/0.png'},
//     {id: 3, name: 'Miracle Noodle, Spinach, Shirataki Pasta, 7 oz (198 g)', price: 3000, published: '2020-09-08', id_category: 4, image: 'http://localhost:3000/images/0.png'},
//     {id: 4, name: 'Wonder Foods Organic Inulin 500g', price: 4000, published: '2020-09-08', id_category: 3, image: 'http://localhost:3000/images/0.png'},
//     {id: 5, name: 'Soyabean (Organic Non GMO)', price: 5000, published: '2020-09-08', id_category: 2, image: 'http://localhost:3000/images/0.png'},
//   ]

   
  exports.getProductsList = async function getProductsList(){
    let products = await productsModels.find().populate('id_category')
    console.log(products)
    
      return products;
  }

  exports.add_products = async function addProductsList(products){
    const p = new productsModels(products)
    await p.save()
  }

  exports.getProductByID = async function getProductByID(id){
    return await productsModels.findById(id)
  }


  exports.edit_products = async function editProductsList(products){ 
    let pro = await productsModels.findById(products.id)
    if(pro){
      if(products.image){
        pro.image = products.image
      }
      pro.name = products.name
      pro.price = products.price
      pro.published = products.published
      pro.id_category = products.id_category
      await pro.save()
    } 
  }

  exports.remove_products = async function removeProductsList(id){
    await productsModels.remove({_id: id})
  }

  exports.search = async function search(keyword){
    let result = productsModels.find( sp => sp.name.toLowerCase().includes(keyword.toLowerCase())) || []
    return await result
  }