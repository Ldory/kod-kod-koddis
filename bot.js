const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '*'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`KOSTORE..`,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});
client.on('message', msg => {
  if (msg.content === 'السلام عليكم') {
    msg.reply('**وعليكم السلام ورحمه الله وبركاته**');
  }
});
client.on('message', msg => {
  if (msg.content === 'برب') {
    msg.reply('**تيت**');
  }
});
client.on('message', msg => {
  if (msg.content === 'باك') {
    msg.reply('**ولكم منور ي حب**');
  }
});
client.on('message', msg => {
  if (msg.content === 'الو') {
    msg.reply('**هلا ؟**');
  }
});
  client.on("ready", async  => {
setInterval(function(){
client.channels.find('id', '469155115119411211').setName("W");
client.channels.find('id', '469155115119411211').setName("We");
client.channels.find('id', '469155115119411211').setName("Wel");
client.channels.find('id', '469155115119411211').setName("Welc");
client.channels.find('id', '469155115119411211').setName("Welco");
client.channels.find('id', '469155115119411211').setName("Welcom");
client.channels.find('id', '469155115119411211').setName("Welcome");
client.channels.find('id', '469155115119411211').setName("Welcome T");
client.channels.find('id', '469155115119411211').setName("Welcome To");
client.channels.find('id', '469155115119411211').setName("Welcome To K");
client.channels.find('id', '469155115119411211').setName("Welcome To KO");
client.channels.find('id', '469155115119411211').setName("Welcome To KOS");
client.channels.find('id', '469155115119411211').setName("Welcome To KOST");
client.channels.find('id', '469155115119411211').setName("Welcome To KOSTO");
client.channels.find('id', '469155115119411211').setName("Welcome To KOSTOR");
client.channels.find('id', '469155115119411211').setName("Welcome To KOSTORE");
client.channels.find('id', '469155115119411211').setName("Welcome To KOSTORE.");

  }, 3000);
});
client.on("ready", async  => {
setInterval(function(){
client.channels.find('id', '469158882288205824').setName("W");
client.channels.find('id', '469158882288205824').setName("We");
client.channels.find('id', '469158882288205824').setName("Wel");
client.channels.find('id', '469158882288205824').setName("Welc");
client.channels.find('id', '469158882288205824').setName("Welco");
client.channels.find('id', '469158882288205824').setName("Welcom");
client.channels.find('id', '469158882288205824').setName("Welcome");
client.channels.find('id', '469158882288205824').setName("Welcome T");
client.channels.find('id', '469158882288205824').setName("Welcome To");
client.channels.find('id', '469158882288205824').setName("Welcome To 6");
client.channels.find('id', '469158882288205824').setName("Welcome To 67");
client.channels.find('id', '469158882288205824').setName("Welcome To 67N");
client.channels.find('id', '469158882288205824').setName("Welcome To 67N.");

  }, 3000);
});

    client.on('message',async message => {
  if(message.content.startsWith(prefix + "2bc")) {
    let filter = m => m.author.id === message.author.id;
    let thisMessage;
    let thisFalse;
    message.channel.send(':regional_indicator_b::regional_indicator_c:| **ارسل الرسالة الان**').then(msg => {

    let awaitM = message.channel.awaitMessages(filter, {
      max: 1,
      time: 20000,
      errors: ['time']
    })
    .then(collected => {
      collected.first().delete();
      thisMessage = collected.first().content;
      msg.edit(':regional_indicator_b::regional_indicator_c:| **هل انت متأكد؟**');
      let awaitY = message.channel.awaitMessages(response => response.content === 'نعم' || 'لا' && filter,{
        max: 1,
        time: 20000,
        errors: ['time']
      })
      .then(collected => {
        if(collected.first().content === 'لا') {
          msg.delete();
          message.delete();
          thisFalse = false;
        }
        if(collected.first().content === 'نعم') {
          if(thisFalse === false) return;
        message.guild.members.forEach(member => {
          msg.edit(':regional_indicator_b::regional_indicator_c:| **جاري الارسال**');
          collected.first().delete();
          member.send(`${thisMessage}\n\n${member} ,\nتم الارسال من : ${message.guild.name}\n تم الارسال بواسطة : ${message.author.tag}`);
        });
        }
      });
    });
    });
  }
});
client.on('message', message => {
if(message.content.startsWith("الرابط") || message.content.startsWith("رابط") || message.content.startsWith("روابط")) {
        
  message.channel.createInvite({
        thing: true,
        maxUses: 5,
        maxAge: 86400
    }).then(invite =>  
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("2fff00")
        .setDescription("| :white_check_mark:  | :heart:  تم ارسال الرابط على الخاص  ")
        .setFooter("67N-KINGDOM")
      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("2fff00")
        .setDescription(`
**-------------------
-تفضل ي عمري الرابط 
-ونورنا ياجميل :heart: 
------------------- **`)
        
      message.author.sendEmbed(Embed11)
    }
});
client.on('ready',  () => {
client.user.setUsername("KOSTORE.")
      })

    client.on('message', message => {
         var prefix = "*"
        if(!message.channel.guild) return;
     if(message.content.startsWith(prefix + 'bc')) {
     if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
     if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
     let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
     let BcList = new Discord.RichEmbed()
     .setThumbnail(message.author.avatarURL)
     .setAuthor(`محتوى الرساله ${args}`)
     .setDescription(`
     عند إرآدة حضرتك إرسآل هذه الرسآلة بأمبيد أضغط على 📝
     عند إرآدة حضرتك إرسآل هذه الرسآلة بدون أمبيد أضغط على ✏
     عند إرآدتك منشن العضو أكتب 
     <user>
     لإرسال اسم السيرفر
     <server>
     لمنشنه أسم المرسل
     <by>
     `)
     if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(BcList).then(msg => {
     msg.react('📝')
     .then(() => msg.react('✏'))
     .then(() =>msg.react('📝'))
      
     let EmbedBcFilter = (reaction, user) => reaction.emoji.name === '📝' && user.id === message.author.id;
     let NormalBcFilter = (reaction, user) => reaction.emoji.name === '✏' && user.id === message.author.id;
      
     let EmbedBc = msg.createReactionCollector(EmbedBcFilter, { time: 60000 });
     let NormalBc = msg.createReactionCollector(NormalBcFilter, { time: 60000 });
     EmbedBc.on("collect", r => {
      
     message.channel.send(`:ballot_box_with_check: تم ارسال الرساله بنجاح`).then(m => m.delete(5000));
     message.guild.members.forEach(m => {
     let EmbedRep = args.replace('<server>' ,message.guild.name).replace('<user>', m).replace('<by>', `${message.author.username}#${message.author.discriminator}`)
     var bc = new
     Discord.RichEmbed()
     .setColor('RANDOM')
     .setDescription(EmbedRep)
     .setThumbnail(message.author.avatarURL)
     m.send({ embed: bc })
     msg.delete();
     })
     })
     NormalBc.on("collect", r => {
       message.channel.send(`:ballot_box_with_check: تم ارسال الرساله بنجاح`).then(m => m.delete(5000));
     message.guild.members.forEach(m => {
     let NormalRep = args.replace('<server>' ,message.guild.name).replace('<user>', m).replace('<by>', `${message.author.username}#${message.author.discriminator}`)
     m.send(NormalRep);
     msg.delete();
     })
     })
     })
     }
     });
    
    
client.login(process.env.BOT_TOKEN);
