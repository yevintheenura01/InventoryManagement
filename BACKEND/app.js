//pswrd= fsJOGWSDQ18jlrVg

const express = require("express");
const mongoose = require("mongoose");
const Vroute = require("./Routes/VarietyRoute");
const Proute = require("./Routes/PaddyRoute");
const Rroute = require("./Routes/RiceRoute");
const LocRoute = require("./Routes/LocationRoute");
const StoringRoute = require("./Routes/StoringRoute");
const PaddyWarehouse = require("./Routes/PaddyWarehouseRoute");
const InstructionRoute = require("./Routes/InstructionRoute");

const app = express();
const cors = require("cors");
require("dotenv").config();
//app.use(bodyParser.json()); // Parse JSON bodies

const corsOptions = {
  origin: "http://localhost:3000" // frontend URI (ReactJS)
}

//middleware
app.use(express.json());
app.use(cors(corsOptions));
app.use("/varieties", Vroute);
app.use("/paddy", Proute);
app.use("/rice", Rroute);
app.use("/location", LocRoute);
app.use("/storingInst", StoringRoute);
app.use("/relationship", PaddyWarehouse);
app.use("/api",InstructionRoute);

mongoose
  .connect(
    process.env.MONGODB_URI
  )
  .then(() => console.log("Connected to MongoDB"))
  .then(() => {
    const PORT = process.env.PORT || 8000
    app.listen(PORT);
  })
  .catch((err) => console.log);