import React from "react";


function Note({ title, content, id, setNoteItem }) {

  const handleClick = () => {
    setNoteItem((prev) => {
      return prev.filter((note, index) =>{
        return (id !== index)
      })
    })
  }
  
  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={handleClick} >DELETE</button>
    </div>
  );
}

export default Note;
