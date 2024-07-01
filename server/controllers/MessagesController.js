import MessagesModel from "../models/Messages.js";

export const messages = async (req, res) => {
    try {
        const messages = await MessagesModel.find().exec();
        res.json({
            messages,
        });
        console.log(messages);
    } catch (error) {
        console.error("Ошибка при запросе документов из базы данных:", error);
        res.status(500).json({
            message: "Не удалось получить сообщения",
        });
    }
};

export const addMessage = async (req, res) => {
    console.log(req.body);
    try {
        const { message } = req.body;

        const newMessage = new MessagesModel({
            message,
        });

        await newMessage.save(); // Сохраняем новое сообщение в базе данных

        res.status(201).json({
            message: "Сообщение успешно добавлено",
            newMessage,
        });
    } catch (error) {
        console.error("Ошибка при добавлении сообщения:", error);
        res.status(500).json({
            message: "Не удалось добавить сообщение",
        });
    }
};

// export default MessagesController;
