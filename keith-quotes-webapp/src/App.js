import "./App.css";

function App() {
  const sendMessage1 = function sendMessage1() {
    fetch("http://localhost:3001/send/message1", {
      method: "POST",
      headers: {
        "Content-Type": "text",
      },
    }).then((res) => res.json());
  };

  const sendMessage2 = function sendMessage2() {
    fetch("http://localhost:3001/send/message2", {
      method: "POST",
      headers: {
        "Content-Type": "text",
      },
    }).then((res) => res.json());
  };

  const sendMessage3 = function sendMessage3() {
    fetch("http://localhost:3001/send/message3", {
      method: "POST",
      headers: {
        "Content-Type": "text",
      },
    }).then((res) => res.json());
  };

  const sendMessage4 = function sendMessage4() {
    fetch("http://localhost:3001/send/message4", {
      method: "POST",
      headers: {
        "Content-Type": "text",
      },
    }).then((res) => res.json());
  };

  const sendMessage5 = function sendMessage5() {
    fetch("http://localhost:3001/send/message5", {
      method: "POST",
      headers: {
        "Content-Type": "text",
      },
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
                onClick={sendMessage2}
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
                onClick={sendMessage3}
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
                onClick={sendMessage4}
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
                onClick={sendMessage5}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
