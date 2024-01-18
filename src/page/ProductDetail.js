import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import { useParams } from "react-router-dom";

// url 통신
const ProductDetail = () => {
  const [product, setproduct] = useState(null);
  const {id} = useParams();

  const getProductDetail=async()=>{
    let url = `https://my-json-server.typicode.com/leesh0787/shopping/products/${id}`
    let response = await fetch(url)
    let data = await response.json()
    setproduct(data)
    console.log(data)
  }

  useEffect(()=>{
    getProductDetail()
  },[])
  
return(
<Container>
  <Row>
    <Col className="porduct-img" md={7}>
      <img src={product?.img} alt=""/>
    </Col>
    <Col className="product-desc" md={5}>
      <div>{product?.title}</div>
      <div>{product?.price}</div>
      <div>{product?.choice ? "Conscious choice" : ""}</div>
      <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        SIZE
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {product?.size.map((item)=>(
          <Dropdown.Item href="#/action-1">{item}</Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
    <Button variant="danger">추가</Button>{' '}
    </Col>
  </Row>
</Container>
)
};

export default ProductDetail;
