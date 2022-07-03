const { missionSearch } = require("./fixtures");
const axios = require("axios").default;
const { API_KEY } = require("./config.js");

function testConsole() {
  console.log("good!");
  return "good";
}

window.onload = initialize;

function initialize() {
  document.getElementById("search-button").addEventListener("click", search);
  document.getElementById("reset-button").addEventListener("click", reset);
}
async function search() {
  // console.log("clicked search");
  const searchWord = document.getElementById("search-word").value;
  console.log("Search value is : " + searchWord);
  const isvalid = validateInput(searchWord);
  if (!isvalid) {
    console.log("search not valid");
    reset();
    return;
  }
  var queryResult = await queryTitle(searchWord);
  if (queryResult.Response == "True") {
    document.getElementById("results-list").innerHTML = generateHTMLImagesLis(
      getPostersURI(queryResult)
    );
  } else {
    document.getElementById("results-list").innerHTML = queryResult.Error;
  }
  document.getElementById("search-for").innerHTML = searchWord;
  document.querySelector(".result-term").style.display = "block";
  return "clicked search";
}

function reset() {
  // console.log("clicked reset");
  document.querySelector(".result-term").style.display = "none";
  document.getElementById("results-list").innerHTML = "";
  document.getElementById("search-word").value = "";
  return "clicked reset";
}

function validateInput(input) {
  return /^[a-z0-9-\s]{3,}$/gi.test(input.trim());
}

async function queryTitle(title) {
  // if (title == "mission") return missionSearch;
  const data = await axios.get(
    `http://www.omdbapi.com/?apikey=${API_KEY}&s=${title}`
  );
  return data.data;
}

async function fetchTitle(title) {
  console.log("...fetching");
  const response = await fetch(
    `http://www.omdbapi.com/?apikey=ff436551&s=${title}`,
    { method: "GET" }
  );
  //console.log(response.json());
  return response.json();
}

function getPostersURI({ Search }) {
  return Search.map((film) => film.Poster).filter((poster) => poster !== "N/A");
}

function generateHTMLImagesLis(postersUriList) {
  const generatedHTMLCode = postersUriList
    .map((posterUri) => `<img src="${posterUri}" alt="" />`)
    .join("");
  return generatedHTMLCode;
}

module.exports = {
  testConsole,
  search,
  reset,
  validateInput,
  queryTitle,
  getPostersURI,
  generateHTMLImagesLis,
};

/* 
TODOS: validate input when clicked search
TODOS: query the API if validation is successful
TODOS: render the results
 */
