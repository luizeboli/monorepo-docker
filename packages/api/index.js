const app = require("express")();
const cors = require("cors");

app.use(cors());
app.get("/", (req, res) =>
  res.send({ text: "Hello sent from container on Heroku!!" })
);

app.listen(process.env.PORT || 80, () =>
  console.log(`Listening on ${process.env.PORT || 80}...`)
);
