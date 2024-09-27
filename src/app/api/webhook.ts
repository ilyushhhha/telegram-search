import { NextApiRequest, NextApiResponse } from "next";
import { Telegraf } from "telegraf";
import { config } from "dotenv";

// Загружаем переменные окружения
config();

const bot = new Telegraf(process.env.TOKEN!);

// Обработка вебхуков
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "POST") {
        bot.handleUpdate(req.body, res);
        return res.status(200).send("OK");
    } else {
        return res.status(405).json({ error: "Method not allowed" });
    }
};

export default handler;
