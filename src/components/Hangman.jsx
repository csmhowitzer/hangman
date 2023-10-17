import GuessedLetters from "./GuessedLetters";
import Man from "./Man";

function Hangman({word, guesses}) {

    return (
        <>
            <Man guesses={guesses}/>
            <GuessedLetters word={word} guesses={guesses}/>
        </>
    );

}

export default Hangman;