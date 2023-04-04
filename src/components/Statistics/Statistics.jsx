import css from './Statistics.module.css';
import { getRandomHexColor } from './random-color';
import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title !== undefined ? (
        <h2 className={css.title} style={{ padding: '20px' }}>
          {title}
        </h2>
      ) : (
        <h2 className={css.title}>{title}</h2>
      )}

      <ul className={css.statList}>
        {stats.map(({ label, percentage, id }) => (
          <li
            className={css.item}
            style={{ backgroundColor: getRandomHexColor() }}
            key={id}
          >
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object),
};