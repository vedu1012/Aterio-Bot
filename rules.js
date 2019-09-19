const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let sEmbed = new Discord.RichEmbed()
    .setTitle("Rules")
    .setDescription("All rules have to be followed or else there are consequences.")
     .addField("Official Rules", "\n" +
      "- No Spamming or Abusing the bot commands.\n" +
      "Advertising is only allowed in #advertisement\n" +
      "- Media posts should be appropriate and relevant to the topic.\n" +
      "- Be kind and respect each other and no need to start a fight. \n" +
      "- Follow all Discord's Terms of Service.\n" +
      "- You're not allowed to copy any of our products etc. Designs.\n" +
      "- Swearing is prohibited.\n")
      .setColor("#7AFCE6");
        message.channel.send(sEmbed);
}

module.exports.help = {
  name:"rules"
}