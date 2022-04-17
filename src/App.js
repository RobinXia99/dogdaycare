import { useEffect, useState } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Owner from './models/owner';
import NavigationBar from './components/universal/navbar';
import DaycareInfo from './components/welcome/aboutus';
import NewDogs from './components/welcome/newdogs';
import Poster from './components/welcome/poster';
import { fetchData, getDogs } from './models/storagemodel';
import Welcome from './components/welcome/welcome';
import Search from './components/dog-registry/search';
import DogInfo from './components/dog-registry/doginfo';

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

      <Routes>
          <Route exact path="/" element={
            <Welcome dogs={dogs} />
          } />

          <Route exact path ="/search" element={
            <Search></Search>
          } />
          
          <Route exact path ="/dogs/:chipid" element={
            <DogInfo></DogInfo>
          } />
        </Routes>

      

      
    </div>
  );
}

export default App;
