import GuessedLetter from "./GuessedLetter";

function GuessedLetters({word, guesses}) {

    let wordLetters = word.split("");
    return (
        <>
            <div className="container-word">
                {wordLetters.map((letter, index) => {
                    let isLeftOver = false;
                    if (guesses.includes(letter)) {
                        isLeftOver = true;
                    }
                    return <GuessedLetter key={index} letter={letter} isLeftOver={isLeftOver} />;
                })}
            </div>
        </>
    );

}

export default GuessedLetters;