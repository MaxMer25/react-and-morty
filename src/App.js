import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <header>
        <h1>React and Morty!</h1>
        <nav>
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Rick</a>
            </li>
            <li>
              <a href="">Morty</a>
            </li>
          </ul>
        </nav>
        <div className="Card">
          <img
            src="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
            alt="Morty"
          />
          <p>Morty Smith</p>
        </div>
      </header>
    </div>
  );
}

export default App;
