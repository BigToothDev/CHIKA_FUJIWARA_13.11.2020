const Discord = require('discord.js');

module.exports.run = async (bot, message, args, database, member) => {
    message.channel.bulkDelete(1)

    if (database.getAccount(message.member).lang !== 1) return 

    let member1 = message.guild.member(message.mentions.users.first() || message.guild.members.cache.find(m => m.user.username == args[0] || m.id == args[0]))
    if (!member1) return message.channel.send('```Укажите существующего пользователя```')
    let pl1 = `${message.author.id}`;
    let pl2 = `${member1.user.id}`;
    let pl3 = (pl1 == pl2)
    if (pl3) return message.channel.send('```Вы не можете превратить себя в банан!```')
    let xp = `${(database.getAccount(message.member)).xp}`;
    let xp1 = (xp >= 201);
    if (!xp1) return message.channel.send('```Недостаточно опыта для использования команды!```')
    const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#ffe135')
    .setDescription(`**Игрок** <@${member1.user.id}> **достиг(ла) всего в жизни и превратился(ась) в банан!**`)
	.setAuthor('Банан! 🍌')
    .setImage('https://media.giphy.com/media/xT8qB5unLetqgto4Ra/giphy.gif')
	.setTimestamp()
	.setFooter(`Автор: ${message.author.tag}`);

message.channel.send(exampleEmbed);
};