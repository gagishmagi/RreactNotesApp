function NoteForm({ ChangeState, addNote}) {
    return (
        <div className="form">
            <div id="myForm">
                <textarea id="text" onChange={(e) => ChangeState(e.target)} cols="30" rows="10"></textarea>
                <input id="date" onChange={(e) => ChangeState(e.target)} type="date" />
                <input id="time" onChange={(e) => ChangeState(e.target)} type="time" />
                <button onClick={() => addNote()} >Add note</button>
            </div>
        </div>

    )
}

export default NoteForm;
