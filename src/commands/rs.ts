import { exec } from "child_process";
import { ICommand } from "wokcommands";
import execSh from "exec-sh";

export default {
  category: "Testing",
  description: "Pulls & Restarts BOT",

  testOnly: true,

  async callback({ channel, message }) {
    channel.send("Restarting & Updating bot on GCS");
    execSh("git pull");
  },
} as ICommand;
