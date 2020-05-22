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
            <TopAppBar.Section>
              <TopAppBar.Title
                style={{ cursor: "pointer" }}
                onClick={this.goHome}
              >
                Home <i class="fas fa-university"></i>
              </TopAppBar.Title>
            </TopAppBar.Section>
          </TopAppBar.Row>
        </TopAppBar>
      </div>
    );
  }
}
