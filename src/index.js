const express = require('express');
const app = express();
const colors = require('colors');
const path = require('path');

//SETTINGS
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

//MIDDLEWARES

//ROUTES
app.use(require('./routes'))

//STATIC FILES
app.use(express.static(path.join(__dirname, 'public')))

//LISTENING TO SERVER
app.listen(app.get('port'), () => {
    console.log('Listen to port:'.yellow, app.get('port'));
})