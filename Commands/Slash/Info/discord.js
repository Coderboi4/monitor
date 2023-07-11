const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ApplicationCommandType, ButtonStyle } = require('discord.js');

module.exports = {
	name: 'discord',
	description: "Discord Server",
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
	type: ApplicationCommandType.ChatInput,
	run: async (client, interaction) => {
    try{ 
		const inviteUrl = `https://discord.gg/octor`;
		const embed = new EmbedBuilder()
		.setTitle("<a:discord:963483901421035520> **Discord Server** <a:discord:963483901421035520> ")
    .setDescription("**Octor Monitor | Support Server** \n\n This Is The Offical Discord Server Of Octor Monitor Join Here To Get Notified About The Updates And Incidents")
      
    .setImage("https://images-ext-1.discordapp.net/external/zqWJlaTdxBrOhHAX_I-DrPHv0GcunCaKWCuCMBjQ3fc/%3Fwidth%3D374%26height%3D48/https/images-ext-1.discordapp.net/external/C0l3JJRjCFgC75-J0MQVsJaT4MJ3zitPMoYzf1DfAmc/https/share.creavite.co/2aaqyoX2hB7PbCHW.gif?width=299&height=38")
      

		.setTimestamp()
		.setThumbnail(client.user.displayAvatarURL())
		.setFooter({ text: client.user.tag })

		const actionRow = new ActionRowBuilder()
		.addComponents([
			new ButtonBuilder()
			.setLabel('Join Discord')
			.setURL(inviteUrl)
			.setStyle(ButtonStyle.Link)
		])
   await interaction.reply({ embeds: [embed], components: [actionRow] })
       process.exit()
    } catch (error){
      client.slash_err(client, interaction, error);
    }
	}
};
