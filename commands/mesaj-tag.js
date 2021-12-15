const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {

  message.channel.send(new Discord.MessageEmbed().setTitle('RedSton Mesaj Tag Sistem').setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://media.discordapp.net/attachments/916685774987067423/920650196537442335/standard.gif')
  .setImage('https://media.giphy.com/media/jVB4Q9pSozGlMRSaQW/giphy.gif')
  .setDescription(`\`${client.ayarlar.prefix}tag\`
  **Tagınızı yada simgenizi koyarak aktif edersiniz**
  
  \`${client.ayarlar.prefix}tag kapat\`
  **Tag mesaj sisteminin kapatırsınısz**`));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'mesaj-tag'
};