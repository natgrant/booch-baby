import { combineReducers } from "redux";

// Import Reducers to export combined below
import currentPage from "./current-page";
import booch from "./booch";
// import cart from "./cart";

export default combineReducers({
  currentPage,
  booch
  // cart
});
