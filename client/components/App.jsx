import React from "react";
import { connect } from "react-redux";

const App = props => {
  return <div className="app" />;
};

const mapStateToProps = state => {
  return {
    currentPage: state.currentPage
  };
};

export default connect(mapStateToProps)(App);
