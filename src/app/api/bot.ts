import { Telegraf, Markup } from "telegraf";
import { config } from "dotenv";

config();

const bot = new Telegraf(process.env.TOKEN!);
const WEB_APP_URL = process.env.WEBAPP!;

bot.telegram.setMyCommands([
	{ command: "start", description: "Запуск бота" },
	{ command: "inlinekb", description: "Запуск mini app через клавиатуру" },
]);
bot.telegram.setMyDescription("Я бот, который помогает запускать mini apps в Telegram!");
bot.telegram.setMyShortDescription("Бот для запуска мини-приложений");
// При старте бота устанавливаем кнопку Web App для всех чатов
bot.on("message", async ctx => {
	await ctx.setChatMenuButton({
		text: "Search",
		type: "web_app",
		web_app: { url: WEB_APP_URL },
	});
	ctx.reply(
		"Запуск мини-приложения через инлайн-клавиатуру!",
		Markup.inlineKeyboard([Markup.button.webApp("Launch", WEB_APP_URL)]),
	)
});

// bot.command("start", ctx =>
	// ctx.reply(
	// 	"Запуск мини-приложения через инлайн-клавиатуру!",
	// 	Markup.inlineKeyboard([Markup.button.webApp("Launch", WEB_APP_URL)]),
	// ),
// );

// Запуск бота
bot.launch().then(() => {
	console.log("Бот запущен");
});

// Создаем экземпляр бота
// const bot = new Telegraf(process.env.TOKEN!);
// bot.command("setmenu", ctx =>
// 	// sets Web App as the menu button for current chat
// 	ctx.setChatMenuButton({
// 		text: "Launch",
// 		type: "web_app",
// 		web_app: { url: process.env.WEBAPP! },
// 	}),
// );
// // Обработка команды /start
// bot.start(ctx => {
//     ctx.reply("Добро пожаловать! Используйте /miniapp1 или /miniapp2 для доступа к мини-приложениям.");
// });

// // Обработка команд для мини-приложений
// bot.command("miniapp1", ctx => {
//     ctx.reply("Вы открыли Mini App 1!"); // Здесь можно добавить ссылку на мини-приложение
// });

// bot.command("miniapp2", ctx => {
//     ctx.reply("Вы открыли Mini App 2!"); // Здесь можно добавить ссылку на мини-приложение
// });

// // Обработка текстовых сообщений
// bot.on("text", ctx => {
//     ctx.reply("Вы написали: " + ctx.message.text);
// });

// Запуск бота


// Обработка webhook
// const handler = async (req: NextApiRequest, res: NextApiResponse) => {
//     if (req.method === "POST") {
//         // Обработка обновлений от Telegram
//         bot.handleUpdate(req.body, res);
//         return res.status(200).send("OK");
//     } else {
//         return res.status(405).json({ error: "Method not allowed" });
//     }
// };

// export default handler;


// import { config } from "dotenv";
// import { Telegraf } from "telegraf";


// config();
// const bot = new Telegraf(process.env.TOKEN!);



// bot.command("setmenu", ctx =>
// 	// sets Web App as the menu button for current chat
// 	ctx.setChatMenuButton({
// 		text: "Launch",
// 		type: "web_app",
// 		web_app: { url: process.env.WEBAPP! },
// 	}),
// );

// bot.launch();

// import { Telegraf } from 'telegraf';
// import axios from 'axios';

// const bot = new Telegraf(process.env.TOKEN!);

// bot.start(async (ctx) => {
//     const chatId = ctx.chat.id;
//     await ctx.reply(`Привет! Выберите мини-приложение:`, {
//         reply_markup: {
//             inline_keyboard: [
//                 [
//                     { text: 'Мини-приложение 1', callback_data: 'miniapp1' },
//                     { text: 'Мини-приложение 2', callback_data: 'miniapp2' }
//                 ]
//             ]
//         }
//     });
// });

// bot.action('miniapp1', async (ctx) => {
//     await ctx.reply('Открываю Мини-приложение 1: /miniapp1');
// });

// bot.action('miniapp2', async (ctx) => {
//     await ctx.reply('Открываю Мини-приложение 2: /miniapp2');
// });

// // Поисковая строка
// bot.command('search', async (ctx) => {
//     const query = ctx.message.text.split(' ').slice(1).join(' '); // Получаем запрос
//     const response = await axios.get(`https://tgramsearch.com/search?query=${query}`);
//     const results = response.data; // Предполагаем, что данные возвращаются в нужном формате

//     // Формируем ответ
//     await ctx.reply(`Результаты поиска для "${query}":\n${results.join('\n')}`);
// });

// bot.launch();
