const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {
  if(message.author.id !== message.guild.owner.user.id) return message.channel.send(new Discord.MessageEmbed().setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://media.discordapp.net/attachments/916685774987067423/920689417121837076/standard_3.gif').setImage('https://cdn.glitch.com/0c8ef551-5187-48a8-9daf-f2cc35630f21%2Fyoneticigif.gif').setTitle('Bir hata oldu!').setDescription(`• \`${client.ayarlar.prefix}Trol-al\` **kullanmak için,** \`Sunucu Sahibi\` **olmanız gerekiyor.**`).addField('Sunucu Sahibi', message.guild.owner.user.tag).setImage('https://cdn.glitch.com/6f5bb25b-c11b-4003-8a39-69490341df18%2FScreenshot_1.png'));

if(!args[0]) return message.channel.send(new Discord.MessageEmbed()
.setTitle('Bir hata oldu!').setDescription(`Üyelerin üzerinden alınacak bir **ROL ID** belirtmedin! 🤔

**Örnek:**
\`\`\`${client.ayarlar.prefix}trol-al ${message.guild.roles.cache.random().id}\`\`\``).setColor('#9c5cb2'));
if(!message.guild.roles.cache.get(args[0])) return message.channel.send(new Discord.MessageEmbed()
.setTitle('Bir hata oldu!').setDescription(`Üyelerin üzerinden alınacak bir **ROL ID** belirtmedin! 🤔

**Örnek:**
\`\`\`${client.ayarlar.prefix}trol-al ${message.guild.roles.cache.random().id}\`\`\``).setColor('#9c5cb2'));

message.channel.send(new Discord.MessageEmbed()
.setTitle('İşte bu kadar!').setDescription(`**Sunucunuzda ki üyeler'den yavaş yavaş ${message.guild.roles.cache.get(args[0])} adlı rol alınıyor.**`));
message.guild.members.cache.forEach(a => {
setTimeout(() => {
if(a.roles.cache.has(message.guild.roles.cache.get(args[0]).id)) {
a.roles.remove(message.guild.roles.cache.get(args[0]).id);
}
}, 2000)
})
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'trol-al'
};