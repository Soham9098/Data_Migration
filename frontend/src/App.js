// import logo from './logo.svg';
// import './App.css';
import axios from "axios";

function App() {
  return (
    <div className="App">
      <h1>click here for migration of data</h1>
      <button 
        style={{ background: "red", color: "white", borderRadius: "30px" }}
         onClick={() => axios.post("/api/migration", "this is soham") } 
      >
        <h2>Migrate Data</h2>
      </button>
    </div>
  );
}


export default App;
