import React, { useEffect, useState } from "react";
import { FC } from "react";
import styles from "./List.module.scss";
import MovieTile from "../MovieTile/MovieTile";
import axios from "axios";

let y: any = [];
let topRatedMoviesID = [
  "tt0111161",
  "tt0068646",
  "tt0071562",
  "tt0468569",
  "tt0050083",
  "tt0108052",
  "tt0167260",
  "tt0110912",
  "tt0060196",
  "tt0120737",
];

topRatedMoviesID.map((e) => {
  fetch(`http://www.omdbapi.com/?apikey=1bee8ffd&i=${e}`)
    .then((res) => {
      return res.json();
    })
    .then((res) => y.push(res));
});

const List: FC = () => {
  const [isLoad, setIsLoad] = useState(false);
  const [listMovie, setListMovie] = useState<any>([y]);

  // const getMovieById = (id: string) => {
  //   fetch(`http://www.omdbapi.com/?apikey=1bee8ffd&i=${id}`)
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((result) => {
  //       console.log(result);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  return <div className={styles.List}>{listMovie.length}</div>;
};

export default List;
