import { exec } from "child_process";
import { ICommand } from "wokcommands";

export default {
  category: "Restart",
  description: "Pulls & Restarts BOT",

  callback() {
    exec("git pull");
  },
} as ICommand;
