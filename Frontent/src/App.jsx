import React, { useEffect, useState } from "react";
import axios from "axios";
const App = () => {
  const [notes, setnotes] = useState([]);

  function getnotes() {
    axios.get("http://localhost:3000/api/notes").then((response) => {
      setnotes(response.data.notes);
    });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    const { title, description } = e.target.elements;
    const response = await axios.post("http://localhost:3000/api/notes", {
      title: title.value,
      description: description.value,
    });

    alert(response.data.message);
    getnotes();
  }
  async function handleDelete(id){
    await axios.delete(`http://localhost:3000/api/notes/${id}`)
    .then((res)=>{
      alert(res.data.msg)
    })
    getnotes();
  }
  useEffect(() => {
    getnotes();
  }, []);

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="write the Tite" />
        <input
          type="text"
          name="description"
          placeholder="Write the description"
        />
        <button>Add</button>
      </form>
      <div className="notes">
        {notes.map((note, idx) => {
          return (
            <div key={idx} className="note">
              <h1>{note.title}</h1>
              <p>{note.description}</p>
              <button onClick={()=>{
                handleDelete(note._id);
              }}>Delete</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default App;
