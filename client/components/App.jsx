import React from "react";
import { connect } from "react-redux";
import Header from "./Header";

const App = props => {
  return (
    <div className="app">
      <Header />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    currentPage: state.currentPage
  };
};

export default connect(mapStateToProps)(App);
