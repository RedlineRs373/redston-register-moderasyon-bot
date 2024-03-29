const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {

message.channel.send(new Discord.MessageEmbed().setTitle('RedSton Toplu Rol Sistem').setDescription(`
☀️ \`${client.ayarlar.prefix}Trol-al\`
Sunucunuzda ki üyelerin üzerinde olan **ROL ID** girerek hepsinden rolü kaldırır

☀️ \`${client.ayarlar.prefix}Trol-ver\`
Sunucunuzda ki üyelerinize bir **ROL ID** girerek hepsine o rolü verir`)
.setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://media.discordapp.net/attachments/916685774987067423/920689417121837076/standard_3.gif'));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'toplu-rol-sistem'
};