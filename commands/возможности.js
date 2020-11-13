const Discord = require('discord.js');

module.exports.run = (bot, message, args, database, member) => {
    message.channel.bulkDelete(1)

    if (database.getAccount(message.member).lang !== 1) return 

    const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#99ff99')
        .setAuthor('Возможности при уровнях', 'https://i1.sndcdn.com/avatars-000615776514-bjv4y0-t500x500.jpg')
        .addFields(
            { name: '\u200B', value: '➤ **1 уровень - доступно**: *!танцую*, *!счастлив*, *!смеюсь*, *!грущу*.\n➤ **2 уровень - доступно**: *!банан*, *!фейкбан*.\n➤ **3 уровень - доступно**: *!обнять*.\n➤ **4 уровень - доступно**: *!ударить*, *!кости*.\n➤ **5 уровень - доступно**: *!поцеловать*.'}
)
        .setFooter('');
    message.channel.send(exampleEmbed);
}