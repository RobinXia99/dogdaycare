import './App.css';
import NavigationBar from './components/universal/navbar';
import DaycareInfo from './components/welcome/aboutus';
import NewDogs from './components/welcome/newdogs';
import Poster from './components/welcome/poster';

function App() {
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
