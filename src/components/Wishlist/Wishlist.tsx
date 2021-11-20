import styles from "./Wishlist.module.scss";
import { FC, useEffect, useState } from "react";
import Title from "../Title/Title";
import MovieTile from "../MovieTile/MovieTile";

const Wishlist: FC<any> = ({ wishlist }: { wishlist: any }) => {
  const [listMovie2, setListMovie] = useState<any>([]);
  const [isLoad, setIsLoad2] = useState(false);
  const [isClicked, setIsClicked] = useState(true);

  useEffect(() => {
    const getMovieById = async () => {
      const list = await wishlist.map(async (id: any) => {
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=1bee8ffd&i=${id}`
        );
        const movie = await res.json();
        return movie;
      });
      Promise.all(list).then((values) => {
        values.map((value) => {
          setListMovie((listMovie2: any) => [...listMovie2, value]);
        });
        setIsLoad2(!isLoad);
      });
      return list;
    };

    getMovieById();
  }, [wishlist]);

  const deletewishlist = (event: any) => {
    event.preventDefault();
    const deletemovie = listMovie2.findIndex(
      (x: any) => x.imdbID == event.target.id
    );
    listMovie2.splice(deletemovie, 1);
    console.log(listMovie2);
    setIsClicked(!isClicked);
  };

  return (
    <div className={styles.Wishlist} id="Wishlist">
      <Title title="Your Wishlist" />
      {listMovie2.map((e: any) => {
        return (
          <MovieTile
            props={e}
            buttonname="Delete from wishlist"
            wishlisthandler={deletewishlist}
          />
        );
      })}
    </div>
  );
};

export default Wishlist;
