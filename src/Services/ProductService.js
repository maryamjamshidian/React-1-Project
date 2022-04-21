import {Get, Post, Put} from "../Adaptors/Api"

export const getProductListAction = { url: "Product", type: "get" }
export const getSearchProductList = { url: "Product/Search", type: "get" }
export const RegisterProductlist={url:"Product" , type:"post"}
export const UpdateProductlist={url:"Product" , type:"put" }
export const findProductlist={url:"Product/find", type:"get",}

export default class ProductService {

   SearchAllProducts() {
      return Get(getProductListAction)
   }
   SearchProducts(productFilter) {
      return Get(getSearchProductList, productFilter)
   }
RegisterProduct(product)
{
   return Post(RegisterProductlist,product)
}
UpdateProduct(product)
{
   return Put(UpdateProductlist,product)
}
Find(id)
{
   return Get({url:findProductlist.url+"/"+id})
}
}
