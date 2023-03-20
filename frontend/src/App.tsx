import React from 'react';
import logo from './logo.svg';
import './App.css';
import data from './CollegeBasketballTeams.json';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

//Json stuff (delete later)
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
/* class School extends React.Component{
  render() {
    const school = this.props;
    return (
      <div className="card">
        <h3>{school.school}</h3>
        <h4>Mascot: {school.mascot}</h4>
        <h4>Mascot: {school.city}, {school.state}</h4>
      </div>
    );
  }

} */

class School extends React.Component<{team: Team }>{
  render() {
    const team = this.props.team;
    return (
        <div>
          <div className="card">
            <h3 className='schoolName'>School {team.school}</h3>
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

/* function SchoolList()
{
  return (
    <div>
      {schoolNames[0].teams.map((team) => <School  team={team} key={team.tid}/>)}
    </div>
  );
} 

function AllSchools() {
  return (
    <div className='card'>
      <h2>List of Schools</h2>
      <ul>
        {schoolNames[0].teams.map((team) => (
          <li key={team.tid}>{team.school}</li>
        ))}
      </ul>
    </div>
  );
} */



/*ReactDOM.render(
  <App/>,
  document.getElementById('mountNode')
); */

export default App;
