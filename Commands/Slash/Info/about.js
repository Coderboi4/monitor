const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ApplicationCommandType, ButtonStyle } = require('discord.js');

module.exports = {
	name: 'about',
	description: "Know More About The Bot",
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
		const embed = new EmbedBuilder()
		.setTitle("<:kellywave:1069887916408590377>   __**About Me**__ ")
       .setFields([
              {
                name: `<:verifieddev:1069791939068698645> **Developers**`,
                value: `**Alto#7455 \n Gp_codez#8448 \n MAARAKAM#9016**`,
                inline: true
              }, {
                name: `<:admin:1069888461697462312>   **Mananagement Team**`,
                value: `**! ʙʟᴋ✗ɪᴏs 1.0✓ </>#0001 \n Mr. Panda#9043**`,
                inline: true
              }, {
                name: `<:Servers1:962395471303811132>  **Ceo && Software Head**`,
                value: `**nedᴰᵉᵛ#3333 \n حنان ! :star_and_crescent:#3645**`,
                inline: true
              }, {
                name: `<:serveur:1069791928494858270>   **Website**`,
                value: `https://octormonitor.ml/`,
                inline: false
              }, {
                name: `<:discord:1075451733658050560>   **Discord**`,
                value: `https://discord.gg/octor`,
                inline: false
              }, {
                name: `<:moderator:1069792973967077497> **TOS && PP**`,
                value: `https://octormonitor.ml/tos.html/`,
                inline: false
              }])
      
    .setImage("https://media.discordapp.net/attachments/1073089280672542720/1075357942737547275/JOINOCT.png?width=900&height=167")
      

		.setTimestamp()
		.setThumbnail(client.user.displayAvatarURL())
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
