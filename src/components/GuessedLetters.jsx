import GuessedLetter from "./GuessedLetter";

function GuessedLetters({word, guesses, wrongGuesses}) {

    let wordLetters = word.split("");
    return (
        <>
            <div className="container-word">
                {wordLetters.map((letter, index) => {
                    let isLeftOver = false;
                    let isFilledIn = false;
                    if (wrongGuesses.length < 7 && guesses.includes(letter)) {
                        isFilledIn = true;
                    } else if (wrongGuesses.length >= 7 && guesses.includes(letter)) {
                        isLeftOver = true;
                    }
                    return <GuessedLetter key={index} letter={letter} isWhite={isFilledIn} isRed={isLeftOver} />;        
                })}
            </div>
        </>
    );

}

export default GuessedLetters;