const Discord = require('discord.js');
exports.run = (client, message, args) => {
	
			if (message.channel.type === 'dm') {

		message.reply('Bu komutu özel mesajlarda kullanamazsınız dilerseniz sunucumuza gelip dilediğiniz kodu özgürce kullanabilirsiniz https://discord.gg/GCKHqjF \nSunucumuza geldiğiniz zaman kuralları okuyup sınır kapısına h!kabul yazmalısınız.')

	}
	if (message.channel.type !== 'dm') {
if (!message.member.hasPermission("BAN_MEMBERS")) {
		   message.channel.send('Bu komutu kullanmak için yetkin yok.')
    }else{

  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`uyar` adlı komutu özel mesajlarda kullanamazsın.')
  return message.author.sendEmbed(ozelmesajuyari); }
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let modlog = guild.channels.find('name', 'kayitlar');
  if (!modlog) return message.reply('`kayitlar` kanalını bulamıyorum.');
  if (reason.length < 1) return message.reply('Uyarı sebebini yazmalısın.');
  if (message.mentions.users.size < 1) return message.reply('Kimi uyaracağını yazmalısın.').catch(console.error);
  const embed = new Discord.RichEmbed()
  .setColor(0x00AE86)
  .setTimestamp()
  .addField('Eylem:', 'Uyarı verme')
  .addField('Kullanıcı:', `${user.username}#${user.discriminator}`)
  .addField('Yetkili:', `${message.author.username}#${message.author.discriminator}`)
  .addField('Sebep', reason);
  return guild.channels.get(modlog.id).sendEmbed(embed);
	
			}}
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'uyar',
  description: 'İstediğiniz kişiyi uyarır.',
  usage: 'uyar [kullanıcı] [sebep]'
};
