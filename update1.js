const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let uEmbed = new Discord.RichEmbed()
    .setTitle("Updates")
    .addField(" - Added botinfo. \n" +
              " - Added serverinfo. \n" +
              " - Added rules command. \n" +
              " - Added discord command. \n" +
              " - Added botdevelopment command. \n")
              .setColor("#7AFCE6");
    message.channel.send(uEmbed);
}

module.exports.help = {
  name:"updates"
}