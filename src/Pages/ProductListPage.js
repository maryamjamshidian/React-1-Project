import { Button, Col, Container, Row } from "react-bootstrap";
import TextInput from "../Input/TextInput";
import NumberInput from "../Input/NumberInput";
import DatePickerInput from "../Input/DatePickerInput";
import CheckBoxInput from "../Input/CheckBoxInput";
import { connect } from "react-redux";
import mapProductDispachToProps from "../ViweService/ViweProductService";
import ProductGrid from "./ProductGrid";

const ProductListPage = (props) => {
  const { SearchProducts, productFilterModel } = props;
  return (
    <div>

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
    </Container>
    <ProductGrid/>
</div>
  );
};
const mapStateToProps = (state) => {
  return {
    productFilterModel: state.Product.productFilterModel,
    productListModel: state.Product.productListModel,
  };
};

export default connect(
  mapStateToProps,
  mapProductDispachToProps
)(ProductListPage);
