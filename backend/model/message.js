import { DataTypes } from "sequelize";
import sequelize from "../util/dbUtil.js";

const Message = sequelize.define(
    "Message",
    {
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        postTime: {
            type: DataTypes.DATE,
            allowNull: false,
            field: "post_time",
        },
    },
    {
        tableName: "message",
        createdAt: false,
        updatedAt: false,
        timestamps: true,
    }
);

export default Message;
