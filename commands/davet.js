const Discord = require('discord.js');

exports.run = async (client, message, args) => {

message.channel.send(new Discord.MessageEmbed()
.setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://media.discordapp.net/attachments/916685774987067423/920650196537442335/standard.gif')
.setDescription(`>>> ${client.user} kullanırken lütfen \`@${client.user.username}\` rolünü en yukarıda tutunuz!

**Rollü Davet İçin:** [Buraya tıkla](https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8)
\`\`\`discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8\`\`\`

**Rolsüz Davet İçin:** [Buraya tıkla](https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=0)
\`\`\`discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=0\`\`\`

**Rollü Davet İçin:** [Buraya tıkla](https://discord.com/invite/codeworld)
\`\`\`discord.gg/codeworld\`\`\``));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'davet'
};