import React, { useEffect, useState } from "react";
import { FC } from "react";
import styles from "./List.module.scss";
import MovieTile from "../MovieTile/MovieTile";

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

const List: FC<any> = ({ setWishlist }: { setWishlist: any }) => {
  const [isLoad, setIsLoad] = useState(false);
  const [listMovie, setListMovie] = useState<any>([]);

  const [clicked, setClicked] = useState<any>(true);
  const addWishlist = (event: any) => {
    event.preventDefault();
    setClicked(!clicked);
    if (clicked) {
      (
        document.getElementById(event.target.id) as ElementCSSInlineStyle
      ).style.background = "rgb(255, 72, 0)";
      setWishlist((wishlist: any) => [...wishlist, event.target.id]);
    } else {
      (
        document.getElementById(event.target.id) as ElementCSSInlineStyle
      ).style.background = "rgb(211, 169, 153)";
    }
  };

  useEffect(() => {
    const getMovieById = async () => {
      const list = await topRatedMoviesID.map(async (id) => {
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=1bee8ffd&i=${id}`
        );
        const movie = await res.json();
        return movie;
      });
      Promise.all(list).then((values) => {
        values.map((value) => {
          listMovie.push(value);
        });
        setIsLoad(true);
      });
      return list;
    };

    getMovieById();
  }, []);

  return (
    <div className={styles.List} id="List">
      {listMovie.map((movie: any) => {
        return (
          <MovieTile
            props={movie}
            wishlisthandler={addWishlist}
            buttonname="Add to wishlist"
          />
        );
      })}
    </div>
  );
};

export default List;
