import React from "react";

const Movie = (props: any) => {
  console.log(props);
  return (
    <div>
      <img src={props.Poster} alt={props.Title}></img>
      <p>{props.Title}</p>
      <p>{props.Year}</p>
    </div>
  );
};

export default Movie;
