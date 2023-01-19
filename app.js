const express = require("express");
const bodyParser = require("body-parser");

const adminRoutes = require("./routes/admin");

const app = express();

app.use(bodyParser.urlencoded({ urlencoded: false }));

app.use("/admin", adminRoutes);

app.listen(3000);
