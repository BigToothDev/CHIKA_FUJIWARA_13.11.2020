const Discord = require('discord.js');

const talkedRecently = new Set();
module.exports.run = (bot, message, args, database, member) => {
    const patreonEmb = new Discord.MessageEmbed()
        .setColor('#7fff00')
        .setTitle('ПОДДЕРЖКА НА PATREON')
        .setURL('https://www.patreon.com/devbigtooth')
        .setDescription('**Только пользователи, что подписались на SUPPORT+, могут использовать эту команду. Если вы хотите оформить подписку - нажмите на строчку выше!**')
        .setFooter('Спасибо за поддержку! <3')
    message.channel.bulkDelete(1)

    if (database.getAccount(message.member).lang !== 1) return 

    if (database.getAccount(message.member).support !== 1) return message.channel.send(patreonEmb)
    
    const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#12e8ff')
        .setTitle(`СОУС - 185217`)
        .setURL('')
        .setDescription('**Цитата:** `Play with my pussy, not the PS4!`\n**----------------------------------------------**')
        .setImage('https://preview.redd.it/56pgzbp97z141.jpg?width=640&crop=smart&auto=webp&s=5ce43c71b5b67b3614eb698f4bf589e1eec9509e')
        .setFooter('Внимание!','https://image.flaticon.com/icons/png/512/83/83580.png')
    const exampleEmbed1 = new Discord.MessageEmbed()
        .setColor('#12e8ff')
        .setTitle(`СОУС - 297974 (нажмите для чтения)`)
        .setURL('https://nhentai.com/en/comic/joshi-kosei-rich-thots/reader/1')
        .setDescription('**Цитата:** `Ara, ara...`\n**----------------------------------------------**')
        .setImage('https://media.discordapp.net/attachments/630029127046660096/759474178885156864/SAVE_20200926_205857.jpg?width=326&height=462')
        .setFooter('Внимание!', 'https://image.flaticon.com/icons/png/512/83/83580.png')
    const exampleEmbed2= new Discord.MessageEmbed()
        .setColor('#12e8ff')
        .setTitle(`СОУС - 177013 (нажмите для чтения)`)
        .setURL('https://manganelo.link/manga/emergence/')
        .setDescription('**Цитата:** `O-oh shit! I"m cumming!`\n**----------------------------------------------**')
        .setImage('https://media.discordapp.net/attachments/731908428200673370/765598801863245824/1602603367611927366088.jpg?width=319&height=461')
        .setFooter('Внимание!', 'https://image.flaticon.com/icons/png/512/83/83580.png')
    const randomWords = [
        "1",
        "2",
        "3"
      ];
      
      const randomIndex = Math.floor(Math.random() * randomWords.length);
      const word = randomWords[randomIndex];
      if (word == 1) {
        message.author.send(exampleEmbed);
      } else if (word == 2) {
          message.author.send(exampleEmbed1);
      }   else if (word == 3 ) {
          message.author.send(exampleEmbed2);
      }      else if (word == 4) {
             message.channel.send();
      }         else if (word == 5) {  
                message.channel.send();
      }           else if (word == 6) {
                   message.channel.send();
      }             else if (word == 7) { 
                    message.channel.send();
      }               else if (word == 8) {
                      message.channel.send();
      }                 else if (word == 9) {
                        message.channel.send();
      }                   else if (word == 10) {
                          message.channel.send();
      }                     else if (word ==11) {
                            message.channel.send();
      }                       else if (word == 12) {
                              message.channel.send();
      }                         else if (word == 13) {
                                message.channel.send();
      }                           else if (word == 14) {
                                  message.channel.send();
      }                             else if (word == 15) {
                                    message.channel.send();
      }                               else if (word == 16) {
                                      message.channel.send();
      }                                 else if (word == 17) {
                                        message.channel.send();                               
      }                                   else if (word == 18) {
                                          message.channel.send();
      }                                     else if (word == 19) {
                                            message.channel.send();
      }                                       else if (word == 20) {
                                              message.channel.send();
      }                                         else if (word == 21) {
                                                message.channel.send();
      }                                           else if (word == 22) {
                                                  message.channel.send();
      }                                             else if (word == 23) {
                                                    message.channel.send();
      }                                               else {
                                                      message.channel.send();
      }                             
    } 
