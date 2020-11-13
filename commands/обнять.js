const Discord = require('discord.js');

module.exports.run = (bot, message, args, database, member) => {
    message.channel.bulkDelete(1)

    if (database.getAccount(message.member).lang !== 1) return 
 
    let member1 = message.guild.member(message.mentions.users.first() || message.guild.members.cache.find(m => m.user.username == args[0] || m.id == args[0]))
    if (!member1) return message.channel.send('```Укажите существующего пользователя```')
    let pl1 = `${message.author.tag}`;
    let pl2 = `${member1.user.tag}`;
    let pl3 = (pl1 == pl2)
    if (pl3) return message.channel.send('```Вы не можете обнять себя!```')
    let xp = `${(database.getAccount(message.member)).xp}`;
    let xp1 = (xp >= 401);
    if (!xp1) return message.channel.send('```Недостаточно опыта для использования команды!```')
    const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} обнял(а) ${member1.user.tag} !`)
        .setImage('https://media.giphy.com/media/PHZ7v9tfQu0o0/giphy.gif')
    const exemEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} обнял(а) ${member1.user.tag} !`)
        .setImage('https://media.giphy.com/media/GMFUrC8E8aWoo/giphy.gif')
    const exemdEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} обнял(а) ${member1.user.tag} !`)
        .setImage('https://media.giphy.com/media/LIqFOpO9Qh0uA/giphy.gif')
    const exemaEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} обнял(а) ${member1.user.tag} !`)
        .setImage('https://media.giphy.com/media/BXrwTdoho6hkQ/giphy.gif')
    const exembEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} обнял(а) ${member1.user.tag} !`)
        .setImage('https://media.giphy.com/media/l2QDM9Jnim1YVILXa/giphy.gif')
    const exemcEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} обнял(а) ${member1.user.tag} !`)
        .setImage('https://media.giphy.com/media/3bqtLDeiDtwhq/giphy.gif')
    const exemeEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} обнял(а) ${member1.user.tag} !`)
        .setImage('https://media.giphy.com/media/xJlOdEYy0r7ZS/giphy.gif')
    const exemfEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} обнял(а) ${member1.user.tag} !`)
        .setImage('https://media.giphy.com/media/q3kYEKHyiU4kU/giphy.gif')
    const exemgEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} обнял(а) ${member1.user.tag} !`)
        .setImage('https://media.giphy.com/media/IRUb7GTCaPU8E/giphy.gif')
    const exemhEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} обнял(а) ${member1.user.tag} !`)
        .setImage('https://media.giphy.com/media/od5H3PmEG5EVq/giphy.gif')
    const exemiEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} обнял(а) ${member1.user.tag} !`)
        .setImage('https://media.giphy.com/media/5eyhBKLvYhafu/giphy.gif')
    const exemjEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} обнял(а) ${member1.user.tag} !`)
        .setImage('https://media.giphy.com/media/aD1fI3UUWC4/giphy.gif')
    const exemkEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} обнял(а) ${member1.user.tag} !`)
        .setImage('https://media.giphy.com/media/wSY4wcrHnB0CA/giphy.gif')
    const exemlEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} обнял(а) ${member1.user.tag} !`)
        .setImage('https://media.giphy.com/media/lrr9rHuoJOE0w/giphy.gif')
    const exemnEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} обнял(а) ${member1.user.tag} !`)
        .setImage('https://media.giphy.com/media/u9BxQbM5bxvwY/giphy.gif')
    const exemoEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} обнял(а) ${member1.user.tag} !`)
        .setImage('https://media.giphy.com/media/NTBFwChJg9lKM/giphy.gif')
    const exempEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} обнял(а) ${member1.user.tag} !`)
        .setImage('https://media.giphy.com/media/3bqtLDeiDtwhq/giphy.gif')
    const exemqEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} обнял(а) ${member1.user.tag} !`)
        .setImage('https://media.giphy.com/media/PHZ7v9tfQu0o0/giphy.gif')
    const exemrEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} обнял(а) ${member1.user.tag} !`)
        .setImage('https://media.giphy.com/media/RLW8eXPdTXs3H1O3gu/giphy.gif')
    const exemsEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} обнял(а) ${member1.user.tag} !`)
        .setImage('https://media.giphy.com/media/NPN9MOH0MbIwE/giphy.gif')
    const exemtEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} обнял(а) ${member1.user.tag} !`)
        .setImage('https://media.giphy.com/media/5eyhBKLvYhafu/giphy.gif')
    const exemuEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} обнял(а) ${member1.user.tag} !`)
        .setImage('https://media.giphy.com/media/143v0Z4767T15e/giphy.gif')
    const exemvEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} обнял(а) ${member1.user.tag} !`)
        .setImage('https://media.giphy.com/media/VXP04aclCaUfe/giphy.gif')
    const exemwEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} обнял(а) ${member1.user.tag} !`)
        .setImage('https://media.giphy.com/media/2z0vIXgRbRrb2/giphy.gif')
    const exemxEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} обнял(а) ${member1.user.tag} !`)
        .setImage('https://media.giphy.com/media/adTDFaG92ulxu/giphy.gif')
    const exemyEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} обнял(а) ${member1.user.tag} !`)
        .setImage('https://media.giphy.com/media/5ksnfmlzPFHaw/giphy.gif')
    const exemzEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} обнял(а) ${member1.user.tag} !`)
        .setImage('https://media.giphy.com/media/bQATeUxCoCFr2/giphy.gif')

    const randomWords = [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "21",
        "22",
        "23",
        "24",
        "25",
        "26",
        "27"
      ];
      
      const randomIndex = Math.floor(Math.random() * randomWords.length);
      const word = randomWords[randomIndex];
      if (word == 1) {
          message.channel.send(exampleEmbed);
      } else if (word == 2) {
          message.channel.send(exemEmbed);
      }   else if (word == 3 ) {
          message.channel.send(exemdEmbed);
      }      else if (word == 4) {
             message.channel.send(exemaEmbed);
      }         else if (word == 5) {  
                message.channel.send(exembEmbed);
      }           else if (word == 6) {
                   message.channel.send(exemcEmbed);
      }             else if (word == 7) { 
                    message.channel.send(exemeEmbed);
      }               else if (word == 8) {
                      message.channel.send(exemfEmbed);
      }                 else if (word == 9) {
                        message.channel.send(exemgEmbed);
      }                   else if (word == 10) {
                          message.channel.send(exemhEmbed);
      }                     else if (word == 11) {
                            message.channel.send(exemiEmbed);
      }                       else if (word == 12) {
                              message.channel.send(exemjEmbed);
      }                         else if (word == 13) {
                                message.channel.send(exemkEmbed);
      }                           else if (word == 14) {
                                  message.channel.send(exemlEmbed);
      }                             else if (word == 15) {
                                    message.channel.send(exemnEmbed);
      }                               else if (word == 16) {
                                      message.channel.send(exemoEmbed);
      }                                 else if (word == 17) {
                                        message.channel.send(exempEmbed);                               
      }                                   else if (word == 18) {
                                          message.channel.send(exemqEmbed);
      }                                     else if (word == 19) {
                                            message.channel.send(exemrEmbed);
      }                                       else if (word == 20) {
                                              message.channel.send(exemsEmbed);
      }                                         else if (word == 21) {
                                                message.channel.send(exemtEmbed);
      }                                           else if (word == 22) {
                                                  message.channel.send(exemuEmbed);
      }                                             else if (word == 23) {
                                                    message.channel.send(exemvEmbed);
      }                                               else if (word == 24) {
                                                      message.channel.send(exemwEmbed);
      }                                                 else if (word == 25) {
                                                        message.channel.send(exemxEmbed);
      }                                                   else if (word == 26) {
                                                          message.channel.send(exemyEmbed);
      }                                                     else {
                                                            message.channel.send(exemzEmbed);
      }
};
