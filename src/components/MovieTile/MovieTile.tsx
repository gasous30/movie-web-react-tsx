import React, { useState } from "react";
import styles from "./MovieTile.module.scss";

const MovieTile = ({ props }: { props: any }) => {
  const [wishlist, setWishlist] = useState<any>([]);
  const [clicked, setClicked] = useState<any>(true);
  const addWishlist = (event: any) => {
    event.preventDefault();
    setClicked(!clicked);
    if (clicked) {
      (
        document.getElementById(event.target.id) as ElementCSSInlineStyle
      ).style.background = "yellow";
      wishlist.push(event.target.id);
    } else {
      (
        document.getElementById(event.target.id) as ElementCSSInlineStyle
      ).style.background = "rgb(211, 169, 153)";
    }
  };

  return (
    <div key={props.imdbID} className={styles.MovieTile}>
      <img src={props.Poster} alt={props.Title}></img>
      <div className={styles.TextContainer}>
        <p className={styles.Title}>{props.Title}</p>
        <p className={styles.Rated}>{props.Rated}</p>
        <p className={styles.Year}>{props.Year}</p>
        <p className={styles.Plot}>{props.Plot}</p>
      </div>
      <div className={styles.ButtonContainer}>
        <a id={props.imdbID} onClick={addWishlist}>
          Add to wishlist
        </a>
        <a id={props.imdbID}>Detail Movie</a>
      </div>
    </div>
  );
};

export default MovieTile;
