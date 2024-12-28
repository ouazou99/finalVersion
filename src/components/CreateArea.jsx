import React, { useState } from "react";

function CreateArea(props) {
  const [node, setNode] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNode((prev) => {
      return { ...prev, [name]: value };
    });
  }

  function clicked(event) {
    props.onAdd(node);

    setNode({ content: "", title: "" });
    event.preventDefault();
  }
  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="title"
          value={node.title}
          placeholder="Title"
        />
        <textarea
          onChange={handleChange}
          content={node.content}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={clicked}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
