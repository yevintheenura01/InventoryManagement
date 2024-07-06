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
//app.use(bodyParser.json()); // Parse JSON bodies

app.use(cors(
  {
    origin: [""],
    methods: ["POST", "GET"],
    credentials: true,

  }
));
//middleware
app.use(express.json());
app.use(cors());
app.use("/varieties", Vroute);
app.use("/paddy", Proute);
app.use("/rice", Rroute);
app.use("/location", LocRoute);
app.use("/storingInst", StoringRoute);
app.use("/relationship", PaddyWarehouse);
app.use("/api",InstructionRoute);

mongoose
  .connect(
    "mongodb+srv://yevin:fsJOGWSDQ18jlrVg@cluster0.6bn7jxc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("Connected to MongoDB"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log);