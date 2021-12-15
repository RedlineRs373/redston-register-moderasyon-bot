const Discord = require('discord.js');

exports.run = async (client, message, args) => {


  const embed = new Discord.MessageEmbed()
  .setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://media.discordapp.net/attachments/916685774987067423/920650196537442335/standard.gif')
  .setTitle('RedSton Karşılama Mesaj Sistem')
  .setDescription(`\`${client.ayarlar.prefix}login-yetkili-role [@rolEtiket]\`
  **Kayıt edicek olan yetkili rolü seçmeniz gerekiyor.**
  
  \`${client.ayarlar.prefix}login kur [#kanalEtiket]\` **|** \`${client.ayarlar.prefix}login kapat\`
  **Kanal etiketleyerek aktif edersin. Gelenleri kayıt kanalında karşılar**
  
  \`${client.ayarlar.prefix}login-yetkili-role-kapat [@rolEtiket]\`
  **Karşılama mesaj sisteminin yetkili rolünü kapatırsınız**
  

  Yarı Premium Tema \`${client.ayarlar.prefix}temalar\` **__yazarak bakabilirsin__**`);
  message.channel.send(embed);
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'kayıt-mesaj'
};