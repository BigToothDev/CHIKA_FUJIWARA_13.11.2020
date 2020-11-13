const Discord = require('discord.js');

const talkedRecently = new Set();
module.exports.run = (bot, message, args, database, member) => {
    message.channel.bulkDelete(1)

    if (database.getAccount(message.member).lang !== 0) return 
    
    const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#87fd05')
        .setAuthor(`Darling the Franxx`)
        .setDescription('**They dream of one day flying into the endless sky, even though they are painfully aware of how far away the sky is beyond the glass that blocks their flight. The distant future: Humanity established the mobile fort city, Plantation, upon the ruined wasteland and civilization flourished. Within the city were pilot quarters called Mistilteinn, otherwise known as the “Birdcage.” That is where the children live... Not knowing anything of the outside world, and unaware of the vast sky. Their only mission in life was the fight. Their enemies are the mysterious giant organisms known as Kyoryu. The children operate robots known as FRANXX in order to face these still unseen enemies because they believe that is their purpose in life. Among them was a boy who was once called a child prodigy: Code number 016, Hiro. However, now he’s a failure and considered unneeded. Those who cannot pilot FRANXX basically do not exist. One day, a mysterious girl called Zero Two appears in front of Hiro. From her face grew two alluring horns. “I’ve found you, my Darling.”**')
        .setImage('https://animeslayers.ru/wp-content/uploads/2019/04/darling-in-the-franxx.jpg')
    const exemEmbed = new Discord.MessageEmbed()
        .setColor('#87fd05')
        .setAuthor(`Kaguya-sama: Love is war`)
        .setDescription('**From a good family? Check! A good personality? Check! Shuchiin Academy is where all these elite students with bright futures flock to. As the two leaders of the student council, Kaguya Shinomiya and Miyuki Shirogane have supposedly fallen in love… But after almost half a year, nothing has happened!? They both have too much pride and can’t be honest. Things have gotten troublesome, and they are now caught in a war of "How to get the other to confess their love first." The fun part of romance is playing the game! This is a whole new romantic comedy, following an outbreak of cunning warfare between two elite students in love.**')
        .setImage('https://i.ytimg.com/vi/W4hYzIJvcXs/maxresdefault.jpg')
    const exemdEmbed = new Discord.MessageEmbed()
        .setColor('#87fd05')
        .setAuthor(`Assassination Classroom`)
        .setDescription('**Forget about homework and pop quizzes. The students of Class 3E have a far more important assignment: kill their teacher before the end of the year! A tentacle-d sensei that moves at Mach 20 is out to conquer the classroom after destroying seventy percent of the moon. In addition to reading, writing, and arithmetic, the murderous monster behind the lectern will teach his students everything he knows about the assassination game. Should some eager beaver prove to be a quick study in killing, he or she will save Earth from extinction – and collect a hefty reward. But they’d better take some serious notes while class is in session because their slaughtering sensei has eight deadly tentacles just waiting to wreak havoc on humanity!**')
        .setImage('https://gen.jut.su/uploads/newsthumbs/1480619973_assassinationclassroomfeatured.jpg')
    const exemaEmbed = new Discord.MessageEmbed()
        .setColor('#87fd05')
        .setAuthor(`Re: zero`)
        .setDescription('**When Subaru Natsuki leaves the convenience store, the last thing he expects is to be wrenched from his everyday life and dropped into a fantasy world. Things aren"t looking good for the bewildered teenager; however, not long after his arrival, he is attacked by some thugs. Armed with only a bag of groceries and a now useless cell phone, he is quickly beaten to a pulp. Fortunately, a mysterious beauty named Satella, in hot pursuit after the one who stole her insignia, happens upon Subaru and saves him. In order to thank the honest and kindhearted girl, Subaru offers to help in her search, and later that night, he even finds the whereabouts of that which she seeks. But unbeknownst to them, a much darker force stalks the pair from the shadows, and just minutes after locating the insignia, Subaru and Satella are brutally murdered. However, Subaru immediately reawakens to a familiar scene—confronted by the same group of thugs, meeting Satella all over again—the enigma deepens as history inexplicably repeats itself.**')
        .setImage('https://img4.goodfon.ru/wallpaper/nbig/a/e7/re-zero-kara-hajimeru-isekai-seikatsu-art-anime-personazhi.jpg')
    const exembEmbed = new Discord.MessageEmbed()
        .setColor('#87fd05')
        .setAuthor(`Himouto! Umaru-chan`)
        .setDescription('**Umaru is a renowned beautiful 16-year-old girl in town, living with her elder brother Taihei. She acts a perfect sister with a kind heart, intelligence and popularity, who everybody admires. So who would believe how true Umaru is at home? Sleeping, gaming, watching TV, eating junk food, drinking cola… that"s almost all she does at home, leaving all the housework to her brother. Her camouflage is so perfect that when one of her classmates visits her home by surprise and witnesses “true Umaru," she pretends as if she is Umaru’s younger sister. Taihei is always swayed by Umaru’s gap between ostensible face and spoiled life, but he cannot hate his comical and somehow lovable cute little sister!**')
        .setImage('https://cs4.pikabu.ru/post_img/big/2016/08/16/12/1471377974155786370.jpg')
    const exemcEmbed = new Discord.MessageEmbed()
        .setColor('#87fd05')
        .setAuthor(`Ballroom e Youkoso`)
        .setDescription('**Tatara Fujita is a shy middle schooler who has no particular plan for the future. He has gotten through life by avoiding any kind of confrontation and blending in with the crowd. But blending in isn"t enough to get out of trouble, as some bullies harass him for money. Luckily, he is saved by a man named Kaname Sengoku. Kaname invites Tatara to his dance studio. Although he would normally never set foot in such a place, Tatara is captivated by Sengoku"s commanding presence. Granted an opportunity to dance with fellow classmate Shizuku Hanaoka—who often practices at the studio—Tatara realizes there"s something about the idea of being put in the limelight and dancing where people will see him that keeps him coming back. With an earnest, passionate drive to improve, Tatara begins his journey into the world of competitive dance.**')
        .setImage('https://media.kg-portal.ru/anime/b/ballroomeyoukoso/images/ballroomeyoukoso_208.jpg')
    const exemeEmbed = new Discord.MessageEmbed()
        .setColor('#87fd05')
        .setAuthor(`Boku no Hero Academia`)
        .setDescription('**Izuku Midoriya dreams of becoming a Hero despite being bullied by his violent childhood friend Katsuki Bakugo for lacking a Quirk. Both youths idolize one of the world"s greatest heroes All Might, who they both met with Izuku being one of few to know of an critical injury All Might has been concealing from the public eye to maintain morale. All Might also reveals the nature of his Quirk "One For All" and passes it down to Izuku to succeed him after seeing the youth"s determination in the face of danger. As Izuku begins his path to becoming a hero in attending U.A. High School (雄英高校, Yūei Kōkō) alongside Bakugo and the friends they make in Class 1-A, a nemesis to the "One For All" users named All For One conditions his apprentice Tomura Shigaraki to destroy the current society and its heroes.**')
        .setImage('https://wallpaperscave.com/images/original/18/03-22/anime-my-hero-academia-32040.jpg')
    const exemfEmbed = new Discord.MessageEmbed()
        .setColor('#87fd05')
        .setAuthor(`Angels of Death`)
        .setDescription('**"Please – kill me." 13-year old Rachel awakens to find herself trapped in the basement of an abandoned building. Without any memories or even a clue as to where she could be, she searches for a way out. In her search, she comes across a man covered from head-to-toe in bandages. He introduces himself as Zack and he wields a grim-reaper like sickle. As the two unlikely partners try to escape from the deadly building, a strange bond is struck between them, strengthened by a strange, crazy promise. But waiting in the building are a cast of twisted characters who intend to prevent their escape, by any means necessary. Forced into a battle for survival and pushed to the edge, will Rachel"s mysterious past catch up with her?**')
        .setImage('https://upload.wikimedia.org/wikipedia/ru/e/e3/Satsuriku_No_Tenshi.jpg')
    const exemgEmbed = new Discord.MessageEmbed()
        .setColor('#87fd05')
        .setAuthor(`Amagi Brilliant Park`)
        .setDescription('**Seiya Kanie is a good-looking, perfectionist boy who is forced by the mysterious Isuzu Sento to visit an amusement park named Amagi Brilliant Park, which is in serious financial trouble and about to be closed forever. The park is actually staffed by refugees from a magical realm called Maple Land and the park is a facility for harvesting magical energy from visitors while they"re having fun. As such, the park is the only way the refugees can maintain their existence in the human realm. To save the park from closing, Seiya is hired by the owner, Latifah Fleuranza, the princess of Maple Land (whom Seiya met before when he was a young boy), to become its new manager and use his skills in entertainment to save it. However, they have only two weeks to attract 100,000 visitors (they have to attract 250,000 visitors in three months in the anime version), a feat that seems impossible given the park"s current situation.**')
        .setImage('https://funart.pro/uploads/posts/2020-02/1582043302_p-velikolepnii-park-amagi-amagi-brilliant-p-4.jpg')
    const exemhEmbed = new Discord.MessageEmbed()
        .setColor('#87fd05')
        .setAuthor(`Tokyo Ghoul`)
        .setDescription('**The story follows Ken Kaneki, a college student who barely survives a deadly encounter with Rize Kamishiro, his date who reveals herself as a ghoul. He is taken to the hospital in critical condition. After recovering, Kaneki discovers that he underwent a surgery that transformed him into a half-ghoul. This was accomplished because some of Rize"s organs were transferred into his body, and now, like normal ghouls, he must consume human flesh to survive. The ghouls who manage the coffee shop "Anteiku" take him in and teach him to deal with his new life as a half-ghoul. Some of his daily struggles include fitting into the ghoul society, as well as keeping his identity hidden from his human companions, especially from his best friend Hideyoshi Nagachika.**')
        .setImage('https://gen.jut.su/uploads/newsthumbs/1535446402_2.jpg')
    const exemiEmbed = new Discord.MessageEmbed()
        .setColor('#87fd05')
        .setAuthor(`Plastic Memories`)
        .setDescription('**Plastic Memories takes place in a city in the near future, in which humans live alongside androids that look exactly like humans and have human emotion and memory. SAI Corp, the leading android production company, has introduced the Giftia, an advanced android model with the most human-like qualities of any model. However, there is a catch. The lifespan of a Giftia is determined beforehand, and a Giftia can only live for a maximum of 81,920 hours (roughly nine years and four months). If they pass their expiration date, it causes personality disintegration, memory loss, and outbreaks of violence, they are known as wanderers. Wanderers only act on instinct and can no longer recognize their owners. As a result, the Terminal Services are established with the duty of retrieving Giftias who are close to the end of their lifespans from their owners, and erasing the Giftias" memories. To perform this job, the Terminal Service employees work in teams consisting of a human (called a "spotter") and a Giftia (called a "marksman"). The story follows the work and life of such a team in SAI Corp"s Terminal Service One office, the human protagonist Tsukasa Mizugaki and a Giftia named Isla. Slowly, their relationship progresses, and as both slowly fall in love, Isla is revealed to be nearing the end of her own lifespan.**')
        .setImage('https://fast-anime.ru/shop/upload/242134.jpg')
    const exemjEmbed = new Discord.MessageEmbed()
        .setColor('#87fd05')
        .setAuthor(`Nekopara`)
        .setDescription('**Kashou Minaduki, a son of a long line of Japanese confection makers, moved out to open his own patisserie "La Soleil". When unpacking his stuff, Kashou found two of the catgirls(“neko”) that his family had been raising hiding in the boxes: Chocola and Vanilla. He tried to send them back initially, but they begged and pleaded until he gave in. Now they run La Soleil together. They spent some great time with the help of Shigure, sister of Kashou, and other catgirls in their family: Azuki, Maple, Cinnamon and Coconut. One day, when Chocola goes out to run some errands, she meets a kitten. The story starts with their encounter...**')
        .setImage('https://animego.org/upload/anime/images/5e1b431237f26578299690.jpg')
    const exemkEmbed = new Discord.MessageEmbed()
        .setColor('#87fd05')
        .setAuthor(`In Another World with My Smartphone`)
        .setDescription('**Fifteen-year-old Touya Mochizuki is accidentally killed by God. As an apology, God allows him to be resurrected, but since he cannot send him back to his old world, he instead reincarnates him into a fantasy world along with a single special request. Touya uses his request in order to bring his smartphone into the new world with him, which God modifies. As such, while Touya cannot contact his old world with it, the phone can be easily recharged by magic and can otherwise function such as accessing data from the old world and can use relevant features for his new world such as the GPS function to locations which are comprehensively identified on it. God also greatly amplifies TouyaЄs physical, magical, and cognitive abilities to a certain degree as a further apology for the inconvenience of killing him. Taking full advantage of his second chance at life, Touya befriends many different people, mainly females and high-ranking people in the new world. He begins to travel from country to country, solving political disputes, minor quests, and nonchalantly enjoying himself with his newfound allies.**')
        .setImage('https://pm1.narvii.com/6577/536177c008e6c6ed149502b26a5e7ab7d69ba8d1_hq.jpg')
    const exemlEmbed = new Discord.MessageEmbed()
        .setColor('#87fd05')
        .setAuthor(`Love, Chunibyo & Other Delusions`)
        .setDescription('**Yūta Togashi is a boy who, during junior high school, suffered from "chunibyo", believing that he possessed supernatural powers and calling himself the "Dark Flame Master", therefore alienating himself from his classmates. Finding his past embarrassing, Yūta attempts to start off high school where he does not know anyone, free from his old delusions. This proves to be difficult, however, as a delusional girl in his class, Rikka Takanashi, learns of Yūta"s past and becomes interested in him. As the plot progresses, Rikka becomes more attached to Yūta, who, despite finding her delusions irritating and embarrassing, accepts her. He helps Rikka with a number of things, including founding and maintaining her club and tutoring her. The club in question, the "Far-East Magical Napping Society - Summer Thereof" also includes another chunibyo, Sanae Dekomori; former chunibyo Shinka Nibutani; and the constantly sleeping Kumin Tsuyuri. When Yūta joins Rikka on her summer vacation, Yūta learns that two years prior, Rikka"s father, to whom she was very close, died unexpectedly due to a terminal illness, causing her to fall into her delusions. After Yūta agrees to help Rikka search for the "Ethereal Horizon" (不可視境界線, Fukashi Kyōkaisen), which she believes will lead her to her father, she becomes romantically interested in him and vice versa.**')
        .setImage('https://cs4.pikabu.ru/post_img/big/2015/10/15/7/1444903250_374837930.jpg')
    const exemnEmbed = new Discord.MessageEmbed()
        .setColor('#87fd05')
        .setAuthor(`Another`)
        .setDescription('**When Kouichi Sakakibara (15) transfers to Yomiyama North Middle School, he senses something out of place in the atmosphere of a class that seems to be afraid of something. Kouichi is drawn to a mysterious girl, Mei Misaki, and tries to make contact with her, only to find more mysteries. As he does, the class is stricken by a disaster that nobody could have imagined! Just what is going on in this "world"?**')
        .setImage('https://sun9-48.userapi.com/c855632/v855632125/2d1be/ewaJ-a56Scs.jpg')
    const exemoEmbed = new Discord.MessageEmbed()
        .setColor('#87fd05')
        .setAuthor(`Konosuba`)
        .setDescription('**Following an untimely and embarrassing death, Kazuma Satō, a Japanese teenager shut-in NEET, meets a goddess named Aqua, who offers to reincarnate him in a parallel world with MMORPG elements, where he can go on adventures and battle monsters. Despite being offered a superpowered item or ability to use in this new world, Kazuma, following some provocation, chooses Aqua herself to accompany him to the town of Axel, quickly finding her absent-mindedness to be less than beneficial. With Aqua unable to return to the afterlife until the Devil King is defeated, the two form a party and recruit two other members; an explosion-obsessed magician named Megumin and a masochistic crusader named Darkness.LN 1.2.4 Due to the party"s dysfunctional abilities, Kazuma quickly gives up on the idea of defeating the Devil King and tries to live a luxurious lifestyle, only to find the circumstances of his daily life are forcing him and his party to encounter and battle the Devil King"s generals.**')
        .setImage('https://u.kanobu.ru/editor/images/26/fe2508d0-7549-4df1-a1d6-438ec2fef7b8.jpg')
    const exempEmbed = new Discord.MessageEmbed()
        .setColor('#87fd05')
        .setAuthor(`Dagashi Kashi`)
        .setDescription('**Shikada Dagashi, a countryside shop selling cheap candy and snacks ("dagashi") has been run by the Shikada family for nine generations, but Kokonotsu does not want to take over the shop from his father, Yō, instead aiming to become a manga artist. Hotaru Shidare visits the shop one day hoping to recruit Yō to her family"s company, the sweets manufacturer Shidare Corporation, but Yō refuses unless Hotaru first can convince Kokonotsu to take over Shikada Dagashi.**')
        .setImage('https://static.animedia.tv/uploads/1343.jpg')
    const exemqEmbed = new Discord.MessageEmbed()
        .setColor('#87fd05')
        .setAuthor(`Tejina-senpai`)
        .setDescription('**Starting his new term at Tanenashi High School, an unmotivated freshman searches for a club that requires minimal participation to suit his needs. He then comes across the magic clubroom, and inside is a cute upperclassman practicing her magic tricks. Suffering from stage fright that causes her to slip up in her acts, she has a tendency to end up in the most embarrassing situations. Despite having little interest in a club run by an incapable magician, the freshman finds himself involved as a new member, experiencing all sorts of awkward moments with his eccentric mentor.**')
        .setImage('https://i.pinimg.com/originals/43/1e/f7/431ef7b7116155452e760656a3f23838.png')
    const exemrEmbed = new Discord.MessageEmbed()
        .setColor('#87fd05')
        .setAuthor(`Date A Live`)
        .setDescription('**The series begins with a strange phenomenon called a "spatial quake" devastating the center of Eurasia, resulting in at least 150 million casualties. For the next 30 years, smaller spatial quakes plague the world on an irregular basis. In the present, Shido Itsuka, a seemingly ordinary high school student comes across a mysterious girl at the ground zero of a spatial quake. He learns from his adoptive sister Kotori that the girl is one of the "Spirits" from different dimensions who are the real cause of the spatial quakes that occur when they manifest themselves in the real world. He also learns that Kotori is the commander of the airship Fraxinus, crewed by the organization Ratatoskr and its parent company Asgard Electronics, and is recruited to make use of his mysterious ability to seal the Spirits" powers thus stopping them from being a threat to mankind. However, there is a catch: to seal a Spirit"s power, he must make each Spirit fall in love with him and make her kiss him. Shido"s intelligent classmate, Origami Tobiichi, is a sergeant of the AST (Anti-Spirit Team), a special unit designed to suppress the threat posed by Spirits. As Shido successfully keeps sealing more and more Spirits, he gains allies to help him with his dates with other Spirits. Shido also increases the competition among them for his attention and affection, much to his chagrin.**')
        .setImage('https://pm1.narvii.com/6877/3892a982986a82537b0f7a31f713c14d740b8049r1-1920-1200v2_00.jpg')
    const exemsEmbed = new Discord.MessageEmbed()
        .setColor('#87fd05')
        .setAuthor(`Tonari no Kaibutsu-kun`)
        .setDescription('**Shizuku Mizutani is apathetic towards her classmates, only caring about her grades. However, her cold view of life begins to change when she meets Haru Yoshida, a violent troublemaker who stopped attending class after getting into a fight early in the school year. He is not much different from her, though—he too understands little about human nature and does not have any friends. Much to Shizuku"s surprise, he proclaims that she will be his friend and immediately confesses his feelings towards her upon meeting her. Because of her lack of friends and social interaction, Shizuku has a hard time understanding her relationship with Haru. But slowly, their friendship begins to progress, and she discovers that there is more to Haru than violence. She begins to develop feelings for him, but is unsure what kind of emotions she is experiencing. Together, Shizuku and Haru explore the true nature of their relationship and emotions.**')
        .setImage('https://i.pinimg.com/originals/2a/01/7d/2a017dc69065ed383edc34b951192d89.jpg')
    const exemtEmbed = new Discord.MessageEmbed()
        .setColor('#87fd05')
        .setAuthor('Seton Academy: Join the Pack!')
        .setDescription('**Seton Academy, a school where animals of all species gather to live and learn together. A sacred garden of learning, where students hone their primal instincts and the laws are of the jungle. Where species pit against species in a daily struggle for survival... Now enter the animal-hating human Jin Mazama, and the lonely wolf Ranka Okami. When man meets wolf in an encounter for the ages, this food chain is about to be shook. “Species shmecies! If we’ve shared face-licks, you’re a friend to me! Welcome to the pack!”**')
        .setImage('https://www.anmosugoi.com/wp-content/uploads/2020/03/El-anime-Murenase-Seton-Gakuen.jpg')
    const exemuEmbed = new Discord.MessageEmbed()
        .setColor('#87fd05')
        .setAuthor('Seraph of the End: Vampire Reign')
        .setDescription('**After a mysterious virus wipes out ninety percent of humanity, vampires emerge from the recesses of the earth to enslave mankind, treating them like livestock.**')
        .setImage('https://wikianime.tv/i/series/d981d06baf60e4e444aa06813a8d4f78.jpg')
    const exemvEmbed = new Discord.MessageEmbed()
        .setColor('#87fd05')
        .setAuthor('Uzaki-chan Wants to Hang Out!')
        .setDescription('**Sakurai Shinichi’s one wish is for a little peace and quiet. But Uzaki Hana–his boisterous, well-endowed underclassman–has other plans. All she wants is to hang out and poke fun at him. With the help of her chipper charm and peppy persistence, this might just be the start of a beautiful relationship!**')
        .setImage('https://moe.shikimori.one/system/user_images/original/33635/1071597.jpg')
    const exemwEmbed = new Discord.MessageEmbed()
        .setColor('#87fd05')
        .setAuthor('3D Kanojo: Real Girl')
        .setDescription('**For Hikari Tsutsui, life within the two-dimensional realm is much simpler. Socially inept and awkward, he immerses himself in video games and anime, only to be relentlessly ridiculed and ostracized by his classmates. Sharing his misery is Yuuto Itou, his only friend, who wears cat ears and is equally obsessed with the world of games. After being forced to clean the pool as punishment for arriving late, Tsutsui meets Iroha Igarashi, but he attempts to steer clear of her, as her notoriety precedes her. Brazenly blunt, loathed by female classmates, and infamous for messing around with boys, Tsutsui believes that getting involved with her would cause nothing but problems.**')
        .setImage('https://www.anibox.org/_nw/92/35168309.jpg')
    const exemxEmbed = new Discord.MessageEmbed()
        .setColor('#87fd05')
        .setAuthor('Love Live! School Idol Project')
        .setDescription('**Otonokizaka High School is planning to close within three years. However, nine female students come together with one thing in mind—form a pop idol group to revive the school’s popularity and keep it from shutting down. ‘In order to protect our beloved school, there’s only one thing we can do...become pop stars!’**')
        .setImage('https://funart.pro/uploads/posts/2020-02/1582233378_p-zhivaya-lyubov-proekt-shkolnii-idol-love-2.jpg')
    const exemyEmbed = new Discord.MessageEmbed()
        .setColor('#87fd05')
        .setAuthor('Hyouka')
        .setDescription('**A worthy addition to any animation fan`s collection, Hyouka is a stunning masterwork that spins a charming tale of high school romance and mystery. After disenchanted student Hotaro Oreki joins his school’s Classic Lit Club, he meets Eru Chitanda, a kindhearted and inquisitive girl with boundless curiosity and a knack for getting him caught up in all sorts of trouble.**')
        .setImage('https://pm1.narvii.com/7145/76cf3a416a9da8052d4add733d54cc71ca7c4548r1-680-1000v2_uhq.jpg')
    const exemzEmbed = new Discord.MessageEmbed()
        .setColor('#87fd05')
        .setAuthor('Ore no Imouto ga Konna ni Kawaii Wake ga Nai')
        .setDescription('**Kyosuke Kosaka, a normal 17-year-old high school student living in Chiba, has not gotten along with his younger sister Kirino in years. For longer than he can remember, Kirino has ignored his comings and goings and looked at him with spurning eyes. It seemed as if the relationship between Kyōsuke and his sister, now fourteen, would continue this way forever. One day however, Kyosuke finds a DVD case of a magical girl anime which had fallen in his house`s entrance way.**')
        .setImage('https://wikianime.tv/i/series/4e3329d0464b6cb159949c38e922dbc3.jpg')
    const exemzaEmbed = new Discord.MessageEmbed()
        .setColor('#87fd05')
        .setAuthor('White Album')
        .setDescription('**Toya Fujii, the male protagonist, is a twenty year old college student dating a rising singer named Yuki Morikawa. Along the way, they are faced with numerous challenges throughout the course of events at Fuji’s college. Be prepared for an exciting journey!**')
        .setImage('https://media.kg-portal.ru/anime/w/whitealbum2/production/whitealbum2_12.jpg')
    const exemzbEmbed = new Discord.MessageEmbed()
        .setColor('#87fd05')
        .setAuthor('A Silent Voice')
        .setDescription('**Shouya Ishida starts bullying the new girl in class, Shouko Nishimiya, because she is deaf. But as the teasing continues, the rest of the class starts to turn on Shouya for his lack of compassion. When they leave elementary school, Shouko and Shouya do not speak to each other again... until an older, wiser Shouya, tormented by his past behaviour, decides he must see Shouko once more. He wants to atone for his sins, but is it already too late...?**')
        .setImage('https://cs9.pikabu.ru/post_img/big/2017/07/12/8/1499861058193680711.jpg')
    const exemzcEmbed = new Discord.MessageEmbed()
        .setColor('#87fd05')
        .setAuthor('Your lie in April')
        .setDescription('**Kousei Arima was a genius pianist until his mother`s sudden death took away his ability to play. Each day was dull for Kousei. But, then he meets a violinist named Kaori Miyazono who has an eccentric playing style. His monotonus life was about to change forever.**')
        .setImage('https://img4.goodfon.ru/wallpaper/nbig/c/99/shigatsu-wa-kimi-no-uso-tvoia-aprelskaia-lozh-art-anime-para.jpg')
    const exemzdEmbed = new Discord.MessageEmbed()
        .setColor('#87fd05')
        .setAuthor('Black Butler')
        .setDescription('**Ciel Phantomhive is the most powerful boy in all of England, but he bears the scars of unspeakable suffering. Forced to watch as his beloved parents were brutally murdered, Ciel was subsequently abducted and violently tortured. Desperate to end his suffering, the boy traded his own soul for a chance at vengeance, casting his lot with the one person on whom he could depend: Sebastian, a demon Butler summoned from the very pits of hell. Together, they’ll prowl the darkest alleys of London on a mission to snuff out those who would do evil.**')
        .setImage('https://i.pinimg.com/564x/3f/72/db/3f72dbff7d0bf4ebb297c3d294983c8e.jpg')
    const exemzeEmbed = new Discord.MessageEmbed()
        .setColor('#87fd05')
        .setAuthor('Orange')
        .setDescription('**During the spring of her second year of high school, Naho receives a letter. Its sender is herself from ten years in the future. Naho thinks it`s a prank at first, but when the things written in the letter start to come true one by one, she realizes that the letter is telling her events that will happen in her future. It tells her that she`ll fall in love with Kakeru, a new student who transfers to her school, and that he`ll die in the winter of his 17th year. After learning the regrets and wishes of the 26-year-old Naho following Kakeru`s death, what can the 16-year-old Naho do differently?**')
        .setImage('https://i.pinimg.com/originals/95/2e/46/952e462a0812cb814ea0373a95327f96.jpg')
    const exemzfEmbed = new Discord.MessageEmbed()
        .setColor('#87fd05')
        .setAuthor('Bungou Stray Dogs')
        .setDescription('**Kicked out of his orphanage and on the verge of starving to death, Nakajima Atsushi meets some strange men. One of them, Dazai Osamu, is a suicidal man attempting to drown himself in broad daylight. The other, bespectacled Kunikida Doppo, nervously stands by flipping through a notepad. Both are members of the "Armed Detective Agency" said to solve incidents that even the military and police won`t touch. Atsushi ends up accompanying them on a mission to eliminate a man-eating tiger that`s been terrorizing the population...**')
        .setImage('https://www.animepilipinas.com/wp-content/uploads/2019/04/Bungo-Stray-Dogs-S3-visual-696x464.jpg')
    const exemzgEmbed = new Discord.MessageEmbed()
        .setColor('#87fd05')
        .setAuthor('Snow White with the Red Hair')
        .setDescription('**In the kingdom of Tanbarun lives an independent young pharmacist named Shirayuki. Shirayuki is a plain girl, save for her shock of beautiful apple-red hair. Her stunning mane gets her noticed by the prince, but instead of romancing her, he demands she be his concubine. Shirayuki chops off her lovely locks, and runs away to the neighboring kingdom where she befriends a handsome stranger.**')
        .setImage('https://funart.pro/uploads/posts/2020-02/1580561225_p-krasnovolosaya-printsessa-belosnezhka-aka-1.jpg')
    const exemzhEmbed = new Discord.MessageEmbed()
        .setColor('#87fd05')
        .setAuthor('Golden Time')
        .setDescription('**Banri Tada is a newly admitted student at a private law school in Tokyo. However, due to an accident, he lost all of his memories. During his freshman orientation, he encounters another freshman from the same school, Mitsuo Yanagisawa, and they hit it off at once. Without any memory of each other, their lives become more and more intertwined as if set by the hands of fate. But what is their fate, and will it lead to happiness or another memory to forget…**')
        .setImage('https://anime-free.ru/uploads/posts/2019-05/1556878738_951ad1ffc24fb3fdea545d4583b0ec2d1.jpg')
    const exemziEmbed = new Discord.MessageEmbed()
        .setColor('#87fd05')
        .setAuthor('Kotoura-San')
        .setDescription('**This fantasy romantic comedy depicts the school lives of Kotoura Haruka, a girl who can read minds; Manabe Yoshihisa, a classmate who admires her; and the friends surrounding them. A staff that excels in portraying the comical daily lives of young girls - director Ohta Masahiko, scriptwriter Aoshima Takashi, character designer and chief art director Ohkuma Takaharu - bring you a heartfelt tale packed with laughter, tears, and even a little sex appeal.**')
        .setImage('https://pm1.narvii.com/6450/8f1d6fbced2103783e492d4b83c3869a5de635d0_00.jpg')
    const exemzjEmbed = new Discord.MessageEmbed()
        .setColor('#87fd05')
        .setAuthor('Yuri!!! on Ice')
        .setDescription('**Yuri Katsuki carried the hope of all Japan on his shoulders in the Figure Skating Grand Prix, but suffered a crushing defeat in the finals. He returned to his hometown in Kyushu and hid away in his family`s home, half wanting to continue skating and half wanting to retire. That was when the five-time consecutive world champion, Victor Nikiforov, suddenly showed up with his teammate, Yuri Plisetsky, a young skater starting to surpass his seniors. And so the two Yuris and the Russian champion Viktor set out to compete in a Grand Prix like none the world has ever seen!**')
        .setImage('https://csn.naekranie.pl/wp-content/uploads/2017/01/912UZfAzk2L._SL1500_.jpg')
    const exemzkEmbed = new Discord.MessageEmbed()
        .setColor('#87fd05')
        .setAuthor('Black Clover')
        .setDescription('**In a world where magic is everything, Asta and Yuno are both found abandoned at a church on the same day. While Yuno is gifted with exceptional magical powers, Asta is the only one in this world without any. At the age of fifteen, both receive grimoires, magic books that amplify their holder’s magic. Asta’s is a rare Grimoire of Anti-Magic that negates and repels his opponent’s spells. Being opposite but good rivals, Yuno and Asta are ready for the hardest of challenges to achieve their common dream: to be the Wizard King. Giving up is never an option!**')
        .setImage('https://anifilm.tv/static/upload/releases/poster/1103-black-clover-ova-1504127497.jpg')
    const exemzlEmbed = new Discord.MessageEmbed()
        .setColor('#87fd05')
        .setAuthor('The Ancient Magus` Bride')
        .setDescription('**Hatori Chise has lived a life full of neglect and abuse, devoid of anything resembling love. Far from the warmth of family, she has had her share of troubles and pitfalls. Just when all hope seems lost, a fateful encounter awaits her. When a man with the head of a beast, wielding strange powers, obtains her through a slave auction, Chise`s life will never be the same again. The man is a "magus,"a sorcerer of great power, who decides to free Chise from the bonds of captivity. The magus then makes a bold statement: Chise will become his apprentice--and his bride!**')
        .setImage('https://animeslayers.ru/wp-content/uploads/2017/03/news_bride_magicmin.jpg')
    const exemzmEmbed = new Discord.MessageEmbed()
        .setColor('#87fd05')
        .setAuthor('NANBAKA')
        .setDescription('**Four men are assigned to Nanba, the world’s most formidable prison. Jyugo, a man who attempted to break out of prison and ended up extending his jail time; Uno, a man who likes to gamble with women; Rock, a man who likes to get into fights; and Nico, a man who likes anime. A super exciting action comedy about the daily lives of the prison’s inmates and guards.**')
        .setImage('https://sun9-18.userapi.com/c846220/v846220894/b5eb9/ZvuXdDpdl9s.jpg')
    const exemznEmbed = new Discord.MessageEmbed()
        .setColor('#87fd05')
        .setAuthor('Violet Evergarden')
        .setDescription('**The story follows Violet Evergarden`s journey of reintegrating back into society after the war is over and her search for her life`s purpose now that she is no longer a soldier in order to understand the last words her mentor and guardian, Major Gilbert, had told her: "I love you."**')
        .setImage('https://thumbs.filmix.co/posters/orig/vayolet-evergarden-2017_123256_0.jpg')
    const exemzoEmbed = new Discord.MessageEmbed()
        .setColor('#87fd05')
        .setAuthor('Kakuriyo -Bed & Breakfast for Spirits-')
        .setDescription('**After losing her grandfather, Aoi—a girl who can see spirits known as ayakashi—is suddenly approached by an ogre. Demanding she pay her grandfather’s debt, he makes a huge request: her hand in marriage! Refusing this absurd offer, Aoi decides to work at the Tenjin-ya bed and breakfast for the ayakashi to pay back what her family owes.**')
        .setImage('https://hdhc.site/uploads/posts/2020-01/1578568945_20180519231530.jpg')
    const exemzpEmbed = new Discord.MessageEmbed()
        .setColor('#87fd05')
        .setAuthor('Wolf Girl and Black Prince')
        .setDescription('**While the proud Erika boasts to her friends about being lovey-dovey with her boyfriend, she has never really had one for 16 years. Feeling the limits of lying, she took a picture of a cool guy she found in town and showed it to her friends as her boyfriend. But the person in the picture happens to be Sata Kyouya who is in the same grade in their school. While she was able to explain the situation and convince him to act like his boyfriend, he was not the nice looking boy she thought he would be: he was a super sadistic schemer! Thus begins Erika`s life blackmailed into being Sata`s dog.**')
        .setImage('https://otvet.imgsmail.ru/download/u_0792a0e1e95ea68028f81bd3d12d7b5c_800.jpg')
    const exemzqEmbed = new Discord.MessageEmbed()
        .setColor('#87fd05')
        .setAuthor('The Devil is a Part-Timer!')
        .setDescription('**Foiled by a hero when he’s inches away from conquering the world, the devil finds himself in modern-day Tokyo. With no real-world skills to speak of, the devil is forced to make ends meet flipping burgers at a fast food joint! To stall any further plans of world domination, the hero tracks the devil’s trail and takes on the lowly tasks of a telemarketer.**')
        .setImage('https://animeslayers.ru/wp-content/uploads/2019/03/cover_Hataraku_Maou_sama.jpg')
    const exemzrEmbed = new Discord.MessageEmbed()
        .setColor('#87fd05')
        .setAuthor('Kiznaiver')
        .setDescription('**The story takes place in Sugomori, a city built upon reclaimed land that once prospered as a futuristic city. One high school boy living there, Agata Katsuhira, is somehow unable to feel any pain. One day just before the start of summer break, Katsuhira is called by a mysterious girl named Sonozaki Noriko and chosen to become one of a group of people who share one another`s pain: a "Kiznaiver." Several of his classmates have also been chosen as part of this group, but they`re all people from different circles who normally wouldn`t associate with each other.**')
        .setImage('https://pm1.narvii.com/6536/924aefdb21af4a255dd3bcf87bede0858248c30f_00.jpg')
    const exemzsEmbed = new Discord.MessageEmbed()
        .setColor('#87fd05')
        .setAuthor('Kaze no Stigma')
        .setDescription('**Kazuma is a descendent of an ancient clan skilled in the magic of fire, but the gift seems to have skipped a generation. Defeated by his female cousin, Ayano, in a battle to become the clan’s successor, Kazuma is exiled with only the burn of failure to keep him company. But now he’s back, armed with a powerful new mojo that’s sure to fan the flames of the family rivalry.**')
        .setImage('https://anipoisk.org/uploads/posters/2019-10/poster_1572168684481.jpg')
    const exemztEmbed = new Discord.MessageEmbed()
        .setColor('#87fd05')
        .setAuthor('Gosick')
        .setDescription('**In this 1920s tale of dark intrigue and romance, Japanese exchange student Kazuya Kujo strikes up a fast but uneasy friendship with the doll-like genius Victorique. Both outcasts, Victorique and Kujo explore the unsolved mysteries at their school. As they begin taking on more cases, a sinister plot begins to unfold in the shadows around them.**')
        .setImage('https://pm1.narvii.com/6871/6f2b2574a5c0b0405de7ff4ff28ae04bbccd5d0er1-1080-1080v2_00.jpg')
    const exemzuEmbed = new Discord.MessageEmbed()
        .setColor('#87fd05')
        .setAuthor('Arte')
        .setDescription('**In the 16th century, the city of Florence booms with cultural and creative revival in celebration of the Renaissance. Arte, a delightful young lady from an aristocratic family, dreams of being an artist and contributing to the renewal of civilization. However, with her father`s death, she ends up losing the only person who believed in her passion for art. Now she is expected to marry a nobleman and live as a refined housewife without disgracing her family name. Reluctant to accept her fate, the headstrong Arte steps into the streets in search of a master artisan to take her on as an apprentice. In her quest for a mentor, Arte has to face harsh reality when she is completely shunned for being a female artist. No one believes that women are capable of fine craftsmanship, and therefore none are willing to accept her. Luckily, a renowned artisan by the name of Leo is persuaded to take her as his disciple since he has none anyway. And thus, Arte`s new life begins, far from the comfort of her noble upbringing. As an apprentice, she must earn her keep while tackling various challenges along the difficult path to becoming a full-fledged, master artisan.**')
        .setImage('https://2datyvyhoda.ru/wp-content/uploads/2020/04/Arte-2020-Anime-1-season.jpg')
    const exemzvEmbed = new Discord.MessageEmbed()
        .setColor('#87fd05')
        .setAuthor('Rewrite')
        .setDescription('**Green City Kazamatsuri is a city built on the ideal of a harmonious relationship between civilization and environment.. However, the peaceful Kazamatsuri will soon be faced with its annual commotion, the Harvest Festa at the turn of the year. It`s an event that is much like a massive school festival, and Tennoji Kotaro decides to head out to research topics for his articles. It`s an easy decision for him, because the town is filled with rumors about unidentified creature sightings and various other occult occurrences. At the same time, strange things start happening to Kotaro himself.**')
        .setImage('https://pm1.narvii.com/6414/a73da0876a476eda9fd9486f51e3d2e9f7e5f8a0_00.jpg')
    const exemzwEmbed = new Discord.MessageEmbed()
        .setColor('#87fd05')
        .setAuthor('Black Bullet')
        .setDescription('**In the year 2021, mankind was defeated by Gastrea, a parasitical virus, and is forced to live within a wall made of Varanium Monoliths, a metal that is able to subdue Gastrea. Soon, the "Cursed Children", children born with the Gastrea virus who are able to control it—which gives them superhuman abilities—were discovered. Due to the Gastrea virus` intervention, the Cursed Children could only be female. Civil Securities are formed to specialize in fighting against Gastrea, operating with the pair of an Initiator, who are cursed children, and a Promoter, serving to lead the cursed children.**')
        .setImage('https://i.ytimg.com/vi/5idpqOnpqc4/maxresdefault.jpg')
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
        "36",
        "37",
        "38",
        "39",
        "40",
        "41",
        "42",
        "43",
        "44",
        "45",
        "46",
        "47",
        "48",
        "49",
        "50"
      ];
      
      const randomIndex = Math.floor(Math.random() * randomWords.length);
      const word = randomWords[randomIndex];
    if (talkedRecently.has(message.author.id)) {
        message.channel.send("```Подожди 10 секунд перед, использыванием этой команды!```");
} else {     
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
      }                     else if (word ==11) {
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
      }                                                     else if (word == 27) {
                                                            message.channel.send(exemzEmbed);
      }                                                       else if (word == 28) {
                                                              message.channel.send(exemzaEmbed);
      }                                                         else if (word == 29) {
                                                                message.channel.send(exemzbEmbed);
      }                                                           else if (word == 30) {
                                                                  message.channel.send(exemzcEmbed);
      }                                                             else if (word == 31) {
                                                                    message.channel.send(exemzdEmbed);
      }                                                               else if (word == 32) {
                                                                      message.channel.send(exemzeEmbed);
      }                                                                 else if (word == 33) {
                                                                        message.channel.send(exemzfEmbed);
      }                                                                   else if (word == 34) {
                                                                          message.channel.send(exemzgEmbed);
      }                                                                     else if (word == 35) {
                                                                            message.channel.send(exemzhEmbed);
      }                                                                       else if (word == 36) {
                                                                              message.channel.send(exemziEmbed);
      }                                                                         else if (word == 37) {
                                                                                message.channel.send(exemzjEmbed);
      }                                                                           else if (word == 38) {
                                                                                  message.channel.send(exemzkEmbed);
      }                                                                             else if (word == 39) {
                                                                                    message.channel.send(exemzlEmbed);
      }                                                                               else if (word == 40) {
                                                                                      message.channel.send(exemzmEmbed);
      }                                                                                 else if (word == 41) {
                                                                                        message.channel.send(exemznEmbed);
      }                                                                                   else if (word == 42) {
                                                                                          message.channel.send(exemzoEmbed);
      }                                                                                     else if (word == 43) {
                                                                                            message.channel.send(exemzpEmbed);
      }                                                                                       else if (word == 44) {
                                                                                              message.channel.send(exemzqEmbed);
      }                                                                                         else if (word == 45) {
                                                                                                message.channel.send(exemzrEmbed);
      }                                                                                           else if (word == 46) {
                                                                                                  message.channel.send(exemzsEmbed);
      }                                                                                             else if (word == 47) {
                                                                                                    message.channel.send(exemztEmbed);
      }                                                                                               else if (word == 48) {
                                                                                                      message.channel.send(exemzuEmbed);
      }                                                                                                 else if (word == 49) {
                                                                                                        message.channel.send(exemzvEmbed);
      }                                                                                                   else {
                                                                                                          message.channel.send(exemzwEmbed);
      
      }

    talkedRecently.add(message.author.id);
    setTimeout(() => {
      talkedRecently.delete(message.author.id);
    }, 10000);   
    }};
