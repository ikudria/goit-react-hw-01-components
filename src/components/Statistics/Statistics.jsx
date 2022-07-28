import PropTypes from 'prop-types';
import s from './Statistics.module.css'

const Statistics = ({title, stats}) => {
  return (
    <section className={s.statistics}>
          <h2 className={s.title}>{title}</h2>
      <ul className={s.list}>
        {stats.map(({id, label, percentage}) => (
          <li className={s.item} key={id} style={{ backgroundColor: '#'+Math.floor(Math.random()*16777215).toString(16) }}>
            <span className={s.label}>{label}</span>
            <span className={s.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.any,
    label: PropTypes.string,
    percentage: PropTypes.number
  })).isRequired,
}
export default Statistics;

