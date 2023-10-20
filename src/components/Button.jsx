function Button({letter, isSelected, isHighlighted, clickHandler}) {

    return (
        isSelected && isHighlighted ? (
            <button className="keyboard-letter inactive" disabled="disabled">{letter}</button>
        ) : isSelected && !isHighlighted ? (
            <button className="keyboard-letter active" disabled="disabled">{letter}</button>
        ) : (
            <button className="keyboard-letter" onClick={clickHandler}>{letter}</button>
        )
    );

}

export default Button;