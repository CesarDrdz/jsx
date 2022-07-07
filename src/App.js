import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
       <h1>Hello Dojo</h1>
      <br />
      <h2>Things I need to do:</h2>
        </p>
        <p>
          <ul>
            <li>Learn React</li>
            <li>Learn JS better</li>
            <li>Learn to relax</li>
            <li>Enjoy coding dojo</li>
          </ul>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
