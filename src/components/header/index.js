import { h, Component } from "preact";
import { route } from "preact-router";
import TopAppBar from "preact-material-components/TopAppBar";
import "preact-material-components/Switch/style.css";
import "preact-material-components/Dialog/style.css";
import "preact-material-components/TopAppBar/style.css";
// import style from './style';

export default class Header extends Component {
  linkTo = (path) => () => {
    route(path);
    this.closeDrawer();
  };

  goHome = this.linkTo("/");
  goToMyProfile = this.linkTo("/profile");

  render(props) {
    console.log(props.selectedRoute);
    return (
      <div>
        <TopAppBar className="topappbar">
          <TopAppBar.Row>
            <TopAppBar.Section style={{ justifyContent: "space-between" }}>
              <TopAppBar.Title
                style={{ cursor: "pointer" }}
                onClick={this.goHome}
              >
                <a href="#" class="text-white">
                  Home<i class="pl-2 fas fa-university"></i>
                </a>
              </TopAppBar.Title>
              <TopAppBar.Title class="pr-3" style={{ cursor: "pointer" }}>
                <a
                  href="https://github.com/jimfilippou/opendelos-thief"
                  target="__blank"
                  rel="noopener"
                  class="text-white"
                >
                  Contribute<i class="pl-2 fab fa-github"></i>
                </a>
              </TopAppBar.Title>
            </TopAppBar.Section>
          </TopAppBar.Row>
        </TopAppBar>
      </div>
    );
  }
}
