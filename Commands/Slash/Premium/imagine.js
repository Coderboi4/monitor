const { ApplicationCommandType, EmbedBuilder } = require('discord.js');
const os = require('os');
require('ms');
const db = require('quick.db');
module.exports = {
  name: "imagine",
  description: "",
  usage: "",
  category: "premium",
  userPerms: [""],
  botPerms: [""],
  cooldown: 10,
	premium: true,
  guildOnly: false,
  ownerOnly: false,
  toggleOff: false,
  nsfwOnly: false,
  maintenance: false,
    voteOnly: false,
  options: [
        {
          name: "query",
          description: "Enter query to imagine",
          type: 3,
  required: true
          
        }
      ],
  type: ApplicationCommandType.ChatInput,
  run: async (client, interaction) => {
   try {
      const query = interaction.options.getString('query');

      const response = await axios.post(
        'https://api.openai.com/v1/images/generations',
        {
          model: 'image-alpha-001',
          prompt: query,
          api_key: process.env.OPENAI // Replace with your OpenAI API key
        }
      );

      const url = response.data.data[0].url;
      const attachment = new MessageAttachment(url);
      await interaction.reply({ content: 'Here is your generated image:', files: [attachment] });
    } catch (error) {
      client.slash_err(client, interaction, error);
    }
    }
  }
