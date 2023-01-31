const express = require("express");
require("express-async-errors");
const cors = require("cors");
const {handleError} = require("./utils/errors");
const {personRouter} = require("./routes/person");
const {taskRouter} = require("./routes/task");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({
    origin: "http://localhost:3000",
}));
app.use(express.json());
app.use("/person", personRouter);
app.use("/task", taskRouter);

app.use(handleError);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));