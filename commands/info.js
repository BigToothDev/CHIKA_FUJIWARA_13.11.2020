const Discord = require('discord.js');

module.exports.run = (bot, msg, member, database) => {
    msg.channel.bulkDelete(1)

if (database.getAccount(msg.member).lang !== 0) return 
const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#99ff99')
    .setTitle(' ')
    .setAuthor('_BigTooth_#5384 - author.', 'https://cdn.discordapp.com/attachments/730034516823113858/730477650929254460/SAVE_20200301_184757.jpg')
    .setDescription('\u200B')
    .addFields(
        { name: '🎉 Command list - entertainment:', value: '➤!anime - sends random anime (50 animes available).\n➤!sauce - sends random manga sauce to DM.\n➤!banana (player) - turns the player into banana.\n➤!fakeban (player) (reason) - makes a fake ban of the player.\n➤!dice (player) - roll the dice with your friend!\n➤!chance (event) - sends a chance of the event.' },
        { name: '🎭 Command list - emotions:', value: '➤!sad.\n➤!laugh.\n➤!dance.\n➤!happy.\n➤!hug (player).\n➤!kick (player).\n➤!kiss (player).'},
        { name: '🗒️ Command list - stats', value: '➤!capabilities - the list of the capabilities.\n➤!level - your activity level.'},
        { name: '⚙️ Command list - settings:', value: '➤!info - information about bot and commands.\n➤!lang (eng/rus) - changes your main language.\n➤!prefix (new prefix) - changes the prefix of commands on your server (use **only** symbols, words as a prefix may not work).' }
)
    .setFooter('-=Bot is stable=-', 'https://cdn.pixabay.com/photo/2014/03/25/15/22/wrench-296632_960_720.png');

msg.author.send(exampleEmbed);
}