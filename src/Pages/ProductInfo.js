import {  useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { useParams } from "react-router";
import DatePickerInput from "../Input/DatePickerInput";
import NumberInput from "../Input/NumberInput";
import TextInput from "../Input/TextInput";
import mapProductDispachToProps from "../ViweService/ViweProductService";

const ProductInfo = (props) => {
  const { productModel, RegisterProducts, FindProduct, newproduct } =props;

  const { productid } = useParams()
  useEffect(() => {
    if (productid) {
      FindProduct(productid);
    } else {
      newproduct();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productModel.id]);

  return (
    <Container className="fade alert alert-light show">
      <Row>
        <Col sm={3}>
          {" "}
          <TextInput
            model={productModel}
            id="productName"
            description="نام محصول"
          />{" "}
        </Col>
        <Col sm={3}>
          {" "}
          <TextInput model={productModel} id="sku" description="کد محصول" />
        </Col>
      </Row>
      <Row>
        <Col sm={3}>
          <NumberInput model={productModel} id="price" description="از قیمت" />
        </Col>
        <Col sm={3}>
          <NumberInput
            model={productModel}
            id="stockQuantity"
            description="موجودی"
          />
        </Col>
      </Row>
      <Row style={{ marginTop: 5 }}>
        <Col sm={3}>
        <DatePickerInput
        model={productModel}
        id="publishDate"
        description="تاریخ انتشار"
        />
        </Col>
      </Row>
      <Row>
        <Col sm={2}>
          <Button
            style={{ marginTop: 5 }}
            variant="success"
            className="btn-block"
            onClick={RegisterProducts}
          >
            ثبت
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
const mapStateToProps=(state)=>{
  
  return{productModel:state.Product.productModel}
  
}

export default connect(mapStateToProps,mapProductDispachToProps) (ProductInfo);