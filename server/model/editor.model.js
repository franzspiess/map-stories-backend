const mongoose = require('mongoose');
const ObjectId = require('mongoose').Types.ObjectId;
const Schema = mongoose.Schema;

const editorSchema = new Schema({
  name: String,
  email: String,
});

const Editor = mongoose.model('Editor', editorSchema);

Editor.createEditor = async (editorData) => {
  const newEditor = new Editor ({
    name: editorData.name,
    email: editorData.email,
  });
  await newEditor.save();
};

Editor.searchEditors = async (query) => {
  const editors = await Editor.find({'name' : new RegExp(query, 'gi')});
  if (editors) {
    return editors;
  }
};

module.exports = Editor;
