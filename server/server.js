const path = require('path');
const express = require('express');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();

// app.get('/', function(req, res) {
//     res.sendFile(publicPath + '/index.html');
// });
// app.listen(3000);

app.use(express.static(publicPath));

app.listen(3200, () => {
    console.log(`Server is up on ${port}`);
});
