import React from "react";
import { withRouter } from "react-router-dom";
import { Card, Button, Row, Col } from "antd";
import { observer } from "mobx-react";

import store from "./Store";

class ProductDetails extends React.Component {
  componentDidMount() {
    /* refresh on the page brings all the Items, a better approach will be have a each product API with only response as single product*/
    fetch(
      "https://redsky.target.com/v1/plp/search/?count=24&offset=0&keyword=action+figures"
    )
      .then(resp => resp.json())
      .then(resp => {
        store.selectedProduct = resp.search_response.items.Item.find(
          item => item.tcin === this.props.location.state.id
        );
      });
  }
  render() {
    return (
      <div>
        {store.selectedProduct && (
          <div>
            <Row>
              <Col>
                <Card
                  hoverable
                  style={{
                    width: 240,
                    margin: "1%"
                  }}
                  cover={
                    <img alt="example" src={store.selectedProduct.images[0].base_url + store.selectedProduct.images[0].primary} />
                  }
                />
                <div style={{ color: "#19c6ae" }}>
                  {store.selectedProduct.list_price.formatted_price}
                </div>
              </Col>
              <Col>
                <div style={{ wordWrap: "break-word", height: "35px" }}>
                  {" "}
                  {store.selectedProduct.title}
                </div>
                <div style={{ wordWrap: "break-word", height: "100px" }}>
                  {" "}
                  {store.selectedProduct.description}
                </div>
                <div style={{ marginTop: "10px", textAlign: "center" }}>
                  <Button
                    onClick={() => store.addToCart(store.selectedProduct)}
                  >
                    Add to Cart
                  </Button>
                </div>
              </Col>
            </Row>
          </div>
        )}
      </div>
    );
  }
}
export default withRouter(observer(ProductDetails));
