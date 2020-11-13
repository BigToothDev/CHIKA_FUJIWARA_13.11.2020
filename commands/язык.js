const Discord = require('discord.js');

module.exports.run = async (bot, msg, args, database, member) => {
    if (database.getAccount(msg.member).lang !== 1) return 
    
    if (!args[0]) {
        msg.channel.bulkDelete(1)
        return msg.channel.send('`Не указан язык для изменения (eng, rus)!`')
}    
    if (args[0] == 'eng') {
        database.getAccount(msg.member).lang = 0;
        msg.react('✅');
        msg.react('🇬🇧');
}     else if (args[0] == 'rus'){
        database.getAccount(msg.member).lang = 1;
        msg.react('✅');
        msg.react('🇷🇺');
}     else {
      msg.channel.bulkDelete(1)
      msg.channel.send('`Ошибка разпознавания языка (eng, rus)!`')
}
}