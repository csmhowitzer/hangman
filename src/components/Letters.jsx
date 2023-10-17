import Button from "./Button";

function Letters({correctGuesses, wrongGuesses}) {

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    return (
        <>
            {alphabet.map((letter, index) => {
                let isSelected = false;
                let isHighlighted = false;
                if (correctGuesses.includes(letter)) {
                    isSelected = true;
                } else if (wrongGuesses.includes(letter)) {
                    isSelected = true;
                    isHighlighted = true;
                }
                return <Button key={index} letter={letter} isSelected={isSelected} isHighlighted={isHighlighted} />;
            })}
        </>

    );

}

export default Letters;