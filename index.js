const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });
});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
  bot.user.setActivity("The Aterio Community", {type: "WATCHING"});

});

bot.on("guildMemberAdd", function(member) {

  let membercount = bot.users.size;

  let props = require("./database.js")
  props.run(bot, member)
  

  const embed = new Discord.RichEmbed()
  .setColor(0xffffff)
  .setTitle('Aterio - Welcome')
  .setDescription(`Hello ${member}, welcome to Aterio! Have a great time here.`)
  .setThumbnail(member.user.avatarURL)
  .setFooter(botconfig.footer)

  member.guild.channels.find('name', 'welcome').send({ embed: embed });
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(botconfig.prefix.length);
  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);

});

bot.login(botconfig.token);