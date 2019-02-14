import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import MainNav from "./MainNav";
import BoochList from './BoochList'

const App = props => {
  return (
    <div className="app">
      <MainNav />
      <Header />
      <BoochList/>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    currentPage: state.currentPage
  };
};

export default connect(mapStateToProps)(App);
