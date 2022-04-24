import { AgGridColumn, AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import mapProductDispachToProps from "../ViweService/ViweProductService";
const ProductGrid=(props)=>{
const{SearchallProducts,productListModel}=props;
    const onGridReady = () => {
        SearchallProducts();
        document
          .getElementsByClassName("ag-paging-row-summary-panel")
          .item(0)
          .childNodes.item(3).innerHTML = "از";
        document
          .getElementsByClassName("ag-paging-row-summary-panel")
          .item(0)
          .childNodes.item(7).innerHTML = "تا";
        document
          .getElementsByClassName("ag-paging-description")
          .item(0)
          .childNodes.item(1).innerHTML = "صفحه";
        document
          .getElementsByClassName("ag-paging-description")
          .item(0)
          .childNodes.item(5).innerHTML = "از";
      };
      const renderProductName = (params) => {
        return (
          <Link to={"/product/" + params.data.id}>{params.data.productName}</Link>
        );
      };

return(
    <div className="ag-theme-alpine " style={{ width: "100%", height: 400 }}>
        <AgGridReact
          pagination={true}
          enableRtl
          paginationPageSize={10}
          rowClass="agRowStyle"
          frameworkComponents={{ RenderproductName: renderProductName }}
          onGridReady={onGridReady}
          rowSelection={"multiple"}
          rowMultiSelectWithClick={true}
          rowData={productListModel}
        >
          <AgGridColumn
            sortable
            headerName="نام محصول"
            field="productName"
            cellRenderer="RenderproductName"
          />
          <AgGridColumn sortable headerName="کد محصول در انبار" field="sku" />
          <AgGridColumn sortable headerName="قیمت" field="price" />
          <AgGridColumn headerName="تعداد موجودی" field="stockQuantity" />
          <AgGridColumn
            sortable
            headerName="تاریخ انتشار"
            field="localPublishDate"
          />
        </AgGridReact>
      </div>
)

}
const mapStateToProps=(state)=>{
  
    return{
      productListModel:state.Product.productListModel
  
    }
    
  }
export default  connect(mapStateToProps,mapProductDispachToProps)(ProductGrid);