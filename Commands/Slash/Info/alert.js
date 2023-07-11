const { ApplicationCommandType, EmbedBuilder } = require('discord.js');
const os = require('os');
const { redeemCode } = require("../../../src/functions/code.js");
require('ms');
const db = require('quick.db');
module.exports = {
  name: "alert",
  description: "gg",
  usage: "",
  category: "premium",
  userPerms: [""],
  botPerms: [""],
  cooldown: 10,
  guildOnly: false,
  ownerOnly: false,
  toggleOff: false,
  nsfwOnly: false,
  maintenance: false,
    voteOnly: false,
  options: [
    {
          name: "channel",
          description: "choose channel",
          type: 3,
  required: true
          
        },
        {
          name: "text",
          description: "Enter text",
          type: 3,
  required: true
          
        }
      ],
  type: ApplicationCommandType.ChatInput,
  run: async (client, interaction) => {
    try {
     // let char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
     // let code = Math.floor(Math.random() * 100000);
     //  db.
       const channel = interaction.options.getChannel("channel", true);
      const msg = interaction.options.getString("text");
      const embed = new MessageEmbed()
      .setTitle(":loudspeaker: New message")
      .setDescription(`Message: ${msg}`)
      .setTimestamp()
          channel.send({ embeds: [embed] })
   await interaction.reply({ content: "Done!", ephemeral: true})
    } catch (error) {
      client.slash_err(client, interaction, error);
    }
  }
};