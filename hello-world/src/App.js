import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';

function App() {
  return (
    <div className="App">
      <Greet name="Anil" animename="Pokemon"/>
      <p>These are Nerds</p>
      <Greet name="Nikhil" animename="Naruto"/>
      <button>Action</button>
      <Greet name="Sai Charan" animename="One Piece"/>
      <Greet name="Venkatesh" animename="DBZ"/>
      <Welcome name="Anil" animename="Pokemon"/>
      <Welcome name="Nikhil" animename="Naruto"/>
      <Welcome name="Sai Charan" animename="One Piece"/>
      {/* <Hello/> */}
    </div>
  );
}

export default App;