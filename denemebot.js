const Discord = require("discord.js");
const client = new Discord.Client();
const config = require('./config.json');
const size    = config.colors;
const rainbow = new Array(size);
var prefix = config.prefix;



for (var i=0; i<size; i++) {
  var red   = sin_to_hex(i, 0 * Math.PI * 2/3); // 0   deg
  var blue  = sin_to_hex(i, 1 * Math.PI * 2/3); // 120 deg
  var green = sin_to_hex(i, 2 * Math.PI * 2/3); // 240 deg

  rainbow[i] = '#'+ red + green + blue;
}

function sin_to_hex(i, phase) {
  var sin = Math.sin(Math.PI / size * 2 * i + phase);
  var int = Math.floor(sin * 127) + 128;
  var hex = int.toString(16);

  return hex.length === 1 ? '0'+hex : hex;
}

let place = 0;
const servers = config.servers;

function changeColor() {
  for (let index = 0; index < servers.length; ++index) {		
    client.guilds.get(servers[index]).roles.find('name', config.roleName).setColor(rainbow[place])
		.catch(console.error);
		
    if(config.logging){
      console.log(`[ColorChanger] Changed color to ${rainbow[place]} in server: ${servers[index]}`);
    }
    if(place == (size - 1)){
      place = 0;
    }else{
      place++;
    }
  }
}

client.on('ready', () => {
  console.log(`Logged in as ${client.user.username}!`);
  setInterval(changeColor, config.speed);
});



		  client.on('message', message => {
  if (message.content === prefix + 'kabul') {
  let role = message.guild.roles.find(r => r.name === 'Simit\'in Arkadaşları');
  message.member.addRole(role)
  	message.delete (message.content == prefix + 'kabul');
				}});
				
				client.on('message', message => {
  if (message.content === prefix + 'kabul') {
  let role = message.guild.roles.find(r => r.name === 'Bekliyor');
  message.member.removeRole(role)
      message.delete (message.content == prefix + 'kabul');
                }});
				
				
  
  client.on('message' , msg => {
    if(msg.content.toLowerCase() === prefix + 'gerisay'){
		    if (msg.channel.type !== "dm"){
    let sayım = msg.content.substring(2 + 7);
        msg.channel.send(sayım)
        .then(nmsg => nmsg.edit(sayım == "- 1")) 
        .then(nmsg => nmsg.edit(sayım == "- 1")) 
        .then(nmsg => nmsg.edit(sayım == "- 1")) 
        .then(nmsg => nmsg.edit(sayım == "- 1")) 
        .then(nmsg => nmsg.edit(sayım == "- 1")) 
        .then(nmsg => nmsg.edit(sayım == "- 1")) 
        .then(nmsg => nmsg.edit(sayım == "- 1")) 
		.then(nmsg => nmsg.edit(sayım == "- 1")) 
		.then(nmsg => nmsg.edit(sayım == "- 1")) 
        .then(nmsg => nmsg.edit(sayım == "- 1")) ;
    }}
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'deneme') {
    msg.reply('endişelenme aktifim');
  }

});


			client.on('message', msg => {
  if (msg.content.startsWith(prefix + "oynuyordegis")) {
	  	    if (msg.author.id !== config.sahip) {
      msg.reply('Sen beni başka simitle karıştırdın her halde bu komutu sadece sahibim kullanabilir');
	} else {
       let oyun = msg.content.substring(2 + 12);
	   client.user.setActivity(oyun ,  { type: 'STREAMING' ,  url: 'https://www.twitch.tv/HakkiAkyol144p' })
}}
	});
	
				client.on('message', msg => {
  if (msg.content.startsWith(prefix + "izliyordegis")) {
	  	    if (msg.author.id !== config.sahip) {
      msg.reply('Sen beni başka simitle karıştırdın her halde bu komutu sadece sahibim kullanabilir');
	} else {
       let oyun = msg.content.substring(2 + 12);
	   client.user.setActivity(oyun ,  { type: 'WATCHING' ,  url: 'https://www.twitch.tv/HakkiAkyol144p' })
}}
	});
	
					client.on('message', msg => {
  if (msg.content.startsWith(prefix + "dinliyordegis")) {
	  	    if (msg.author.id !== config.sahip) {
      msg.reply('Sen beni başka simitle karıştırdın her halde bu komutu sadece sahibim kullanabilir');
	} else {
       let oyun = msg.content.substring(2 + 13);
	   client.user.setActivity(oyun ,  { type: 'LISTENING' ,  url: 'https://www.twitch.tv/HakkiAkyol144p' })
}}
	});
	
		
			  client.on('message', message => {
			  if (message.content.toLowerCase() === prefix + 'renk mavi') {
  let role = message.guild.roles.find(r => r.name === 'Mavi');
  message.member.addRole(role)
  	message.reply("Başarı ile **mavi** rengine büründün!");
				}});
				
							  client.on('message', message => {
			  if (message.content.toLowerCase() === prefix + 'renk kırmızı') {
  let role = message.guild.roles.find(r => r.name === 'Kırmızı');
  message.member.addRole(role)
  	message.reply("Başarı ile **kırmızı** rengine büründün!");
				}});
				
							  client.on('message', message => {
			  if (message.content.toLowerCase() === prefix + 'renk yeşil') {
  let role = message.guild.roles.find(r => r.name === 'Yeşil');
  message.member.addRole(role)
  	message.reply("Başarı ile **yeşil** rengine büründün!");
				}});
				
							  client.on('message', message => {
			  if (message.content.toLowerCase() === prefix + 'renk sarı') {
  let role = message.guild.roles.find(r => r.name === 'Sarı');
  message.member.addRole(role)
  	message.reply("Başarı ile **sarı** rengine büründün!");
				}});
				
											  client.on('message', message => {
			  if (message.content.toLowerCase() === prefix + 'renk pembe') {
  let role = message.guild.roles.find(r => r.name === 'Pembe');
  message.member.addRole(role)
  	message.reply("Başarı ile **pembe** rengine büründün!");
				}});
				
											  client.on('message', message => {
			  if (message.content.toLowerCase() === prefix + 'renk mor') {
  let role = message.guild.roles.find(r => r.name === 'Mor');
  message.member.addRole(role)
  	message.reply("Başarı ile **mor** rengine büründün!");
				}});
				
											  client.on('message', message => {
			  if (message.content.toLowerCase() === prefix + 'renk turuncu ') {
  let role = message.guild.roles.find(r => r.name === 'Turuncu');
  message.member.addRole(role)
  	message.reply("Başarı ile **turuncu** rengine büründün!");
				}});
				
											  client.on('message', message => {
			  if (message.content.toLowerCase() === prefix + 'renk gri') {
  let role = message.guild.roles.find(r => r.name === 'Gri');
  message.member.addRole(role)
  	message.reply("Başarı ile **gri** rengine büründün!");
				}});
											  client.on('message', message => {
			  if (message.content.toLowerCase() === prefix + 'renk siyah') {
  let role = message.guild.roles.find(r => r.name === 'Siyah');
  message.member.addRole(role)
  	message.reply("Başarı ile **siyah** rengine büründün!");
				}});
											  client.on('message', message => {
			  if (message.content.toLowerCase() === prefix + 'renk kahverengi') {
  let role = message.guild.roles.find(r => r.name === 'Kahverengi');
  message.member.addRole(role)
  	message.reply("Başarı ile **kahverengi** rengine büründün!");
				}});
				
								client.on('message', message => {
  if (message.content === prefix + 'renksil mavi') {
  let role = message.guild.roles.find(r => r.name === 'Mavi');
  message.member.removeRole(role)
    	message.reply("Başarı ile **mavi** renginden kurtuldun");

                }});
								client.on('message', message => {
  if (message.content === prefix + 'renksil kırmızı') {
  let role = message.guild.roles.find(r => r.name === 'Kırmızı');
  message.member.removeRole(role)
  message.reply("Başarı ile **kırmızı** renginden kurtuldun");

                }});
								client.on('message', message => {
  if (message.content === prefix + 'renksil yeşil') {
  let role = message.guild.roles.find(r => r.name === 'Yeşil');
  message.member.removeRole(role)
    message.reply("Başarı ile **yeşil** renginden kurtuldun");

                }});
				
												client.on('message', message => {
  if (message.content === prefix + 'renksil sarı') {
  let role = message.guild.roles.find(r => r.name === 'Sarı');
  message.member.removeRole(role)
     message.reply("Başarı ile **sarı** renginden kurtuldun");

                }});
								client.on('message', message => {
  if (message.content === prefix + 'renksil pembe') {
  let role = message.guild.roles.find(r => r.name === 'Pembe');
  message.member.removeRole(role)
     message.reply("Başarı ile **pembe** renginden kurtuldun");
                }});
								client.on('message', message => {
  if (message.content === prefix + 'renksil mor') {
  let role = message.guild.roles.find(r => r.name === 'Mor');
  message.member.removeRole(role)
    message.reply("Başarı ile **mor** renginden kurtuldun");
                }});
				
												client.on('message', message => {
  if (message.content === prefix + 'renksil turuncu') {
  let role = message.guild.roles.find(r => r.name === 'Turuncu');
  message.member.removeRole(role)
    message.reply("Başarı ile **turuncu** renginden kurtuldun");
                }});
								client.on('message', message => {
  if (message.content === prefix + 'renksil gri') {
  let role = message.guild.roles.find(r => r.name === 'Gri');
  message.member.removeRole(role)
    message.reply("Başarı ile **gri** renginden kurtuldun");
                }});
								client.on('message', message => {
  if (message.content === prefix + 'renksil siyah') {
  let role = message.guild.roles.find(r => r.name === 'Siyah');
  message.member.removeRole(role)
      message.reply("Başarı ile **siyah** renginden kurtuldun");

                }});
												client.on('message', message => {
  if (message.content === prefix + 'renksil kahverengi') {
  let role = message.guild.roles.find(r => r.name === 'Kahverengi');
  message.member.removeRole(role)
      message.reply("Başarı ile **kahverengi** renginden kurtuldun");

                }});
																client.on('message', message => {
  if (message.content === prefix + 'iptaldisco') {
  let role = message.guild.roles.find(r => r.name === 'disco');
  message.member.removeRole(role)
      message.reply("Başarı ile disco modundan çıktın");

                }});
				
															  client.on('message', message => {
			  if (message.content.toLowerCase() === prefix + 'acdisco') {
  let role = message.guild.roles.find(r => r.name === 'disco');
  message.member.addRole(role)
  	message.reply("Başarı ile disco modunu açtın");
				}});
				
				client.on('message', message => {
				   if (message.content === 'h!renkler') {
				   message.reply('RENKLER: \n mavi-kırmızı-yeşil-sarı-pembe-mor-turuncu-gri-siyah-kahverengi \n RENK ALMAK İÇİN: \n h!renk `üstteki renk adlarından birisi`\n BEĞENMEDİĞİNİZ RENKLERİ SİLMEK İÇİN \n h!renksil `renk adı` \nDisco özelliğini aktif etmek için `h!acdisco` disco özelliğini kapatmak için `h!iptaldisco`');
  }
				});
		 
		 client.on('guildMemberAdd', member => {
member.send("Hey sen yakışıklı Simit Sunucusuna hoş geldin sunucunun ve sizlerin güvenliği adına kuralları okuyup kabul etmeniz istenmektedir kuralları okumak için sunucumdaki `giriş-sistemi` adlı kanalı okumalısınız kuralları kabul etmek içinse ``sınır-kapısı-kanal-başlığını-oku` adlı kanala gelip h!kabul yazmalısın \n Bu da sınırsız davet linkimiz arkadaşlarınızı davet edebilirsiniz! https://discord.gg/GCKHqjF")
})

				client.on('message', msg => {
  if (msg.content.startsWith(prefix + "nickdegis")) {
	  	    if (msg.author.id !== "242205627177369600") {
      msg.reply('Sen beni başka botla karıştırdın her halde bu komutu sadece sahibim kullanabilir');
	} else {
       let nick = msg.content.substring(2 + 9);
   client.user.setUsername(nick);
}}
	});
	
					client.on('message', msg => {
  if (msg.content.startsWith(prefix + "avatardegis")) {
	  	    if (msg.author.id !== "242205627177369600") {
      msg.reply('Sen beni başka botla karıştırdın her halde bu komutu sadece sahibim kullanabilir');
	} else {
       let avatar = msg.content.substring(2 + 11);
     client.user.setAvatar(avatar);
}}
	});



client.login('NDIyMDcxNzkyNDgwNTUwOTE0.Dgw1NQ._PmTM835TredqOsb8CZMtbh6RU0');