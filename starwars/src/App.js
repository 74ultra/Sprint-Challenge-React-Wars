import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharCard from './components/CharCard.js';
import './App.scss';

const App = () => {
  
  const [character, setCharacter] = useState({});
  
  useEffect(() => {
  axios.get('https://swapi.co/api/people/')
    .then(res => {
      
      const charData = res.data.results
      
      console.log(charData);

      setCharacter(charData);



    })
  }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {Array.from(character).map(char => {
        return <CharCard name={char.name}
                         mass={char.mass}
                         height={char.height}
                         eyeColor={char.eye_color}
                         gender={char.gender}
                         key={char.name}
                  
        />
      })}
      
    </div>
  );
}

export default App;
