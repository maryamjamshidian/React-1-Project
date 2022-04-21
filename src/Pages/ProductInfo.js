import { useContext, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router";
import DatePickerInput from "../Input/DatePickerInput";
import NumberInput from "../Input/NumberInput";
import TextInput from "../Input/TextInput";
import { ProductContxt } from "../Stores/Context/ProductContext";

const ProductInfo = () => {
  const { productModel, RegisterProducts, FindProduct, newproduct } =
    useContext(ProductContxt);

  const { productid } = useParams();
  useEffect(() => {
    if (productid) {
      FindProduct(productid);
    } else {
      newproduct();
    }
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
export default ProductInfo;
