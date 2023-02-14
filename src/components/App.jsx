import user from '../user.json'
import dataStat from '../data.json'
import Profile from './Profile'
import Statistics from './Statistics';
console.log(dataStat.map(item => console.log(item) ))
export const App = () => {
  return (
    <div>
          <Profile
              username={user.username}
              tag={user.tag}
              location={user.location}
              avatar={user.avatar}
              stats={user.stats}
          />
          <Statistics
              title="Upload stats"
              stats={dataStat}
          />
          <Statistics stats={dataStat} />
      </div>
  );
};

    //   style={{
    //     height: '100vh',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     fontSize: 40,
    //     color: '#010101'
    //   }}
    // >
    //   React homework template