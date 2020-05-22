import { h, Component } from "preact";
import { route } from "preact-router";
import TopAppBar from "preact-material-components/TopAppBar";
import Dialog from "preact-material-components/Dialog";
import Switch from "preact-material-components/Switch";
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
                Home
              </TopAppBar.Title>
            </TopAppBar.Section>
          </TopAppBar.Row>
        </TopAppBar>
        <Dialog ref={this.dialogRef}>
          <Dialog.Header>Settings</Dialog.Header>
          <Dialog.Body>
            <div>
              Enable dark theme <Switch onClick={this.toggleDarkTheme} />
            </div>
          </Dialog.Body>
          <Dialog.Footer>
            <Dialog.FooterButton accept>OK</Dialog.FooterButton>
          </Dialog.Footer>
        </Dialog>
      </div>
    );
  }
}
