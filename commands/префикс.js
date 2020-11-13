const Discord = require('discord.js');

module.exports.run = (bot, msg, args, database) => {
    if (database.getAccount(msg.member).lang !== 1) return 
    if (!args[0]) return msg.channel.send('**Не указан новый префикс!**')
    else if (!msg.member.hasPermission("ADMINISTRATOR")) return msg.channel.send('**Недостаточно прав для использования команды!**')
    
    const exampleEmbed = new Discord.MessageEmbed()
       .setColor('#99ff99')
       .setTitle(`**Теперь действующий префикс**: ${args[0]}`)
    database.getGuildData(msg.guild).prefix = args[0];
    msg.channel.send(exampleEmbed);
    msg.react('✅');
}