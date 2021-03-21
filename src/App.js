import logo from './logo.svg';
import './App.css';
import moment from "moment";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a



          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
                    {moment("20010704T120856").format("MMMM Do YYYY")}{" "}
                    fashdfksadjg

        </a>
      </header>
    </div>
  );
}

export default App;
