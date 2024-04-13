import { useState } from 'react';
import AddTaskIcon from '@mui/icons-material/AddTask';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

const CreateArea = ({ setNoteItem }) => {
    const [show, setShow] = useState(false);
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
            <form className='create-note'>
                {
                    show && <input
                        name="title"
                        placeholder="Title"
                        value={note.title}
                        onChange={handleChange}
                    />
                }

                <textarea
                    name="content"
                    placeholder="Take a note..."
                    rows={show ? 3 : 1}
                    value={note.content}
                    onChange={handleChange}
                    onClick={() => {
                        setShow(true);
                    }}
                />

                <Zoom in={show}>
                    <Fab onClick={addItem} >
                        <AddTaskIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    )
}

export default CreateArea;
