const Discord = require('discord.js');

module.exports.run = (bot, msg, args, database) => {
    if (database.getAccount(msg.member).lang !== 0) return 
    if (!args[0]) return msg.channel.send('`You forgot to write new prefix!`')
    else if (!msg.member.hasPermission("ADMINISTRATOR")) return msg.channel.send('`You don"t have permission ADMINISTATOR, to execute this command!`')
    
    const exampleEmbed = new Discord.MessageEmbed()
       .setColor('#99ff99')
       .setTitle(`**Now current prefix**: ${args[0]}`)
    database.getGuildData(msg.guild).prefix = args[0];
    msg.channel.send(exampleEmbed);
    msg.react('✅');
}