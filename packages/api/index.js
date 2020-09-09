const app = require("express")();
const cors = require("cors");

app.use(cors());
app.get("/", (req, res) => res.send({ text: "Hello Word" }));

app.listen(3000, () => console.log("Listening on 3000..."));
