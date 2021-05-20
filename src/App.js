import { useState } from 'react';
import './App.css';
import Note from './Components/Note';
import NoteForm from './Components/NoteForm';
import bgImage from './img/background.jpg'

function App() {


  const [text, setText] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")

  const [notesList, setNotesList ] = useState([])


  function ChangeState(el){
    if(el.id === "text")
      setText(el.value)
    else if (el.id === "date")
      setDate(el.value)
    else if (el.id === "time")
      setTime(el.value)
  }

  function addNote(){
    const note =
    //  (<div key={text} className="note">
    //       <button>x</button>
    //       <p>
    //         {text}<br/>
    //         <span>{date} , {time} </span>
    //       </p>
    //   </div>)
    {
      text,
      time,
      date
    }

    //method 1
    // const newList = [...notesList]
    // newList.push(note)
    // setNotesList(newList)

    //method 2
    // const newList = [...notesList, note]
    // setNotesList(newList)

    //method 3
    setNotesList([...notesList, note])
  }

  function removeNote(text){
    const newList = notesList.filter((note) => note.text !== text)
    setNotesList(newList)
  }


  return (
    <div style ={{backgroundImage: "url(" + bgImage +")"}} className="App">

      {console.log(notesList)}
      <h1>My notes app</h1>

      <NoteForm ChangeState = {ChangeState} addNote={addNote} />


      <div className="notes">
        { notesList.map(
        ({text, date, time}, idx) =>
          <Note key={idx} text={text} date={date} time={time} idx={idx} removeNote={removeNote} />
       ) }
      </div>


    </div>
  );
}

export default App;
