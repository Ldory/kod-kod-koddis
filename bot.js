const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '*'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`KODESIGN.`,"http://twitch.tv/S-F")
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
  
     KiNg66S.on('message', function(KiNg66S) {
if (KiNg66S.author.bot) return;
if (KiNg66S.author.id === KiNg66S.user.id) return;
if (KiNg66S.author.equals(KiNg66S.user)) return;
if (!KiNg66S.content.startsWith(prefix)) return;

var args = KiNg66S.content.substring(prefix.length).split(' ');
switch (args[0].toLocaleLowerCase()) {
case "مسح" :
KiNg66S.delete()
if(!KiNg66S.channel.guild) return
if(KiNg66S.member.hasPermissions(0x2000)){ if (!args[1]) {
KiNg66S.channel.fetchMessages()
.then(messages => {
KiNg66S.channel.bulkDelete(messages);
var messagesDeleted = messages.array().length;
KiNg66S.channel.sendMessage(' '+ " " + messagesDeleted + " " +  '**: عدد الرسائل التي تم مسحه**').then(m => m.delete(2500));
})
} else {
let messagecount = parseInt(args[1]);
KiNg66S.channel.fetchMessages({limit: messagecount}).then(messages => KiNg66S.channel.bulkDelete(messages));
KiNg66S.channel.sendMessage(' '+ " " + args[1] + " " +  '**: عدد الرسائل التي تم مسحه**').then(m => m.delete(2500));
KiNg66S.delete(60000);
}
} else {
var manage = new Discord.RichEmbed()
.setDescription('You Do Not Have Permission MANAGE_MESSAGES :(')
.setColor("RANDOM")
KiNg66S.channel.sendEmbed(manage)
return;
}
}
});
    client.on('message',async message => {
  if(message.content.startsWith(prefix + "bc")) {
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
         var prefix = "-"
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
