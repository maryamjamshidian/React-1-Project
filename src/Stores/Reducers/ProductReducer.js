import { GetNowpersianDate } from "../../Viwes/Components/utils/persianDate"
const initialProductState = {
    productListModel: [],
    productFilterModel: { productName: "", sku: "", FromPrice: 0, ToPrice: 0, isAvailable:true,FromPublishDate: GetNowpersianDate(), ToPublishDate: GetNowpersianDate() },
    productModel: { id: 0, productName: "", sku: "", price: 0, publishDate: GetNowpersianDate(), stockQuantity: 0 }
}
const ProductReducer = (state=initialProductState, action) => {

    switch (action.type) {
        case "setProductListModel":

{
     return{...state,productListModel:action.payload }
}
case "findlist":

    {
         return{...state,productModel:action.payload }
    }
    case "new product":
    {
        return{...state,productModel:action.payload}
    }
        default:
            {
                  return (state)
            }
          
    }
}
export default ProductReducer;