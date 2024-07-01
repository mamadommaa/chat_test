import mongoose from "mongoose";

const MessagesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false,
    },
    surname: {
        type: String,
        required: false,
    },
    img: {
        type: String,
        required: false,
    },
    message: {
        type: String,
        required: true,
    },
});

// export default mongoose.model("Message", PizzaSchema, "messages");
export default mongoose.model("Message", MessagesSchema, "messages");
