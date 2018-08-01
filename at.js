const Discord = require('discord.js');
exports.run = (client, message, args) => {

	if (message.channel.type === 'dm') {
message.reply('Bu komutu özel mesajlarda kullanamazsınız dilerseniz sunucumuza gelip dilediğiniz kodu özgürce kullanabilirsiniz https://discord.gg/GCKHqjF \nSunucumuza geldiğiniz zaman kuralları okuyup sınır kapısına h!kabul yazmalısınız.')

	}
	if (message.channel.type !== 'dm') {
if (!message.member.hasPermission("KICK_MEMBERS")) {
		   message.channel.sendMessage('Bu komutu kullanmak için yetkin yok.')
    }else{
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`At` adlı komutu özel mesajlarda kullanamazsın.');
  return message.author.sendEmbed(ozelmesajuyari); }
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let modlog = guild.channels.find('name', 'kayitlar');
  if (!modlog) return msg.reply('`kayitlar` kanalını bulamıyorum.');
  if (reason.length < 1) return message.reply('Sunucudan atma sebebini yazmalısın.');
  if (message.mentions.users.size < 1) return message.reply('Kimi sunucudan atacağını yazmalısın.').catch(console.error);
  if (!message.guild.member(user).kickable) return message.reply('Yetkilileri sunucudan atamam.');
  message.guild.member(user).kick();
  const üyeleriat = new Discord.RichEmbed()
  const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTimestamp()
	.setAuthor(message.author.username, message.author.avatarURL)
    .addField('Eylem:', 'Sunucudan atma')
    .addField('Kullanıcı:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Yetkili:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Sebep', reason);
  return guild.channels.get(modlog.id).sendEmbed(embed);
	
 }}
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['at'],
  permLevel: 2
};

exports.help = {
  name: 'at',
  description: 'İstediğiniz kişiyi sunucudan atar.',
  usage: 'at [kullanıcı] [sebep]'
};
