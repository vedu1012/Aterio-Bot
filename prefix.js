const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let announcement1 = new Discord.RichEmbed()
    .setTitle("Bot Development")
    .addField("Bot Development has started today, it might take sometime to be finished! Stay tuned for updates. \n")
     .setColor("#7AFCE6");
    message.channel.send(announcement1);
}

module.exports.help = {
  name:"botdevelopment"
}