import { h, Component } from "preact";
import Button from "preact-material-components/Button";
import "preact-material-components/Button/style.css";
import data from "../../data/index";
import style from "./style";

export default class Course extends Component {
  state = {
    time: Date.now(),
    count: 10,
  };

  // gets called when this route is navigated to
  componentDidMount() {
    // start a timer for the clock:
    this.timer = setInterval(this.updateTime, 1000);
  }

  // gets called just before navigating away from the route
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  // update the current time
  updateTime = () => {
    this.setState({ time: Date.now() });
  };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // Note: `user` comes from the URL, courtesy of our router
  render({ id }, { time, count }) {
    const course = data.find((x) => x.id == parseInt(id));

    return (
      <div class={`${style.profile} page container`}>
        <h1>{course.name}</h1>
        <p>Αυτό το μάθημα έχει κωδικό {id}</p>

        {course.lectures.map((lecture) => (
          <div class="mb-5">
            <p class="mb-2">
              <b>Κεφάλαιο {lecture.section} </b>
              {lecture.title}
            </p>
            <code>
              wget --header="Referer: http://delos.aueb.gr/opendelos/player?rid=
              {lecture.code}" http://delos.aueb.gr/delosrc/resources/vl/
              {lecture.code}/{lecture.code}.mp4
            </code>
          </div>
        ))}

        {/* <p>
          <Button raised ripple onClick={this.increment}>
            Αντιγραφή
          </Button>
        </p> */}
      </div>
    );
  }
}
