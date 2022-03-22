import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="keith-logo.png" className="App-logo" alt="keith-logo" />
 
      </header>
      <body>
      <div id="quote_button_1">
          <button>
            <img
              src="Keith1.png"
              width="200"
              height="200"
              alt="keith-1"
              onClick={console.log("CLICKED")}
            />
          </button>
        </div>
        <div id="quote_button_2">
          <button>
            <img
              src="Keith2.png"
              width="200"
              height="200"
              alt="keith-2"
              onClick={console.log("CLICKED")}
            />
          </button>
        </div>
        <div id="quote_button_3">
          <button>
            <img
              src="Keith3.png"
              width="200"
              height="200"
              alt="keith-3"
              onClick={console.log("CLICKED")}
            />
          </button>
        </div>
        <div id="quote_button_4">
          <button>
            <img
              src="Keith4.png"
              width="200"
              height="200"
              alt="keith-4"
              onClick={console.log("CLICKED")}
            />
          </button>
        </div>
        <div id="quote_button_5">
          <button>
            <img
              src="Keith5.png"
              width="200"
              height="200"
              alt="keith-5"
              onClick={console.log("CLICKED")}
            />
          </button>
        </div>
      </body>
    </div>
  );
}

export default App;
