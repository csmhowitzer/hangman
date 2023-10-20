import Hangman from "./Hangman";
import Letters from "./Letters";

function Board({word, guesses, updateGuesses}) {

    const wrongGuesses = guesses.filter((guess) => !word.split("").includes(guess));
    const correctGuesses = guesses.filter((guess) => word.split("").includes(guess));

    return (
        <>
            <div class="row">
                <div class="col-12">
                    <div class="body">
                        <Hangman word={word} guesses={guesses} wrongGuesses={wrongGuesses}/>
                    </div>
                    <div class="keyboard" style={{marginTop: "20px"}}>
                        <Letters updateGuesses={updateGuesses} correctGuesses={correctGuesses} wrongGuesses={wrongGuesses}/>
                    </div>
                </div>
            </div>
        </>
    );

}

export default Board;