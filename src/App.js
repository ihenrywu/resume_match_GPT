import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            Web version of Resume Match is coming soon.
        </p>

        <p>
            GPT version is available now, and it is free!
        </p>

        <a
          className="App-link"
          href="https://chat.openai.com/g/g-HvSJFTG32-resume-match"
          target="_blank"
          rel="noopener noreferrer"
        >
          click here 
        </a>
      </header>
    </div>
  );
}

export default App;
