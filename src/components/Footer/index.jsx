import { h } from 'preact';
import Styles from './styles.module.scss';

function Footer() {
  return (
    <footer className={Styles.footer}>
      &copy; {new Date().getFullYear()} 42 Cybersec
      <small className={Styles.byline}>🚀 Built with the power of Astro</small>
    </footer>
  );
}
export default Footer;
