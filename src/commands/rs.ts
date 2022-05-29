import { ICommand } from "wokcommands";
import execSh from "exec-sh";

export default {
  category: "Testing",
  description: "Pulls & Restarts BOT",

  testOnly: true,
  ownerOnly: true,

  async callback({ channel }) {
    channel.send("Restarting & Updating bot on GCS");
    execSh("git pull");
  },
} as ICommand;
