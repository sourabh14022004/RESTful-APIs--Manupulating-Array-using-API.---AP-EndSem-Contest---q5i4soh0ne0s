const express = require('express')
const app = express();
app.use(express.json())


let numberArray = [];

// GET:
app.get('/sum', (req, res) => {
    const sum = numberArray.reduce((acc, num) => acc + num, 0);
    res.status(200).json({ sum });
    console.log(sum)
    
});

// POST: 
app.post('/add', (req, res) => {
    const { num } = req.body;

    
    if (num === undefined) {
        return res.status(400).json({ error: "Missing num field" });
    }

    if (typeof num !== 'number') {
        return res.status(400).json({ error: "Invalid input num should be a number" });
    }

    numberArray.push(num);
    res.status(200).json({ array: numberArray });
    // const { nums } = req.body;

    
    if (num === undefined) {
        return res.status(400).json({ error: "Missing num field" });
    }

    if (typeof num !== 'number') {
        return res.status(400).json({ error: "Invalid input num should be a number" });
    }

    numberArray.push(num);
    res.status(200).json({ array: numberArray });
    
});


// PUT:
app.put('/update', (req, res) => {
    // write the put api logic here 
    const { num, index } = req.body;

    
    if (num === undefined || index === undefined) {
        return res.status(400).json({ error: "All fields required" });
    }

    
    if (typeof num !== 'number' || typeof index !== 'number' || index < 0 || index >= numberArray.length) {
        return res.status(400).json({ error: "Invalid input Ensure num is a number and index is valid" });
    }

    numberArray[index] = num;
    res.status(200).json({ array: numberArray });
});


// DELETE: 
app.delete('/delete/:index', (req, res) => {
    
    const index = parseInt(req.params.index, 10);

    
    if (isNaN(index) || index < 0 || index >= numberArray.length) {
        return res.status(400).json({ error: "Invalid index" });
    }

    numberArray.splice(index, 1);
    res.status(200).json({ array: numberArray });
    // write the delete api logic here.
});



const PORT= 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
module.exports = { app, numberArray };