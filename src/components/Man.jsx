function Man({guesses}) {

    return (
        <>
            <div class="drawing">
                <div class="pole-down"></div>
                <div class="top"></div>
                <div class="pole-upright"></div>
                <div class="base"></div>
                {
                    guesses.legth > 0 ? <div class="person-head"></div> : null
                }
                {
                    guesses.legth > 1 ? <div class="person-body"></div> : null
                }
                {
                    guesses.legth > 2 ? <div class="person-left-arm"></div> : null
                }
                {
                    guesses.legth > 3 ? <div class="person-right-arm"></div> : null
                }
                {
                    guesses.legth > 4 ? <div class="person-left-leg"></div> : null
                }
                {
                    guesses.legth > 5 ? <div class="person-right-leg"></div> : null
                }
            </div>
        </>
    );
}

export default Man;