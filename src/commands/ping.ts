import { ICommand } from "wokcommands";
import { MessageActionRow, MessageButton } from "discord.js";

export default {
  category: "Testing",
  description: "Replies with pong.",

  slash: true,
  testOnly: true,

  async callback({ interaction: msgInt, channel }) {
    const row = new MessageActionRow();

    row
      .addComponents(new MessageButton().setCustomId("yes").setLabel("Show").setStyle("SUCCESS"))
      .addComponents(new MessageButton().setCustomId("no").setLabel("Don't").setStyle("DANGER"))
      .addComponents(new MessageButton().setCustomId("breh").setLabel("Breh").setStyle("PRIMARY"));

    await msgInt.reply({
      content: "Do you REALLY want to show the ping?",
      components: [row],
      ephemeral: true,
    });

    const collector = channel.createMessageComponentCollector({
      max: 3,
      time: 1000 * 4,
    });

    collector.on("collect", async (click) => {
      click.channel?.send(click.customId);
    });

    collector.on("end", async (collection) => {
      collection.forEach((click) => {
        if (click.customId === "no")
          return msgInt.editReply({
            content: `Alr bye 👋`,
            components: [],
          });

        msgInt.editReply({
          content: `🏓Pong!`,
          components: [],
        });
      });
    });
  },
} as ICommand;
