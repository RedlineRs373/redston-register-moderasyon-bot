const Discord = require('discord.js');
const data = require('quick.db');
const moment = require('moment');
moment.locale('tr');
require("moment-duration-format");
exports.run = async (client, message, args) => {
message.channel.send(new Discord.MessageEmbed()
.setTitle(client.user.username)
.setThumbnail('https://media.discordapp.net/attachments/916685774987067423/920689417121837076/standard_3.gif')
.addField('• Uptime', '```'+moment.duration(client.uptime).format("D [gün], H [saat], m [dakika], s [saniye]")+'```', true)
.addField('• Server', '```'+client.guilds.cache.size+'```', true)
.addField('• Users', '```'+client.users.cache.filter(a => !a.bot).size+'```', true)
.addField('• Ping', '```'+client.ws.ping.toFixed(0)+'```', true)
.addField('• Server Shards', '```0```', true));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'up'
};