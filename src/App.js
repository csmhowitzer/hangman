import React, { useEffect, useState } from 'react';
import Board from './components/Board';
import Header from './components/Header';
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
  const [hasWord, setHasWord] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    getRandomWord().then((newWord) => {
      if(!hasWord){
        let upperCase = newWord.toUpperCase();
        setWord(upperCase);
        setWordArray(upperCase.split(""));
        setWordLength(upperCase.length);
        setHasWord(true);
      }
    });
  }, [hasWord]);

  function clearBoard(){
    setGuesses([]);
    setWord("");
    setWordArray([]);
    setWordLength(0);
    setHasWord(false);
    setGameOver(false);
  }

  function updateGuesses(letter) {
    setGuesses([...guesses, letter.target.innerHTML]);
    setGameOver(() =>{
      if(checkWin()){
        setWins(wins + 1);
        setHasWord(false);
        clearBoard();
        return true;
      }
      else if(checkLoss()){
        setLosses(losses + 1);
        setHasWord(false);
        clearBoard();
        return true;
      }
      else{
        return false;
      }
    });
  }

  const checkWin = () => {
    let win = true;
    wordArray.forEach((letter) => {
      if(!guesses.includes(letter)){
        win = false;
      }
    });
    return win;
  }

  const checkLoss = () => {
    return guesses.length >= 6;
  }

  return (
    <div className="App">
      <Header title={title} wins={wins} losses={losses}/>
      <div class="row">
        <div class="col-12">
          <div class="alert alert-danger text-center" style={{padding: "5px", fontWeight: "bold"}}>
            Nice Try! - click me to start over
          </div>
          <div class="alert alert-success text-center" style={{padding: "5px", fontWeight: "bold"}}>
            You Win! - click me to start over
          </div>
        </div>
      </div>
      <Board word={word} guesses={guesses} updateGuesses={updateGuesses}/>
    </div>
  );
}

export default App;

