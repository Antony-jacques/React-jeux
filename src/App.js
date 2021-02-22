import logo from './logo.svg';
import './App.css';
import FilterableJeuxTable from './Components/FilterableJeuxTable';

function App() {
  const Jeux = [];
  Jeux.push({category:'FPS',price:'10€', stocked:true, name: 'Counter Strike'});
  Jeux.push({category:'FPS',price:'15', stocked:true, name: 'BattleField'})
  Jeux.push({category:'FPS',price:'20', stocked:false, name: 'PUBG'})
  Jeux.push({category:'Aventure',price:'40', stocked:false, name: ' Zelda'});
  Jeux.push({category:'Aventure',price:'10€', stocked:true, name: 'Tomb Raider'})
  Jeux.push({category:'Aventure',price:'15', stocked:true, name: 'Uncharted'})
  
  return (
    <div className="App">
      <header className="App-header">

      <FilterableJeuxTable jeux={Jeux}/>














        
    
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
