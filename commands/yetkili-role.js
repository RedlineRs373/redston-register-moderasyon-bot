const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {
  const nn = new Discord.MessageEmbed().setThumbnail();
  if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(nn.setImage('https://media.discordapp.net/attachments/916685774987067423/920689417121837076/standard_3.gif').setTitle(`Bir hata oldu!`).setThumbnail(message.author.avatarURL({dynamic: true})).setDescription(`**•** \`${client.ayarlar.prefix}yetkili-role\` **kullanmak için,** \`Yönetici\` **yetkisine sahip olman gerekiyor.**`)).then(a => a.delete({timeout: 10000}));
if(!args[0]) return message.channel.send(nn.setTitle('Bir hata oldu!').setColor('#000001').setDescription(`Bir rol etiketlemeyi unuttunuz.`)).then(a => a.delete({timeout: 10000}));
let role = message.mentions.roles.first();
if(!role) return message.channel.send(nn.setTitle('Bir hata oldu!').setColor('#000001').setDescription(`Bir rol etiketlemeyi unuttunuz.`)).then(a => a.delete({timeout: 10000}));

data.set(`yetkili.${message.guild.id}`, role.id);
message.channel.send(nn.setTitle(`İşte bu kadar!`).setDescription(`Kayıt için kullanılacak: ${role} rol olarak seçtiniz.`))

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'yetkili-role'
};