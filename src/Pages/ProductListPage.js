import { AgGridColumn, AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { useContext } from "react";
import { ProductContxt } from "../Stores/Context/ProductContext";
import { Button, Col, Container, Row } from "react-bootstrap";
import TextInput from "../Input/TextInput";
import NumberInput from "../Input/NumberInput";
import { Link } from "react-router-dom";
import DatePickerInput from "../Input/DatePickerInput";
import CheckBoxInput from "../Input/CheckBoxInput";

const ProductListPage = () => {
  const {
    SearchallProducts,
    productListModel,
    SearchProducts,
    productFilterModel,
  } = useContext(ProductContxt);
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
  return (
    <Container fluid className="productPage">
      <h2>لیست محصولات</h2>
      <br />
      <Row style={{ marginBottom: 20 }}>
        <Col sm={3}>
          <TextInput
            model={productFilterModel}
            description="نام محصول"
            id="productName"
          />{" "}
        </Col>
        <Col sm={3}>
          {" "}
          <TextInput
            model={productFilterModel}
            description="کد محصول"
            id="sku"
          />{" "}
        </Col>
      </Row>
      <Row style={{ marginBottom: 20, marginTop: 10 }}>
        <Col sm={3}>
          {" "}
          <NumberInput
            model={productFilterModel}
            description="از قیمت"
            id="ToPrice"
          />{" "}
        </Col>

        <Col sm={3}>
          {" "}
          <NumberInput
            model={productFilterModel}
            description="تا قیمت"
            id="ّFromPrice"
          />{" "}
        </Col>
      </Row>
      <Row style={{ marginBottom: 20, marginTop: 10 }}>
        <Col sm={3}>
          {" "}
          <DatePickerInput
            model={productFilterModel}
            description="از تاریخ"
            id="FromPublishDate"
          />{" "}
        </Col>

        <Col sm={3}>
          {" "}
          <DatePickerInput
            model={productFilterModel}
            description="تا تاریخ"
            id="ToPublishDate"
          />{" "}
        </Col>
      </Row>
      <Row>
        <Col>
          <CheckBoxInput
            model={productFilterModel}
            description="فقط موجودی ها"
            id="isAvailable"
          />
        </Col>
      </Row>
      <Button
        variant="success"
        className="fa fa-search"
        style={{ marginBottom: 5 }}
        onClick={SearchProducts}
      >
        جستجو
      </Button>
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
    </Container>
  );
};
export default ProductListPage;
