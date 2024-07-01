import express from "express";
import mongoose from "mongoose";
import cors from "cors";
// import MessagesController from "./controllers/MessagesController.js";
import { MessagesController } from "./controllers/index.js";
// установим связь с базой данных
mongoose
    .connect(
        "mongodb+srv://mamadommaa:vsue4NSnDONV5HgA@cluster0.uxhl5cq.mongodb.net/chat?retryWrites=true&w=majority&appName=Cluster0"
    )
    .then(() => {
        console.log("server работает супер");
    })
    .catch(() => {
        console.log("error", err);
    });

// создадим само приложение
let app = express();
app.use(express.json());
app.use(cors());
// зададим ендпоинт
app.get("/messages", MessagesController.messages);
app.post("/add", MessagesController.addMessage);
// послушаем как дела у базы данных
app.listen(4444, (err) => {
    if (err) {
        return console.log(err);
    }
    console.log("DB работает суперр");
});
