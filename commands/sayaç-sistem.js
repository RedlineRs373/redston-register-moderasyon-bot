const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {

message.channel.send(new Discord.MessageEmbed().setTitle('RedSton Giriş & Sayaç Sistem').setDescription(`\`${client.ayarlar.prefix}sayaç [#kanalEtiket 1000]\` 
**Sunucun için toplam bir rakam tut**

\`${client.ayarlar.prefix}sayaç-kapat\` 
**Kurulu olan sayaç sistemi kapatır**

\`${client.ayarlar.prefix}sayaç-kapat\` 
**Kurulu olan sayaç sistemi kapatır**


📢 Auto rol verir mi?
**Sunucunuza giren kullanıcıya vermesi için:** \`${client.ayarlar.prefix}oto-role [@rolEtiket]\` **&** \`${client.ayarlar.prefix}oto-role-kapat\` **ayarlamalısın.**`)
.setImage('https/media.discordapp.net/attachments/916685774987067423/920689417121837076/standard_3.gif').setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https/media.discordapp.net/attachments/916685774987067423/920689417121837076/standard_3.gif'));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'sayaç-sistem'
};