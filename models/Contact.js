const mongoose = require("mongoose");
const Rejesterd = new mongoose.Schema({
  item1: {
    type: String,
  },
  item2: {
    type: String,
  },
  item3: {
    type: String,
  },
  item4: {
    type: String,
  },
  watsapp: {
    type: String,
  },
});

const email =
  mongoose.models.Companrtty || mongoose.model("Companrtty", Rejesterd);

module.exports = email;
