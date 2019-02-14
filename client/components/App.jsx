import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import MainNav from "./MainNav";
import Cart from "./Cart";
import BoochList from "./BoochList";

const App = props => {
  return (
    <div className="app">
      <MainNav />
      <Header />
      {props.currentPage === "listing" ? <BoochList /> : <Cart />}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    currentPage: state.currentPage
  };
};

export default connect(mapStateToProps)(App);
