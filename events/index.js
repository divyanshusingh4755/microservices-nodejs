const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json())

app.post('/events', (req, res) => {
    const event = req.body;
    axios.post('http://localhost:5000/events', event);  //Post
    axios.post('http://localhost:5001/events', event);  //comments
    axios.post('http://localhost:5002/events', event);  //Query Service

    res.send({ status: 'OK' });
})

app.listen(5005, () => {
    console.log("listening to port 5005")
})