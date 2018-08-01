const Discord = require('discord.js');
exports.run = (client, message, args) => {
				if (message.channel.type === 'dm') {
		message.reply('Bu komutu özel mesajlarda kullanamazsınız dilerseniz sunucumuza gelip dilediğiniz kodu özgürce kullanabilirsiniz https://discord.gg/GCKHqjF \nSunucumuza geldiğiniz zaman kuralları okuyup sınır kapısına h!kabul yazmalısınız.')

	}
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`sor` adlı komutu özel mesajlarda kullanamazsın.');
  return message.author.sendEmbed(ozelmesajuyari); }
  let guild = message.guild
  let reason = args.slice(1).join(' ');
    Random = [
        '**Evet**',
        '**Hayır**',
        '**Bilmiyorun**',
        '**Alakam yok**',
        '**Sen öyle san**',
		'**Ne bileyim ölçmedim ki *****'
    ];
  var Sor = Math.floor(Math.random()*Random.length);
  message.channel.sendMessage(`${Random[Sor]}`);
  const embed = new Discord.RichEmbed()
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sor',
  description: 'Bota soru sorar.',
  usage: 'sor <soru>'
};