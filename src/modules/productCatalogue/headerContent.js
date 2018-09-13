import React from "react";
import { Button, Badge } from "antd";
import { observer } from "mobx-react";
import CreateProduct from "./createProduct";
import store from "./Store";

const Header = props => {
  return (
    <div style={{ textAlign: "right" }}>
      <Badge count={store.cart.length}>
        <Button
          onClick={() => (store.isCreateModalOpen = true)}
          icon="shopping-cart"
          size="large"
          shape="circle"
        />
      </Badge>

      <CreateProduct />
    </div>
  );
};
export default observer(Header);
