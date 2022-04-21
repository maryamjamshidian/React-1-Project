
const ProductReducer = (state, action) => {

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