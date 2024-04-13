import { useState } from "react";
import Header from "../src/components/Header";
import CreateArea from "./components/CreateArea";
import Note from "./components/Note";
import Footer from "./components/Footer";

function App() {
  const [noteItem, setNoteItem] = useState([]);

  return (
    <div>
      <Header />
      <CreateArea
        setNoteItem={setNoteItem}
        />
      {noteItem.map((note, index) =>
        <Note
        key={index}
        id={index}
        title={note.title}
        content={note.content}
        setNoteItem={setNoteItem}
        />
      )}

      <Footer />
    </div>
  );
}

export default App;
