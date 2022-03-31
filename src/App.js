import './App.css';
import NavigationBar from './components/universal/navbar';
import Poster from './components/welcome/poster';

function App() {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <Poster></Poster>
      <div id='main-wrap'>

      </div>
      
    </div>
  );
}

export default App;
