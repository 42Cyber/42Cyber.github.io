import { h } from 'preact';
import Styles from './styles.module.scss';

function PortfolioPreview({ event }) {
  return (
    <div className={Styles.card}>
      <div className={Styles.titleCard} style={`background-image:url(${event.img})`}>
        <h1 className={Styles.title}>{event.title}</h1>
      </div>
      <div className="pa3">
        <p className={`${Styles.desc} mt0 mb2`}>{event.description}</p>
        <div className={Styles.tags}>
          Tagged:
          {event.tags.map((t) => (
            <div className={Styles.tag} data-tag={t}>
              {t}
            </div>
          ))}
        </div>
        <a className={Styles.link} href={event.url}>
          <span className={Styles.linkInner}>Ver</span>
        </a>
      </div>
    </div>
  );
}

export default PortfolioPreview;
