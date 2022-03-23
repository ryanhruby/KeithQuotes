import "./App.css";

function App() {
  const sendMessage1 = function sendMessage1() {
    fetch("http://localhost:3001/send/message", {
      method: "POST",
      headers: {
        "Content-Type": "string",
      },
      body: "Quote 1",
    }).then((res) => res.json());
  };

  const sendMessage2 = function sendMessage2() {
    fetch("http://localhost:3001/send/message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify("Quote 2"),
    }).then((res) => res.json());
  };

  const sendMessage3 = function sendMessage3() {
    fetch("http://localhost:3001/send/message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify("Quote 3"),
    }).then((res) => res.json());
  };

  const sendMessage4 = function sendMessage4() {
    fetch("http://localhost:3001/send/message", {
      method: "POST",
      headers: {
        "Content-Type": "string",
        Accept: "application/json",
      },
      body: JSON.stringify("Quote 4"),
    }).then((res) => res.json());
  };

  const sendMessage5 = function sendMessage5() {
    fetch("http://localhost:3001/send/message", {
      method: "POST",
      headers: {
        "Content-Type": "string",
        Accept: "application/json",
      },
      body: "Quote 5",
    }).then((res) => res.json());
  };

  return (
    <div className="App">
      <header className="App-header">
        <strong>Life Advice with Keith</strong>
      </header>
      <div>
        <img src="keith-logo.png" className="App-logo" alt="keith-logo" />

        <div id="button-row" className="button-row">
          <div id="quote_button_1" className="button-div">
            <button>
              <img
                src="keith-1.png"
                width="200"
                height="200"
                alt="keith-1"
                onClick={sendMessage1}
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
                onClick={() => console.log("Clicked button 2")}
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
                onClick={() => console.log("Clicked button 3")}
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
                onClick={() => console.log("Clicked button 4")}
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
                onClick={() => console.log("Clicked button 5")}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
