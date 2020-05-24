import { h, Component } from "preact";
import Snackbar from "preact-material-components/Snackbar";
import "preact-material-components/Snackbar/style.css";
import data from "../../data/index";
import style from "./style";

const TIMEOUT = 3;

export default class Course extends Component {
  seen = [];
  queue = [];

  snackbarRef = (c) => {
    this.snackbar = c;
  };

  queueClose() {
    clearTimeout(this.closeTimer);
    this.closeTimer = setTimeout(this.hide, (TIMEOUT + 2) * 1000);
  }

  hide = () => {
    clearTimeout(this.closeTimer);
    this.current = null;
    this.setState({ visible: false });
  };

  show = (callback) => {
    clearTimeout(this.closeTimer);
    if (this.state.visible) return callback();
    this.setState({ visible: true }, () => {
      setTimeout(callback, 100);
    });
  };

  notify(info) {
    this.current = info;
    if (this.seen.indexOf(info) === -1) this.seen.push(info);
    this.show(() => {
      if (this.snackbar) {
        this.snackbar.MDComponent.show({
          ...info,
          timeout: TIMEOUT * 1000,
        });
      }
      if (!this.processQueue()) {
        this.queueClose();
      }
    });
  }

  processQueue = () => {
    let notif = this.queue.shift();
    if (notif) {
      this.notify(notif);
      return true;
    }
    return false;
  };

  queueNotify(info) {
    this.seen.push(info);
    if (this.queue.push(info) === 1) {
      setTimeout(this.processQueue);
    }
  }

  componentWillReceiveProps({ notifications = [] }) {
    for (let i = 0; i < notifications.length; i++) {
      if (this.seen.indexOf(notifications[i]) === -1) {
        this.queueNotify(notifications[i]);
      }
    }
  }

  copyToClipboard = (data) => {
    var textField = document.createElement("textarea");
    textField.innerText = data;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
    this.notify({ message: "The command was coppied to the clipboard 😎" });
  };

  render({ id }, { visible }) {
    const course = data.find((x) => x.id == parseInt(id));

    return (
      <div class={`${style.profile} page container`}>
        {visible ? (
          <Snackbar style={{ zIndex: 1001 }} ref={this.snackbarRef} />
        ) : null}
        <h1>{course.name}</h1>
        <h6>
          Αυτό το μάθημα έχει κωδικό {id}&nbsp;&nbsp;&nbsp;{"   "}
        </h6>

        <p>
          Παρακάτω αναγράφονται τα μαθήματα που είναι διαθέσιμα για λήψη.
          Πατώντας το κάθε κουμπί θα αντιγράψετε την αντίστοιχη εντολή που
          κατεβάζει το αρχείο. Για χρήστες windows προτείνεται η χρήση
          powershell, ενώ για χρήστες Linux / OSx προτείνεται το πρόγραμμα wget
          ή το curl.
        </p>

        <a
          href="https://github.com/jimfilippou/opendelos-thief/issues"
          rel="noopener"
          target="__blank"
          class="btn btn-danger text-white mb-5"
        >
          Αναφορά προβλήματος&nbsp;&nbsp;
          <i class="fas fa-exclamation-circle"></i>
        </a>

        {course.lectures.map((lecture) => (
          <div class="mb-5">
            <p class="mb-2">
              <b>{lecture.section} </b>
              {lecture.title}
            </p>
            <button
              onClick={() =>
                this.copyToClipboard(
                  `wget --header="Referer: http://delos.aueb.gr/opendelos/player?rid=${lecture.code}" http://delos.aueb.gr/delosrc/resources/vl/${lecture.code}/${lecture.code}.mp4`
                )
              }
              class="btn btn-primary"
            >
              wget &nbsp;<i class="fas fa-copy"></i>
            </button>
            &nbsp;&nbsp;&nbsp;
            <button
              onClick={() =>
                this.copyToClipboard(
                  `curl -H "Referer: http://delos.aueb.gr/opendelos/player?rid=${lecture.code}" http://delos.aueb.gr/delosrc/resources/vl/${lecture.code}/${lecture.code}.mp4 --output "${lecture.title}"`
                )
              }
              class="btn btn-success"
            >
              curl &nbsp;<i class="fas fa-copy"></i>
            </button>
            &nbsp;&nbsp;&nbsp;
            <button
              onClick={() =>
                this.copyToClipboard(
                  `Invoke-WebRequest http://delos.aueb.gr/delosrc/resources/vl/${lecture.code}/${lecture.code}.mp4 -Headers @{'Referer' = 'http://delos.aueb.gr/opendelos/player?rid=${lecture.code}';}`
                )
              }
              class="btn btn-info"
            >
              Powershell &nbsp;<i class="fas fa-copy"></i>
            </button>
          </div>
        ))}
      </div>
    );
  }
}
