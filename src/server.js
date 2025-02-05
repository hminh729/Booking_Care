require('dotenv').config();
const express = require('express');
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web')

const app = express();
const port = process.env.PORT

// config req.body
app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded()); //Parse URL-encoded bodies

// config template engine
configViewEngine(app)

// khai bao route
app.use('/', webRoutes);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})