import { h, Component } from "preact";
import { Router } from "preact-router";

import Header from "./header";
import Home from "../routes/home";
import Course from "../routes/course";
import NotFound from "../routes/404";
// import Home from 'async!../routes/home';
// import Profile from 'async!../routes/profile';

export default class App extends Component {
  handleRoute = (e) => {
    this.setState({
      currentUrl: e.url,
    });
  };

  render() {
    return (
      <div id="app">
        <Header selectedRoute={this.state.currentUrl} />
        <Router onChange={this.handleRoute}>
          <Home path="/" />
          <Course path="/course/:id" />
          <NotFound default />
        </Router>
      </div>
    );
  }
}
