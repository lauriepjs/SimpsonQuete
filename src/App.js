import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {useState} from 'react';
import DisplaySimpson from './component/DisplaySimpspon';


const sampleQuote = {
  quote: "By chilling my loins I increase the chances of impregnating my wife.",
  character: "Apu Nahasapeemapetilon",
  image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FApuNahasapeemapetilon.png?1497567511629",
  characterDirection: "Left",
}


function App() {
  const [quote, setQuote]= useState(sampleQuote);

  const getSimpson = () => {

    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes')
      .then((response) => response.data)
      .then((data) => {
        setQuote(data[0]);
      });
  };

  return (
    <div className="App">
      <DisplaySimpson quote ={quote} />
      <button type="button" onClick={getSimpson}>Get Simpson</button>
    </div>
  );
}

export default App;
