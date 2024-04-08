import React from 'react'
import notes from '../constants/notes';
import Card from './Card';

function Note() {
  return (
    <div className='note'>
      {notes.map(noteItems => 
        <Card
        key={noteItems.id}
        title={noteItems.title}
        content={noteItems.content}
      />
      )}

    </div>
  )
}

export default Note;