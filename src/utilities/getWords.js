export function getRandomWord()
{
    return fetch("https://random-word-api.herokuapp.com/word?number=1")
        .then((res) => res.json())
        .then((data) => {
        return data[0];
        });
}