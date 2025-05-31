const express = require("express");
const cors = require("cors");

const app = express();
const kinoRouter = require('./router/kinoRouter');

app.use(cors());
app.use(express.json());

app.use('/kino', kinoRouter);

app.listen(1111, () => {
  console.log(`Server is running on port 1111`);
});
