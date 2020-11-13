module.exports.run = (bot, msg, args, database, member) => {
    if (database.getAccount(msg.member).lang !== 0) return 

    const randomWords = [
        "No, this won't happen!",
        "Maybe...",
        "I can't read question :)",
        "I don't know.",
        "Hmm... ",
        "It's impossible.",
        "I hope, this will happen!",
        "Yes, it's true.",
        "Ew... Wash your mouth!",
        "Definitely - yes!",
        "Ops, I forgot answer..."
      ];
      
      const randomIndex = Math.floor(Math.random() * randomWords.length);
      const word = randomWords[randomIndex];
      msg.channel.send(word)
    };