import "./App.css";

function App() {

  return (
    <div className="App">
      <header className="App-header"> 
        <strong>Life Advice with Keith</strong>
      </header>
      <body>
        <img src="keith-logo.png" className="App-logo" alt="keith-logo" />

        <div id="button-row" className="button-row">
          <div id="quote_button_1" className="button-div">
            <button>
              <img
                src="keith-1.png"
                width="200"
                height="200"
                alt="keith-1"
                onClick={console.log("CLICKED")}
              />
            </button>
          </div>
          <div id="quote_button_2" className="button-div">
            <button>
              <img
                src="keith-2.png"
                width="200"
                height="200"
                alt="keith-2"
                onClick={console.log("CLICKED")}
              />
            </button>
          </div>
          <div id="quote_button_3" className="button-div">
            <button>
              <img
                src="keith-3.png"
                width="200"
                height="200"
                alt="keith-3"
                onClick={console.log("CLICKED")}
              />
            </button>
          </div>
          <div id="quote_button_4" className="button-div">
            <button>
              <img
                src="keith-4.png"
                width="200"
                height="200"
                alt="keith-4"
                onClick={console.log("CLICKED")}
              />
            </button>
          </div>
          <div id="quote_button_5" className="button-div">
            <button>
              <img
                src="keith-5.png"
                width="200"
                height="200"
                alt="keith-5"
                onClick={console.log("CLICKED")}
              />
            </button>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
