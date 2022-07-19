import { Note } from "./Note"
import { useState, useEffect } from "react"
import { createNote, getAllNotes } from "./services/index"


export default function App(props) {
  const [notes, setNotes] = useState([]);
  const [newNotes, setNewNotes] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('')

  useEffect(() => {
    console.log("useEffect")
    setLoading(true)
    getAllNotes()
      .then((notes) => {
        setNotes(notes);
        setLoading(false)
      })
  }, []);
  const handleChange = (e) => {
    setNewNotes(e.target.value)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();

    const noteToAddToState = {
      title: newNotes,
      body: newNotes,
      userId: 1
    };
    
    createNote(noteToAddToState)
      .then(newNotes => {
        setNotes((prevNotes) => prevNotes.concat(newNotes))
      })
      .catch(e => {
        console.log(e);
        setError('La API ha petado')
      })

    setNewNotes("");
  }


  return(
    <div>
      <h1>Notes</h1>
      {loading ? 'Cargando..' : ''}
      {error ? error : ""}
      <ul>
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
