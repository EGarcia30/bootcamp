import { Note } from "./Note"
import { useState } from "react"


export default function App(props) {
  const [notes, setNotes] = useState(props.notes);
  const [newNotes, setNewNotes] = useState('');
  const [showAll, setShowAll] = useState(true)

  const handleChange = (e) => {
    setNewNotes(e.target.value)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const noteToAddToState = {
      id: notes.length + 1,
      content: newNotes,
      date: new Date().toISOString(),
      important: Math.random() < 0.5
    };

    setNotes([...notes, noteToAddToState]);
    setNewNotes("");
  }

  const handleImportant = () => {
    setShowAll(() => !showAll);
  }

  return(
    <div>
      <ul>
        <h1>Notes</h1>
        <button onClick={handleImportant}>{showAll ? 'show only important' : 'show All'}</button>
        {
          notes
          .filter((note) => {
            if(showAll === true) return true;
            return note.important === true;
          })
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
