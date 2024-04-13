import { useState } from 'react';

const CreateArea = ({ setNoteItem }) => {
    const [note, setNote] = useState({
        title: "",
        content: "",
    });

    const addItem = (e) => {
        e.preventDefault();
        setNoteItem((prev) => {
            return [...prev, note];
        });

        setNote({
            title: "",
            content: ""
        });
    }


    const handleChange = (e) => {
        setNote((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }

    return (
        <div>
            <form>
                <input
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
                <button onClick={addItem} >Add</button>
            </form>
        </div>
    )
}

export default CreateArea;
