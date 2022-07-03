const { missionSearch, POSTERS_URI, IMAGES_LIST_HTML } = require("./fixtures");
const {
  testConsole,
  search,
  reset,
  validateInput,
  queryTitle,
  getPostersURI,
  generateHTMLImagesLis,
} = require("./script");

test('returns "good"', () => {
  expect(testConsole()).toBe("good");
});

test("search button is clicked", () => {
  expect(search()).toBe("clicked search");
});

test("reset button is clicked", () => {
  expect(reset()).toBe("clicked reset");
});

test("user input validation", () => {
  expect(validateInput("mission")).toBeTruthy();
  expect(validateInput("mission24321 impossible2")).toBeTruthy();
  expect(validateInput("")).not.toBeTruthy();
  expect(validateInput("@@@@")).not.toBeTruthy();
});

// * Already tested, skipped tu avoid API calls and hit the max 1000 per day
test.skip("queries the OMDB API", async () => {
  const data = await queryTitle("mission");
  expect(data).toEqual(missionSearch);
});

test("queries the OMDB API", async () => {
  const data = await fetchTitle("mission");
  expect(data).toEqual(missionSearch);
});

test("renders the results in HTML", () => {
  expect(generateHTMLImagesLis(POSTERS_URI)).toEqual(IMAGES_LIST_HTML);
});

test("gets the list of posters URI from the query result", () => {
  expect(getPostersURI(missionSearch)).toEqual(POSTERS_URI);
});
