const express = require('express');
const App = require("../dist/ssr/app");
const ReactRouter = require("react-router"); 

const app = express();
<ReactRouter.StaticRouter>
    </App>
<ReactRouter.StaticRouter>

app.get('*', (req, res) => {
    console.log(req.url)
    res.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Platzi Video</title>
            <!--<link rel="sytlesheet" href="dist/css/home.f6f785663f653a4469d8.css">-->
        </head>
        <body>
            <div id="home-container">${req.url}</div>
            <div id="modal-container"></div>
            <script src="http://localhost:9000/js/app.js"></script>
            <!--<script src="dist/js/home.f6f785663f653a4469d8.js"></script>-->
        </body>
        </html>`
    );
    res.end();
});

app.listen(3000);
console.log("Servidor arrancado...");