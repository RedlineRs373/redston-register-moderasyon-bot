const Discord = require('discord.js');
exports.run = (client, message, args) => {
 
  const embed = new Discord.MessageEmbed()
  .setColor("#000000")
       .setDescription(`**Önemli Komutlarınız;**\`\`\`.sunucu-kayıt  ┃ .karşılama-mesaj

.ban-sistem    ┃ .komut-cevap-sistem

.mute-sistem   ┃ .ses-mute-sistem

.sayaç-sistem  ┃ .karantina-sistem

.fake-sistem   ┃ .yasak-tag-sistem

.seviye-sistem ┃ .oto-isim-sistem

.şablon-sistem ┃ .tag-rol-sistem \`\`\`
**Önemli Komutlarınız;**\`\`\`- .içerikler ┃ .diğer

- .korumalar ┃ .diğer2\`\`\`
`)
.setImage(`https://media.discordapp.net/attachments/918394395814953013/920682766796984351/standard_3.gif`)

  message.channel.send(embed)
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["help"],
  permLevel: 0
};
exports.help = {
  name: 'yardım',
  description: 'yardım',
  usage: 'yardım'
};


