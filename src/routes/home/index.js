import { h, Component } from "preact";
import { route } from "preact-router";
import Card from "preact-material-components/Card";
import "preact-material-components/Card/style.css";
import "preact-material-components/Button/style.css";
import picsters from "../../assets/images/sponsors/picsters.png";
import style from "./style";

export default class Home extends Component {
  linkTo = (path) => () => {
    route(path);
    this.closeDrawer();
  };

  render() {
    return (
      <div class={`${style.home} page container`}>
        <h1>
          Opendelos thief &nbsp;<i class="fas fa-user-ninja"></i>
        </h1>
        <p class="mb-4 text-justify">
          Το "Opendelos thief" είναι ένας τρόπος για τους φοιτητές, να
          κατεβάζουν (όχι streaming) το υλικό που διατίθεται στο πρόγραμμα
          OpenDelos της σχολής μας. Το υλικό διανέμεται δωρεάν υπο τα πνευματικά
          δικαιώματα του προγράμματος "Open Delos" και η εφαρμογή "Opendelos
          thief" δε φέρει καμία ευθύνη για τη μή ορθή χρήση του εκπαιδευτικού
          υλικού. Η οποιαδήποτε διαμοίραση του περιεχομένου σε τρίτους,{" "}
          <b>απαγορεύεται</b>.
        </p>
        <h4>
          Πως λειτουργεί; &nbsp;<i class="fas fa-book"></i>
        </h4>
        <p class="pb-4">
          Το πρόγραμμα "Open Delos" χρησιμοποιεί το πρόγραμμα "JW Player" για
          την αναπαραγωγή του περιεχομένου κάθε βιντεοσκοπημένης διάλεξης. Η
          αρχιτεκτονική του προγράμματος "Open Delos" είναι φτιαγμένη έτσι, ωστε
          να μην επιτρέπει την άμεση και εύκολη λήψη της κάθε διάλεξης (Ο τρόπος
          που το επιτυγχάνει είναι μέσω ενός κανόνα του προγράμματος NGinx). Ο
          διακομιστής ελέγχει την παρουσία της κεφαλίδας "Referer" και άν αυτή
          ειναι κενή, τότε δεν μας αφήνει να κατεβάσουμε το υλικό (Forbidden). Η
          συγκεκριμένη ιστοσελίδα παραδίδει έτοιμες τις εντολές (με την σωστή
          κεφαλίδα) για να κατεβάσετε οποιαδήποτε διάλεξη και να την
          παρακολουθήσετε εκτός σύνδεσης. Οι λόγοι που καθιστούν την
          συγκεκριμένη εφαρμογή "χρήσιμη" διαφέρουν απο άτομο σε άτομο.
        </p>

        <div class="mb-3">
          <h4 class="m-0">Διαθέσιμα μαθήματα</h4>
          <small>
            Τα δεδομένα δημιουργήθηκαν απο{" "}
            <a
              href="https://github.com/jimfilippou/opendelos-spider"
              rel="noopener"
              target="__blank"
            >
              εργαλείο
            </a>{" "}
            web crawler, για οποιαδήποτε αναφορά βλάβης, η αναφορά προβλημάτων
            γίνεται{" "}
            <a
              href="https://github.com/jimfilippou/opendelos-thief/issues"
              rel="noopener"
              target="__blank"
            >
              εδώ
            </a>
            .
          </small>
        </div>

        <Card class={`${style.customCard}`}>
          <div class={style.cardHeader}>
            <h2 class="mdc-typography--title m-0">
              Πιθανότητες <i class="fas fa-dice"></i>
            </h2>
            <div class=" mdc-typography--caption">Σταύρος Τουμπής</div>
          </div>
          {/* <div class={style.cardBody}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt.
          </div> */}
          <Card.Actions>
            <Card.ActionButton onClick={this.linkTo("/course/3311")}>
              Προβολη &nbsp;<i class="far fa-eye"></i>
            </Card.ActionButton>
          </Card.Actions>
        </Card>
        <br />
        <Card class={`${style.customCard}`}>
          <div class={style.cardHeader}>
            <h2 class="mdc-typography--title m-0">
              Λειτουργικά συστήματα <i class="fab fa-linux"></i>
            </h2>
            <div class=" mdc-typography--caption">Ξυλωμένος Γεώργιος</div>
          </div>
          {/* <div class={style.cardBody}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt.
          </div> */}
          <Card.Actions>
            <Card.ActionButton onClick={this.linkTo("/course/3464")}>
              Προβολη &nbsp;<i class="far fa-eye"></i>
            </Card.ActionButton>
          </Card.Actions>
        </Card>
        <Card class={`${style.customCard}`}>
          <div class={style.cardHeader}>
            <h2 class="mdc-typography--title m-0">
              Μαθηματικά Ι <i class="fas fa-square-root-alt"></i>
            </h2>
            <div class=" mdc-typography--caption">Σταύρος Τουμπής</div>
          </div>
          <Card.Actions>
            <Card.ActionButton onClick={this.linkTo("/course/3119")}>
              Προβολη &nbsp;<i class="far fa-eye"></i>
            </Card.ActionButton>
          </Card.Actions>
        </Card>

        

        <h2 class="text-center my-5">Sponsors 🎉</h2>
        <div class="d-flex justify-content-center">
          <Card class={`${style.customCard}`}>
            <img alt="PicSters" src={picsters} />
          </Card>
        </div>
      </div>
    );
  }
}
