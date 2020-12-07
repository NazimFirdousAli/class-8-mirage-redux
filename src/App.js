import { useEffect, useState } from 'react';
import './App.css';
import { makeServer } from './server.js';


function App() {

  const [books, setBooks] = useState([{}]);
  useEffect(() => {
    setInterval(() => {
      fetch("/api/books")
        .then(res => res.json())
        .then(data => {
          console.log(data);
          setBooks(data);
        })
    }, 2000)
  }, [])

  const addBook = () => {
    const title = prompt("Enter Book Name");
    const author = prompt("Enter Author Name");
    console.log(title, author);

    if(!title || !author)
      return false;

    fetch('/api/add', {
      method: "POST",
      body: JSON.stringify({ title, author })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })

  }

  if (!books.length)
    return (<h2>Loading...</h2>)
  else
    return (
      <div className="App">
        <h1>Hello World Mirage</h1>
        <h2>Library</h2>
        <table border="1" >
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
            </tr>
          </thead>
          <tbody>
            {books.map((booksObj, ind) => {
              return (
                <tr key={ind}>
                  <td>{booksObj.title}</td>
                  <td>{booksObj.author}</td>
                </tr>
              )
            })}
          </tbody>
        </table><br />
        <button onClick={addBook}>Add Book</button>
      </div>
    );
}
makeServer();
export default App;
