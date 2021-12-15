const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {
  if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(new Discord.MessageEmbed().setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://media.discordapp.net/attachments/916685774987067423/920650196537442335/standard.gif').setImage('https://cdn.glitch.com/0c8ef551-5187-48a8-9daf-f2cc35630f21%2Fyoneticigif.gif').setTitle('Bir hata oldu!').setDescription(`• \`${client.ayarlar.prefix}kilit-aç\` **kullanmak için,** \`Yönetici\` **yetkisine sahip olman gerekiyor.**`));
  message.channel.send(new Discord.MessageEmbed()
  .setColor('#00001').setTitle(`${message.channel.name} Mesajlara Açıldı.`));
  message.channel.overwritePermissions([{ id: message.guild.roles.cache.find(a => a.name === '@everyone').id, allow: ['SEND_MESSAGES'] }]);

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'kilit-aç'
};