const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {

if(message.author.id === message.guild.owner.user.id) return message.channel.send(new Discord.MessageEmbed().setTitle('**Seni gidi seni, Sunucu sahibisin sana __AFK__ yakışmaz ^^**'));
if(!args[0]) reason = 'Bilgi verilmedi.';
if(args[0]) reason = args[0];

message.channel.send(new Discord.MessageEmbed().setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://media.discordapp.net/attachments/916685774987067423/920649184732926032/unknown.png').setTitle(`${client.user.username} - Away From Keyboard`).setDescription(`${message.author} **Üyesi Bilgisayar başında & Klavye başında değil**!\n\n• **Sebep:** \`${reason}\``)).then(a => a.delete({timeout: 10000}));
data.set(`name.${message.author.id}.${message.guild.id}`, message.member.displayName);
message.member.setNickname('[AFK] '+message.member.displayName);
data.set(`kullanıcı.${message.author.id}.${message.guild.id}`, reason);

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'afk'
};