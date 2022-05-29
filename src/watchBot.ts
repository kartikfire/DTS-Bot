import { Client, Intents } from "discord.js";
import dotenv from "dotenv";
dotenv.config();

const client = new Client({
  intents: [Intents.FLAGS.GUILDS],
});

client.on("ready", () => {
  console.log("Watching for commands to update");
});

client.on("messageCreate", (message) => {});
