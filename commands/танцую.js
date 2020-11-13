const Discord = require('discord.js');

module.exports.run = (bot, message, args, database, member) => {
    message.channel.bulkDelete(1)

    if (database.getAccount(message.member).lang !== 1) return 
    
    const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} решил(а) потанцевать!`)
        .setImage('https://media.giphy.com/media/W6dHvprT7oks6BpX5R/giphy.gif')
    const exemEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`Воу! ${message.author.tag}, круто танцуешь!`)
        .setImage('https://media.giphy.com/media/11lxCeKo6cHkJy/giphy.gif')
    const exemdEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} танцует!`)
        .setImage('https://media.giphy.com/media/vTqhQldEfAY6c/giphy.gif')
    const exemaEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} ворвался(ась) на танцпол!`)
        .setImage('https://media.giphy.com/media/J3PFjRm7LB28w/giphy.gif')
    const exembEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} бросился(ась) в пляс!`)
        .setImage('https://media.giphy.com/media/RLJxQtX8Hs7XytaoyX/giphy.gif')
    const exemcEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} танцует!`)
        .setImage('https://media.giphy.com/media/HZboJ5Pkti9k4/giphy.gif')
    const exemeEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} танцует!`)
        .setImage('https://media.giphy.com/media/3o7bul4bNw60uhhQyI/giphy.gif')
    const exemfEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} отжигает!`)
        .setImage('https://media.giphy.com/media/1aAO2OlmDOZUs/giphy.gif')
    const exemgEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} решил(а) размяться.`)
        .setImage('https://media.giphy.com/media/1448TKNMMg4BFu/giphy.gif')
    const exemhEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} танцует...тектоник?!`)
        .setImage('https://media.giphy.com/media/b7l5cvG94cqo8/giphy.gif')
    const exemiEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} танцует!`)
        .setImage('https://media.giphy.com/media/m2eEV0a7DWgHm/giphy.gif')
    const exemjEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} танцует!`)
        .setImage('https://media.giphy.com/media/YaTE7QSUtc4co/giphy.gif')
    const exemkEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} не устает танцевать!`)
        .setImage('https://media.giphy.com/media/ERITeC4vJCEne/giphy.gif')
    const exemlEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} твой танец великолепен!`)
        .setImage('https://media.giphy.com/media/2UvR8rSEowSM8/giphy.gif')
    const exemnEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} твой танец заразителен!`)
        .setImage('https://media.giphy.com/media/EW3CTnkH6uy3K/giphy.gif')

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
        "15"
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
      }                             else {
                                    message.channel.send(exemnEmbed);
      }
    }; 
