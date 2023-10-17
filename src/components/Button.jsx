function Button({letter, isSelected, isHighlighted}) {

    return (
        isSelected && isHighlighted ? (
            <button className="keyboard-letter active" disabled="disabled">{letter}</button>
        ) : isSelected && !isHighlighted ? (
            <button className="keyboard-letter inactive" disabled="disabled">{letter}</button>
        ) : (
            <button className="keyboard-letter">{letter}</button>
        )
    );

}

export default Button;