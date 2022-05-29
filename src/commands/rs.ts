import { exec } from "child_process";
import { ICommand } from "wokcommands";
import execSh from "exec-sh";

export default {
  category: "Testing",
  description: "Pulls & Restarts BOT",

  testOnly: true,

  async callback({ channel, message }) {
    console.log("RS");
    console.log(message);
    channel.send("RS");
    execSh("git pull");
  },
} as ICommand;
