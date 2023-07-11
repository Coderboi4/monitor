const { ApplicationCommandType, EmbedBuilder } = require('discord.js');
const os = require('os');
const { redeemCode } = require("../../../src/functions/code.js");
require('ms');
const db = require('quick.db');
module.exports = {
  name: "redeem",
  description: "redeems a premium code",
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
          name: "code",
          description: "Enter redeem code",
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
       const code = interaction.options.getString("code");
    const result = await redeemCode(code, interaction.user);
    await interaction.reply(result);
    } catch (error) {
      client.slash_err(client, interaction, error);
    }
  }
};