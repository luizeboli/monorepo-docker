const app = require("express")();
const cors = require("cors");
const log = require("@project/common");

app.use(cors());
app.get("/", (req, res) => res.send({ text: "Hello Word" }));

app.listen(3333, () => log(`Listening on 3333...`));
