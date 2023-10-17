export function handleGuesses(guesses, setGuesses, letter) {
  let newGuesses = [...guesses, letter];
  setGuesses(newGuesses);
}