const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {
const nn = new Discord.MessageEmbed().setThumbnail();
if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(nn.setImage('https://media.discordapp.net/attachments/916685774987067423/920689417121837076/standard_3.gif').setTitle(`Bir hata oldu!`).setThumbnail(message.author.avatarURL({dynamic: true})).setDescription(`**•** \`${client.ayarlar.prefix}yetkili-sil\` **kullanmak için,** \`Yönetici\` **yetkisine sahip olman gerekiyor.**`)).then(a => a.delete({timeout: 10000}));

data.delete(`yetkili.${message.guild.id}`);
message.channel.send(nn.setTitle(`İşte bu kadar!`).setDescription(`Ayarlanmış erkek rolü başarıyla silindi.`))

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'yetkili-sil'
};