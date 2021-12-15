const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {

message.channel.send(new Discord.MessageEmbed()
.setTitle('RedSton Kısıtlı Koruma')
.addField('Selam karşılama için', `\`\`\`${client.ayarlar.prefix}selam aç & ${client.ayarlar.prefix}selam kapat\`\`\``)
.addField('Küfür Kısıtlamak', `\`\`\`${client.ayarlar.prefix}küfür kısıt & ${client.ayarlar.prefix}küfür kapat\`\`\``)
.addField('Reklam Kısıtlamak', `\`\`\`${client.ayarlar.prefix}reklam kısıt & ${client.ayarlar.prefix}reklam kapat\`\`\``)
.addField('Büyük Harf Kısıtlamak', `\`\`\`${client.ayarlar.prefix}caps kısıt & ${client.ayarlar.prefix}caps kapat\`\`\``)
.setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://media.discordapp.net/attachments/916685774987067423/920650196537442335/standard.gif'));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'kısıtlamalar'
};