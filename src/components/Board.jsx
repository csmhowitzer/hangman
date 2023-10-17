import Hangman from "./Hangman";
import Letters from "./Letters";

function Board({word, guesses}) {

    const wrongGuesses = guesses.filter((guess) => !word.split("").includes(guess));
    const correctGuesses = guesses.filter((guess) => word.split("").includes(guess));

    return (
        <>
            <div class="row">
                <div class="col-12">
                    <div class="body">
                        <Hangman word={word} guesses={guesses}/>
                    </div>
                    <div class="keyboard" style={{marginTop: "20px"}}>
                        <Letters correctGuesses={correctGuesses} wrongGuesses={wrongGuesses}/>
                    </div>
                </div>
            </div>
        </>
    );

}

export default Board;