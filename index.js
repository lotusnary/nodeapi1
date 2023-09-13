const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({ "id": 100, "name": "Nary" });
});

app.listen(5000, () => {
    console.log('Express Server is Running at Port No 5000..');
});
