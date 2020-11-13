const Discord = require('discord.js');

module.exports.run = (bot, message, args, database, member) => {
   message.channel.bulkDelete(1)
   if (database.getAccount(message.member).lang !== 0) return 

    let xp = `${(database.getAccount(message.member)).xp}`;
    let xp1 = (xp-200);
    let xp2 = (xp-400);
    let xp3 = (xp-600);
    let xp4 = (xp-800);
    let xp5 = (xp-1000);
    let xp6 = (xp-1200);
    let xp7 = (xp-1600);
    let xp8 = (xp-2200);
    let xp9 = (xp-2800);
    let xp10 = (xp-3800);
    let xp11 = (xp-4800);
    let xp12 = (xp-7000);

    const exampleEmbed = new Discord.MessageEmbed()
	   .setColor('#99ff99')
       .setDescription(`User: <@${message.author.id}>.\nUser level: **1**.\n\n*Anime character-symbol of the lvl:*\n*(Isla; Plastic Memories)*`)
       .setAuthor('Leveling system', message.author.displayAvatarURL())
       .setFooter(`XP amount: ${(database.getAccount(message.member)).xp}/200 to the next level.`)
       .setImage('https://cs4.pikabu.ru/post_img/2015/10/29/10/1446140732_1335583864.jpeg')
    const examplaEmbed = new Discord.MessageEmbed()
	   .setColor('#99ff99')
       .setDescription(`User: <@${message.author.id}>.\nUser level: **2**.\n\n*Anime character-symbol of the lvl:*\n*(Rika Takanashi; Chūnibyō Demo Koi ga Shitai!)*`)
       .setAuthor('Leveling system', message.author.displayAvatarURL())
       .setFooter(`XP amount: ${xp1}/200 to the next level.`)
       .setImage('https://cs10.pikabu.ru/post_img/2018/09/19/10/1537374246150650642.jpg')
    const examplbEmbed = new Discord.MessageEmbed()
	   .setColor('#99ff99')
       .setDescription(`User: <@${message.author.id}>.\nUser level: **3**.\n\n*Anime character-symbol of the lvl:*\n*(Senko; Sewayaki Kitsune no Senko-san)*`)
       .setAuthor('Leveling system', message.author.displayAvatarURL())
       .setFooter(`XP amount: ${xp2}/200 to the next level.`)
       .setImage('https://cs11.pikabu.ru/post_img/2019/06/03/5/1559546199193759736.jpg')
    const examplcEmbed = new Discord.MessageEmbed()
	   .setColor('#99ff99')
       .setDescription(`User: <@${message.author.id}>.\nUser level: **4**.\n\n*Anime character-symbol of the lvl:*\n*(Isuzu Sento; Amagi Brilliant Park)*`)
       .setAuthor('Leveling system', message.author.displayAvatarURL())
       .setFooter(`XP amount: ${xp3}/200 to the next level.`)
       .setImage('https://static.zerochan.net/Sento.Isuzu.full.1806330.jpg')
    const exampldEmbed = new Discord.MessageEmbed()
	   .setColor('#99ff99')
       .setDescription(`User: <@${message.author.id}>.\nUser level: **5**.\n\n*Anime character-symbol of the lvl:*\n*(Sempai; Magical Sempai)*`)
       .setAuthor('Leveling system', message.author.displayAvatarURL())
       .setFooter(`XP amount: ${xp4}/200 to the next level.`)
       .setImage('https://i.pinimg.com/originals/3d/d5/83/3dd58309edf620a27cfcdfef53e2bfc7.jpg')
    const examplfEmbed = new Discord.MessageEmbed()
	   .setColor('#99ff99')
       .setDescription(`User: <@${message.author.id}>.\nUser level: **6**.\n\n*Anime character-symbol of the lvl:*\n*(Hotaru Shidare; Dagashi Kashi)*`)
       .setAuthor('Leveling system', message.author.displayAvatarURL())
       .setFooter(`XP amount: ${xp5}/200 to the next level.`)
       .setImage('https://i.pinimg.com/originals/37/8e/e8/378ee8c28d646fa3dfeee231cf8a4578.jpg')
    const examplgEmbed = new Discord.MessageEmbed()
	   .setColor('#99ff99')
       .setDescription(`User: <@${message.author.id}>.\nUser level: **7**.\n\n*Anime character-symbol of the lvl:*\n*(Raphtalia; The Rising of the Shield Hero)*`)
       .setAuthor('Leveling system', message.author.displayAvatarURL())
       .setFooter(`XP amount: ${xp6}/400 to the next level.`)
       .setImage('https://99px.ru/sstorage/53/2019/02/tmb_251849_521354.png')
    const examplhEmbed = new Discord.MessageEmbed()
	   .setColor('#99ff99')
       .setDescription(`User: <@${message.author.id}>.\nUser level: **8**.\n\n*Anime character-symbol of the lvl:*\n*(Zero-Two; Darling in the Franxx)*`)
       .setAuthor('Leveling system', message.author.displayAvatarURL())
       .setFooter(`XP amount: ${xp7}/600 to the next level.`)
       .setImage('https://i.pinimg.com/originals/f6/99/3f/f6993fda68169b168b0b32d4c05c94cf.jpg')
    const exampliEmbed = new Discord.MessageEmbed()
	   .setColor('#99ff99')
       .setDescription(`User: <@${message.author.id}>.\nUser level: **9**.\n\n*Anime character-symbol of the lvl:*\n*(Irina Jelavić; Assassination Classroom)*`)
       .setAuthor('Leveling system', message.author.displayAvatarURL())
       .setFooter(`XP amount: ${xp8}/600 to the next level.`)
       .setImage('https://pm1.narvii.com/6463/041ad90c48638cb7963b3b3adf511308c5d9e90b_00.jpg')
    const exampljEmbed = new Discord.MessageEmbed()
	   .setColor('#99ff99')
       .setDescription(`User: <@${message.author.id}>.\nUser level: **10**.\n\n*Anime character-symbol of the lvl:*\n*(Aqua; Konosuba)*`)
       .setAuthor('Leveling system', message.author.displayAvatarURL())
       .setFooter(`XP amount: ${xp9}/1000 to the next level.`)
       .setImage('https://cs9.pikabu.ru/post_img/2017/01/19/5/1484811593162432319.jpg')
    const examplkEmbed = new Discord.MessageEmbed()
	   .setColor('#99ff99')
       .setDescription(`User: <@${message.author.id}>.\nUser level: **11**.\n\n*Anime character-symbol of the lvl:*\n*(Rem and Ram; Re:zero)*`)
       .setAuthor('Leveling system', message.author.displayAvatarURL())
       .setFooter(`XP amount: ${xp10}/1000 to the next level.`)
       .setImage('https://i.pinimg.com/736x/0a/e8/e1/0ae8e1ca23da19673e788a0a29d584fd.jpg')
    const exampllEmbed = new Discord.MessageEmbed()
	   .setColor('#99ff99')
       .setDescription(`User: <@${message.author.id}>.\nUser level: **12**.\n\n*Anime character-symbol of the lvl:*\n*(Chika Fujivaru; Kaguya-sama wa Kokurasetai)*`)
       .setAuthor('Leveling system', message.author.displayAvatarURL())
       .setFooter(`XP amount: ${xp11}/2200 to the next level.`)
       .setImage('https://cs7.pikabu.ru/post_img/big/2019/03/02/5/1551511177116410337.jpg')
    const examplmEmbed = new Discord.MessageEmbed()
	   .setColor('#99ff99')
       .setDescription(`User: <@${message.author.id}>.\nUser level: **MAX**.\n\n*Anime character-symbol of the lvl:*\n*(Nana Ebina; Himouto!)*`)
       .setAuthor('Leveling system', message.author.displayAvatarURL())
       .setFooter(`XP amount: ${xp12}.`)
       .setImage('https://i.imgur.com/DEewP6p.jpg')

    if (`${(database.getAccount(message.member)).xp}`<=200) {
        message.channel.send(exampleEmbed);
    } else if (`${(database.getAccount(message.member)).xp}`<=400) {
        message.channel.send(examplaEmbed);
    }   else if (`${(database.getAccount(message.member)).xp}`<=600) {
        message.channel.send(examplbEmbed);
    }      else if (`${(database.getAccount(message.member)).xp}`<=800) {
           message.channel.send(examplcEmbed);
    }         else if (`${(database.getAccount(message.member)).xp}`<=1000) {  
              message.channel.send(exampldEmbed);
    }           else if (`${(database.getAccount(message.member)).xp}`<=1200) {
                 message.channel.send(examplfEmbed);
    }             else if (`${(database.getAccount(message.member)).xp}`<=1600) { 
                  message.channel.send(examplgEmbed);
    }               else if (`${(database.getAccount(message.member)).xp}`<=2200) {
                    message.channel.send(examplhEmbed);
    }                 else if (`${(database.getAccount(message.member)).xp}`<=2800) {
                      message.channel.send(exampliEmbed);
    }                   else if (`${(database.getAccount(message.member)).xp}`<=3800) {
                        message.channel.send(exampljEmbed);
    }                     else if (`${(database.getAccount(message.member)).xp}`<=4800) {
                          message.channel.send(examplkEmbed);
    }                       else if (`${(database.getAccount(message.member)).xp}`<=7000) {
                            message.channel.send(exampllEmbed);
    }                         else {
                              message.channel.send(examplmEmbed);
    }
}; 
