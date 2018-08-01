const Discord = require('discord.js');
exports.run = (client, message, args) => {

			if (message.channel.type !== 'dm') {
if (!message.member.hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) {
		   message.channel.send('Bu komutu kullanmak için yetkin yok.')
    }else{
let role = args.slice(0).join(' ');
if (role.length < 1) return message.reply('Otorol için bir rol seçmelisin.');
let role2 = message.guild.roles.find(r => r.name === `${role}`);
if (!role2) return message.reply(`${role} Rolünü bulamıyorum.`);
client.on('guildMemberAdd', member => {
  member.addRole(role2);
  });
message.channel.sendMessage(`**${role}** Rolü başarı bir şekilde ayarlandı.`)   
}
}}


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'otorol',
  description: 'istediğiniz rolü oto verir.',
  usage: 'otorol [role]'
};
