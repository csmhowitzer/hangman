function GuessedLetter({id, letter, isLeftOver}) {
    return (
        isLeftOver ? (
            <span className="word-letter">
                <span class="active" key={id}>{letter}</span>
            </span>
        ) : (
            <span className="word-letter">
                <span class="over" key={id}>{letter}</span>
            </span>
        )
    );
}

export default GuessedLetter;