const express = require("express");

const app = express();

const path =require ("node:path");

app.use(express.static(path.join(__dirname, '/public')));
app.get("/",(req, res)=> {
   const pathHome = path.join(__dirname, "views/home.html")
    res.sendFile(pathHome);
})

app.get('/login', (req, res) => {
    let rutaHtml = path.join(__dirname, './views/login.html');
    res.sendFile(rutaHtml, (err) => {
        if (err) {
            console.error('Error al enviar el archivo:', err);
            res.status(err.status).end();
        } else {
            console.log('Archivo enviado correctamente');
        }
    });
});
app.get('/register', (req, res) => {
    let rutaHtml = path.join(__dirname, './views/register.html');
    res.sendFile(rutaHtml, (err) => {
        if (err) {
            console.error('Error al enviar el archivo:', err);
            res.status(err.status).end();
        } else {
            console.log('Archivo enviado correctamente');
        }
    });
});

const PORT  = process.env.PORT || 3000
app.listen( PORT, () => console.log(`Server up on PORT:  http://localhost:${PORT}`) );


