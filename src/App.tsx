import styles from "./App.module.scss";
import Title from "./components/Title/Title";
import Navbar from "./components/Navbar/Navbar";
import List from "./components/List/List";
import Wishlist from "./components/Wishlist/Wishlist";
import { useState } from "react";
import Popup from "./components/Popup/Popup";

const App = () => {
  const [wishlist, setWishlist] = useState<any>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [detailedid, setDetailedid] = useState<any>("");

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const detailedhandler = (event: any) => {
    event.preventDefault();
    setDetailedid(event.target.id);
    setIsOpen(!isOpen);
  };
  return (
    <div className={styles.Container}>
      <Navbar />
      <Title title="Top 10 Movies by IMdB" />
      <List setWishlist={setWishlist} setIsOpen={detailedhandler} />
      <Wishlist wishlist={wishlist} />
      {isOpen && (
        <Popup content={<div>{detailedid}</div>} handleClose={togglePopup} />
      )}
    </div>
  );
};
export default App;
