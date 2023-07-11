const { EmbedBuilder } = require("discord.js");
const db = require("quick.db");

const codes = new db.table("codes");

async function generateCode() {
  // Generate a random code
  const code = Math.random().toString(36).substr(2, 6).toUpperCase();

  // Store the code in the database with a timestamp
  await codes.set(code, Date.now());

  return code;
}

async function redeemCode(code, user) {
  const timestamp = await codes.get(code);
  const now = Date.now();

  if (timestamp && now - timestamp <= 7 * 24 * 60 * 60 * 1000) {
    // Code is valid and not expired
   const ispremium = await db.get(`premium_${user.id}`)
    const premium = new EmbedBuilder()
      .setTitle("Sharing Is Caring")
      .setDescription(`Seems like you already have Octor Premium, Let anyone use that code`)
      .setColor('#2596be');
    if(ispremium === true) return { embeds: [premium]}

    await codes.delete(code);

    await db.set(`premium_${user.id}`, true)
    const embed = new EmbedBuilder()
      .setTitle("Code Redeemed")
      .setDescription(`You have successfully redeemed the Octor Monitor premium code\nYou can use premium commands from now on`)
      .setColor('#2596be');
    return { embeds: [embed] };
  } else {
    // Code is invalid or expired
    const embed = new EmbedBuilder()
      .setTitle("Invalid Code")
      .setDescription("The code you entered is invalid or has expired.")
      .setColor('#2596be');
    return { embeds: [embed] };
  }
}

module.exports = { generateCode, redeemCode };