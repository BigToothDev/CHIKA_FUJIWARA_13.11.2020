const Discord = require('discord.js');

module.exports.run = (bot, message, args, database, member) => {
    message.channel.bulkDelete(1)

    if (database.getAccount(message.member).lang !== 1) return 

    let member1 = message.guild.member(message.mentions.users.first() || message.guild.members.cache.find(m => m.user.username == args[0] || m.id == args[0]))
    if (!member1) return message.channel.send('```Укажите существующего пользователя```')
    let pl1 = `${message.author.tag}`;
    let pl2 = `${member1.user.tag}`;
    let pl3 = (pl1 == pl2)
    if (pl3) return message.channel.send('```Вы не можете ударить себя!```')
    let xp = `${(database.getAccount(message.member)).xp}`;
    let xp1 = (xp >= 601);
    if (!xp1) return message.channel.send('```Недостаточно опыта для использования команды!```')
    const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} ударил(а) ${member1.user.tag} !`)
        .setImage('https://media.giphy.com/media/Gf3AUz3eBNbTW/giphy.gif')
    const exemEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} ударил(а) ${member1.user.tag} !`)
        .setImage('https://media.giphy.com/media/xUO4t2gkWBxDi/giphy.gif')
    const exemdEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} ударил(а) ${member1.user.tag} !`)
        .setImage('https://media.giphy.com/media/Zau0yrl17uzdK/giphy.gif')
    const exemaEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} ударил(а) ${member1.user.tag} !`)
        .setImage('https://media.giphy.com/media/AlsIdbTgxX0LC/giphy.gif')
    const exembEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} ударил(а) ${member1.user.tag} !`)
        .setImage('https://media.giphy.com/media/tX29X2Dx3sAXS/giphy.gif')
    const exemcEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} ударил(а) ${member1.user.tag} !`)
        .setImage('https://media.giphy.com/media/m6etefcEsTANa/giphy.gif')
    const exemeEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} ударил(а) ${member1.user.tag} !`)
        .setImage('https://media.giphy.com/media/xUNd9HZq1itMkiK652/giphy.gif')
    const exemfEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} ударил(а) ${member1.user.tag} !`)
        .setImage('https://media.giphy.com/media/k1uYB5LvlBZqU/giphy.gif')
    const exemgEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} ударил(а) ${member1.user.tag} !`)
        .setImage('https://media.giphy.com/media/u2LJ0n4lx6jF6/giphy.gif')
    const exemhEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} ударил(а) ${member1.user.tag} !`)
        .setImage('https://media.giphy.com/media/9U5J7JpaYBr68/giphy.gif')
    const exemiEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} ударил(а) ${member1.user.tag} !`)
        .setImage('https://media.giphy.com/media/DwY3xJsvGhvnW/giphy.gif')
    const exemjEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} ударил(а) ${member1.user.tag} !`)
        .setImage('https://media.giphy.com/media/htHTvYB0l5Isw/giphy.gif')
    const exemkEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} ударил(а) ${member1.user.tag} !`)
        .setImage('https://media.giphy.com/media/LB1kIoSRFTC2Q/giphy.gif')
    const exemlEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} ударил(а) ${member1.user.tag} !`)
        .setImage('https://media.giphy.com/media/2mONj5HKI93Fe/giphy.gif')
    const exemnEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} ударил(а) ${member1.user.tag} !`)
        .setImage('https://media.giphy.com/media/FdinyvXRa8zekBkcdK/giphy.gif')
    const exemoEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} ударил(а) ${member1.user.tag} !`)
        .setImage('https://media.giphy.com/media/OQ7phVSLg3xio/giphy.gif')
    const exempEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} ударил(а) ${member1.user.tag} !`)
        .setImage('https://media.giphy.com/media/gjh0fUuvH2hTG/giphy.gif')
    const exemqEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} ударил(а) ${member1.user.tag} !`)
        .setImage('https://media.giphy.com/media/wOly8pa4s4W88/giphy.gif')
    const exemrEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} ударил(а) ${member1.user.tag} !`)
        .setImage('https://media.giphy.com/media/LgHAAbUQc0WGI/giphy.gif')
    const exemsEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} ударил(а) ${member1.user.tag} !`)
        .setImage('https://media.giphy.com/media/KmG26GNmdWOUE/giphy.gif')
    const exemtEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} ударил(а) ${member1.user.tag} !`)
        .setImage('https://media.giphy.com/media/ybPCzu6pNLj7a/giphy.gif')
    const exemuEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} ударил(а) ${member1.user.tag} !`)
        .setImage('https://media.giphy.com/media/sYmAWDZPTh8re/giphy.gif')
    const exemvEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} ударил(а) ${member1.user.tag} !`)
        .setImage('https://media.giphy.com/media/KI14N7D3AJ4SA/giphy.gif')
    const exemwEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} ударил(а) ${member1.user.tag} !`)
        .setImage('https://media.giphy.com/media/vxXLJxa2gDaord2eib/giphy.gif')
    const exemxEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} ударил(а) ${member1.user.tag} !`)
        .setImage('https://media.giphy.com/media/1pIuZBbO1cbO8/giphy.gif')
    const exemyEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} ударил(а) ${member1.user.tag} !`)
        .setImage('https://media.giphy.com/media/6EBqHQ3asZ2rm/giphy.gif')
    const exemzEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} ударил(а) ${member1.user.tag} !`)
        .setImage('https://media.giphy.com/media/kfILZyRccfreE/giphy.gif')

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