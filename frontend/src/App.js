// import logo from './logo.svg';
// import './App.css';
import axios from "axios";

function App() {

  const doMigration=()=>{
    alert("migration successfull");
    axios.post("/api/migration", "this is soham");
  }
  return (
    <div className="App">
      <h1>click here for migration of data</h1>
      <button 
        style={{ background: "red", color: "white", borderRadius: "30px" }}
         onClick={ doMigration} 
      >
        <h2>Migrate Data</h2>
      </button>
    </div>
  );
}


export default App;
