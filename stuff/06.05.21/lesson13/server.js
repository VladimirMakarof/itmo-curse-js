const express = require('express');

const app = express();
app.use(express.static('public'))
app.get('/lesson/13', (req, res) => {
    res.sendfile('lesson13.html');
});
app.listen(8080);
console.log('Сервер запущен');