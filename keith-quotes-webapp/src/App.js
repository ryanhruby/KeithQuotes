import "./App.css";

function sendMessage(message) {
  // var twilio = require("twilio");

  // var client = new twilio("ACf7aabced2a6fd9e9c72f2b57d8127981", "f42ada5e2861d45d77dd874ddd2f6554");

  // client.messages
  // .create({
  //   to: '+14027696011',
  //   from: '+12087470934',
  //   body: message
  // })
  // .catch(error => console.error(error));
}

function App() {
  return (
    <div className="App">
      <header className="App-header"> 
        <strong>Life Advice with Keith</strong>
      </header>
      <body>
        <img src="keith-logo.png" className="App-logo" alt="keith-logo" />

        <div id="button-row" class="button-row">
          <div id="quote_button_1" class="button-div">
            <button>
              <img
                src="keith-1.png"
                width="200"
                height="200"
                alt="keith-1"
                onClick={sendMessage("test")}
              />
            </button>
          </div>
          <div id="quote_button_2" class="button-div">
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
          <div id="quote_button_3" class="button-div">
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
          <div id="quote_button_4" class="button-div">
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
          <div id="quote_button_5" class="button-div">
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
