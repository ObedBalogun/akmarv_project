
import {
  BrowserRouter as Router,
  Route,

} from "react-router-dom";
import React, {Component} from "react";
import IndexPage from "./pages/Index";
import BeatsPage from "./pages/BeatsPage";
import LoginPage from "./pages/LoginPage";
import ContactPage from "./pages/ContactPage";
import CartPage from "./pages/CartPage";
import UploadPage from "./pages/UploadPage";
import BeatDetailPage from "./pages/beat-detail";


class App extends Component {
  render() {
    return (
        <Router>
          <Route exact path="/" component={IndexPage}/>
          <Route exact path="/wavegod" component={UploadPage}/>
          <Route exact path="/contact" component={ContactPage}/>
          <Route exact path="/beats" component={BeatsPage}/>
          <Route exact path="/beat/:id" component={BeatDetailPage}/>
          <Route exact path="/cart" component={CartPage}/>
          <Route exact path="/checkout" component={IndexPage}/>
        </Router>
    );
  }
}

export default App;
