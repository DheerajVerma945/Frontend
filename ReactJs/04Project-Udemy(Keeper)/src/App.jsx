import { useState } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Note from '../Components/Note'
import './App.css'
import notes from './notes'
import InputArea from '../Components/inputArea'
function App() {

    const[notes,setNotes] = useState([]);

    function addNote(newNote){
      setNotes( (prevNote)=> {
        return [...prevNote,newNote]
      })
    }

    function deleteNote(id){
      setNotes(prevNotes => {
        return prevNotes.filter((noteItem, index) => {
          return index !== id;
        });
      });
    }
  return (
    <>
      <Header />
      
      <InputArea onAdd={addNote}/>

      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </>
  )
}

export default App
