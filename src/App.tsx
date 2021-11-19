import styles from "./App.module.scss";
import Title from "./components/Title/Title";
import Navbar from "./components/Navbar/Navbar";
import List from "./components/List/List";

const App = () => {
  return (
    <div className={styles.Container}>
      <Navbar />
      <Title title="Top 10 Movies by IMdB" />
      <List />
    </div>
  );
};
export default App;
