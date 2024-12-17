const express = require('express')
const app = express();
app.use(express.json())


let numberArray = [];

// GET:
app.get('/sum', (req, res) => {
    // write the get api logic here 
});

// POST: 
app.post('/add', (req, res) => {
    // write the post api logic logic here 
});


// PUT:
app.put('/update', (req, res) => {
    // write the put api logic here 
});


// DELETE: 
app.delete('/delete/:index', (req, res) => {

    // write the delete api logic here.
});



const PORT= 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
module.exports = { app, numberArray };