function GuessedLetter({id, letter, isWhite, isRed}) {
    return (
        isWhite ? (
            <span className="word-letter">
                <span class="active" key={id}>{letter}</span>
            </span>
        ) : isRed ? (
            <span className="word-letter">
                <span class="over" key={id}>{letter}</span>
            </span>
        ) : (
            <span className="word-letter">
                <span  key={id}>_</span>
            </span>
        )
    );
}

export default GuessedLetter;