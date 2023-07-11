const { ApplicationCommandType, EmbedBuilder } = require('discord.js');
const os = require('os');
const { generateCode } = require("../../../src/functions/code.js");
require('ms');
const db = require('quick.db');
module.exports = {
  name: "generate",
  description: "Generate a premium code",
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
  type: ApplicationCommandType.ChatInput,
  run: async (client, interaction) => {
    try {
     // let char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
     // let code = Math.floor(Math.random() * 100000);
     //  db.
      const code = await generateCode();
      const embed = new EmbedBuilder()
        .setTitle('Octor Pro | Redeem Code')
        .setDescription(`**Code:**\n\`\`\`yml\n${code}\`\`\`\n\n**How to use?**\n>>> Go to a server where this bot is in.Run /redeem to redeem the premium  code`)
  
     interaction.reply({ embeds: [embed] })
    } catch (error) {
      client.slash_err(client, interaction, error);
    }
  }
};