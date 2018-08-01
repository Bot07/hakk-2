const Discord = require('discord.js');
const talkedRecently = new Set();

exports.run = (client, message, args) => {
	  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`duyuru` adlı komutu özel mesajlarda kullanamazsın.');
  return message.author.sendEmbed(ozelmesajuyari); }
	if (!message.member.hasPermission("MANAGE_CHANNELS")) {
		   message.reply('Yetkin yok!')
    }else{
	if (talkedRecently.has(message.author.id))
  return message.channel.send("duyuru komutu korumalıdır! 10 saniye sonra tekrar deneyiniz.");
if (message.author.bot) return;
if(message.webhookID) return;

talkedRecently.add(message.author.id);
setTimeout(() => {
  talkedRecently.delete(message.author.id);
}, 10000);
	let duyuru = args.slice(0).join(' ');
	if (duyuru.length < 1) return message.reply('Bir mesaj gir.');
   const embed = new Discord.RichEmbed()
  .setColor(0x79cec1)
  .setDescription(`**${duyuru}**`)
  return client.users.forEach(u=>u.send(embed));
	}
};