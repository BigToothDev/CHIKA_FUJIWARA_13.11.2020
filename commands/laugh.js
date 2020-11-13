const Discord = require('discord.js');

module.exports.run = (bot, message, args, database, member) => {
    message.channel.bulkDelete(1)

    if (database.getAccount(message.member).lang !== 0) return 
    
    const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} is laughing!`)
        .setImage('https://media.giphy.com/media/TORQpT78yQR5S/giphy.gif')
    const exemEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} is laughing!`)
        .setImage('https://media.giphy.com/media/pa1WaYStUKyLC/giphy.gif')
    const exemdEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} is laughing!`)
        .setImage('https://media.giphy.com/media/VvvVOKJIogh44/giphy.gif')
    const exemaEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} is laughing!`)
        .setImage('https://media.giphy.com/media/T7Qx28nEdo9NK/giphy.gif')
    const exembEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} is laughing!`)
        .setImage('https://media.giphy.com/media/e20AWoQEoOB2/giphy.gif')
    const exemcEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} is laughing!`)
        .setImage('https://media.giphy.com/media/Yb0sZcOCQdG36/giphy.gif')
    const exemeEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} is laughing!`)
        .setImage('https://media.giphy.com/media/mnBsYB19OQCdy/giphy.gif')
    const exemfEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} is laughing!`)
        .setImage('https://media.giphy.com/media/XLMakNrymMwUg/giphy.gif')
    const exemgEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} is laughing!`)
        .setImage('https://media.giphy.com/media/9tfNjaoyJv7Gw/giphy.gif')
    const exemhEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} is laughing!`)
        .setImage('https://media.giphy.com/media/AngzmmMj4h6zm/giphy.gif')
    const exemiEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} is laughing!`)
        .setImage('https://media.giphy.com/media/B1JKtacZXunqU/giphy.gif')
    const exemjEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} is laughing!`)
        .setImage('https://media.giphy.com/media/12oOQ7b2ftlzpu/giphy.gif')
    const exemkEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} is laughing!`)
        .setImage('https://media.giphy.com/media/2RFqpNVScIWE8/giphy.gif')
    const exemlEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} is laughing!`)
        .setImage('https://media.giphy.com/media/pSRrRaAHHcZgY/giphy.gif')
    const exemnEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} is laughing!`)
        .setImage('https://media.giphy.com/media/zw1LjU07TwWqY/giphy.gif')
    const exemoEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} is laughing!`)
        .setImage('https://media.giphy.com/media/zAViC51fevRTi/giphy.gif')
    const exempEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} is laughing!`)
        .setImage('https://media.giphy.com/media/RCWahfIC5IPew/giphy.gif')
    const exemqEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} is laughing!`)
        .setImage('https://media.giphy.com/media/kXY0CA4v8mKXe/giphy.gif')
    const exemrEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} is laughing!`)
        .setImage('https://media.giphy.com/media/71AsZnvs04FYQ/giphy.gif')
    const exemsEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} is laughing!`)
        .setImage('https://media.giphy.com/media/ff0dv4KMGxjna/giphy.gif')
    const exemtEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} is laughing!`)
        .setImage('https://media.giphy.com/media/N7yaOKW2WKyxa/giphy.gif')
    const exemuEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} is laughing!`)
        .setImage('https://media.giphy.com/media/3ohhwjQ0xL3XFJ4bJu/giphy.gif')
    const exemvEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} is laughing!`)
        .setImage('https://media.giphy.com/media/l4EpdXyNGauTcHovm/giphy.gif')
    const exemwEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} is laughing!`)
        .setImage('https://media.giphy.com/media/1125iX4g0HK276/giphy.gif')
    const exemxEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} is laughing!`)
        .setImage('https://media.giphy.com/media/zviFafViu0VEc/giphy.gif')
    const exemyEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} is laughing!`)
        .setImage('https://media.giphy.com/media/zsxncmlq4LW1i/giphy.gif')
    const exemzEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} is laughing!`)
        .setImage('https://media.giphy.com/media/YmZOBDYBcmWK4/giphy.gif')

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