import { h } from "preact";
import styles from "./footer.css";

function Footer() {
  return (
    <div class="container mt-4 pb-3">
      <p class={`${styles.slightly_right}`}>
        Created by{" "}
        <a href="https://jimfilippou.github.io" rel="noopener" target="__blank">
          Jim Filippou
        </a>
        <span>,</span>&nbsp;
        <a
          href="https://github.com/konkalaitzidis"
          rel="noopener"
          target="__blank"
        >
          Kostas Kalaitzidis
        </a>{" "}
        <span>,</span>&nbsp;
        <a
          href="https://github.com/ManosTheMaster"
          rel="noopener"
          target="__blank"
        >
          Manos Stamatakis
        </a>{" "}
        &nbsp;
        <i class="fas fa-bolt"></i>
      </p>
    </div>
  );
}

export default Footer;
