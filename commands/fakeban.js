const Discord = require('discord.js');

module.exports.run = (bot, message, args, database, member) => {
    message.channel.bulkDelete(1)

    if (database.getAccount(message.member).lang !== 0) return 

    let member1 = message.guild.member(message.mentions.users.first() || message.guild.members.cache.find(m => m.user.username == args[0] || m.id == args[0]))
    if (!member1) return message.channel.send('```This user does not exist!```')

    let reason = args.slice(1).join(' ') || 'none'

    let pl1 = `${message.author.id}`;
    let pl2 = `${member1.user.id}`;
    let pl3 = (pl1 == pl2)
    if (pl3) return message.channel.send('```You can"t turn someself into banana!```')
    let xp = `${(database.getAccount(message.member)).xp}`;
    let xp1 = (xp >= 201);
    if (!xp1) return message.channel.send('```Not enough xp to use this command!```')
    
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#c41e3a')
    .setTitle('User was banned:')
	.setAuthor(`-----------------------------------------------------`)
    .setDescription(`<@${member1.user.id}>`)
    .addFields(
		{ name: `**Reason:**\n${reason}`, value: '**-----------------------------------------------------**'},
	)
    .setFooter(`Author: ${message.author.tag}. Press F, to pay respect!`);

    message.channel.send(exampleEmbed); 
}