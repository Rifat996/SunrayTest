const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());


app.post('/api/sort', (req, res) => {
    const numbers = req.body;
    const arr = Object.values(numbers).sort((a, b) => a - b);

    // Convert array back to object
    const sortedNumbers = {
        one: arr[0],
        two: arr[1],
        three: arr[2],
        four: arr[3],
        five: arr[4],
        six: arr[5],
        seven: arr[6],
        eight: arr[7],
        nine: arr[8],
        ten: arr[9],
    };

    res.json(sortedNumbers);
});






const PORT =  5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
}); // start Node + Express server on port 5000
