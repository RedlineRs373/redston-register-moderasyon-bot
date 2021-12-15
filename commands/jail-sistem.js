const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {

message.channel.send(new Discord.MessageEmbed().setColor('#000001').setTitle('RedSton Jail Karantina Sistem').setDescription(`
\`${client.ayarlar.prefix}jail-log [#kanalEtiket]\` **|** \`${client.ayarlar.prefix}jail-log-kapat\`
Jail sistemi için gereklidir. **Karantina** kanalını seçmeniz gerekiyor.

\`${client.ayarlar.prefix}jail-yetkili-role [@rolEtiket]\`
Jaili **kullanacak yetkili** rolünü etiketle

\`${client.ayarlar.prefix}jail-karantina-role [@rolEtiket]\`
Jail **karantina rolünü** etiketle`)
.addField('ᅠ', 'ᅠ')
.addField('Jail Komutu', `${client.ayarlar.prefix}cezalı, ${client.ayarlar.prefix}Cezalı, ${client.ayarlar.prefix}jail`)
.addField('Örnek Karantina komut', `\`\`\`${client.ayarlar.prefix}jail @etiket\`\`\``)
.addField('ᅠ', 'ᅠ')// xd
.addField('Jail den çıkarmak isterseniz', `\`${client.ayarlar.prefix}k-erkek\`, \`${client.ayarlar.prefix}k-kadın\`\n**Komutları aktif etmek için:** \`${client.ayarlar.prefix}erkek-role [@roleEtiket]\` **-** \`${client.ayarlar.prefix}kadın-role [@roleEtiket]\``)
.setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://media.discordapp.net/attachments/916685774987067423/920650196537442335/standard.gif'));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'jail-sistem'
};