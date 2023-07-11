const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ApplicationCommandType, ButtonStyle } = require('discord.js');
module.exports = {
	name: 'profile',
	description: "See Your Profile :) ",
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
	type: ApplicationCommandType.ChatInput,
	run: async (client, interaction) => {
    try{ 
		const inviteUrl = `https://discord.com/api/oauth2/authorize?client_id=$962680185730261062&permissions=8&scope=bot%20applications.commands`;
         const user = interaction.member;
		const embed = new EmbedBuilder()
		.setTitle("__**Profile**__")
        .setThumbnail(user.user.avatarURL({ dynamic: true }))
    .setDescription(`**Name:** ${user.user.tag} \n **Account Created At:** ${user.user.createdAt} \n **Joined At**: ${user.joinedAt} \n **Client Projects:** ${client.projectsSize} \n **Discriminator:** ${user.user.discriminator} \n **User Type:** Free`)
      
    .setImage("https://media.discordapp.net/attachments/1073089280672542720/1075357942737547275/JOINOCT.png?width=900&height=167")
      

		.setTimestamp()

		const actionRow = new ActionRowBuilder()
		.addComponents([
			new ButtonBuilder()
			.setLabel('Invite')
			.setURL(inviteUrl)
			.setStyle(ButtonStyle.Link)
		])
   interaction.reply({ embeds: [embed], components: [actionRow] })
    } catch (error){
      client.slash_err(client, interaction, error);
    }
	}
};
