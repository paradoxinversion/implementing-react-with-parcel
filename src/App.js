import React from "react";
import WordReveal from "./WordReveal";
import "./style.css";

class App extends React.Component {
  state = {
    yourName: "Jedai"
  };

  async asyncFunction() {
    await true;
    return;
  }
  render() {
    return (
      <main>
        <p>Hello {this.state.yourName}</p>
        <WordReveal str="NotSoSecret" />
      </main>
    );
  }
}

export default App;
