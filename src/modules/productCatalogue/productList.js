import React from "react";
import { Card, Button, Input } from "antd";
import { observer } from "mobx-react";
import { toJS } from "mobx";
import { withRouter } from "react-router-dom";
import store from "./Store";

const { Meta } = Card;
const Search = Input.Search;

const ProductList = props => {
  return (
    <div>
      <Search
        value={store.searchText}
        placeholder="input search text"
        onChange={store.onProductSearch}
        style={{ width: 200 }}
      />
      <div className="flex">
        {toJS(store.sortedProductList).map((product, i) => {
          return (
            product.images && (
              <Card
                key={i}
                hoverable
                style={{
                  width: 240,
                  margin: "1%"
                }}
                cover={<img alt="example" src={product.images[0].base_url + product.images[0].primary } />}
              >
                <Meta
                  title={
                    <div>
                      <div>
                        <div
                          onClick={() =>
                            store.onProductSelect(product, props.history)
                          }
                        >
                          <div
                            style={{ color: "#19c6ae", textAlign: "center" }}
                          >
                            ${product.list_price.price}
                          </div>
                          <div
                            style={{ wordWrap: "break-word", height: "100px" }}
                          >
                            {" "}
                            {product.title}
                          </div>
                        </div>
                        <div style={{ marginTop: "10px", textAlign: "center" }}>
                          <Button onClick={() => store.addToCart(product)}>
                            Add to Cart
                          </Button>
                        </div>
                      </div>
                    </div>
                  }
                />
              </Card>
            )
          );
        })}
      </div>
    </div>
  );
};
export default withRouter(observer(ProductList));
