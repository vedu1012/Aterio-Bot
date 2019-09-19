const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let dEmbed = new Discord.RichEmbed()
    .setDescription("[Discord Invite Link](https://discord.gg/BcmDzcC)")
     .setColor("#7AFCE6");
    message.channel.send(dEmbed);
}

module.exports.help = {
  name:"discordlink"
}