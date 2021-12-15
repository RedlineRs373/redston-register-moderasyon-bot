const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {

message.channel.send(new Discord.MessageEmbed().setTitle('RedSton Ban Sistem').setDescription(` 
\`${client.ayarlar.prefix}ban-log [@kanalEtiket]\`
**Belirtilen kanala yasaklanma bilgisini gönderir**

\`${client.ayarlar.prefix}ban-yetki-role [@rolEtiket]\`
**Belirtilen rolü olan kişi sadece yasaklama yapabilir**
\`\`\`Komutları kapatma kısmı aşağıda\`\`\`

\`${client.ayarlar.prefix}ban-yetki-role-kapat\`
**Yasaklama yetkili rolünü kapatır**

\`${client.ayarlar.prefix}ban-kanal-kapat\`
**Ban log kanalını sıfırlar**

**Ban komut nasıl kullanırım?**

\`${client.ayarlar.prefix}ban @üyeetiketi açıklama\`

🔨 \`${client.ayarlar.prefix}unban [Kullanıcı ID]\`
**Sunucunuzdan yasaklı kullanıcının yasağını kaldırır**`)
.setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://media.discordapp.net/attachments/916685774987067423/920650196537442335/standard.gif'));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'ban-sistem'
};