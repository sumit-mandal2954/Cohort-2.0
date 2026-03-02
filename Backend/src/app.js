const express = require("express");

const app = express();
const path  = require('path');
const cors = require('cors');
app.use(express.json());
app.use(cors());
app.use(express.static("./public"))

const notesModel = require("./models/notes.model");

// POST API //

app.post("/api/notes", async (req, res) => {
  const { title, description } = req.body;

  const note = await notesModel.create({
    title,
    description,
  });

  res.status(201).json({
    message: "Created note",
    note,
  });
});

//GET api

app.get("/api/notes", async (req, res) => {
  const notes = await notesModel.find();
  res.status(200).json({
    notes,
  });
});

//GET API

app.delete("/api/notes/:id", async (req, res) => {
  const id = req.params.id;
  await notesModel.findByIdAndDelete(id);

  res.status(200).json({
    msg: "Deleted",
  });
});

//Patch APi

app.patch("/api/notes/:id", async (req, res) => {
  const id = req.params.id;
  const {description} = req.body;
  await notesModel.findByIdAndUpdate(id, { description });

  res.status(200).json({
    message: "Updated Successfully",
  });
});


app.use('*name',(req,res)=>{     //wildCard
 res.sendFile(path.join(__dirname, ".." ,"/public/index.html"))
})

module.exports = app;
