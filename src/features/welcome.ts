import { Client, TextChannel } from "discord.js";
import WOKCommands from "wokcommands";

export default (client: Client, instance: WOKCommands) => {
  client.on("guildMemberAdd", (member) => {
    const { guild } = member;

    const channel = guild.channels.cache.find((channel) => channel.id === "980361353644621874") as TextChannel;

    console.log("Member added");

    if (!channel) {
      return;
    }

    channel.send({
      content: `Welcome ${member.user.username} to the server!`,
    });
  });
};
