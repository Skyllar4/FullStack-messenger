import mongoose from "mongoose";

const ChatSchema = new mongoose.Schema({
    chatList: {
        type: String,
        required: true,
    }}
);

export default mongoose.model('ChatList', ChatSchema);
