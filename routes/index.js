const path = require("path");

module.exports = (app) => {
  // api routes
  app.get("/api/notes", (req, res) => {});
  app.post("/api/notes", (req, res) => {});
  app.delete("/api/notes/:id", (req, res) => {});
  // html routes
  app.use("/notes", (req, res) => {
    console.log("/notes");
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });
  app.use("/", (req, res) => {
    console.log("/");
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};
