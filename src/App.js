import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Brian Phan</h1>
        <p>SWE @ Amazon, Snackpass</p>
        <p>UC Berkeley Sophomore studying computer science.</p>
        <p>
          Maker of stuff. I cook the best teriyaki chicken in the game, and
          create the most fire copyright infringing Cal merch.
        </p>
        <p>I’m also really good at making apps.</p>
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
      <main>
        <h2>Experience</h2>
        <h3>Snackpass</h3>
        <p>
          Worked on new accounting system (order management, restaurant
          reporting, CI/CD, prod/staging environments) that now processes $60M+
          a year.
        </p>
        <h2>Projects</h2>
      </main>
    </div>
  );
}

export default App;
