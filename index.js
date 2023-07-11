require('./keepAlive.js')();
const { Client, GatewayIntentBits, Partials, Collection } = require('discord.js');
const Discord = require('discord.js');
const { REST } = require('discord.js');
const { Routes } = require('discord.js');
const set = require(`${process.cwd()}/Assets/Config/settings`);
require(`colors`)
const client = new Client({
  allowedMentions: {
    parse: ["roles", "users", "everyone"],
    repliedUser: false,
  },
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
  ],
  partials: [Partials.Channel, Partials.User, Partials.GuildMember]
});


[`variables`, `extraEvents`, `checker`, `mongo_db`, `server`, 'slashCommand', 'events', `antiCrash`].forEach((handler) => {
  const file = require(`./src/handlers/${handler}`)
  if (file.execute) file.execute(client);
  else file(client);
});
client.on("messageCreate", (message) => {
    if (message.author.bot) return false;

    if (message.content.includes("@here") || message.content.includes("@everyone") || message.type == "REPLY") return false;

    if (message.content.includes(client.user.id)) {
        message.channel.send("Hey, Use /help Command To Get Information About Me <3");
    }
});

//Top.gg
const { AutoPoster } = require('topgg-autoposter')
const { Api } = require(`@top-gg/sdk`)


// ap.on('posted', () => {
//   console.log('Posted stats to Top.gg!')
// })
//Join Logs
client.on('guildCreate', guild => {

   const serverjoinch = client.channels.cache.get("1074003272836317305")
 
   console.log("Joined A Guild")
    
  
  try {
  serverjoinch.send(`__**Joined A New Server | ${guild.name}**__ \n\n > Server Owner -- ${guild.owner} \n\n > Member Count -- ${guild.memberCount}`)
  } catch(err) {
    return;
  }
})
 const rest = new REST({ version: '9' }).setToken(process.env.TOKEN);
      //      await rest.put(
       //         Routes.applicationCommands(process.env.CLIENT_ID),
        //        { body: commands },
       //     )
client.login(process.env.TOKEN).catch((error) => { console.log((error.message).bold.red) });