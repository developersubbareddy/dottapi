const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const channels = require("./api/channels");
const app = express();
app.use(bodyParser.json());
app.use(cors({ origin: true }));
app.use("/channels",channels);
const PORT = process.env.PORT || 3001;
app.listen(PORT,()=>{
    console.log(`App listening on ${PORT}`)
});
