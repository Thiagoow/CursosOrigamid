/* Requisição de promessa pelo fetch: 
fetch("https://ibook-api.herokuapp.com/books")
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
  });
  */

/* Requisição pelo async/await: */
fetchAPI("https://ibook-api.herokuapp.com/books");

async function fetchAPI(url) {
  const response = await fetch(url);
  const json = await response.json();
  console.log(json);
}
