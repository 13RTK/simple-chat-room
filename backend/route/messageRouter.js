import express from "express";
import {
    createMessage,
    getMessage,
    clearMessage,
} from "../controller/messageController.js";

const messageRouter = express.Router();

messageRouter
    .route("/message")
    .post(createMessage)
    .get(getMessage)
    .patch(clearMessage);

export default messageRouter;
