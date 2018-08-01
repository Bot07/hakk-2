const Discord = require('discord.js');
const client = new Discord.Client();

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
  .setColor(0xff3338)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`ban` adlı komutu özel mesajlarda kullanamazsın.');
  return message.author.sendEmbed(ozelmesajuyari); }
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let modlog = guild.channels.find('name', 'kayitlar');
  if (!modlog) return message.reply('`kayitlar` kanalını bulamıyorum.');
  if (reason.length < 1) return message.reply('Banlama sebebini yazmalısın.');
  if (message.mentions.users.size < 1) return message.reply('Kimi banlayacağını yazmalısın.').catch(console.error);
  if (!message.guild.member(user).bannable) return message.reply('Yetkilileri banlayamam.');
  message.guild.ban(user, 2);
  const üyeleriat = new Discord.RichEmbed()
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('Eylem:', 'Kullanıcı Banlama')
    .addField('Kullanıcı:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Yetkili:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Sebep', reason);
  return guild.channels.get(modlog.id).sendEmbed(embed);
	}
 }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'yasakla',
  description: 'İstediğiniz kişiyi banlar.',
  usage: 'yasakla [kullanıcı] [sebep]'
};
