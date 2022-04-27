import ProductService from "../Services/ProductService";
import { GetNowpersianDate } from "../Viwes/Components/utils/persianDate";
import MainStore from "../Stores/Redux/MainStore";
const productService = new ProductService();

const mapProductDispachToProps=(dispach)=>{

    const SearchallProducts = async () => {
        let list = await productService.SearchAllProducts()
        dispach({ type: "setProductListModel", payload: list })
    }
    const SearchProducts = async () => {
        const {productFilterModel}=MainStore.getState().Product
        let list = await productService.SearchProducts(productFilterModel);
        dispach({ type: "setProductListModel", payload: list })
    }
    const RegisterProducts = async () => {
        const {productModel}=MainStore.getState().Product

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
    return{FindProduct,newproduct,RegisterProducts,SearchProducts,SearchallProducts}
}
export default mapProductDispachToProps;