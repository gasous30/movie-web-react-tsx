import React, { useEffect, useState } from "react";
import { FC } from "react";
import styles from "./List.module.scss";
import MovieTile from "../MovieTile/MovieTile";
import axios from "axios";

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

const List: FC = () => {
  const [listMovie, setListMovie] = useState<any>([]);

  useEffect(() => {
    topRatedMoviesID.map((movie) => {
      axios
        .get(`http://www.omdbapi.com/?apikey=1bee8ffd&i=${movie}`)
        .then((response) => {
          let x = response.data;
          setListMovie(...listMovie, x);
          listMovie.push(x);
          console.log(listMovie);
        })
        .catch((err) => console.log(err));
    });
  }, [listMovie]);

  return (
    <div className={styles.List}>
      {listMovie.map((movie: any) => {
        return <h1>brader</h1>;
      })}
    </div>
  );
};

export default List;
