const Discord = require('discord.js');

module.exports.run = (bot, message, args, database, member) => {
    message.channel.bulkDelete(1)

    if (database.getAccount(message.member).lang !== 1) return 

    let member1 = message.guild.member(message.mentions.users.first() || message.guild.members.cache.find(m => m.user.username == args[0] || m.id == args[0]))
    if (!member1) return message.channel.send('```Укажите существующего пользователя```')

    let reason = args.slice(1).join(' ') || 'не указана'

    let pl1 = `${message.author.id}`;
    let pl2 = `${member1.user.id}`;
    let pl3 = (pl1 == pl2)
    if (pl3) return message.channel.send('```Вы не можете забанить себя!```')
    let xp = `${(database.getAccount(message.member)).xp}`;
    let xp1 = (xp >= 201);
    if (!xp1) return message.channel.send('```Недостаточно опыта для использования команды!```')
    
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#c41e3a')
    .setTitle('Был забанен игрок:')
	.setAuthor(`-----------------------------------------------------`)
    .setDescription(`<@${member1.user.id}>`)
    .addFields(
		{ name: `**Причина:**\n${reason}`, value: '**-----------------------------------------------------**'},
	)
    .setFooter(`Автор: ${message.author.tag}. Press F, to pay respect!`);

    message.channel.send(exampleEmbed); 
}