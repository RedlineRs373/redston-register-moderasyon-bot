const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {

message.channel.send(new Discord.MessageEmbed()
.setColor('#00001')
.setTitle('RedSton Sunucu Tema Şablon Sistem')
.setDescription(`**Tüm şablonlar ${client.user.username}'a Aittir.**
İçerikler de birden fazla tema var.

\`${client.ayarlar.prefix}j4j-tema\` 
**Hazır __join 4 join__ sunucu teması yollar**

\`${client.ayarlar.prefix}public-tema\` 
**Hazır karışık __public__ sunucu teması yollar**

\`${client.ayarlar.prefix}oyun-tema\` 
**Hazır __oyun__ sunucu teması yollar**

\`${client.ayarlar.prefix}gif-tema\` 
**Hazır gif share sunucu teması yollar**

\`${client.ayarlar.prefix}sunucu-kur\` 
**Klasik oyun & sohbet sunucusu kurar**

\`\`\`Farklı temalar için, Kendi sunucu şablonunuzu bize iletebilirsin!\`\`\``)
.setThumbnail('https://media.discordapp.net/attachments/916685774987067423/920689417121837076/standard_3.gif'));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'sunucu-tema-sistem'
};