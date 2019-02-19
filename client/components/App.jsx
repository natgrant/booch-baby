import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import MainNav from "./MainNav";
import Cart from "./Cart";
import BoochList from "./BoochList";
import {fetchBooch} from '../actions'

class App extends React.Component {
  componentDidMount() {
    this.props.loadBooch()
  }

  render() {
    return (
      <div className="app">
        <MainNav />
        <Header />
        {/* <BoochList /> */}
        {this.props.currentPage === "listing" ? <BoochList /> : <Cart />}
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    currentPage: state.currentPage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadBooch: () => {
      dispatch(fetchBooch())
    } 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
