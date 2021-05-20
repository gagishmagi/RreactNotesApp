import noteBg from '../img/note.png'

function Note({ text,date,time, removeNote }) {
    return(
    <div className="singleNote" style={{ backgroundImage: "url('"+noteBg+"')"}}>
        <button onClick={ () => removeNote(text) }>x</button>
        <p>{text}</p>
        <p>{date}</p>
        <p>{time}</p>
    </div>

    )
}

export default Note;
