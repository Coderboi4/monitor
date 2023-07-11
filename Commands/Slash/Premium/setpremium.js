const { ApplicationCommandType, EmbedBuilder } = require('discord.js');
const os = require('os');
const { redeemCode } = require("../../../src/functions/code.js");
require('ms');
const db = require('quick.db');
module.exports = {
  name: "setpremium",
  description: "Sets a user as premium",
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
          name: "id",
          description: "Enter the Users ID",
          type: 6,
  required: true,
        }
      ],
  type: ApplicationCommandType.ChatInput,
	run: async (client, interaction) => {
    try{
       const id = interaction.options.getUser("id");
      
 const user = await interaction.client.users.fetch(id);
      
 if(isNaN(user)) return interaction.reply({ embeds: [new EmbedBuilder().setTitle('Crux | Premium').setDescription('This Is Not A Valid User ID').setColor("#FF0000")], ephemeral: true })
      
    if (!user) {
      return interaction.reply({ embeds: [new EmbedBuilder().setDescription('**Error: User Not Found In Cache**').setColor("#FF0000")], ephemeral: true });
      const ispremium = db.get(`premium_${user.id}`)
      if(ispremium === false) 
        return interaction.reply({ embeds: [new EmbedBuilder().setTitle('| Premium').setDescription(`The user you trying to add premium do not have premium subscription`).setColor("#FF0000")], ephemeral: true });
      
      await db.set(`premium_${user.id}`, false)
      interaction.reply({ embeds: [new EmbedBuilder().setTitle(' | Premium').setDescription(`Successfully removed <@${id}> from premium database`).setColor("#00FF00")]})
  
    }
    } catch (error) {
      client.slash_err(client, interaction, error);
    }
  }
};