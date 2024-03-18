const express = require('express')
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});
app.post('/test', (req,res) =>{
    res.send('<h1> postional cats !!!')
})

app.listen(port, () =>{
    console.log(`Listening to port ${port}`)
})