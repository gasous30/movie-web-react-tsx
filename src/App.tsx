import React from "react";
import Movie from "./components/Movie";
import axios from "axios";

const testprops = {
  Title: "The Last: Naruto the Movie",
  Year: "2014",
  Rated: "TV-14",
  Released: "06 Oct 2015",
  Runtime: "112 min",
  Genre: "Animation, Action, Adventure",
  Director: "Tsuneo Kobayashi",
  Writer: "Masashi Kishimoto, Mauro Kyôzuka, Seth Walther",
  Actors: "Junko Takeuchi, Nana Mizuki, Jun Fukuyama",
  Plot: "Hinata Hyuga's younger sister has been kidnapped, so Naruto must do what he can to save her.",
  Language: "Japanese",
  Country: "Japan",
  Awards: "3 nominations",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BMjk1NzA4Njg4Ml5BMl5BanBnXkFtZTgwMDgxODQ5MzE@._V1_SX300.jpg",
  Ratings: [
    {
      Source: "Internet Movie Database",
      Value: "7.7/10",
    },
  ],
  Metascore: "N/A",
  imdbRating: "7.7",
  imdbVotes: "13,380",
  imdbID: "tt3717532",
  Type: "movie",
  DVD: "06 Oct 2015",
  BoxOffice: "$524,451",
  Production: "N/A",
  Website: "N/A",
  Response: "True",
};

const App = () => {
  return (
    <div>
      <Movie props={testprops}></Movie>
    </div>
  );
};
export default App;
