import { observable, computed, toJS } from "mobx";

import { notification } from "antd";
class Store {
  @observable
  isCreateModalOpen = false;
  @observable
  productDataSource = [];
  @observable
  count = 0;
  @observable
  selectedProductsList = [];

  @observable
  cart = [];
  @observable
  searchText = "";
  @observable
  selectedProduct = null;
  constructor() {
    fetch(
      "https://redsky.target.com/v1/plp/search/?count=24&offset=0&keyword=action+figures"
    )
      .then(resp => resp.json())
      .then(resp => {
        this.productDataSource = resp.search_response.items.Item;
      });
    this.cart = JSON.parse(localStorage.getItem("cart")) || [];
  }

  @computed
  get sortedProductList() {
    return this.productDataSource
      .slice()
      .filter(product => {
        return (
          product.title.toLowerCase().indexOf(this.searchText.toLowerCase()) !== -1
        );
      })
      .sort((a, b) => {
        if (a.price < b.price) {
          return -1;
        }
        if (a.price > b.price) {
          return 1;
        }
        return 0;
      });
  }

  addToCart = product => {
    var chk = this.cart.find(chk => chk.title === product.title);
    if (!chk) {
      let obj = {
        title: product.title,
        price: product.list_price.price,
        qty: 1,
        subTotal: product.list_price.price * 1
      };
      this.cart.push(toJS(obj));
      notification.open({
        message: `${product.title} Added to cart`
      });
    } else {
      this.cart.forEach(pr => {
        if (pr.title === product.title) {
          pr.qty += 1;
          pr.subTotal = pr.price * pr.qty;
          notification.open({
            message: ` ${pr.qty} ,${pr.title} Added`
          });
        }
      });
    }
    localStorage.removeItem("cart");

    localStorage.setItem("cart", JSON.stringify(this.cart));
  };
  checkout = () => {
    localStorage.removeItem("cart");
    this.cart = [];
    this.isCreateModalOpen = false;
  };
  onProductSelect = (product, history) => {
    history.push({
      pathname: `/productdetails/${product.tcin}`,
      state: { id: product.tcin }
    });
  };

  onProductSearch = e => {
    this.searchText = e.target.value;
  };
}
export default new Store();
