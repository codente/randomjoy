import { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  
const [ dog, setDog ] = useState(null);
const [ fox, setFox ] = useState(null)
const [ cat, setCat ] = useState(null)
const [ bird, setBird ] = useState(null)

function getDog() {
  setFox('')
  setCat('')
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => setDog(data.message));
}

function getFox() {
  setDog('')
  setCat('')
  setBird('')
  fetch('https://randomfox.ca/floof/')
    .then(response => response.json())
    .then(data => setFox(data.image))
  }
  
function getCat() {
  setDog('')
  setFox('')
  setBird('')
  fetch('http://shibe.online/api/cats?count=1')
    .then(response => response.json())
    .then(data => setCat(data[0]))
}

function getBird() {
  setDog('')
  setFox('')
  setCat('')
  fetch('http://shibe.online/api/birds?count=1')
    .then(response => response.json())
    .then(data => setBird(data[0]))
}
  
  
 
  
  return (
    <div className="App">
      <header className="App-header">
        Random Joy Generator
      </header>
      
      <h2>What type of pick-me-up do you need?</h2>
      
     <button onClick={getDog}>Random Dog Pic</button>  <button onClick={getFox}>Random Fox Pic</button> <button onClick={getCat}>Random Cat Pic</button> <button onClick={getBird}>Random Bird Pic</button>
     
     { dog && <div>
     <img src={dog} alt="A random dog" />
     </div>}
     
     { fox && <div>
      <img src={fox} alt="A random fox" />
      </div>}
      
     { cat && <div>
     <img src={cat} alt="A random cat" />
     </div>}
     
     { bird && <div>
      <img src={bird} alt="A random bird" />
      </div>}
     
    </div>
  );
}

export default App;
