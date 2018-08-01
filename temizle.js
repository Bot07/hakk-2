const Discord = require('discord.js');
exports.run = function(client, message, args) {
			if (message.channel.type === 'dm') {
		message.reply('Bu komutu özel mesajlarda kullanamazsınız dilerseniz sunucumuza gelip dilediğiniz kodu özgürce kullanabilirsiniz https://discord.gg/GCKHqjF \nSunucumuza geldiğiniz zaman kuralları okuyup sınır kapısına h!kabul yazmalısınız.')

	}
		if (message.channel.type !== 'dm') {
if (!message.member.hasPermission("MANAGE_MESSAGES")) {
		   message.channel.send('Bu komutu kullanmak için yetkin yok.')
    }else{

  if (!message.guild) {
    return message.author.send('`temizle` komutu sadece sunucularda kullanılabilir.');
  }
  let mesajsayisi = parseInt(args.join(' '));
  if (mesajsayisi.length < 1) return message.channel.send('Kaç mesaj silmem gerektiğini belirtmedin.')
  if (mesajsayisi > 100) return message.channel.send('100 adetden fazla mesaj silemem!');
  message.channel.bulkDelete(mesajsayisi + 1);
  message.channel.send(mesajsayisi +' adet mesaj sildim!')
	}
 }
  };

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sil'],
  permLevel: 2
};

exports.help = {
  name: 'temizle',
  description: 'Belirlenen miktar mesajı siler.',
  usage: 'temizle <temizlenecek mesaj sayısı>'
};
