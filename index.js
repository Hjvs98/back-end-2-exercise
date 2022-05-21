const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

const houseController = require("./controller.js");

app.get("/api/houses", houseController.getHouses);
app.post("/api/houses", houseController.createHouse);
app.put("/api/houses/:id", houseController.updateHouse);
app.delete("/api/houses/:id", houseController.deleteHouse);

let port = 3005;
app.listen(port, () => console.log(`I'll be right by your side 'til ${port}`));
