const url = "https://swapi.dev/api/people/";

function getCharacters() {
  return fetch(`${url}`)
    .then((res) => res.json())
    .then((res) => res.results);
}

function getCharacter(char) {
  console.log(`${url}${char}`);
  return fetch(`${url}${char}`).then((res) => res.json());
}

function getPages() {
  return fetch(`${url}`)
    .then((res) => res.json())
    .then((res) => res.next);
}

function getPrevPage() {
  return fetch(`${url}`)
    .then((res) => res.json())
    .then((res) => res.previous);
}

function getNextPageChars(nextUrl) {
  return fetch(`${nextUrl}`)
    .then((res) => res.json())
    .then((res) => res.results);
}

function getPrevtPageUrl(prevtUrl) {
  return fetch(`${prevtUrl}`)
    .then((res) => res.json())
    .then((res) => res.previous);
}

function getNextPageUrl(nextUrl) {
  return fetch(`${nextUrl}`)
    .then((res) => res.json())
    .then((res) => res.next);
}

export default {
  getCharacters,
  getCharacter,
  getPages,
  getNextPageChars,
  getNextPageUrl,
  getPrevPage,
  getPrevtPageUrl,
};
