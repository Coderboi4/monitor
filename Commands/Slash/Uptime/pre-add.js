const { ModalBuilder, TextInputBuilder, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ApplicationCommandType, ButtonStyle } = require('discord.js');
const os = require('os');
require('ms');
module.exports = {
	name: 'pre-add',
	description: "Get Latest Info About Bot",
  usage: "",
  category: "",
	userPerms: [''],
	botPerms: [''],
	cooldown: 30,
  guildOnly: false,
  ownerOnly: false,
  toggleOff: false,
  nsfwOnly: false,
  maintenance: false,
    voteOnly: false,
	 premium: true,
	type: ApplicationCommandType.ChatInput,
	run: async (client, interaction) => {
    try{ 
		const modal = new ModalBuilder()
          .setCustomId(`moniter-add`)
          .setTitle(`Add A Monitor`);
        const link_to_moniter = new TextInputBuilder()
          .setCustomId('moniter-url')
          .setLabel('URL')
          .setStyle(1)
          .setMinLength(0)
          .setPlaceholder('')
          .setRequired(true);
        const firstActionRow = new ActionRowBuilder().addComponents(link_to_moniter);
        modal.addComponents(firstActionRow);
        return interaction.showModal(modal);
    } catch (error){
      client.slash_err(client, interaction, error);
    }
	}
};
