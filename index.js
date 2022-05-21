const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

let port = 3005;
app.listen(port, () => console.log(`I'll be right by your side 'til ${port}`));
