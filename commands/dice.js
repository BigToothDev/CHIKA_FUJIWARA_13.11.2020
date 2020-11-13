const Discord = require('discord.js');

module.exports.run = (bot, message, args, database, member) => {
    message.channel.bulkDelete(1)

    if (database.getAccount(message.member).lang !== 0) return 

    let member1 = message.guild.member(message.mentions.users.first() || message.guild.members.cache.find(m => m.user.username == args[0] || m.id == args[0]))
    if (!member1) return message.channel.send('```This user does not exist!```')
    let pl1 = `${message.author.id}`;
    let pl2 = `${member1.user.id}`;
    let pl3 = (pl1 == pl2)
    if (pl3) return message.channel.send('```You can"t play with yourself!```')
    let xp = `${(database.getAccount(message.member)).xp}`;
    let xp1 = (xp >= 601);
    if (!xp1) return message.channel.send('```Not enough XP to use this command!```')

      const exampleEmbed1 = new Discord.MessageEmbed()
      .setColor('#808080')
      .setDescription(`**User** <@${message.author.id}> **has - 1 ;**\n**User **<@${member1.user.id}>** has - 1 .**\n**----------------------------------------**\nResults: Draw`)
      .setAuthor('Dice game 🎲')
      .setTimestamp()
      const exampleEmbed2 = new Discord.MessageEmbed()
      .setColor('#808080')
      .setDescription(`**User** <@${message.author.id}> **has - 1 ;**\n**User **<@${member1.user.id}>** has - 2 .**\n**----------------------------------------**\nResults: <@${member1.user.id}> won.`)
      .setAuthor('Dice game 🎲')
      .setTimestamp()
      const exampleEmbed3 = new Discord.MessageEmbed()
      .setColor('#808080')
      .setDescription(`**User** <@${message.author.id}> **has - 1 ;**\n**User **<@${member1.user.id}>** has - 3 .**\n**----------------------------------------**\nResults: <@${member1.user.id}> won.`)
      .setAuthor('Dice game 🎲')
      .setTimestamp()
      const exampleEmbed4 = new Discord.MessageEmbed()
      .setColor('#808080')
      .setDescription(`**User** <@${message.author.id}> **has - 1 ;**\n**User **<@${member1.user.id}>** has - 4 .**\n**----------------------------------------**\nResults: <@${member1.user.id}> won.`)
      .setAuthor('Dice game 🎲')
      .setTimestamp()
      const exampleEmbed5 = new Discord.MessageEmbed()
      .setColor('#808080')
      .setDescription(`**User** <@${message.author.id}> **has - 1 ;**\n**User **<@${member1.user.id}>** has - 5 .**\n**----------------------------------------**\nResults: <@${member1.user.id}> won.`)
      .setAuthor('Dice game 🎲')
      .setTimestamp()
      const exampleEmbed6 = new Discord.MessageEmbed()
      .setColor('#808080')
      .setDescription(`**User** <@${message.author.id}> **has - 1 ;**\n**User **<@${member1.user.id}>** has - 6 .**\n**----------------------------------------**\nResults: <@${member1.user.id}> won.`)
      .setAuthor('Dice game 🎲')
      .setTimestamp()
      const exampleEmbed7 = new Discord.MessageEmbed()
      .setColor('#808080')
      .setDescription(`**User** <@${message.author.id}> **has - 2 ;**\n**User **<@${member1.user.id}>** has - 1 .**\n**----------------------------------------**\nResults: <@${message.author.id}>`)
      .setAuthor('Dice game 🎲')
      .setTimestamp()
      const exampleEmbed8 = new Discord.MessageEmbed()
      .setColor('#808080')
      .setDescription(`**User** <@${message.author.id}> **has - 2 ;**\n**User **<@${member1.user.id}>** has - 2 .**\n**----------------------------------------**\nResults: Draw`)
      .setAuthor('Dice game 🎲')
      .setTimestamp()
      const exampleEmbed9 = new Discord.MessageEmbed()
      .setColor('#808080')
      .setDescription(`**User** <@${message.author.id}> **has - 2 ;**\n**User **<@${member1.user.id}>** has - 3 .**\n**----------------------------------------**\nResults: <@${member1.user.id}> won.`)
      .setAuthor('Dice game 🎲')
      .setTimestamp()
      const exampleEmbed10 = new Discord.MessageEmbed()
      .setColor('#808080')
      .setDescription(`**User** <@${message.author.id}> **has - 2 ;**\n**User **<@${member1.user.id}>** has - 4 .**\n**----------------------------------------**\nResults: <@${member1.user.id}> won.`)
      .setAuthor('Dice game 🎲')
      .setTimestamp()
      const exampleEmbed11 = new Discord.MessageEmbed()
      .setColor('#808080')
      .setDescription(`**User** <@${message.author.id}> **has - 2 ;**\n**User **<@${member1.user.id}>** has - 5 .**\n**----------------------------------------**\nResults: <@${member1.user.id}> won.`)
      .setAuthor('Dice game 🎲')
      .setTimestamp()
      const exampleEmbed12 = new Discord.MessageEmbed()
      .setColor('#808080')
      .setDescription(`**User** <@${message.author.id}> **has - 2 ;**\n**User **<@${member1.user.id}>** has - 6 .**\n**----------------------------------------**\nResults: <@${member1.user.id}> won.`)
      .setAuthor('Dice game 🎲')
      .setTimestamp()
      const exampleEmbed13 = new Discord.MessageEmbed()
      .setColor('#808080')
      .setDescription(`**User** <@${message.author.id}> **has - 3 ;**\n**User **<@${member1.user.id}>** has - 1 .**\n**----------------------------------------**\nResults: <@${message.author.id}>`)
      .setAuthor('Dice game 🎲')
      .setTimestamp()
      const exampleEmbed14 = new Discord.MessageEmbed()
      .setColor('#808080')
      .setDescription(`**User** <@${message.author.id}> **has - 3 ;**\n**User **<@${member1.user.id}>** has - 2 .**\n**----------------------------------------**\nResults: <@${message.author.id}>`)
      .setAuthor('Dice game 🎲')
      .setTimestamp()
      const exampleEmbed15 = new Discord.MessageEmbed()
      .setColor('#808080')
      .setDescription(`**User** <@${message.author.id}> **has - 3 ;**\n**User **<@${member1.user.id}>** has - 3 .**\n**----------------------------------------**\nResults: Draw`)
      .setAuthor('Dice game 🎲')
      .setTimestamp()
      const exampleEmbed16 = new Discord.MessageEmbed()
      .setColor('#808080')
      .setDescription(`**User** <@${message.author.id}> **has - 3 ;**\n**User **<@${member1.user.id}>** has - 4 .**\n**----------------------------------------**\nResults: <@${member1.user.id}> won.`)
      .setAuthor('Dice game 🎲')
      .setTimestamp()
      const exampleEmbed17 = new Discord.MessageEmbed()
      .setColor('#808080')
      .setDescription(`**User** <@${message.author.id}> **has - 3 ;**\n**User **<@${member1.user.id}>** has - 5 .**\n**----------------------------------------**\nResults: <@${member1.user.id}> won.`)
      .setAuthor('Dice game 🎲')
      .setTimestamp()
      const exampleEmbed18 = new Discord.MessageEmbed()
      .setColor('#808080')
      .setDescription(`**User** <@${message.author.id}> **has - 3 ;**\n**User **<@${member1.user.id}>** has - 6 .**\n**----------------------------------------**\nResults: <@${member1.user.id}> won.`)
      .setAuthor('Dice game 🎲')
      .setTimestamp()
      const exampleEmbed19 = new Discord.MessageEmbed()
      .setColor('#808080')
      .setDescription(`**User** <@${message.author.id}> **has - 4 ;**\n**User **<@${member1.user.id}>** has - 1 .**\n**----------------------------------------**\nResults: <@${message.author.id}>`)
      .setAuthor('Dice game 🎲')
      .setTimestamp()
      const exampleEmbed20 = new Discord.MessageEmbed()
      .setColor('#808080')
      .setDescription(`**User** <@${message.author.id}> **has - 4 ;**\n**User **<@${member1.user.id}>** has - 2 .**\n**----------------------------------------**\nResults: <@${message.author.id}>`)
      .setAuthor('Dice game 🎲')
      .setTimestamp()
      const exampleEmbed21 = new Discord.MessageEmbed()
      .setColor('#808080')
      .setDescription(`**User** <@${message.author.id}> **has - 4 ;**\n**User **<@${member1.user.id}>** has - 3 .**\n**----------------------------------------**\nResults: <@${message.author.id}>`)
      .setAuthor('Dice game 🎲')
      .setTimestamp()
      const exampleEmbed22 = new Discord.MessageEmbed()
      .setColor('#808080')
      .setDescription(`**User** <@${message.author.id}> **has - 4 ;**\n**User **<@${member1.user.id}>** has - 4 .**\n**----------------------------------------**\nResults: Draw`)
      .setAuthor('Dice game 🎲')
      .setTimestamp()
      const exampleEmbed23 = new Discord.MessageEmbed()
      .setColor('#808080')
      .setDescription(`**User** <@${message.author.id}> **has - 4 ;**\n**User **<@${member1.user.id}>** has - 5 .**\n**----------------------------------------**\nResults: <@${member1.user.id}> won.`)
      .setAuthor('Dice game 🎲')
      .setTimestamp()
      const exampleEmbed24 = new Discord.MessageEmbed()
      .setColor('#808080')
      .setDescription(`**User** <@${message.author.id}> **has - 4 ;**\n**User **<@${member1.user.id}>** has - 6 .**\n**----------------------------------------**\nResults: <@${member1.user.id}> won.`)
      .setAuthor('Dice game 🎲')
      .setTimestamp()
      const exampleEmbed25 = new Discord.MessageEmbed()
      .setColor('#808080')
      .setDescription(`**User** <@${message.author.id}> **has - 5 ;**\n**User **<@${member1.user.id}>** has - 1 .**\n**----------------------------------------**\nResults: <@${message.author.id}>`)
      .setAuthor('Dice game 🎲')
      .setTimestamp()
      const exampleEmbed26 = new Discord.MessageEmbed()
      .setColor('#808080')
      .setDescription(`**User** <@${message.author.id}> **has - 5 ;**\n**User **<@${member1.user.id}>** has - 2 .**\n**----------------------------------------**\nResults: <@${message.author.id}>`)
      .setAuthor('Dice game 🎲')
      .setTimestamp()
      const exampleEmbed27 = new Discord.MessageEmbed()
      .setColor('#808080')
      .setDescription(`**User** <@${message.author.id}> **has - 5 ;**\n**User **<@${member1.user.id}>** has - 3 .**\n**----------------------------------------**\nResults: <@${message.author.id}>`)
      .setAuthor('Dice game 🎲')
      .setTimestamp()
      const exampleEmbed28 = new Discord.MessageEmbed()
      .setColor('#808080')
      .setDescription(`**User** <@${message.author.id}> **has - 5 ;**\n**User **<@${member1.user.id}>** has - 4 .**\n**----------------------------------------**\nResults: <@${message.author.id}>`)
      .setAuthor('Dice game 🎲')
      .setTimestamp()
      const exampleEmbed29 = new Discord.MessageEmbed()
      .setColor('#808080')
      .setDescription(`**User** <@${message.author.id}> **has - 5 ;**\n**User **<@${member1.user.id}>** has - 5 .**\n**----------------------------------------**\nResults: Draw`)
      .setAuthor('Dice game 🎲')
      .setTimestamp()
      const exampleEmbed30 = new Discord.MessageEmbed()
      .setColor('#808080')
      .setDescription(`**User** <@${message.author.id}> **has - 5 ;**\n**User **<@${member1.user.id}>** has - 6 .**\n**----------------------------------------**\nResults: <@${member1.user.id}> won.`)
      .setAuthor('Dice game 🎲')
      .setTimestamp()
      const exampleEmbed31 = new Discord.MessageEmbed()
      .setColor('#808080')
      .setDescription(`**User** <@${message.author.id}> **has - 6 ;**\n**User **<@${member1.user.id}>** has - 1 .**\n**----------------------------------------**\nResults: <@${message.author.id}>`)
      .setAuthor('Dice game 🎲')
      .setTimestamp()
      const exampleEmbed32 = new Discord.MessageEmbed()
      .setColor('#808080')
      .setDescription(`**User** <@${message.author.id}> **has - 6 ;**\n**User **<@${member1.user.id}>** has - 2 .**\n**----------------------------------------**\nResults: <@${message.author.id}>`)
      .setAuthor('Dice game 🎲')
      .setTimestamp()
      const exampleEmbed33 = new Discord.MessageEmbed()
      .setColor('#808080')
      .setDescription(`**User** <@${message.author.id}> **has - 6 ;**\n**User **<@${member1.user.id}>** has - 3 .**\n**----------------------------------------**\nResults: <@${message.author.id}>`)
      .setAuthor('Dice game 🎲')
      .setTimestamp()
      const exampleEmbed34 = new Discord.MessageEmbed()
      .setColor('#808080')
      .setDescription(`**User** <@${message.author.id}> **has - 6 ;**\n**User **<@${member1.user.id}>** has - 4 .**\n**----------------------------------------**\nResults: <@${message.author.id}>`)
      .setAuthor('Dice game 🎲')
      .setTimestamp()
      const exampleEmbed35 = new Discord.MessageEmbed()
      .setColor('#808080')
      .setDescription(`**User** <@${message.author.id}> **has - 6 ;**\n**User **<@${member1.user.id}>** has - 5 .**\n**----------------------------------------**\nResults: <@${message.author.id}>`)
      .setAuthor('Dice game 🎲')
      .setTimestamp()
      const exampleEmbed36 = new Discord.MessageEmbed()
      .setColor('#808080')
      .setDescription(`**User** <@${message.author.id}> **has - 6 ;**\n**User **<@${member1.user.id}>** has - 6 .**\n**----------------------------------------**\nResults: Draw`)
      .setAuthor('Dice game 🎲')
      .setTimestamp()

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
        "27",
        "28",
        "29",
        "30",
        "31",
        "32",
        "33",
        "34",
        "35",
        "36"
      ];

      const randomIndex = Math.floor(Math.random() * randomWords.length);
      const word = randomWords[randomIndex];

    if (word == 1) {
        message.channel.send(exampleEmbed1);
    } else if (word == 2) {
        message.channel.send(exampleEmbed2);
    }   else if (word == 3 ) {
        message.channel.send(exampleEmbed3);
    }      else if (word == 4) {
           message.channel.send(exampleEmbed4);
    }         else if (word == 5) {  
              message.channel.send(exampleEmbed5);
    }           else if (word == 6) {
                 message.channel.send(exampleEmbed6);
    }             else if (word == 7) {
                  message.channel.send(exampleEmbed7);
    }               else if (word == 8) {
                    message.channel.send(exampleEmbed8);
    }                 else if (word == 9) {
                      message.channel.send(exampleEmbed9);
    }                   else if (word == 10) {
                        message.channel.send(exampleEmbed10);
    }                     else if (word == 11) {
                          message.channel.send(exampleEmbed11);
    }                       else if (word == 12) {
                            message.channel.send(exampleEmbed12);
    }                         else if (word == 13) {
                              message.channel.send(exampleEmbed13);
    }                           else if (word == 14) {
                                message.channel.send(exampleEmbed14);
    }                             else if (word == 15) {
                                  message.channel.send(exampleEmbed15);
    }                               else if (word == 16) {
                                    message.channel.send(exampleEmbed16);
    }                                 else if (word == 17) {
                                      message.channel.send(exampleEmbed17);
    }                                   else if (word == 18) {
                                        message.channel.send(exampleEmbed18);
    }                                     else if (word == 19) {
                                          message.channel.send(exampleEmbed19);
    }                                       else if (word == 20) {
                                            message.channel.send(exampleEmbed20);
    }                                         else if (word == 21) {
                                              message.channel.send(exampleEmbed21);
    }                                           else if (word == 22) {
                                                message.channel.send(exampleEmbed22);
    }                                             else if (word == 23) {
                                                  message.channel.send(exampleEmbed23);
    }                                               else if (word == 24) {
                                                    message.channel.send(exampleEmbed24);
    }                                                 else if (word == 25) {
                                                      message.channel.send(exampleEmbed25);
    }                                                   else if (word == 26) {
                                                        message.channel.send(exampleEmbed26);
    }                                                     else if (word == 27) {
                                                          message.channel.send(exampleEmbed27);
    }                                                       else if (word == 28) {
                                                            message.channel.send(exampleEmbed28);
    }                                                         else if (word == 29) {
                                                              message.channel.send(exampleEmbed29);
    }                                                           else if (word == 30) {
                                                                message.channel.send(exampleEmbed30);
    }                                                             else if (word == 31) {
                                                                  message.channel.send(exampleEmbed31);
    }                                                               else if (word == 32) {
                                                                    message.channel.send(exampleEmbed32);
    }                                                                 else if (word == 33) {
                                                                      message.channel.send(exampleEmbed33);
    }                                                                   else if (word == 34) {
                                                                        message.channel.send(exampleEmbed34);
    }                                                                     else if (word == 34) {
                                                                          message.channel.send(exampleEmbed35);
    }                                                                       else {
                                                                            message.channel.send(exampleEmbed36);
    }
      

}