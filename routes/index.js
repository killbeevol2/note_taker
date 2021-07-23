const path = require("path");
let notes = require("../db/db.json");
const fs = require("fs");
const { v4: uuid } = require("uuid");

module.exports = (app) => {
  // api routes
  app.get("/api/notes", (req, res) => {
    console.log(notes);
    res.json(notes);
  });
  app.post("/api/notes", (req, res) => {
    const note = req.body;
    note.id = uuid();
    notes.push(note);
    fs.writeFile("./db/db.json", JSON.stringify(notes), (err) => {
      if (err) throw err;
      res.json("New note!");
    });
  });
  app.delete("/api/notes/:id", (req, res) => {
    notes = notes.filter((note) => note.id !== req.params.id);
    fs.writeFile("./db/db.json", JSON.stringify(notes), (err) => {
      if (err) throw err;
      res.json("Note deleted!");
    });
  });
  // html routes
  app.use("/notes", (req, res) => {
    console.log("/notes");
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });
  app.use("*", (req, res) => {
    console.log("/");
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};
