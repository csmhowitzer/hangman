import React, { useEffect, useState } from 'react';
import Board from './components/Board';
import './index.css';
import { getRandomWord } from './utilities/getWords';

function App() {

  const [word, setWord] = useState("");
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);
  const [title, setTitle] = useState("Hangman");
  const [guesses, setGuesses] = useState([]);
  const [wordArray, setWordArray] = useState([]);
  const [wordLength, setWordLength] = useState(0);

  useEffect(() => {
    getRandomWord().then((word) => {
      setWord(word);
      setWordArray(word.split(""));
      setWordLength(word.length);
    });
  }, []);

  return (
    <div className="App">
      <Board word={word} guesses={guesses}/>
    </div>
  );
}

export default App;

