const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {

message.channel.send(new Discord.MessageEmbed().setColor('#000001').setDescription(`${client.user} **Kayıt Sistem
__Tek komut ile kayıt ve isim yapabilirsin.__**

> \`${client.ayarlar.prefix}erkek-role [@rolEtiket]\`
> \`${client.ayarlar.prefix}kadın-role [@rolEtiket]\`
> \`${client.ayarlar.prefix}yetkili-role [@rolEtiket]\`
> \`${client.ayarlar.prefix}kayıtsız-role [@rolEtiket]\`

\`\`\`        [ Kapatma Komutları ]        \`\`\`
> 🗑️ **${client.ayarlar.prefix}erkek-sil**
> 🗑️ **${client.ayarlar.prefix}kadın-sil**
> 🗑️ **${client.ayarlar.prefix}yetkili-sil**
> 🗑️ **${client.ayarlar.prefix}kayıtsız-sil**

\`\`\`İsim başına tag koyması için
.kayıt-tag 🚀
.kayıt-tag-kapat\`\`\``).setImage('https://media.discordapp.net/attachments/916685774987067423/920689417121837076/standard_3.gif')

.setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://media.discordapp.net/attachments/916685774987067423/920650196537442335/standard.gif'));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['kayıt'],
  permLevel: 0
}

exports.help = {
  name: 'sunucu-kayıt'
};