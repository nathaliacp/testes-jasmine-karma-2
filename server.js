import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

app.use(cors({ exposedHeaders: ['x-access-token']}));
app.use(bodyParser.json());

http.createServer(app).listen(3000, function() {
    console.log('Servidor escutando na porta: ' + this.address().port);
});
