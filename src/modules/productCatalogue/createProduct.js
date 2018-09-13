import React from "react";
import { observer } from "mobx-react";
import { Modal, Form, Button, Table } from "antd";
import store from "./Store";
import columns from "./columns";

const CreateProduct = ({ form, form: { getFieldDecorator } }) => {
  return (
    <Modal
      title="Cart"
      visible={store.isCreateModalOpen}
      footer={null}
      onCancel={() => (store.isCreateModalOpen = false)}
      width={900}
    >
      <Table
        rowKey={(row, index) => index}
        dataSource={store.cart}
        columns={columns()}
      />
      <div style={{ textAlign: "center", marginTop: "10px" }}>
        <Button
          type="primary"
          disabled={!store.cart.length}
          onClick={store.checkout}
        >
          Checkout
        </Button>
      </div>
    </Modal>
  );
};
export default Form.create()(observer(CreateProduct));
