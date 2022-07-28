import PropTypes from 'prop-types';
import s from './Profile.module.css';

console.log(s)

const Profile = ({username, tag, location, avatar, stats}) => {
    return (
  <div className="profile">
    <div className={s.description}>
      <img
        src={avatar}
            alt={tag }
        className={s.avatar}
      />
          <p className="name">{username}</p>
          <p className="tag">@{ tag}</p>
          <p className="location">{ location}</p>
    </div>

        <ul className={s.stats}>
      <li className={s.item}>
        <span className={s.label}>Followers</span>
            <span className="quantity">{ stats.followers }</span>
      </li>
      <li className={s.item}>
        <span className={s.label}>Views</span>
        <span className="quantity">{ stats.views }</span>
      </li>
      <li className={s.item}>
        <span className={s.label}>Likes</span>
        <span className="quantity">{ stats.likes }</span>
      </li>
    </ul>
  </div>
  )
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
}

export default Profile;