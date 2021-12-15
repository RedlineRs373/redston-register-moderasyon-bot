const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {

message.channel.send(new Discord.MessageEmbed().setTitle('RedSton Fake Hesap Sistem').setDescription(`
\`${client.ayarlar.prefix}yeni-üye-role [@rolEtiket]\`
**Sunucunuza giren kullanıcılara verilen rolü etiketle**

\`${client.ayarlar.prefix}fake-cezalı-role [@rolEtiket]\`
**Sunucunuz içerisinde ki cezalı rolünü etiketle**

\`\`\`Kapatmak istediğin komutlar aşağıda\`\`\`

\`${client.ayarlar.prefix}yeni-üye-role-kapat\`
**Ayarlı olan kayıtsız rol kapatır**

\`${client.ayarlar.prefix}fake-cezalı-role-kapat\`
**Ayarlı olan fake cezalı rol kapatır**`).setImage('https://media.giphy.com/media/LRBO9V2gJsk3vZOSPL/giphy.gif').setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://media.discordapp.net/attachments/916685774987067423/920650196537442335/standard.gif'));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'fake-hesap-sistem'
};