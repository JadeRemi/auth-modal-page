//import logo from './logo.svg';
import './App.css';
import './css/Mobile.css';
import Auth from './components/Auth';
import Background from './components/Background';

function App() {
  return (
    <div className="App">
      {/*
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
          Learn React
        </a>
      </header>
      */}
      <Background />
      <Auth />
    </div>
  );
}

export default App;
