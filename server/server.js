const path = require('path');
const express = require('express');

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(express.static('./public'))

app.get('/', (req,res) => {
    console.log('hello');
    res.sendFile(paht.join(__dirname, 'public', 'index.html'))
})


app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})