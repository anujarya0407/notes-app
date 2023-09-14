const fs = require("fs");
const chalk = require("chalk");

const getNotes = () => "Your Notes...";

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateData = notes.find((note) => note.title === title);
  if (!duplicateData) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
  } else {
    console.log("Duplicate Title");
  }
};
const removeNote = (title) => {
  const tempDataArray = loadNotes();
  const filteredData = tempDataArray.filter((note) => note.title !== title);
  if (tempDataArray.length === filteredData.length) {
    console.log(chalk.red.inverse("No Note Removed"));
  } else {
    console.log(chalk.green.inverse("Note Removed", title));
  }
  saveNotes(filteredData);
};
const listNotes = () => {
  console.log(chalk.blue("Your Notes...."));
  loadNotes().map((note) => {
    console.log(note.title);
  });
};
const readNote = (title) => {
  const matchedData = loadNotes().find((note) => note.title === title);
  if (matchedData.length) {
    console.log(chalk.red("No Note Found"));
  } else {
    console.log(chalk.italic(matchedData.title));
    console.log(matchedData.body);
  }
};
const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};
const loadNotes = () => {
  try {
    const data = fs.readFileSync("notes.json").toString();
    return JSON.parse(data);
  } catch (e) {
    return [];
  }
};

module.exports = { getNotes, addNote, removeNote, listNotes, readNote };
