import express from 'express';
import http from "http";
import bodyParser from "body-parser";
import cors from "cors";
import data from "./data";

const app = express();

app.use(cors({ exposedHeaders: ['x-access-token']}));
app.use(bodyParser.json());

app.get('/photos', (req, res) => {
  console.log(`[get] all photos`);
  res.json(data);
});

app.get('/photos/:id', (req, res) => {
  const id = req.params.id;
  console.log(`[get] photo with id ${id}`);
  res.json(data.find(data => data.id == id));
});

app.post('/photos/:id', (req, res) => {
  const id = req.params.id;
  console.log(`[post] fake update for photo ${id}`);
  res.end();
});

http.createServer(app).listen(3000, function() {
    console.log('Servidor escutando na porta: ' + this.address().port);
});
