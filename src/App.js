import { useEffect, useState } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Owner from './models/owner';
import NavigationBar from './components/universal/navbar';
import DaycareInfo from './components/welcome/aboutus';
import NewDogs from './components/welcome/newdogs';
import Poster from './components/welcome/poster';
import { fetchData, getDogs } from './models/storagemodel';

function App() {


  const [dogs, setDogs] = useState([]);

  useEffect(() => {

    fetchData();

    setDogs(getDogs);

  },[]);

  useEffect(() => {
    
  },[dogs])



  return (
    <div className="App">
      <NavigationBar></NavigationBar>

      <Poster></Poster>
      <div id='main-wrap'>
        <DaycareInfo></DaycareInfo>
        <NewDogs dogs={dogs} ></NewDogs>
      </div>

      
    </div>
  );
}

export default App;
