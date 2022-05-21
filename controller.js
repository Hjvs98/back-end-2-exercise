const house = require("./db.json");
const houseId = 4;

module.exports = {
  getHouses: (req, res) => res.status(200).send(house),

  deleteHouse: (req, res) => {
    let index = house.findIndex((elem) => elem.id === +req.params.id);
    house.splice(index, 1);
    res.status(200).send(house);
  },

  createHouse: (req, res) => {
    let { address, price, imageURL } = req.body;
    let newHouse = {
      id: houseId,
      address,
      price,
      imageURL,
    };
    house.push(newHouse);
    res.status(200).send(house);
    houseId++;
  },

  // updateHouse: (req, res) => {
  //   let { id } = req.params;
  //   let { type } = req.body;
  //   let index = house.findIndex((elem) => +elem.id === +id);
  //   if (type === "plus") {
  //     res.status(200).send(house[index].price + 10000);
  //   } else if (type === "minus") {
  //     res.status(200).send(house[index].price + 10000);
  //   }
  // },
};
