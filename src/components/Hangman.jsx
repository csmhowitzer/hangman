import GuessedLetters from "./GuessedLetters";
import Man from "./Man";

function Hangman({word, guesses, wrongGuesses}) {

    return (
        <>
            <Man guesses={wrongGuesses}/>
            <GuessedLetters word={word} guesses={guesses} wrongGuesses={wrongGuesses}/>
        </>
    );

}

export default Hangman;