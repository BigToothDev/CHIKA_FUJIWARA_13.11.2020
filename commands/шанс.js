module.exports.run = (bot, msg, args, database, member) => {
  if (database.getAccount(msg.member).lang !== 1) return 

  const randomWords = [
    "Этому не быть.",
    "Этому быть.",
    "Не могу ответить на этот запрос.",
    "Вероятнее всего...",
    "Сложно ответить.",
    "За такое и посадить могут...",
    "Я надеюсь, что это правда.",
    "Да, это истина.",
    "Фи, ты несешь чушь!",
    "Определенно - да.",
    "Я промолчу..."
  ];
  
  const randomIndex = Math.floor(Math.random() * randomWords.length);
  const word = randomWords[randomIndex];
  msg.channel.send(word)
};