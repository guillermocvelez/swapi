const url = "https://swapi.dev/api/people/";

function getCharacters() {
  return fetch(`${url}`)
    .then((res) => res.json())
    .then((res) => res.results);
}

function getCharacter(char) {
  console.log("Entro");
  console.log(`${url}${char}`);
  return fetch(`${url}${char}`).then((res) => res.json());
}

export default {
  getCharacters,
  getCharacter,
};
