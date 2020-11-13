const Discord = require('discord.js');

module.exports.run = (bot, message, args, database, member) => {
    message.channel.bulkDelete(1)

    if (database.getAccount(message.member).lang !== 0) return 

    const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#99ff99')
        .setAuthor('Capabilities', 'https://i1.sndcdn.com/avatars-000615776514-bjv4y0-t500x500.jpg')
        .addFields(
            { name: '\u200B', value: '➤ **1 level - avalaible**: *!dance*, *!happy*, *!laugh*, *!sad*.\n➤ **2 level - avalaible**: *!banana*, *!fakeban*.\n➤ **3 level - avalaible**: *!hug*.\n➤ **4 level - avalaible**: *!hit*, *!dice*.\n➤ **5 level - avalaible**: *!kiss*.'}
)
        .setFooter('');
    message.channel.send(exampleEmbed);
}