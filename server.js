const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());  // Adaugă această linie pentru a activa CORS

let liftData = {
    level: 0,
    status: "Idle"
};

app.post('/api/lift', (req, res) => {
    const { level, status } = req.body;
    liftData.level = level;
    liftData.status = status;
    console.log(`Lift data received: Level ${level}, Status ${status}`);
    res.sendStatus(2000);
});

app.get('/api/lift', (req, res) => {
    res.json(liftData);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
