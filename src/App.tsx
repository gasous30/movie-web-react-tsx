import styles from "./App.module.scss";
import Title from "./components/Title/Title";
import Navbar from "./components/Navbar/Navbar";
import List from "./components/List/List";
import Wishlist from "./components/Wishlist/Wishlist";
import { useState } from "react";

const App = () => {
  const [wishlist, setWishlist] = useState<any>([]);
  return (
    <div className={styles.Container}>
      <Navbar />
      <Title title="Top 10 Movies by IMdB" />
      <List setWishlist={setWishlist} />
      <Wishlist wishlist={wishlist} />
    </div>
  );
};
export default App;
