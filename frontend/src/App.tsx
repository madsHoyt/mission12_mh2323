import React from 'react';
import logo from './logo.svg';
import './App.css';
import data from './CollegeBasketballTeams.json';
import 'bootstrap/dist/css/bootstrap.min.css';

//bring in json
const schoolNames = data.teams;

interface Team {
  tid: number;
  cid: number;
  did: number;
  school: string;
  name: string;
  abbrev: string;
  pop: number;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
}

//calling functions
function App() {
  return (
    <div>
      <Welcome/>
      <div className="container">
        <h2>Schools</h2>
        <SchoolList/>
      </div>
      <div className='container'>
        <AllSchools/>
      </div>
    </div>
  );
}
//Welcome header--telling what the website is for
function Welcome(){
  return(
    <div className="App">
      <header className="App-header">
        <h1>NCAA Basketball</h1>
        <h2>Check out all the colleges in NCAA Basketball</h2>
      </header>      
    </div>
  )
}

//Create a card for each school
class School extends React.Component<{team: Team }>{
  render() {
    const team = this.props.team;
    return (
        <div>
          <div className="card">
            <h3 className='schoolName'>{team.school}</h3>
            <h4>Mascot: {team.name} </h4>
            <h4>Location: {team.city}, {team.state}</h4>
          </div>
      </div>
    );
  }

}

function SchoolList()
{
  return (
    <div className="">
      {schoolNames.map((team) => <School  team={team} key={team.tid}/>)}
    </div>
  );
} 

//List all schools
function AllSchools() {
  return (
    <body>
      <h2>List of Schools</h2>
      <div className='card'>
        <ul className="transformList">
          {schoolNames.map((team) => (
            <li key={team.tid}>{team.school}</li>
          ))}
        </ul>
      </div>
    </body>
  );
}

/*ReactDOM.render(
  <App/>,
  document.getElementById('mountNode')
); */

export default App;
