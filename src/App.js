import "./App.css";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import CardList from "./components/CardList";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <CardList />
      <Navigation />
    </div>
  );
}

export default App;
