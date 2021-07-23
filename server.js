const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static("public"));

require("./routes")(app);

app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
});
