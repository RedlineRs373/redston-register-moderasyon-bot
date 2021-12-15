const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {
if(!message.member.permissions.has('MANAGE_MESSAGES')) return message.channel.send(new Discord.MessageEmbed().setColor('#000001').setDescription(`${message.author} \`Mesajları Yönet\` | Yetkiniz yok.`));
if(!args[0]) return message.channel.send(new Discord.MessageEmbed().setColor('GOLD').setThumbnail('https://media.discordapp.net/attachments/916685774987067423/920689417121837076/standard_3.gif').setTitle('Bir hata oldu!').setDescription(`${message.author} Yavaş mod için bir **saniye** belirtmedin! 🤔

**Örnek:**
\`\`\`${client.ayarlar.prefix}yavaş-mod 60\`\`\``));
if(args[0] > 21600) return message.channel.send(new MessageEmbed().setColor('9c5cb2').setDescription(`${message.author} Yavaş mod için (\`max.21600\`) saniye girilebilirsin! 🤔

**Örnek:**
\`\`\`${client.ayarlar.prefix}yavaş-mod 60\`\`\``)).then(a => a.delete({timeout: 10000}));
message.channel.setRateLimitPerUser(args[0]);
message.channel.send(new Discord.MessageEmbed().setColor('9c5cb2').setThumbnail('https://media.discordapp.net/attachments/916685774987067423/920689417121837076/standard_3.gif').setTitle('İşte bu kadar!').setDescription(`${message.author} Yavaş mod için (\`${args[0]}\`) saniye olarak uygulandı!`)).then(a => a.delete({timeout: 10000}));
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'yavaş-mod'
};