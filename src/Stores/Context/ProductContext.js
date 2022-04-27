
import { createContext, useReducer } from "react"
import ProductService from "../../Services/ProductService"
import ProductReducer from "../Reducers/ProductReducer"
import { GetNowpersianDate } from "../../Viwes/Components/utils/persianDate"
export const ProductContxt = createContext(null)

const initialProductState = {
    productListModel: [],
    productFilterModel: { productName: "", sku: "", FromPrice: 0, ToPrice: 0, isAvailable:true,FromPublishDate: GetNowpersianDate(), ToPublishDate: GetNowpersianDate() },
    productModel: { id: 0, productName: "", sku: "", price: 0, publishDate: GetNowpersianDate(), stockQuantity: 0 }
}
const productService = new ProductService();
const ProductProvider = ({ children }) => {

    const [ProductState, dispach] = useReducer(ProductReducer, initialProductState)

    const { productListModel, productFilterModel, productModel } = ProductState

    const SearchallProducts = async () => {
        let list = await productService.SearchAllProducts()
        dispach({ type: "setProductListModel", payload: list })
    }
    const SearchProducts = async () => {
        let list = await productService.SearchProducts(productFilterModel);
        dispach({ type: "setProductListModel", payload: list })
    }
    const RegisterProducts = async () => {

        if (productModel.id === 0) {
            let id = await productService.RegisterProduct(productModel)
            productModel.id = id;
        }
        else {
            await productService.UpdateProduct(productModel)
        }
    }
    const newproduct=()=>{
        dispach({type:"new product",payload:
        { id: 0, productName: "", sku: "", price: 0, publishDate: GetNowpersianDate(), stockQuantity: 0 }

    })
    }
    const FindProduct = async (id) => {
        let product = await productService.Find(id)
        dispach({
            type: "findlist", payload: {
                id: product.id, productName: product.productName, sku: product.sku, pricoe: product.price,
                publishDate: product.localPublishDate, stockQuantity: product.stockQuantity
            }
        })

    }
    return (

        <ProductContxt.Provider value={{
            SearchallProducts, productListModel, productFilterModel, SearchProducts,
            RegisterProducts, productModel, FindProduct,newproduct
        }}>
            {children}
        </ProductContxt.Provider>
    )
}
export default ProductProvider;