const categoryModels = require("../models/categoryModels")
const productsModels = require("../models/productsModels")

// var categoryList = [
//     {id: 1, categoryName: 'Vitamin & thực phẩm'},
//     {id: 2, categoryName: 'Thực phẩm bổ sung'},
//     {id: 3, categoryName: 'Thực phẩm chức năng'},
//     {id: 4, categoryName: 'Axit amin'},
//     {id: 5, categoryName: 'Tinh dầu'},
//   ]

  exports.getCategoryList = async function getCategoryList(){
      return await categoryModels.find()
  }

  exports.add_category = async function addCategoryList(category){
    const p = new categoryModels(category)
    await p.save()
  }

  exports.getCategoryByID = async function getCategoryByID(id){
    return await categoryModels.findById(id)
  }

  exports.edit_category = async function editCategoryList(category){  
    let pro = await categoryModels.findById(category.id)
        if(pro){
          pro.categoryName = category.categoryName
        }
        await pro.save()
  }


  exports.remove_category = async function removeCategoryList(id){
    await categoryModels.remove({_id: id})
  }