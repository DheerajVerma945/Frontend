import { useState } from "react";

function InputArea(props) {
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function addNote(evt) {
        evt.preventDefault();
        props.onAdd(note);
        setNote({
            title:"",
            content:""
        })
    }

    function handleChange(evt) {
        const { name, value } = evt.target;
        setNote((prevNote) => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    }

    return (
        <>
            <form>
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={note.title}
                    onChange={handleChange}
                />
                <textarea
                    name="content"
                    placeholder="Take a note..."
                    rows="3"
                    value={note.content}
                    onChange={handleChange}
                />
                <button onClick={addNote}>Add</button>
            </form>
            
        </>
    );
}

export default InputArea;
