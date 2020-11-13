const Discord = require('discord.js');

module.exports.run = (bot, message, args, database, member) => {
    message.channel.bulkDelete(1)
    
    if (database.getAccount(message.member).lang !== 1) return 
    
    const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} грустит...`)
        .setImage('https://media.giphy.com/media/ArLxZ4PebH2Ug/giphy.gif')
    const exemEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} грустит...`)
        .setImage('https://media.giphy.com/media/BSxFhxneZPCvK/giphy.gif')
    const exemdEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} грустит...`)
        .setImage('https://media.giphy.com/media/h6C6f4phY7MU8/giphy.gif')
    const exemaEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} грустит...`)
        .setImage('https://media.giphy.com/media/Bvv6h2QbXPdW8/giphy.gif')
    const exembEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} грустит...`)
        .setImage('https://media.giphy.com/media/ikoUFi1tijWZG/giphy.gif')
    const exemcEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} грустит...`)
        .setImage('https://media.giphy.com/media/TRgyI2f0hRHBS/giphy.gif')
    const exemeEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} грустит...`)
        .setImage('https://media.giphy.com/media/3qYZ2RnKW6veM/giphy.gif')
    const exemfEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} грустит...`)
        .setImage('https://media.giphy.com/media/zHGXhFJCVCbD2/giphy.gif')
    const exemgEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} грустит...`)
        .setImage('https://media.giphy.com/media/wXo9rzjkBBk7m/giphy.gif')
    const exemhEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} грустит...`)
        .setImage('https://media.giphy.com/media/59d1zo8SUSaUU/giphy.gif')
    const exemiEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} грустит...`)
        .setImage('https://media.giphy.com/media/qscdhWs5o3yb6/giphy.gif')
    const exemjEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} грустит...`)
        .setImage('https://media.giphy.com/media/shVJpcnY5MZVK/giphy.gif')
    const exemkEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} грустит...`)
        .setImage('https://media.giphy.com/media/Ui7MfO6OaLz4k/giphy.gif')
    const exemlEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} грустит...`)
        .setImage('https://media.giphy.com/media/s73JnHowB5bOg/giphy.gif')
    const exemnEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} грустит...`)
        .setImage('https://media.giphy.com/media/cUl8fuIG75QWs/giphy.gif')
    const exemoEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} грустит...`)
        .setImage('https://media.giphy.com/media/1hMJTkDXPTBiU/giphy.gif')
    const exempEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} грустит...`)
        .setImage('https://media.giphy.com/media/tqqhw7w4HXCDu/giphy.gif')
    const exemqEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} грустит...`)
        .setImage('https://media.giphy.com/media/dYo5SsWTzHu8w/giphy.gif')
    const exemrEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} грустит...`)
        .setImage('https://media.giphy.com/media/4pk6ba2LUEMi4/giphy.gif')
    const exemsEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} грустит...`)
        .setImage('https://media.giphy.com/media/WMs5Nx50lrsGI/giphy.gif')
    const exemtEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} грустит...`)
        .setImage('https://media.giphy.com/media/4iusP4Pbf1L8c/giphy.gif')
    const exemuEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} грустит...`)
        .setImage('https://media.giphy.com/media/oAW9QPkQwJqJq/giphy.gif')
    const exemvEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} грустит...`)
        .setImage('https://media.giphy.com/media/WfhE1qyy9vGiA/giphy.gif')
    const exemwEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} грустит...`)
        .setImage('https://media.giphy.com/media/RBdwNQim7Y6HK/giphy.gif')
    const exemxEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} грустит...`)
        .setImage('https://media.giphy.com/media/5t4gifYFrcwAcxt6t3/giphy.gif')
    const exemyEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} грустит...`)
        .setImage('https://media.giphy.com/media/8Yj8Qaev0TnA4/giphy.gif')
    const exemzEmbed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setAuthor(`${message.author.tag} грустит...`)
        .setImage('https://media.giphy.com/media/CKEIVURHzGXGE/giphy.gif')

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