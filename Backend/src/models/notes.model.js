const mongoose = require('mongoose');

const notes = new mongoose.Schema({
  title:String,
  description:String,
})

const noteModel = mongoose.model('Notes',notes);

module.exports = noteModel;