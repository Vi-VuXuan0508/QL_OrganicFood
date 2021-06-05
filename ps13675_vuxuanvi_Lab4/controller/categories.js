var categoryService = require('../service/categories')

exports.getCategoryList = async function getCategoryList(){
    return await categoryService.getCategoryList()
}

exports.add_category = async function addCategoryList(params){
    let {categoryName} = params
    let newCategory = {
        categoryName: categoryName
    }
    await categoryService.add_category(newCategory)
  }


exports.getCategoryByID = async function getCategoryByID(params){
    let {id} = params
    return await categoryService.getCategoryByID(id)
  }


exports.edit_category = async function editCategoryList(params, body){  
    let {id} = params
    let {categoryName} = body
    let category = {id, categoryName}
    await categoryService.edit_category(category)
  }



exports.remove_category = async function removeCategoryList(params){
    let {id} = params
    await categoryService.remove_category(id)
  }  