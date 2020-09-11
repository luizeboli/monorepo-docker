const app = require("express")();
const cors = require("cors");
const log = require("@project/common");

app.use(cors());
app.get("/", (req, res) =>
  res.send({ text: "Hello sent from container on Heroku!!" })
);

app.listen(80, () => log(`Listening on 80...`));
