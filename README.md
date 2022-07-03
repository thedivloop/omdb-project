# OMDB API Project

This is an End to end SPA project with OMDB API.

## 1. Todos

- [x] Check OMDB API
- [ ] Specify the app
- [ ] Design UI
- [ ] Unit tests (jest)
- [ ] E2E tests (puppeteer)

## 2. Specifications

### 2.1 User stories and requirements

1. As a user I can search for a movie by title in order to retrieve max 10 results
2. As a user I can reset the result in order to clear the search field and remove the results from the screen.
3. The SPA is to be responsive on phones and tablets.

### 2.2 Technology

The technology used will include:

- HMTL
- CSS
- Javascript in version 1
- ReactJS in version 2

The required packages are:

- nodeJS
- nodemon
- jest
- puppeeter
- axios
- dotenv

### 2.3 Implementation details

This is a simple JS stack, we will use nodeJS so that we can run the depencies packages on both Dev and production.
We will do `GET` requests with query parameters to submit a search (`?s=`). The API key is passed as a query parameter as well. For the `HTTP` requests axios will be used.
The user keys the title of the movie in the search field and clicks search to retrieve the results.
The result is then displayed through designed cards (max 10 by OMDB API limitation).
On top of the results is to be written "Results for 'mission' ".
The user can clear the result by clicking reset which will delete the search term in the search field and remove the result cards.

For responsiveness `flexbox` will be implemented as well as media queries as required.

JS uses HTML IDs handles and CSS uses class handles.

Clean code precepts are applied and functional programming is implemented. No class required in this code.

### 2.4 Development process

Design will be done through Figma using the UI/UX principles.

An NPM project will be initiated and the required packages installed.

TDD (test driven development) will be used at unit level to generate implementation code. For that jest with `--watch` and `--coverage` will be used.

## 4. Project Steps

### Check OMDB API

- [x] Review the OMDB API and the way it works.
- [x] Get an API key

### Specify the app

- [x] Define technology
- [x] Define implementation details

### Design UI

- [ ] Define the overall wireframe
- [ ] Define color palette
- [ ] Define screen areas
- [ ] Create a Prototype
- [ ] Add developer indications (sizes, position, colors)

### Unit tests (jest)

- [ ] Prepare stubs (download results for tests)
- [ ]

### E2E tests (puppeteer)

- [ ] Define DOM handles for E2E testing
- [ ] Create tests based on user stories

## 3. References

### 3.1 OMDB API

Uri: `http://www.omdbapi.com/`
Key: "ff436551"
Search parameter

### 3.2 Stubs

"http://www.omdbapi.com/?apikey=ff436551&s=mission"

```json
{
  "Search": [
    {
      "Title": "Mission: Impossible - Ghost Protocol",
      "Year": "2011",
      "imdbID": "tt1229238",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTY4MTUxMjQ5OV5BMl5BanBnXkFtZTcwNTUyMzg5Ng@@._V1_SX300.jpg"
    },
    {
      "Title": "Mission: Impossible",
      "Year": "1996",
      "imdbID": "tt0117060",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTc3NjI2MjU0Nl5BMl5BanBnXkFtZTgwNDk3ODYxMTE@._V1_SX300.jpg"
    },
    {
      "Title": "Mission: Impossible - Rogue Nation",
      "Year": "2015",
      "imdbID": "tt2381249",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BOTFmNDA3ZjMtN2Y0MC00NDYyLWFlY2UtNTQ4OTQxMmY1NmVjXkEyXkFqcGdeQXVyNTg4NDQ4NDY@._V1_SX300.jpg"
    },
    {
      "Title": "Mission: Impossible III",
      "Year": "2006",
      "imdbID": "tt0317919",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BOThhNTA1YjItYzk2Ny00M2Y1LWJlYWUtZDQyZDU0YmY5Y2M5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
    },
    {
      "Title": "Mission: Impossible II",
      "Year": "2000",
      "imdbID": "tt0120755",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BN2RkYWVkZDQtNTMxMi00NWQ4LWE2ODctNmQzOWM2NjQzYzdlXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg"
    },
    {
      "Title": "Mission: Impossible - Fallout",
      "Year": "2018",
      "imdbID": "tt4912910",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNjRlZmM0ODktY2RjNS00ZDdjLWJhZGYtNDljNWZkMGM5MTg0XkEyXkFqcGdeQXVyNjAwMjI5MDk@._V1_SX300.jpg"
    },
    {
      "Title": "Mission to Mars",
      "Year": "2000",
      "imdbID": "tt0183523",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNmMwOWFjMWQtZDAzNC00MGM3LWI0Y2YtNTUxN2NkYTM1NjE1XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg"
    },
    {
      "Title": "The Mission",
      "Year": "1986",
      "imdbID": "tt0091530",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ3MDczZmUtZmFlMy00YzFlLTlmNmMtYTE2NTZiNTJjM2UzL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
    },
    {
      "Title": "Asterix & Obelix: Mission Cleopatra",
      "Year": "2002",
      "imdbID": "tt0250223",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BM2Q3NmUzNjAtM2VjMS00MGU3LWE4YjEtZTM1NDM0YTdlOWRkXkEyXkFqcGdeQXVyODIyOTEyMzY@._V1_SX300.jpg"
    },
    {
      "Title": "Police Academy: Mission to Moscow",
      "Year": "1994",
      "imdbID": "tt0110857",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNmM5MzA3YTMtZDZkNy00YzNlLWFkZTUtZDJhYTNkMzk1ODNlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    }
  ],
  "totalResults": "1203",
  "Response": "True"
}
```
