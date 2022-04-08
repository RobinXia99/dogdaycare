import { useEffect } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Owner from './classes/owner';
import NavigationBar from './components/universal/navbar';
import DaycareInfo from './components/welcome/aboutus';
import NewDogs from './components/welcome/newdogs';
import Poster from './components/welcome/poster';

function App() {

  useEffect(() => {

    let owner = new Owner('Robin','Xia','073613125',['1','2','3']);

    console.log(owner);

  },[]);



  return (
    <div className="App">
      <NavigationBar></NavigationBar>

      <Poster></Poster>
      <div id='main-wrap'>
        <DaycareInfo></DaycareInfo>
        <NewDogs></NewDogs>
      </div>

      
    </div>
  );
}

export default App;
