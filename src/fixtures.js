const missionSearch = {
  Search: [
    {
      Title: "Mission: Impossible - Ghost Protocol",
      Year: "2011",
      imdbID: "tt1229238",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTY4MTUxMjQ5OV5BMl5BanBnXkFtZTcwNTUyMzg5Ng@@._V1_SX300.jpg",
    },
    {
      Title: "Mission: Impossible",
      Year: "1996",
      imdbID: "tt0117060",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTc3NjI2MjU0Nl5BMl5BanBnXkFtZTgwNDk3ODYxMTE@._V1_SX300.jpg",
    },
    {
      Title: "Mission: Impossible - Rogue Nation",
      Year: "2015",
      imdbID: "tt2381249",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOTFmNDA3ZjMtN2Y0MC00NDYyLWFlY2UtNTQ4OTQxMmY1NmVjXkEyXkFqcGdeQXVyNTg4NDQ4NDY@._V1_SX300.jpg",
    },
    {
      Title: "Mission: Impossible III",
      Year: "2006",
      imdbID: "tt0317919",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOThhNTA1YjItYzk2Ny00M2Y1LWJlYWUtZDQyZDU0YmY5Y2M5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    },
    {
      Title: "Mission: Impossible II",
      Year: "2000",
      imdbID: "tt0120755",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BN2RkYWVkZDQtNTMxMi00NWQ4LWE2ODctNmQzOWM2NjQzYzdlXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
    },
    {
      Title: "Mission: Impossible - Fallout",
      Year: "2018",
      imdbID: "tt4912910",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNjRlZmM0ODktY2RjNS00ZDdjLWJhZGYtNDljNWZkMGM5MTg0XkEyXkFqcGdeQXVyNjAwMjI5MDk@._V1_SX300.jpg",
    },
    {
      Title: "Mission to Mars",
      Year: "2000",
      imdbID: "tt0183523",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNmMwOWFjMWQtZDAzNC00MGM3LWI0Y2YtNTUxN2NkYTM1NjE1XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
    },
    {
      Title: "The Mission",
      Year: "1986",
      imdbID: "tt0091530",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjQ3MDczZmUtZmFlMy00YzFlLTlmNmMtYTE2NTZiNTJjM2UzL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    },
    {
      Title: "Asterix & Obelix: Mission Cleopatra",
      Year: "2002",
      imdbID: "tt0250223",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BM2Q3NmUzNjAtM2VjMS00MGU3LWE4YjEtZTM1NDM0YTdlOWRkXkEyXkFqcGdeQXVyODIyOTEyMzY@._V1_SX300.jpg",
    },
    {
      Title: "Police Academy: Mission to Moscow",
      Year: "1994",
      imdbID: "tt0110857",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNmM5MzA3YTMtZDZkNy00YzNlLWFkZTUtZDJhYTNkMzk1ODNlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    },
  ],
  totalResults: "1203",
  Response: "True",
};

const POSTERS_URI = [
  "https://m.media-amazon.com/images/M/MV5BMTY4MTUxMjQ5OV5BMl5BanBnXkFtZTcwNTUyMzg5Ng@@._V1_SX300.jpg",
  "https://m.media-amazon.com/images/M/MV5BMTc3NjI2MjU0Nl5BMl5BanBnXkFtZTgwNDk3ODYxMTE@._V1_SX300.jpg",
  "https://m.media-amazon.com/images/M/MV5BOTFmNDA3ZjMtN2Y0MC00NDYyLWFlY2UtNTQ4OTQxMmY1NmVjXkEyXkFqcGdeQXVyNTg4NDQ4NDY@._V1_SX300.jpg",
  "https://m.media-amazon.com/images/M/MV5BOThhNTA1YjItYzk2Ny00M2Y1LWJlYWUtZDQyZDU0YmY5Y2M5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  "https://m.media-amazon.com/images/M/MV5BN2RkYWVkZDQtNTMxMi00NWQ4LWE2ODctNmQzOWM2NjQzYzdlXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
  "https://m.media-amazon.com/images/M/MV5BNjRlZmM0ODktY2RjNS00ZDdjLWJhZGYtNDljNWZkMGM5MTg0XkEyXkFqcGdeQXVyNjAwMjI5MDk@._V1_SX300.jpg",
  "https://m.media-amazon.com/images/M/MV5BNmMwOWFjMWQtZDAzNC00MGM3LWI0Y2YtNTUxN2NkYTM1NjE1XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
  "https://m.media-amazon.com/images/M/MV5BMjQ3MDczZmUtZmFlMy00YzFlLTlmNmMtYTE2NTZiNTJjM2UzL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  "https://m.media-amazon.com/images/M/MV5BM2Q3NmUzNjAtM2VjMS00MGU3LWE4YjEtZTM1NDM0YTdlOWRkXkEyXkFqcGdeQXVyODIyOTEyMzY@._V1_SX300.jpg",
  "https://m.media-amazon.com/images/M/MV5BNmM5MzA3YTMtZDZkNy00YzNlLWFkZTUtZDJhYTNkMzk1ODNlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
];

const IMAGES_LIST_HTML = `<img src="https://m.media-amazon.com/images/M/MV5BMTY4MTUxMjQ5OV5BMl5BanBnXkFtZTcwNTUyMzg5Ng@@._V1_SX300.jpg" alt="" /><img src="https://m.media-amazon.com/images/M/MV5BMTc3NjI2MjU0Nl5BMl5BanBnXkFtZTgwNDk3ODYxMTE@._V1_SX300.jpg" alt="" /><img src="https://m.media-amazon.com/images/M/MV5BOTFmNDA3ZjMtN2Y0MC00NDYyLWFlY2UtNTQ4OTQxMmY1NmVjXkEyXkFqcGdeQXVyNTg4NDQ4NDY@._V1_SX300.jpg" alt="" /><img src="https://m.media-amazon.com/images/M/MV5BOThhNTA1YjItYzk2Ny00M2Y1LWJlYWUtZDQyZDU0YmY5Y2M5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg" alt="" /><img src="https://m.media-amazon.com/images/M/MV5BN2RkYWVkZDQtNTMxMi00NWQ4LWE2ODctNmQzOWM2NjQzYzdlXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg" alt="" /><img src="https://m.media-amazon.com/images/M/MV5BNjRlZmM0ODktY2RjNS00ZDdjLWJhZGYtNDljNWZkMGM5MTg0XkEyXkFqcGdeQXVyNjAwMjI5MDk@._V1_SX300.jpg" alt="" /><img src="https://m.media-amazon.com/images/M/MV5BNmMwOWFjMWQtZDAzNC00MGM3LWI0Y2YtNTUxN2NkYTM1NjE1XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg" alt="" /><img src="https://m.media-amazon.com/images/M/MV5BMjQ3MDczZmUtZmFlMy00YzFlLTlmNmMtYTE2NTZiNTJjM2UzL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg" alt="" /><img src="https://m.media-amazon.com/images/M/MV5BM2Q3NmUzNjAtM2VjMS00MGU3LWE4YjEtZTM1NDM0YTdlOWRkXkEyXkFqcGdeQXVyODIyOTEyMzY@._V1_SX300.jpg" alt="" /><img src="https://m.media-amazon.com/images/M/MV5BNmM5MzA3YTMtZDZkNy00YzNlLWFkZTUtZDJhYTNkMzk1ODNlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg" alt="" />`;

module.exports = { missionSearch, POSTERS_URI, IMAGES_LIST_HTML };
