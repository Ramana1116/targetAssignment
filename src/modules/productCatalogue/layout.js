import React from "react";
import { Layout } from "antd";
import HeaderContent from "./headerContent";

import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import ProductList from "./productList";
import ProductDetails from "./productDetails";
import "./layout.css";

const { Header, Content } = Layout;

const AppLayout = props => {
  return (
    <React.Fragment>
      <Header>
        <HeaderContent />
      </Header>
      <Content>
        <Router>
          <Switch>
            <Route exact path="/" component={ProductList} />
            <Route exact path="/home" component={ProductList} />
            <Route
              exact
              path="/productdetails/:id"
              component={ProductDetails}
            />
          </Switch>
        </Router>
      </Content>
    </React.Fragment>
  );
};
export default AppLayout;
