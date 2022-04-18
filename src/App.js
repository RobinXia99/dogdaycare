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
import Socials from './components/universal/socials';
import Footer from './components/universal/footer';

function App() {


  const [dogs, setDogs] = useState([]);

  let mediaQuery = window.matchMedia('(max-width: 500px)');

  const [device, setDevice] = useState(() => {
      if(mediaQuery.matches) {
          return 'mobile'
      } else {
          return 'web'
      }
  });

  mediaQuery.addEventListener('change', () => {
      console.log(window.innerWidth);
      if(mediaQuery.matches) {
          setDevice('mobile');
          console.log('smaller than 500px ' + (device))
      } else {
          setDevice('web');
          console.log('larger than 500px ' + (device));
      }
  });

  useEffect(() => {

    fetchData();

    setDogs(getDogs);

  },[]);




  return (
    <div className="App">
      <NavigationBar device={device}></NavigationBar>

      <Routes>
          <Route exact path="/" element={
            <Welcome dogs={dogs} />
          } />

          <Route exact path ="/search" element={
            <Search device={device}></Search>
          } />
          
          <Route exact path ="/dogs/:chipid" element={
            <DogInfo dogs={dogs} ></DogInfo>
          } />
        </Routes>
        
        <Socials></Socials>

        <Footer></Footer>
    </div>
  );
}

export default App;
