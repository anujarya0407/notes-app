const validator = require("validator");
const chalk = require("chalk");
const yargs = require("yargs");
const notes = require(`./notes.js`);

yargs.command({
  command: "add",
  builder: {
    title: {
      demandOption: true,
      type: "string",
      describe: "Note Title",
    },
    body: {
      demandOption: true,
      type: "string",
      describe: "Note Body",
    },
  },
  describe: "Add a note",
  handler: (argv) => {
    notes.addNote(argv.title, argv.body);
  },
});
yargs.command({
  command: "remove",
  builder: {
    title: {
      demandOption: true,
      type: "string",
      describe: "Note Title",
    },
  },
  describe: "remove a note",
  handler: (argv) => {
    notes.removeNote(argv.title);
  },
});
yargs.command({
  command: "list",
  describe: "Listing notes",
  handler: () => {
    notes.listNotes();
  },
});
yargs.command({
  command: "read",
  describe: "Read notes",
  builder: {
    title: {
      demandOption: true,
      type: "string",
      describe: "Note Title",
    },
  },
  handler: (argv) => {
    notes.readNote(argv.title);
  },
});

yargs.parse();
