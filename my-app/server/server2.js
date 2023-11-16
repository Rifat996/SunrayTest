const express = require("express");

const cors = require("cors");
const app = express();
app.use(cors());

app.use(express.json());


const numbers = [
];


app.post("/sort", (req, res) => {
    console.log(req.body);
    const numbersFromResponse = req.body.numbers;
    const sortedNumbers = numbersFromResponse.sort((a, b) => a - b);
    console.log(sortedNumbers);
    res.json(sortedNumbers);
});

app.post("/api", (req, res) => {
    const number = {
        num1: req.body.num1,
        num2: req.body.num2,
        num3: req.body.num3,
        num4: req.body.num4,
        num5: req.body.num5,
        num6: req.body.num6,
        num7: req.body.num7,
        num8: req.body.num8,
        num9: req.body.num9,
        num10: req.body.num10,
    }

    if (!number.num1 || !number.num2 || !number.num3 || !number.num4 || !number.num5 || !number.num6 || !number.num7 || !number.num8 || !number.num9 || !number.num10) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    numbers.push(number);
    res.status(201).json(number);
});


const PORT = 5000;
app.listen(PORT, () => {
    console.log('App listening on port 5000!');
})