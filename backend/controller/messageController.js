import Message from "../model/message.js";

export const createMessage = async (req, res) => {
    const { content } = req.body;
    const requestTime = req.requestTime;

    if (!content) {
        return res.status(400).json({
            status: "failed",
            message: "Content is required",
        });
    }

    let message = null;

    try {
        message = await Message.create({
            content,
            postTime: requestTime,
        });
    } catch (error) {
        return res.status(500).json({
            status: "failed",
            message: "Failed to create message",
        });
    }

    return res.status(201).json({
        status: "success",
        data: message,
    });
};

export const getMessage = async (_req, res) => {
    let messages = null;

    console.log("enter getMessage controller");

    try {
        messages = await Message.findAll();
    } catch (error) {
        return res.status(500).json({
            status: "failed",
            message: "Failed to retrive message",
        });
    }

    return res.status(201).json({
        status: "success",
        data: messages,
    });
};

export const clearMessage = async (_req, res) => {
    try {
        await Message.destroy({
            truncate: true,
        });
    } catch (error) {
        return res.status(500).json({
            status: "failed",
            message: "Failed to clear message",
        });
    }

    return res.status(201).json({
        status: "success",
        message: "Message has been cleared",
    });
};
