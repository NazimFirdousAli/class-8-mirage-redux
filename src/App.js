import { useEffect } from 'react';
import './App.css';
import { makeServer } from './server.js';

function App() {

  useEffect(() => {
    fetch("/api/books")
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })

  }, [])
  return (
    <div className="App">
      <h1>Hello World Mirage</h1>
    </div>
  );
}
makeServer();
export default App;
