import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';




export const App = () => {
  return (
    <div
      style={{
        
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101'
      }}
    >
      <Profile />
      <Statistics />
      <FriendList />
    </div>
  );
};
