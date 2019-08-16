const { Component } = React;
const { render } = ReactDOM;

const contacts = [
  { id: 1, name: "Leanne Graham" },
  { id: 2, name: "Ervin Howell" },
  { id: 3, name: "Clementine Bauch" },
  { id: 4, name: "Patricia Lebsack" }
];

class Listcontainer extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React Contact Manager</h1>
        </header>

      </div>
    );
  }
}

const element = <h1>Hello, world</h1>;
ReactDOM.render(element, document.getElementById('root'));
