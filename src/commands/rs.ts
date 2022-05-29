import { exec } from "child_process";
import { ICommand } from "wokcommands";
import execSh from "exec-sh";

export default {
  category: "Restart",
  description: "Pulls & Restarts BOT",

  callback() {
    execSh("git pull");
  },
} as ICommand;
