import { Client, Intents } from "discord.js";
import { join } from "path";
import WOKCommands from "wokcommands";
import dotenv from "dotenv";
dotenv.config();

console.log("Bot is starting...");

const FLAGS = Intents.FLAGS;
const client = new Client({
  intents: [FLAGS.GUILD_MEMBERS, FLAGS.GUILDS, FLAGS.GUILD_MESSAGES],
});

client.on("ready", (client) => {
  console.log(`Started the BOT ${client.user.username}`);

  new WOKCommands(client, {
    commandDir: join(__dirname, "commands"),
    featureDir: join(__dirname, "features"),

    typeScript: true,
    testServers: ["821039157035794473"],
    botOwners: ["710697965408223243"],
  }).setDefaultPrefix(".");
});

client.login(process.env.TOKEN);
