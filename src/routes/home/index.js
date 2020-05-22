import { h, Component } from "preact";
import { route } from "preact-router";
import Card from "preact-material-components/Card";
import "preact-material-components/Card/style.css";
import "preact-material-components/Button/style.css";
import style from "./style";

export default class Home extends Component {
  linkTo = (path) => () => {
    route(path);
    this.closeDrawer();
  };

  render() {
    return (
      <div class={`${style.home} page container`}>
        <h1 class="mb-5">Opendelos thief 🖥</h1>
        <Card>
          <div class={style.cardHeader}>
            <h2 class="mdc-typography--title m-0">Πιθανότητες</h2>
            <div class=" mdc-typography--caption">Σταύρος Τουμπής</div>
          </div>
          <div class={style.cardBody}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt.
          </div>
          <Card.Actions>
            <Card.ActionButton onClick={this.linkTo("/course/3311")}>
              Προβολη
            </Card.ActionButton>
          </Card.Actions>
        </Card>
      </div>
    );
  }
}
