const express = require('express');
const bodyParser = require('body-parser');
const { routes } = require('./Routes/routes');
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
routes(app);
app.listen(3000, () => console.log('Server is up on port 3000'));