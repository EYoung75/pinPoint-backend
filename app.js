const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const app = express();
const port = process.env.PORT || 3000;

app.use(helmet());

app.use(bodyParser.json());

app.use(cors());

app.use(morgan("combined"));

app.listen(port, () => {
    console.log(`fuckin shit up on port ${port}`)
})