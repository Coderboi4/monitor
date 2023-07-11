const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ApplicationCommandType, ButtonStyle } = require('discord.js');

module.exports = {
	name: 'lavalink',
	description: "Get Lavalink Information",
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
    voteOnly: true,
	type: ApplicationCommandType.ChatInput,
	run: async (client, interaction) => {
    try{ 
		const inviteUrl = `https://discord.com/api/oauth2/authorize?client_id=962680185730261062&permissions=8&scope=bot%20applications.commands`;
		const embed = new EmbedBuilder()
		.setTitle("<:GD_Level:1075772299300581426> **Lavalink**  ")
        .addFields(
                    {
                      name: "Total Projects:",
                      value: `\`\`\`yml\n{ \nhost: "moonlavalink.ml",\nport: 443,\npassword: "octorlv",\nsecure: true\n }\`\`\``,
                      inline: true
                    },)
		.setTimestamp()
		.setThumbnail("https://cdn.discordapp.com/avatars/1076533356952551464/0608070d53f64c86cf6042d3983c6f95.png?size=1024")
		.setFooter({ text: client.user.tag })

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
