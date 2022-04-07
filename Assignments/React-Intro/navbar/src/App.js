import logo from './logo.svg';
import './App.css';

function App() {

  const links = ["Services", "Projects", "About"];
  return (
    <div className="App">
      <Logo />
      <div>
        {
          links.map(e => {
            return <Links link={e} />
          })
        }
      </div>
      <Button />
    </div>
  );
}

// Component functions
function Logo(props) {
  return <h3>LOGOBAKERY</h3>
}

function Links(props) {
  return <a href="">{props.link}</a>
}

function Button(props) {
  return <button>Contact</button>
}

export default App;
