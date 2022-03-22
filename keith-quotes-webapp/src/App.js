import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="keith-logo.png" className="App-logo" alt="keith-logo" />
        <div>
          <button>
            <img
              src="Keith-husker.png"
              alt="keith-1"
              onClick={console.log("CLICKED")}
            />
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
