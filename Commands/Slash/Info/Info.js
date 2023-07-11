const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ApplicationCommandType, ButtonStyle } = require('discord.js');
const os = require('os');
require('ms');
module.exports = {
	name: 'info',
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
	type: ApplicationCommandType.ChatInput,
	run: async (client, interaction) => {
    try{ 
		const inviteUrl = `https://discord.com/api/oauth2/authorize?client_id=962680185730261062&permissions=8&scope=bot%20applications.commands`;
       let webLatency = new Date() - interaction.createdAt
      let emLatency = {
        Green: '🟢',
        Yellow: '🟡',
        Red: '🔴'
      }
		const embed = new EmbedBuilder()
		.setTitle("<:ocping:982974984781725716>  __**Octor Monitor**__ <:ocping:982974984781725716> ")
.setFields([
              {
                name: `📡 Websocket Latency`,
                value: `>>> \`\`\`yml\n${webLatency} ms\`\`\``,
                inline: true
              }, {
                name: `<:Servers1:962395471303811132>  Node`,
                value: `>>> \`\`\`yml\n${process.version} on ${process.platform} ${process.arch}\`\`\``,
                inline: true
              }, {
                name: `<:ram:963855181076901968>  Memory`,
                value: `>>> \`\`\`yml\n${(process.memoryUsage().rss / 1024 / 1024).toFixed(2) <= 140 ? emLatency.Green : webLatency <= 180 ? emLatency.Yellow : emLatency.Red} ${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)} MB RSS\n${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) <= 49 ? emLatency.Green : webLatency <= 55 ? emLatency.Yellow : emLatency.Red} ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB Heap\`\`\``,
                inline: true
              }, {
                name: `<:serveur:963855177172017162> Guild Count`,
                value: `>>> \`\`\`yml\n${client.guilds.cache.size} guilds\`\`\``,
                inline: true
              }])

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
