const columns = store => {
  return [
    {
      title: "Name",
      dataIndex: "title",
      key: "title"
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price"
    },
    {
      title: "Quantity",
      dataIndex: "qty",
      key: "qty"
    },
    {
      title: "Sub Total",
      dataIndex: "subTotal",
      key: "subTotal"
    }
  ];
};

export default columns;
