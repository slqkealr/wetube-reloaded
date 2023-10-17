import express from "express";
import morgan from "morgan";

const PORT = 4000;

const app = express();
const logger = morgan("dev");

const middleWare = (req,res,next) => {
    console.log(`${req.method} ${req.url}`);
    next();
}

const handleHome = (req,res) => {
    return res.send("I love middlewares!");
}

app.use(logger);
app.get("/",middleWare,handleHome);

const handleListening = () => console.log(`Server listening on port http://localhost:${PORT} 😃`);

app.listen(PORT,handleListening);

