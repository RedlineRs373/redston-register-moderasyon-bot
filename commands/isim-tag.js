const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {
  if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(new Discord.MessageEmbed().setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://media.discordapp.net/attachments/916685774987067423/920650980658405386/standard_2.gif').setImage('https://cdn.glitch.com/0c8ef551-5187-48a8-9daf-f2cc35630f21%2Fyoneticigif.gif').setTitle('Bir hata oldu!').setDescription(`• \`${client.ayarlar.prefix}isim-tag\` **kullanmak için,** \`Yönetici\` **yetkisine sahip olman gerekiyor.**`));

if(!args[0])  return message.channel.send(new Discord.MessageEmbed().setColor('#00001').setTitle('Bir hata oldu!').setDescription(`${message.author} Bir **TAG** ve ya **SIMGE** koymayı unuttunuz.`));
if(args[0] === 'kapat') {
data.delete(`tagg.${message.guild.id}`);
return message.channel.send(new Discord.MessageEmbed().setTitle('Bir hata oldu!').setDescription('Mesaj tag sistemi başarıyla kapatıldı.'));
} else {
data.set(`tagg.${message.guild.id}`, args[0]);
return message.channel.send(new Discord.MessageEmbed().setTitle('Bir hata oldu!').setDescription(`Mesaj tag sistemini başarıyla \`${args[0]}\` olarak seçtiniz.`));
}
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'isim-tag'
};