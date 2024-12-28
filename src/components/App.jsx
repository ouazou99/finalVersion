import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addList(nod) {
    setNotes((prev) => {
      return [...prev, nod];
    });
  }
  function deletNode(id) {
    setNotes((prev) => {
      return prev.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addList} />
      {/* <Note
        key={0}
        id={0}
        onDelete={deletNode}
        title="add title"
        content="add content"
      /> */}
      {notes.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            onDelete={deletNode}
            title={note.title}
            content={note.content}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
