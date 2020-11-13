const Discord = require('discord.js');

module.exports.run = (bot, message, args, database, member) => {
   message.channel.bulkDelete(1)
   if (database.getAccount(message.member).lang !== 1) return 

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
       .setDescription(`Пользователь: <@${message.author.id}>.\nУровень пользователя: **1**.\n\n*Аниме персонаж-символ уровня:*\n*(Айла; Синтетические воспоминания)*`)
       .setAuthor('Система уровней', message.author.displayAvatarURL())
       .setFooter(`Кол-во опыта: ${(database.getAccount(message.member)).xp}/200 до следующего уровня.`)
       .setImage('https://cs4.pikabu.ru/post_img/2015/10/29/10/1446140732_1335583864.jpeg')
    const examplaEmbed = new Discord.MessageEmbed()
	   .setColor('#99ff99')
       .setDescription(`Пользователь: <@${message.author.id}>.\nУровень пользователя: **2**.\n\n*Аниме персонаж-символ уровня:*\n*(Рика Таканаши; Чудачества любви не помеха!)*`)
       .setAuthor('Система уровней', message.author.displayAvatarURL())
       .setFooter(`Кол-во опыта: ${xp1}/200 до следующего уровня.`)
       .setImage('https://cs10.pikabu.ru/post_img/2018/09/19/10/1537374246150650642.jpg')
    const examplbEmbed = new Discord.MessageEmbed()
	   .setColor('#99ff99')
       .setDescription(`Пользователь: <@${message.author.id}>.\nУровень пользователя: **3**.\n\n*Аниме персонаж-символ уровня:*\n*(Сенко; Заботливая 800-летняя жена!)*`)
       .setAuthor('Система уровней', message.author.displayAvatarURL())
       .setFooter(`Кол-во опыта: ${xp2}/200 до следующего уровня.`)
       .setImage('https://cs11.pikabu.ru/post_img/2019/06/03/5/1559546199193759736.jpg')
    const examplcEmbed = new Discord.MessageEmbed()
	   .setColor('#99ff99')
       .setDescription(`Пользователь: <@${message.author.id}>.\nУровень пользователя: **4**.\n\n*Аниме персонаж-символ уровня:*\n*(Исузу Сэнто; Великолепный парк Амаги)*`)
       .setAuthor('Система уровней', message.author.displayAvatarURL())
       .setFooter(`Кол-во опыта: ${xp3}/200 до следующего уровня.`)
       .setImage('https://static.zerochan.net/Sento.Isuzu.full.1806330.jpg')
    const exampldEmbed = new Discord.MessageEmbed()
	   .setColor('#99ff99')
       .setDescription(`Пользователь: <@${message.author.id}>.\nУровень пользователя: **5**.\n\n*Аниме персонаж-символ уровня:*\n*(Сэмпай; Фокусница старшеклассница)*`)
       .setAuthor('Система уровней', message.author.displayAvatarURL())
       .setFooter(`Кол-во опыта: ${xp4}/200 до следующего уровня.`)
       .setImage('https://i.pinimg.com/originals/3d/d5/83/3dd58309edf620a27cfcdfef53e2bfc7.jpg')
    const examplfEmbed = new Discord.MessageEmbed()
	   .setColor('#99ff99')
       .setDescription(`Пользователь: <@${message.author.id}>.\nУровень пользователя: **6**.\n\n*Аниме персонаж-символ уровня:*\n*(Хотару Шидарэ; Магазинчик сладостей)*`)
       .setAuthor('Система уровней', message.author.displayAvatarURL())
       .setFooter(`Кол-во опыта: ${xp5}/200 до следующего уровня.`)
       .setImage('https://i.pinimg.com/originals/37/8e/e8/378ee8c28d646fa3dfeee231cf8a4578.jpg')
    const examplgEmbed = new Discord.MessageEmbed()
	   .setColor('#99ff99')
       .setDescription(`Пользователь: <@${message.author.id}>.\nУровень пользователя: **7**.\n\n*Аниме персонаж-символ уровня:*\n*(Рафталия; Герой Щита)*`)
       .setAuthor('Система уровней', message.author.displayAvatarURL())
       .setFooter(`Кол-во опыта: ${xp6}/400 до следующего уровня.`)
       .setImage('https://99px.ru/sstorage/53/2019/02/tmb_251849_521354.png')
    const examplhEmbed = new Discord.MessageEmbed()
	   .setColor('#99ff99')
       .setDescription(`Пользователь: <@${message.author.id}>.\nУровень пользователя: **8**.\n\n*Аниме персонаж-символ уровня:*\n*(Zero-Two; Милый во франксе)*`)
       .setAuthor('Система уровней', message.author.displayAvatarURL())
       .setFooter(`Кол-во опыта: ${xp7}/600 до следующего уровня.`)
       .setImage('https://i.pinimg.com/originals/f6/99/3f/f6993fda68169b168b0b32d4c05c94cf.jpg')
    const exampliEmbed = new Discord.MessageEmbed()
	   .setColor('#99ff99')
       .setDescription(`Пользователь: <@${message.author.id}>.\nУровень пользователя: **9**.\n\n*Аниме персонаж-символ уровня:*\n*(Ирина Елавич; Класс убийц)*`)
       .setAuthor('Система уровней', message.author.displayAvatarURL())
       .setFooter(`Кол-во опыта: ${xp8}/600 до следующего уровня.`)
       .setImage('https://pm1.narvii.com/6463/041ad90c48638cb7963b3b3adf511308c5d9e90b_00.jpg')
    const exampljEmbed = new Discord.MessageEmbed()
	   .setColor('#99ff99')
       .setDescription(`Пользователь: <@${message.author.id}>.\nУровень пользователя: **10**.\n\n*Аниме персонаж-символ уровня:*\n*(Аква; Konosuba)*`)
       .setAuthor('Система уровней', message.author.displayAvatarURL())
       .setFooter(`Кол-во опыта: ${xp9}/1000 до следующего уровня.`)
       .setImage('https://cs9.pikabu.ru/post_img/2017/01/19/5/1484811593162432319.jpg')
    const examplkEmbed = new Discord.MessageEmbed()
	   .setColor('#99ff99')
       .setDescription(`Пользователь: <@${message.author.id}>.\nУровень пользователя: **11**.\n\n*Аниме персонаж-символ уровня:*\n*(Рем и Рам; Re:zero)*`)
       .setAuthor('Система уровней', message.author.displayAvatarURL())
       .setFooter(`Кол-во опыта: ${xp10}/1000 до следующего уровня.`)
       .setImage('https://i.pinimg.com/736x/0a/e8/e1/0ae8e1ca23da19673e788a0a29d584fd.jpg')
    const exampllEmbed = new Discord.MessageEmbed()
	   .setColor('#99ff99')
       .setDescription(`Пользователь: <@${message.author.id}>.\nУровень пользователя: **12**.\n\n*Аниме персонаж-символ уровня:*\n*(Чика Фудживару; Госпожа Кагуя)*`)
       .setAuthor('Система уровней', message.author.displayAvatarURL())
       .setFooter(`Кол-во опыта: ${xp11}/2200 до следующего уровня.`)
       .setImage('https://cs7.pikabu.ru/post_img/big/2019/03/02/5/1551511177116410337.jpg')
    const examplmEmbed = new Discord.MessageEmbed()
	   .setColor('#99ff99')
       .setDescription(`Пользователь: <@${message.author.id}>.\nУровень пользователя: **МАКС**.\n\n*Аниме персонаж-символ уровня:*\n*(Эбина Нана; Двуличная сестренка Умару)*`)
       .setAuthor('Система уровней', message.author.displayAvatarURL())
       .setFooter(`Кол-во опыта: ${xp12} ед.`)
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
