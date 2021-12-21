import { h } from 'preact';
import Styles from './styles.module.scss';

function Footer() {
  return (
    <footer className={Styles.footer}>
      <p> &copy; {new Date().getFullYear()} · 42 Cybersec</p>
      <img className={Styles.logo42} src="https://upload.wikimedia.org/wikipedia/commons/8/8d/42_Logo.svg"></img>
      <small className={Styles.byline}>🚀 Powered by <a href="https://astro.build">Astro</a></small>
    </footer>
  );
}
export default Footer;
