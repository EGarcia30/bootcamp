import { Note } from "./Note"
import { useState, useEffect } from "react"
import axios from 'axios'


export default function App(props) {
  const [notes, setNotes] = useState([]);
  const [newNotes, setNewNotes] = useState('');

  useEffect(() => {
    console.log("useEffect")
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => {
      setNotes(json);
    })
  }, [])
  const handleChange = (e) => {
    setNewNotes(e.target.value)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const noteToAddToState = {
      id: notes.length + 1,
      title: newNotes,
      body: new Date().toISOString(),
    };

    setNotes([...notes, noteToAddToState]);
    setNewNotes("");
  }


  return(
    <div>
      <ul>
        <h1>Notes</h1>
        {
          notes
          .map((note) => {
            return(
              <Note key={note.id} {...note} />
            )
          })
        }
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={newNotes}/>
        <button>
          Crear Nota
        </button>
      </form>
    </div>
  )
}
