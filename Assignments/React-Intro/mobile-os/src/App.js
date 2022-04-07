import logo from './logo.svg';
import './App.css';

function App() {
  const os = ["Android", "Blackberry", "iphone", "Windows Phone"];
  const Manufacturers = ["Samsung", "HTC", "Micromax", "Apple"]
  return (
    <div>
      <h2> 
        Mobile Operating System :
      </h2>
      <ul>
         {os.map (e => {
            return <li><Mobile skill= {e}/></li>
          })}
      </ul>

      <h2> 
        Mobile Manufacturers :
      </h2>
      <ul>
         {Manufacturers.map (e => {
            return <li><Mobile skill= {e}/></li>
          })}
      </ul>

    </div>

  );
}

// Component
function Mobile(props) {
  return props.skill
}

export default App;
