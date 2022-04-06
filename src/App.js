import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="GOAT">Brian Phan</h1>
        <span className="clout">
          SWE @ <span className="bezos-600">Amazon,</span>{" "}
          <span className="tochi-600">Snackpass</span>
        </span>
        <div>
          <p className="soquirky">
            UC Berkeley Sophomore studying computer science.
          </p>
          <p className="soquirky">
            Maker of stuff. I cook the best teriyaki chicken in the game, and
            create the most fire copyright infringing Cal merch.
          </p>
          <p className="soquirky">I’m also really good at making apps.</p>
        </div>
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
        <h2 className="H-E-A-D-E-R">EXPERIENCE</h2>
        <h3 className="namerecognition">Snackpass</h3>
        <p className="corporateslavery">
          Worked on new accounting system (order management, restaurant
          reporting, CI/CD, prod/staging environments) that now processes $60M+
          a year.
        </p>
        <h2 className="H-E-A-D-E-R">PROJECTS</h2>
      </main>
    </div>
  );
}

export default App;
