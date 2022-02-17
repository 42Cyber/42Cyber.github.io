import { h } from 'preact';
import Styles from './styles.module.scss';

function Footer() {
  return (
    <footer className={Styles.footer}>
      <p> &copy; {new Date().getFullYear()} · 42 Cybersec · <a href="https://42madrid.com/ligas">Ligas</a></p>
      <a href="https://hacku.org"><img className={Styles.logo42} src="/assets/cybersec_ico.png"></img></a>
      <a href="https://42madrid.com/ligas"><img className={Styles.logo42} src="https://upload.wikimedia.org/wikipedia/commons/8/8d/42_Logo.svg"></img></a>
      {/* <img className={Styles.logo42} src="https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_the_Community_of_Madrid.svg"></img> */}
      <small className={Styles.byline}>We break things so yours are safe.</small>
    </footer>
  );
}
export default Footer;
