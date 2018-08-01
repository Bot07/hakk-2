const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require("moment");
require("moment-duration-format");
const chalk = require('chalk');
const fs = require('fs');
const talkedRecently = new Set();
const ayarlar = require('./ayarlar.json');
var prefix = ayarlar.prefix;
client.on('ready', () => {
  console.log(`BOT ${client.user.tag} sunucuya bağlandı`);

  });

  const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
 
  };


avatarDegis();
function avatarDegis() {


  setTimeout(() => {
   client.user.setAvatar('http://www.doygun.com.tr/yuklenen_dosyalar/urunler/191015051709_105susamli_istanbul_simidi.png');
  }, 600000
   );


   setTimeout(() => {
      client.user.setAvatar('https://goo.gl/Nh7ftb');
  }, 600000
   );



    setTimeout(() => {
    client.user.setAvatar('https://goo.gl/yJB6ht');
  }, 600000
   );



    setTimeout(() => {
    client.user.setAvatar('https://goo.gl/BoFJiM');
  }, 600000
   );
   

   setTimeout(() => {
     client.user.setAvatar('https://goo.gl/8xXvjY');
  }, 600000
   );
 }

const { stringify } = require('querystring');
const { request } = require('https');

const update = () => {
  const data = stringify({ server_count: client.guilds.size });
  const req = request({
    host: 'discordbots.org',
    path: `/api/bots/${client.user.id}/stats`,
    method: 'POST',
    headers: {
      'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQwMjYwODEzNjc1MTQxNTMwNyIsImJvdCI6dHJ1ZSwiaWF0IjoxNTE3MDkwNjk4fQ.ePnuELd5NYiM37RJCG3w5rB-e5GIXAG6gM1cGwLtty4',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': Buffer.byteLength(data)
    }
  });
  req.write(data);
  req.end();
};

client.on('ready', update);
client.on('guildCreate', update);
client.on('guildRemove', update);




  client.on('message', msg => {
  if (msg.content === prefix + 'komutlar') {
	   if (msg.author.id === "336842798944878593") {
	 msg.reply("Simit tarafından sayın valideniz ziyaret edilmiştir BANNED");
 }

 
 else {
	  
	  if (msg.channel.type === 'dm') {
msg.reply('Bu komutu özel mesajlarda kullanamazsınız dilerseniz sunucumuza gelip dilediğiniz kodu özgürce kullanabilirsiniz https://discord.gg/GCKHqjF \nSunucumuza geldiğiniz zaman kuralları okuyup sınır kapısına h!kabul yazmalısınız.')

	}
	else {
    const yardım = new Discord.RichEmbed()
  .setDescription('Eğlence komutları için \nh!eğlence \nModerasyon komutları içinse \nh!moderasyon')
    .setColor('RANDOM');
    return msg.channel.sendEmbed(yardım);
  }
  }}
  });

  client.on('message', msg => {
  if (msg.content === prefix + 'moderasyon') {
	   if (msg.author.id === "336842798944878593") {
	 msg.reply("Simit tarafından sayın valideniz ziyaret edilmiştir BANNED");
 }

 
 else {
	  	  if (msg.channel.type === 'dm') {
	msg.reply('Bu komutu özel mesajlarda kullanamazsınız dilerseniz sunucumuza gelip dilediğiniz kodu özgürce kullanabilirsiniz https://discord.gg/GCKHqjF \nSunucumuza geldiğiniz zaman kuralları okuyup sınır kapısına h!kabul yazmalısınız.')

	}
	else {
    const yardım = new Discord.RichEmbed()
  .setDescription('**MODERASYON KOMUTLARI:**\n**h!bot davet** botun davet linkini atar\n**h!kullanıcıbilgi** komutu sayesinde kendi bilgilerinizi öğrenebilirsiniz\n**h!sunucubilgi** komutu sayesinde sunucu bilgilerini öğrenebilirsiniz\n**h!destek** komutu sayesinde destek sunucum üzerinden bana ulaşabilirsin\n**h!temizle** komutu sayesinde 1-100 arasında mesajları silebilirsiniz örnek kullanım: h!temizle 20\n**h!tavsiye** ile bizlere tavsiyelerde bulunabilirsiniz!\n**h!at** @kişi `sebep` belirtilen kişiyi atar\n**h!ban** @kişi `sebep` belirtilen kişiyi banlar\n**h!kilit** `bir sayı +min` belirtilen süre boyunca komutu yazdığınız mesaj kanalını kilitler (örnek: h!kilit 5min)\n**h!otorol** `rol adı` Lütfen otorol kullanımında o rolden bahsetmeden yazınız (örnek h!otorol `üye`)\n**h!unban** `banlı kullanıcı **ID\'si**` bu komut id\'si yazılan kullanıcının sunucudan banını kaldırır\n**h!uyar** @kişi `sebep` belirtilen kullanıcıyı uyarır')
    .setColor('RANDOM');
    return msg.channel.sendEmbed(yardım);
  }}}
});


  client.on('message', msg => {
  if (msg.content === prefix + 'eğlence') {
	   if (msg.author.id === "336842798944878593") {
	 msg.reply("Simit tarafından sayın valideniz ziyaret edilmiştir BANNED");
 }

 
 else {
	  	  if (msg.channel.type === 'dm') {
		msg.reply('Bu komutu özel mesajlarda kullanamazsınız dilerseniz sunucumuza gelip dilediğiniz kodu özgürce kullanabilirsiniz https://discord.gg/GCKHqjF \nSunucumuza geldiğiniz zaman kuralları okuyup sınır kapısına h!kabul yazmalısınız.')

	}
	else {
    const yardım = new Discord.RichEmbed()
    .setDescription('**EĞLENCE KOMUTLARI:**\n**h!fıkra** size fıkra anlatır\n**h!simitısmarla** @kişi sevdiklerinize simit ısmarlayabilirsiniz\n**h!kahvaltı** ile güne zinde başlayabilirsiniz\n**h!tripat** @kişi ile trip atabilirsiniz \neğer arkadaşınızın dedikleri size hayal ürünü gibi geliyorsa **yav he he** yazarak botun da tepki vermesini sağlayabilirsiniz\n**h!simit at** ile martılara simit atabilirsiniz\n**h!kısabilgi** komutu sayesinde ilginç bilgiler edinebilirsiniz\n**h!ekip** komutu sayesinde bulunduğum ekipleri öğrenebilir dilerseniz siz de başvurabilirsiniz\n**h!1-10arasısayı** komutu ile sayı tahmin oyunu oynayabilirsiniz (sadece h!1-10arasısayı yazmanız yeterli olacaktır)\n**h!avatarım** avatarınıza erişebilirsiniz\n**h!adam topla** ile sunucuya 1 kamyon dolusu simit çağırıp rakibinizi korkutabilirsiniz \n**h!taşla** @kişi komutu ile arkadaşlarınızı taşlayabilirsiniz\n**h!yaz** mesajınız bu komut ile bota dilediğiniz mesajı yazdırabilirsiniz\n**h!uzunbilgi** bu komut sayesinde uzun bilgiler öğrenebilirsiniz\n**h!hava** `şehir-ülke adı` belirtilen yerin hava durumunu öğrenmenize yarar\n**h!sor** `sorunuz` klasik olan evet hayır vb. cevaplar ile tepki alabileceğiniz komut\n**h!bulaniklastir** @kişi belirtilen kişinin profil fotoğrafını bulanıklaştırır')
    .setColor('RANDOM');
    return msg.channel.sendEmbed(yardım);
  }}}
});

 client.on('message', msg => {
      function clean(text) {
        if (typeof(text) === "string")
          return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
        else
            return text;
      }

      const args = msg.content.split(" ").slice(1);

      if (msg.content.startsWith(prefix+ "eval")) {
        if(msg.author.id !== "242205627177369600") return;
        try {
          const code = args.join(" ");
          let evaled = eval(code);
    
          if (typeof evaled !== "string")
            evaled = require("util").inspect(evaled);
    
          msg.channel.send(clean(evaled), {code:"xl"});
        } catch (err) {
          msg.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
        }
      }
 });
client.on('message', msg => {
  if (msg.content === prefix + 'sunucubilgi') {
	   if (msg.author.id === "336842798944878593") {
	 msg.reply("Simit tarafından sayın valideniz ziyaret edilmiştir BANNED");
 }

 
 else {
    if  (msg.channel.type === 'dm') {
		msg.reply('Bu komutu özel mesajlarda kullanamazsınız dilerseniz sunucumuza gelip dilediğiniz kodu özgürce kullanabilirsiniz https://discord.gg/GCKHqjF \nSunucumuza geldiğiniz zaman kuralları okuyup sınır kapısına h!kabul yazmalısınız.')
      const ozelmesajuyarii = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(msg.author.username, msg.author.avatarURL);
    msg.author.sendEmbed(ozelmesajuyarii); }
    if (msg.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(msg.guild.name, msg.guild.iconURL)
    .addField('Ad:', msg.guild.name)
    .addField('ID', msg.guild.id)
    .addField('Ana kanal:', msg.guild.defaultChannel)
    .addField('Bölge', msg.guild.region)
    .addField('Üye sayısı:', msg.guild.memberCount)
    .addField('Sahibi:', msg.guild.owner)
    .addField('Kanal sayısı:', msg.guild.channels.size)
    .addField('Oluşturulma tarihi:', msg.guild.createdAt);
    return  msg.channel.sendEmbed(sunucubilgi);
    }
  }}
});

client.on('message', msg => {
  if (msg.content === prefix + 'kullanıcıbilgi')
	   if (msg.author.id === "336842798944878593") {
	 msg.reply("Simit tarafından sayın valideniz ziyaret edilmiştir BANNED");
 }

 
 else {
	  	  	  if (msg.channel.type === 'dm') {
msg.reply('Bu komutu özel mesajlarda kullanamazsınız dilerseniz sunucumuza gelip dilediğiniz kodu özgürce kullanabilirsiniz https://discord.gg/GCKHqjF \nSunucumuza geldiğiniz zaman kuralları okuyup sınır kapısına h!kabul yazmalısınız.')

	}
	else {
    if (msg.channel.type !== "group") {
        var Durum = msg.author.presence.status;
        var Durm = (Durum == "online" ? (0x00AE86) : (Durum == "offline" ? (0x808080) : (Durum == "idle" ? (0xFFFF00) : (Durum == "dnd" ? (0xFF0000) : (0x00AE86)))));
        var durm = (Durum == "online" ? ("Çevrimiçi") : (Durum == "offline" ? ("Çevrimdışı") : (Durum == "idle" ? ("Boşta") : (Durum == "dnd" ? ("Rahatsız Etmeyin") : ("Bilinmiyor/bulunamadı.")))));
      const kullanicibilgimk = new Discord.RichEmbed()
      .setAuthor(msg.author.username, msg.author.avatarURL)
      .setColor(Durm)
      .setTimestamp()
      .addField('Ad:', msg.author.username + '#' + msg.author.discriminator)
      .addField('ID:', msg.author.id)
      .addField('Kayıt tarihi:', msg.author.createdAt)
      .addField('Durum:', durm)
      .addField('Şu an oynadığı oyun:', msg.author.presence.game ? msg.author.presence.game.name : 'Şu an oyun oynamıyor')
      .addField('BOT mu?', msg.author.bot ? '\n Evet' : 'Hayır');
      return msg.channel.sendEmbed(kullanicibilgimk);
	}
 }}
});

 //client.on('message', msg => {
 //if(msg.channel.type === "dm") {
   //   console.log(msg.author.tag +' ==> '+ msg.content);
  //}
 //});

  

client.on('message', msg => {

   if (msg.content.toLowerCase() === 'simit') {
	    if (msg.author.id === "336842798944878593") {
	 msg.reply("Simit tarafından sayın valideniz ziyaret edilmiştir BANNED");
 }

 
 else {
    msg.reply('buyrun ilk günkü gibi çıtır çıtırım eğer bana komutlar için seslendiysen h!komutlar yazmalısın');
   }}


 
  
   if (msg.content === 'h!destek') {
	    if (msg.author.id === "336842798944878593") {
	 msg.reply("Simit tarafından sayın valideniz ziyaret edilmiştir BANNED");
 }

 
 else {
    msg.reply('https://discord.gg/GCKHqjF');
   }}
  
  if (msg.content === prefix + 'ping') {
	   if (msg.author.id === "336842798944878593") {
	 msg.reply("Simit tarafından sayın valideniz ziyaret edilmiştir BANNED");
 }

 
 else {
 msg.channel.send('```Ping! ' + client.ping + ' MS ```');
  }}


  if (msg.content === prefix + 'fıkra') {
	   if (msg.author.id === "336842798944878593") {
	 msg.reply("Simit tarafından sayın valideniz ziyaret edilmiştir BANNED");
 }

 
 
 else {
  var Random = [
 'Temel futbola merak salar ve futbolcu olur. Bir gün maçta teknik direktör ilk yarı sonrası soyunma odasındaki Temel in yanına gidip sorar; -"Neden bizim kaleye gol attın. Olum adam kendi takımının kalesine gol atar mı?" Temel hiç duraksamadan cevap verir; -"Ne yapayum da. Karşı takımın kalesine öyle çok benziy du ki, bizim kale',
 'Akıl hastanesine ziyarete giden adam bahçede güzel havanın tadını çıkaran birine: - Saatiniz kaç? diye sordu. Adam hemen içeri gidip, kağıt, pergel, gönye, kalem ve cetvel getirdi. Büyük bir titizlik ile gölgeyi ölçüp biçip hesaplar yaptıktan sonra: - Saat tam dördü beş geçiyor, dedi. Ziyaretçi: - Muazzam! Sizi tebrik ederim ama güneşsiz bir havada gölgeyi ölçemezsiniz, o zaman ne yaparsınız? - O zaman da saatime bakarım, dedi',
 'İki adam ışıklarda karşılaşmış. Birisi çok şişman diğeri de çok zayıfmış. Şişman adam zayıfa dönerek: -Seni görende kıtlık var sanır, demiş. Zayıf adam da: -Seni gören de kıtlığın sebebini anlar, demiş',
 'Adam doktorun karşısına oturdu. - Durum çok vahim doktor bey, bir dakika önce olan her şeyi unutuveriyorum. - Peki niçin hatırlamaya çalışmıyorsun? - Neyi?',
 'Misafir, küçük kıza sordu: -Büyüyüp, annen kadar olunca ne yapacaksın bakalım? -Rejim yapacağım teyze.',
 'Temel in karnesindeki zayıfları gören annesi sinirli sinirli Temel e bağırır: -Ha bu nedur? Geçen yıl sinif birincisudun, bu yıl sonuncu olmişsun! Temel gayet sakin cevaplar: -Anacuğum geçen yıl sen çok sevinmiştun bırak bu yıl da başka analar sevinsun da!',
'Japonlar ile Türkler arasında temel bir düşünce tarzı farklılığı vardır. Şöyle özetleyebiliriz; Japonlar: Biri yapabiliyorsa, ben de yapabilirim. Hiç kimse yapamıyorsa, ben yapmalıyım. Türkler: Biri yapabiliyorsa ben neden yapayım? Hiç kimse yapamıyorsa, ben nasıl yapayım?',
'Yaşlı teyze ineceği yeri geçen şoföre, "Beni mübarek bir yerde indur uşağum" der. Şoförde: "Teyze camiyi geçtuk mezar var ora olur mi?"',
'Temel ile Dursun borç para yüzünden mahkemelik olmuşlar. Hakim Temele sormuş: -"Oğlum, nedir konu anlat bakalım! -"Haçum pey. Pen ha bu Tursuna geçen sene 100 lira verdum penim paramu bi türlü vermez da." Hakim Dursuna dönmüş: -"Siz ne diyorsunuz bu iddiaya?" -Kim? Ha o adammu bağa para vermuş? Valla pen oni tanımayrum bile, Haçum bey." Bunu duyan Temel iyice şaşırmıştır. Dursuna dönerek: -"Tursun, ha sen şimdu peni tanımaymusun?" Dursun: -"I-ıh," Temel: -"Haçan, sen peni tanımaysan pen seni hiç tanumayrum da',
'Temel bir gün arabaya binmiş, uzunca bir yola çıkmış. Tam varacağı yere 2 saatlik yolu kalmış sağda bir levha görmüş : “Yavaşla 80 km” Temel hemen hızını 80 km’ ye düşürmüş. Biraz daha ilerlemiş “Yavaşla 50 km” yazıyormuş. Temel hızını bu seferde 50 km’ ye düşürmüş. Az ileride “Yavaşla 20 km” levhasını görünce Temel hızını yine düşürmüş. İyice meraklanmaya başlamış, acaba kaza falan mı oldu diye. Bir süre daha gittikten sonra karşısında yeni bir levha: ” YAVAŞLA’ YA HOŞ GELDİNİZ',
'Bir gün İngiliz, Fransız ve Temel aynı uçağa binmişler. Temel : – Yine mi siz lan, demis :)',
'Temel 60 katlı bir gökdelenden aşağıya düşmüş. 50-40-20-10-5-4-3-2 derken 1.kata geldiğinde aklından şu geçmiş : – Allahım sana şükürler olsun. Bu kata kadar ölmeden geldiysem zaten 1.kattan düşsemde ölmem :)',
' Çocuğun biri sürekli sınıfın penceresinden başını sarkıtarak derslere katılıyormuş..Öğretmeni bi gün sormuş..Evladım neden pencereden bakarak dersleri dinliyorsun demiş..Çocuk da Örtmenim ben okulu dışardan veriyorum demiş..',
'Temel yeni bir ayakkabı almak için ayakkabıcıya gitmiş. Beğendiği ayakkabının parasını ödeyip tam çıkacakken satıcı, “aklınızda bulunsun Temel bey, ayakkabı yeni olduğu için ilk hafta biraz sıkabilir” der. Bunun üzerine Temel : “iyi o zaman ben de ilk hafta giymem daaa” :)',
'Temel bir gün Fadimeye Bu gece evinde kimse olmayacağını söylemiş..Fadime Gece gitmiş zili çalmış çalmış kimse kapıyı açmamış..',
'Temel birgün yolda gidiyormuş. Ayağı bir şişeya takılmış ve şişeden bir cin çıkmış. Cin ” Dile benden ne dilersen! ” demiş. Temel’ de : -Özür dileyrum daa demuş :)',
'Temel’ e içinde Bukalemun kelimesi geçen bir cümle kurmasını söylemişler. Temel’ in cevabı : – “Ula ha bukalemun purada ne işi vardur” olmuş :)',
'Yargıç Temele sormuş : Davacıya borcunu bir türlü ödemiyorsun neden ? Temel boynunu büker. Vereceğum vermesine de “Bana üç ay mühlet ver.” diyorum vermiyor üç yıldır beni oyalıyor yargıç bey.',
'Temel bir gün karısı Fadime ile film izlemeye gitmiş. Gişedeki görevliye iki pilet lütfen demiş. Gişedeki kadın “Leyla ile Mecnun” için mi demiş. Temel hayır daa Fadime ile penum için demiş.',
'Temele sormuşlar kariyer hakkında ne düşünüyorsunuz diye… Temel cevap vermiş; Gerçekten çok doğru erkek çalışır karı-yer demiş…',
'Temel Amerika’ ya yapacağı seyahat öncesi dil kursuna kaydolmuş. Kursta ilk öğrendikleri kelime Come yani “Gel” demek olmuş. Temel bir süre bekledikten sonra dayanamayıp sormuş: – Ula pu nasil iş dur da. Come yazaysun, kam diye okuysun. Peki gel olduğunu nasıl anlaysun?',
'Temel’ in tam tamına 12 erkek çocuğu varmış. 11 erkek çocuğunu askere gönderen Temel, 12. çocuk içinde askere davet mektubunu alınca canı sıkılmış. – Ula söyleyin padişahunuza, penim şeyime güvenip sağa sola savaş açıp durmasun.',
'Bir Ingiliz doktor diyor ki : Tip bilimi bizde öyle ilerledi ki, biz bir adamin beynini aliriz ve baskasina koyariz ve onu alti haftada is arayacak hale getiririz. Alman doktor diyor ki : Bu hiç birsey diil; biz bir adamin beynini çikaririz ve baskasina koyariz ve onu dört haftada savasa hazir hale getiririz. Amerikali doktor da diyor ki ; Beyler siz çok geridesiniz. Biz Teksastan bir beyinsizi aldik ve beyazsaraya koyduk. Simdi ülkenin yarisi is ariyor , yarisi da savasa hazirlaniyor.',
'Boksör Temel iri yapılı rakibi ile maç yapar.1.rauntta rakibi temeli epey haşlar.1.raunt sonunda Temel köşesine gider.antrönörü Dursun moral vermek için Temele sen dövüyorsun devam et der.2.ve3. rauntlarda da aynı şeyler olur.4. rauntta kaşı ve gözü patlamış temel raunt sonunda güç bela köşesine gider.Dursun yine aslanım Temel adamı parçaladın der.Temel güç bir şekilde dursuna bakarak ben mi dövüyorum der.Dursun evet sen dövüyorsun der.Temel:öyle ise etrafa iyibak başka birisi beni fena halde dövüyor!',
'Bir gün nasreddin hoca rüyasında bir adamla konuşuyormuş adam 9 akçe diyormuş.Nasreddin hocada 10 akçe diyormuş.Nasreddin hoca rüyadan uyanmış ellerinde hiç akçe yok.Geri uykuya dalmış ve adama demiş tamam 9 akçe olsun.',
'Nasrettin hoca ya sormuşlar – Hocam dünyanın merkezi neresidir? Hoca bulunduğu yeri göstererek: – İş te tam da burası dünyanın merkezidir. Soruyu soranlar şaşırmış:– Aman hocam bu nasıl olur? Hoca cevabı yapıştırır:– İnanmıyorsan git ölç.',
'Nasrettin Hoca akşam üzeri evine doğru ilerliyormuş. Densizin biri gelip hocaya: – Hocam biraz önce gördüm, adamın biri büyük bir tepsi baklava götürüyordu. Hocam cevap vermiş:– Bana ne bundan. – İyi de hocam adam baklavalarla sizin eve doğru gidiyordu. – O zaman “sana ne” bundan?',
'Hoca bir gün köyden eşekleri almış şehre satmaya gidiyormuş. Eşeğin birisine binen hoca ikide bir eşekler kaybolmasın diye sayarmış. Yine sayacağı zaman altındaki eşeği saymayarak 9 eşek olduğunu görmüş. İnmiş eşekten yine saymış bu sefer 10muş. Hoca şaşırmış ve ; -9 mu 10 mu kara verin artık ! demiş',
'Nasreddin Hoca eşeğine binmiş köyüne giderken sıkışır, bir ağaçlık dere kenarında eşekten inerek kaftanını çıkarır, eşeğin üzerine koyarak ortadan kaybolur,  ihtiyacını gidererek döndüğünde kaftanı ortada yoktur. Israrlı sorgulamasına rağmen eşeğinden de  tık çıkmayınca Hoca sinirlenir. Eşeğin semerini çözerek omuzlar ve eşeğine; "Bre mel un! Ver kaftanımı vereyim semerini!" diye bağırır.',
'Hoca, bir zengin konagina yemege davetliymis. Kapida bir usak,herkesi saygi ile karsiliyormus. Sira hoca`ya gelince giysilerini begenmeyip iceriye almamis. Buna fena icerleyen hoca, evine kosup kurkunu giymis. Dondugunde, sofranin en guzel yerine kurulup, oturmus. Herkesin saskin bakislari altinda kurkunu yemeklere sokup; “-Ye kurkum ye! “ demis, “-Hoca ne yapiyorsun!” diye sormuslar. Yanit vermis; “-İkram bana degil kurke!” demis.',

     ];
 var Sözver = Math.floor(Math.random()*Random.length);
 msg.channel.send(`${Random[Sözver]}`);
  }}



if (msg.content === prefix + 'kısabilgi') {
	 if (msg.author.id === "336842798944878593") {
	 msg.reply("Simit tarafından sayın valideniz ziyaret edilmiştir BANNED");
 }

 
 else {
var Random = [
  'Su samurları el ele tutuşarak uyuyorlar.',
  'Leonardo Da Vinci aynı anda bir eliyle yazı yazıp diğer eliyle resim yapabiliyordu.',
  'Taklitçi ahtapot isimli ahtapot, sadece renk değiştirmekle kalmıyor, aynı zamanda dil balığı, aslan balığı ve deniz yılanı gibi hayvanların şekline de bürünebiliyor.',
  'Dünyada yaşayan tüm insanları oluşturan atomlardaki boşluklar çıkarılırsa tüm dünya nüfusu bir elmaya sığabilir.',
  "1960'larda CIA, Rus konsolosluklarında casusluk için, Akustik Kedicik ismini verdiği programında, cerrahi yöntemle kedilerin içine mikrofon, pil ve anten yerleştirerek kedileri dinleme cihazına dönüştürdü",
  'Dünyanın en zengin 3 ailesi, en fakir 48 ülkenin toplam servetinden daha fazla servete sahip.',
  'Dünyanın en uzun süren trafik sıkışıklığı 12 gün sürdü, 100 km kuyruk oluştu ve araçlar günde 1 kilometre ilerleyebildiler.',
  "Everest Dağı'nda 200'den fazla dağcı cesedi bulunmakta.",
  "Pulp Fiction filminde tüm saatler 04.20'yi gösterir.",
  'Bir erkek aslan yönetimi ele geçirince tüm yavru aslanları infaz eder.',
  'Dünyadaki insanların üçte ikisi hiç kar görmedi.',
  "Artık nesli tükenmiş olan 'Yünlü mamut' isimli mamut türünün canlıları Mısır Piramitleri inşa edilirken varlardı.",
  'Ortalama bir insan, ömrü boyunca dünyanın çevresini yaklaşık üç defa dolaşacak kadar yürür.',
  "Bir denizanasının %95'i sudan oluşmaktadır.",
  'Charles Osborne isimli bir adamın hıçkırığı 69 yıl sürdü.',
  "Varyemez Amca isimli çizgi film, külot giymiyor olması gerekçesiyle Finlandiya'da yasaklanmıştır.",
  'Çok sert hapşırırsanız kaburga kemiklerinizden biri kırılabilir.',
  'Geceleri sabaha göre 1 cm daha kısa olursunuz.',
  'İneklerin en iyi arkadaşları vardır ve onlardan uzaklaştırıldıklarında stres yaşarlar.',
  'Karda gizlenmeye çalışan bir kutup ayısı, siyah burnunu pençesiyle kapatır.',
  'Sivrisineklerin 47 tane dişi vardır.',
  'Uyurken, TV izlerken olduğundan iki kat daha fazla kalori harcarız.',
  'Klinik ölüm sonrası insan 5 dakika içinde hayata geri getirilebilir. 5 dakika sonra beyin hücreleri ölmeye başlar, ama yine de bu süreyi 5 dakika daha uzatmak mümkündür.',
  'İnsan uzun süre bir böbrek ve bir akciğerle, midesiz, dalaksız yaşayabilir, ama karaciğersiz bir dakika bile yaşayamaz.',
  'Birinci Dünya Savaşında Fransa ülkedeki tüm taksileri devraldı ve askerler cepheye bu taksilerle taşındı.',
  'Parmak izi gibi herkesin dil izi de farklıdır.',
  'Kahve sarhoş bir insanın ayılmasına yardımcı olmaz. Hatta çoğu zaman alkolün etkisinin artmasına yol açar.',
  'İnsan yılda en az 1460 rüya görür.',
  'Değerli taşların çoğu birkaç elementten oluşur,sadece pırlanta tamamen karbondan oluşur.',
  'Beethoven beste yapmadan önce kafasını soğuk suya sokardı.',
  'Bir kadının sahip olduğu en fazla çocuk sayısı 69.',
  'Timsahlar daha derine batabilmek için taş yutarlar.',
  "Çin'de İngilizce konuşan kişi sayısı Amerika'dan daha fazladır.",
  "Bir yılan 3 yıl uyuyabilir..",
  "Maymunlar her yıl uçak kazalarından daha fazla insan ölümüne neden oluyor.",
  "İlk kule saati 1404 yılında Moskova'da yapılmıştır.",
  "Dünyadaki ısı 1900 yılından itibaren 0.7 derece arttı.",
  "Sağ elini kullananlar sol elini kullananlardan ortalama 9 yıl daha uzun yaşıyor.",
  "Dünyadaki ilk telefon rehberinde sadece elli isim yer almıştı.",
  "İnsan saçı, üç kilo ağırlık kaldırabilecek esnekliktedir.",
  "Kaju olarak bildiğimiz çerez aslında kaju meyvesinin sapıdır.",
  "Su aygırının sütü pembe renklidir.",
  "Mavi balinaların kalbi o kadar büyüktür ki bir insan atardamarları içerisinde rahatlıkla yüzebilir.",
  "Kuzey Kore ile Finlandiya'yı ayıran tek ülke Rusya'dır.",
  "'Duck Hunt' aslında iki kişilik bir oyundur.İkinci oyuncu ördeği kontrol eder.",
  "Plüton keşfedildiği tarihten itibaren bir kez bile güneşin etrafında tam tur dönmemiştir. Bu yüzden artık bir gezegen olarak kabul edilmiyor.",
  "Bal güneş görmediği sürece asla bozulmaz.",
  "19. yüzyıldaki tüm insanlar, şuan 2 dakikada çekilen fotoğraflar kadar fotoğraf çekememişti.",
  "Yer fıstığı aslında bir baklagildir ve toprağın altında büyür.",
  "Her 5000 bebekten birisi anüsü olmadan (imperforate anus) doğuyor ve hastane ortamında anüs yapılması gerekiyor.",
  "Gökyüzündeki yıldız sayısı dünya üzerindeki tüm plajlardaki kum tanesi sayısından fazladır.",
  "Bin saniye yaklaşık 16 dakika, bir milyon saniye yaklaşık 11 gün, bir milyar saniye yaklaşık 32 yıl ve bir trilyon saniye yaklaşık 32.000 yıl eder.",
  "Hava dalışçısı Joan Murray, paraşütü açılmayınca saatte 130 km hızla bir ateş karıncası tepesinin üzerine düşmüş. Vücudunun, 200'den fazla kez ısırılmanın şokuyla salgıladığı adrenalin, Murray'nin hayatta kalmasını sağlamış.",
  "Steve Jobs Suriyeli göçmen bir ailenin çocuğuydu.",
  "Karpuz, kızartıldığında veya fırınlandığında tanecikli yapısını kaybeder ve et yerine tüketilebilir.",
  "O piti piti ingilizce bir şiirin giriş dizesidir.",
  "İsviçre peynirinde delik olmasının sebebi yapımında kullanılan heterofermentative türündeki bakterilerdir.",
  "Bir erkek penguen bir dişi penguene aşık olduğunda, tüm sahili mükemmel çakıl taşını bulmak için arşınlar ve bu taşı dişisine sunar. Evlilik teklifi gibi değil mi?",
  "Eğer bir çivinin başı Güneş'in merkeziyle aynı sıcaklıkta olsaydı, 1600 km yakınındaki herkesi öldürürdü.",
  "Kanada'da bulunan göl sayısı, dünyanın geri kalanında bulunan göl sayısından fazladır.",
  "Adem elması kadınlarda da vardır. Sadece testosteron oranı düşük olduğundan fark edilir büyüklükte değildir.",
  "Peynir ve bitter çikolata, diş çürümesini önler.",
  "Sevdiğiniz filmleri tekrar tekrar izlemek sizin için faydalı olabilir. Geleceğinizi öngöremediğiniz bir dünyada, sonunu bildiğiniz bir hikayeyi izlemek sizi rahatlatır.",
  "Vücudunuz peyniri sindirdiğinde salgılanan opiatlar, bağımlılık yaratabilir.",
  "Japonya'da bulunan bir anaokulu, yağmur suyunu çocukların oynaması için içine alacak şekilde tasarlanmış.",
  "Tat alma duyumuzun renklerle büyük bir ilişkisi var.",
  "Murfreesboro, Arkansas'da halka açık bir elmas madeni bulunuyor. Bulduğunuz değerli taşları yanınızda götürebiliyorsunuz.",
  "Japonya'da artık kullanılmayan bir tren istasyonu, yalnızca tek bir kızın okula gidebilmesi için çalışıyor.",
  "Finlandiya ve Kuzey Kore, teknik olarak yalnız bir ülkeyle ayrılır.",
  "İran ordusu, 2007 yılında 14 sincabı ajan oldukları gerekçesiyle tutukladı.",
  "Allı turna denilen hayvan flamingo'dur.",
  "Flamingoların özellikle sudayken tek ayakları üzerinde durmalarının sebebi ayaklarını dinlendirme değil vücutlarını sıcak tutma çabasıdır. Bu şekilde daha az ısı kaybederler.",
  "Evcilleştirilmiş ve kokuları yok edilmiş kokarcalar mükemmel ev hayvanları olurlar.",
  "Kadınlardaki sinir reseptörü sayısı erkeklerdekinin iki katıdır; bu yüzden acıyı daha yoğun hissederler. Ancak, acıya karşı dayanıklılıkları da daha fazladır.",
  "Ayak kokusunun peynirli cipse benzemesinin nedeni aynı tür kimyasalları bulunduruyor olmasıdır.",
  "Kalp kanserinin çok nadir olmasının nedeni kalbin büyümesini sağlayan bölünerek çoğalan hücrelerin çoğunun bebeklikte tamamlanmış olmasıdır.",
  "Elmayı kesip bir kenara koyduğumuzda kararmasının sebebi bozulması değildir. Aslında tam tersidir.",
  "San Diego Hayvanat Bahçesi'nde yaşayan Ken Allen isimli bir orangutan, 3 kez hayvanat bahçesinden kaçmayı başarmış.",
  "Kot pantolonlardaki küçük cepler, cep saati koymak için tasarlanmış.",
  "Ankaralı Namık aslında Muş'luydu.",
  "Kırmızı eti beyaz etten ayıran miyoglobin sayısındaki farklardır. Miyoglobin proteininin kendisi kırmızı renktedir. Sığır etinde yüzde 0.8 miyoglobin varken insan etinde yüzde 2 miyoglobin bulunur.",
  "Eğer bir bezelyeyi burnunuzdan çekerseniz, ciğerlerinizde filizlenip büyüyebilir.",
  "Yüz kızarmasını adrenalin artışından kaynaklanır. Ancak korktuğumuzda da adrenalin salgılanmasına rağmen yüzümüz kızarmaz.",
  "Teksas'da 'Ding Dong' isminde bir kasaba bulunmaktadır.",
  "İnsanların gözlerinde üç farklı renk konisi vardır. Mavi-sarı-kırmızı.",
  "Çin'de beşten fazla zaman dilimi olmasına rağmen, tüm ülke Pekin saatini kullanır.",
  "Rodi Mood'un açılımı Ramazanoğulları Dikim İşletmeciliği'dir.",
  "Esnememizin sebebi fazla oksijen alma ihtiyacımız değil, beynimizi soğutmaktır.",
  "Auroraların sadece kutuplarda olmasının sebebi dünyanın manyetik alanıdır. Manyetik alan dünyanın çevresini bir kalkan gibi sarar ama kutup bölgelerinde tıpkı bir donut gibi boşluklar bırakır.",
  "Yavru filler, bazen öfke nöbeti geçirir ve kendilerini çamurun içine atarlar.",
  "Meltem Cumbul ile Kıvanç Tatlıtuğ sevgiliydi.",
  "Rickman, karakterine dair tüm sırları bildiği için yönetmenlerle bazen tartışıp 'Hayır, istediğinizi yapamam Ben ne olacağını biliyorum ve siz bilmiyorsunuz.' diyormuş.",
  "Libya'nın %99'u çöllerle kaplıdır.",
  "Marie-Antoinette cep saati dünyanın en pahalı saati. Tam 30,000,000,00 dolar değerinde.",
  "Everest Dağı'nın uzunluğu, yılda yaklaşık olarak 4 mm kadar artar.",
  "Taumatawhakatangihangakoauauotamateaturipu-kakapikimaungahoronukupokaiwhenuakitanatahu, Yeni Zelanda Taumata'da bulunan bir tepedir ve dünyadaki en uzun yer ismidir.",
  "Bir İngiliz firması tarafından üretilen Vantablack isimli madde o denli siyah ki, insan gözü onu zar zor seçebiliyor.",
  "Bayılmamızın sebebi parasempatik sinir sistemimizin tehlike geçtikten sonra kan basıncını birden düşürmesi ve beyne giden kan akışının kesilmesidir.",
  "Paranın metalik kokusu, aslında demir veya bakır ile etkileşime girince parçalanan vücut yağlarının yol açtığı bir koku.",
  "Kuğular, hayatlarını tek partnerle geçirirler. Dahası, partneri ölen bir kuğu üzüntüden hayatını kaybedebilir.",

];
var Sözver = Math.floor(Math.random()*Random.length);
msg.channel.send(`${Random[Sözver]}`);
}}


  if (msg.content === prefix + 'uzunbilgi') {
	   if (msg.author.id === "336842798944878593") {
	 msg.reply("Simit tarafından sayın valideniz ziyaret edilmiştir BANNED");
 }

 
 else {
  var Random = [
  
"İnsanoğlunun bildiği okyanus canlı türlerinin sayısı 275.000 kadardır. Dünyadaki en büyük hayvan ve deniz memelisi mavi balinadır. Mavi balina 33 metre boyundadır ve yaklaşık 40 gergedanın ağırlığındadır. En küçük deniz canlısı mikroskopik planktonlardır. Planktonlar denizde besin zincirinin temelini oluşturmaktadır",
"Denizler fosil yakıtların yakılmasından kaynaklanan karbon dioksidin %30 ila %50'sini absorbe etmektedir. Karbon dioksit planktonlar aracılığıyla deniz diplerine gönderilmektedir. Deniz suyu sıcaklığındaki herhangi bir değişim plantonların karbon dioksit alımını etkilemektedir. Bu ekosistemi etkilemktedir, çünkü planktonlar denizdeki besin zincirinin temelini oluşturmaktadır.",
"Kurşun bir nörotoksindir. Çok fazla kurşun alırsanız, beyninizi ve merkezi sinir sisteminizi onarılamayacak biçimde hasara uğratırsınız.Yirminci yüzyılın erken dönemlerinde her türlü tüketici ürününde kurşuna rastlamak mümkündü. Gıdalar kurşunla lehimlenmiş konserve kutularında satılırdı. Su çoğunlukla kurşunla astarlanmış tanklarda depolanırdı. Meyvelere böcek ilacı olarak kurşun arsenat püskürtülürdü. Diş macunu tüplerinin tarkibinde bile biraz kurşun vardı. Bununla birlikte insanları onunla en etkili ve kalıcı biçimde haşır neşir eden, kurşunun benzine karıştırılması oldu.",
"Bir Tsunami dalgası saatte yaklaşık 800 km hızla ilerleyebilir. Bugüne kadar kaydedilen en büyük Tsunami deniz seviyesinden 64 metre yüksekliğindeydi ve 1737'de Sibiryadaki Kamçatka Yarımadası'nı vurmuştu.",
"Balinalar su altında en fazla 1 saat kalabilirler. Normalde 90 m. derinliğe, korktuklarında ise 360 m.'ye inebilirler. İspermecet balinaları 1000 metreye rahatlıkla dalabilirler. Ciğerlerine az hava aldıklarından ayrıca soluk deliklerinin arkasında havadaki azotu emen köpüksü bir madde olduğundan vurguna yakalanmazlar. Hastalanmayan tek hayvan köpek balıklarıdır.",
"Dünyadaki ilk bitkiler olan algler 3,5 milyon yıl önce oluştular. Diğer bitkiler gibi algler besin üretirken oksijen açığa çıkartır. Zamanında bu algler canlıların yaşaması için gerekli oksijeni ürettiler. Günümüzde algler soluduğumuz oksijenin yarısından fazlasını üretmektedir.",
"Bilim adamlarına göre denizler yaklaşık 50 katrilyon (50.000.000.000.000.000) ton çözülmüş tuz içermektedir. Eğer denizlerdeki tuz ayrıştırılıp toprağın üstüne serpilseydi tüm dünya 166 metre yüksekliğinde bir katmanla kaplanmış olacaktır.",
"Bugün dünyada yaşayan aşağı yukarı 1 milyon böcek türü vardır. Her yıl aşağı yukarı 8000 yeni tür keşfedilmektedir",
"Penguenler, enerji tasarrufu yapmak için sarkaç hareketiyle yürürler. Colorado Üniversitesi'nden Timothy Griffin ve Rodger Kram, penguenleri San Diego kentindeki Deniz Dünyası Merkezi'nde aylarca süren bir incelemeye aldı ve ilginç bulgular elde etti. İki bilimadamı, araştırmanın sonucunu şöyle açıkladı: 'Aşırı kısa bacaklı olan penguenler, yana doğru adımlar atarak kaslarının daha az yorulmasını sağlıyor. Böylece her adımın sonunda bir sonraki adım için enerji depoluyor. Normal yürümüş olsalar, kendi heybetlerindeki bir hayvandan iki kat daha fazla enerji harcamaları gerekiyordu. İşte bunu keşfederek bu şekilde yürümeyi geliştirmişler Sadece yürümeye başlarken enerji harcıyorlar, bir de dururken.'",
"Herkes rüzgarın hareket eden hava olduğunu bilir, peki havayı hareket ettiren nedir? Tabii ki atmosferin değişken sıcaklığı! Güneş yeryüzünü ısıttıkça atmosfer de ısınır. Yeryüzünün bazı bölgeleri güneş ışınlarını dik olarak alır ve her zaman sıcaktır. Diğer bölgeler güneş ışınlarını eğik olarak alır ve iklim daha serindir. Soğuk havadan daha hafif olan sıcak hava yükselir. Daha sonra soğuk hava yükselen sıcak havayla yer değiştirir. Havanın bu hareketi rüzgarı oluşturmaktadır.",
"Ozon, her molekülün iki yerine üç oksijen atomu taşıdığı bir oksijen formudur. Yer seviyesinde havayı kirletmesi, stratosferdeyse tehlikli ültraviyole ışınlarını emdiği için yararlı oluşu kimyanın tuhaf bir cilvesidir",
"İnsanoğlunun Dünyayı 3 000 000 000 000 000 000 000 000 000 000 000 başka canlı ile paylaştığı hesaplanmıştır",
"Nar bülbülü (Erithacus rubecula) nerede bulunursa bulunsun her zaman göç edeceği yere doğru döner. Bunu yapabilmek için dünyanın manyetik alanından yararlanır. Fakat nar bülbülüne bu yönelişi yaptıran düzenin nasıl çalıştığı henüz bilinmemektedir.",
"En yüksek gelgitler Kanada'daki Fundy Körfezi'nde gerçekleşmektedir. Sene boyunca değişik zamanlarda med ve cezir arasındaki fark 16 metreyi bulmaktadır.",
"Yılda 100 milyon köpekbalığı sadece yüzgeçleri için öldürülmektedir. Bir yıl içinde bir milyon balıkçıl kuş ve 100.000 deniz memelisi ve deniz kaplumbağası plastiklere dolanıp havasızlıktan ölmektedir. Her yıl yaklaşık 1000 kilometre balığ ağı denizlere bırakılmakta ve bir ölüm örtüsü oluşturmaktadır.",
"Dünyanın toplam sahil şeridinin uzunluğu 504.000 km'dir. Bu uzunluk ekvator etrafında 12 tura eşdeğerdir. Kanada dünyada en uzun sahil şeridine sahip ülkedir. (243,797 km) Türkiye'nin sahil şeridinin uzunluğu 8.333 km'dir.",
"Bir yıl içinde denizlerden avlanan balıkların ağırlığının üç katı kadar atık denizlere atılmaktadır. - 1 litre motor yağı 530.000 litre içme suyunu kirletebilmektedir.",
"Sahil bölgeleri kalabalıklaştıkça sahildeki suyun kalitesi düşecek sahildeki vahşi yaşam yok olacak ve sahiller yok olacak. Pasifik sahilleri %60'ı ve Atlantik sahillerinin %35'i her sene 1 metre aşınmakta ve yok olmaktadır",
"Dünyadaki en büyük balık sıcak sularda yaşayan ve planktonlarla beslenen balina köpekbalığıdır. En büyüğü 12 metre olarak ölçülmüştür ve yaklaşık 10.000 kg ağırlığındadır.",
"Islak ve çamurlu yerlerde yuva yapan dalgıç kuşunun yumurtalarının yavrunun havasızlıktan ölmesini önleyen özel bir inorganik tabaka ile kaplıdır.",
"Denizler dünyadaki proteinin en büyük kaynağını oluşturmaktadır. Her yıl yaklaşık 70-75 milyon ton balık avlanmaktadır. Bu miktarın yaklaşık 29 milyon tonu insanların tüketimi içindir. Küresel balık üretimi büyükbaş, küçükbaş ve kümes hayvanları üretimini aşmaktadır. - Balıkların çok büyük bir kısmı insan etkileri daha az olduğundan güney yarıkürede yaşamaktadır. - Dünyadaki en büyük 17 balık yaşam alanının 15'i o kadar çok istismar edilmiştir ki balıkların üreme hızı yetersiz kalmıştır. Bu nedenle pek çok balık popülasyonu hızla azalmaktadır. - 19. yüzyılda 90 kiloya kadar morina balığı avlanabilirken günümüzde avlanan en ağır morina balığının ağırlığı 18 kiloyu geçmemektedir. Nedeni: aşırı balık avlama",
"Hava kirliliği denizlerdeki zehirli maddelerin içte birini oluşturmaktadır. Denizlerdeki zehirli maddelerin %44'ü nehir ve akarsulardan kaynaklanmaktadır.",
"Ağırlığı 600 kg olan bir inek (Bas taurus) 1,2 kilovatlık ısı üretir. 20 ineği ile 150 m2 lik alanı böyle ısıtan bin çiftçi yılda 3300 litre fueloil kullanmış demektir. Havalandırma düzeniyle ahırdan atılan sıcaklık pompalarla emildiği takdirde suyun sıcaklığı 40 ila 50 dereceye çıkarılabilir. Bunu yüzyıllardan beri bilen kırsal alan çiftçileri ahırları üzerinde yaşayarak az yakıtla ısınabilmiştir.",
"Dünyadaki mercan kayalıklarının %60'ından fazlası kirlilik, tortulaşma ve küresel ısınmadan kaynaklanan deniz suyu sıcaklığı artışının yol açtığı ağarlaşma etkisi nedeniyle tehdit altındadır. Küresel mercan İzleme Ağı bugün mercan kayalıklarının %30'unun yok olduğunu 2050 yılında sadece %30'unun geriye kalacağını belirtmektedir",
"Bazı balıklar oldukça uzun yaşarlar. Örneğin, Kanada'nın Pasifik kıyısında yaşayan 'Rougheye Rockfish' isimli balık türünün yaklaşık 150 yıl hayatta kaldığı tahmin edilmektedir.",
"Dünya nüfusunun yarısından fazlası sahilden 100 km'lik bir uzaklıkta yaşamaktadır. Bu 2.7 milyar insandan fazladır. Hızlı kentleşme sahillerde her birinin nüfusu 10 milyondan fazla olan dev şehirleri ortaya çıkarmaktadır.. Sahil bölgelerindeki artan nüfus daha fazla deniz kirlenmesine ve sahildeki yaşam alanlarının dağılmasına yol açmaktadır. Her yıl yaklaşım 6,5 milyon ton ( 6.500.000.000 kg) çöp denize boşaltılmaktadır.",
"Eskiden Mısırlılar beyin ameliyatından sonra kafayı dikmek için karıncaları kullanırlarmış.Karıncanın bir yerine basınca ağzı açılıyomuş bizim Mısırlılar da bunları ameliyat ettikleri adamın kafa derisiyle yüzünü birleştirmek için kullanıyorlarmış. Zekiler naparsın ....",
"Dünyanın en kısa boylu insanı 1876 yılında Hollanda ' da dünyaya gelen bayan Pauline Musters dir. Doğduğunda boyu 30 cm idi. 9 yaşına geldiğinde boyu 55 cm. ağırlığı 1.5 kilo idi. 1895 yılında öldüğünde boyu 59 cm. idi.",
"Resmi kayıtlara göre , dünyanın en çok çocuk doğuran kadını Feodor Vassilyev adlı Rus çiftçisinin ilk karısı bayan Vassliyev dir. 1725-1765 yılları arasında yapığı 27 doğumda tam 69 çocuk dünyaya getirdi. Bunların 16'sında ikiz , yedisinde üçüz , dördünde ise dördüz doğurdu.",
"5 haziran 1938 yılında normal doğum süresinden 6 hafta önce doğan Marian Taggart doğduğunda tam 283 gram geliyordu. Boyu da 31 santim olan minik Marian , tam 30 saat süreyle bir dolmakalem ucundan emdirilen glikoz ve su ile beslendi . 1983 yılında 45 yaşında öldü.",
"Dünyanın en büyük hayvanı sibbald balinasıda denilen mavi balinadır..Dişi bir balina günde 590 kilo süt verir.20 mart 1947 yilinda güney okyanusunda yakalanan 187 TON ağırlığındaki bir dişi balinanın dili 4 ton 270 kilo kalbi ise 698,5 kilo gelmiştir.Aynı zamanda hayvanlar aleminin en hızlı büyüyen hayvanadır.22 ayda miligramdan 26 tona ulaşır.",
"Dünyanın en cüsseli ağacı California'da Sequoia Ulusal parkında bulunan dev çam ağacıdır. Genaral Shermann adı verilen bu ağacın boyu 83 metre , çevresi ise 1980 yılında 24 metre 32 cm. olarak hesaplandı. Kökleri ile birlikte 61 ton ağırlığında olduğu tahmin edilen bu ağaçtan 5 milyar kibrit yapılabileceği hesaplanmıştır.",
"İnsanoğlunun bildiği okyanus canlı türlerinin sayısı 275.000 kadardır. Dünyadaki en büyük hayvan ve deniz memelisi mavi balinadır. Mavi balina 33 metre boyundadır ve yaklaşık 40 gergedanın ağırlığındadır. En küçük deniz canlısı mikroskopik planktonlardır. Planktonlar denizde besin zincirinin temelini oluşturmaktadır",
"Deniz seviyesi geçtiğimiz 100 yılda 10-25 cm artış göstermiştir ve bilim adamları bu artışın devam edeciği görüşündedir. Deniz seviyesi iklim değişiklikleri ortadan kalksa bile yükselmeye devam edecektir çünkü denizler değişikliklere yavaşça reaksiyon göstermektedir. - 10.000 yıl önce deniz seviyesi yaklaşık 110 metre daha alçaktaydı. - Dünyadaki tüm buzullar erirse deniz seviyesi 65 metre kadar artacaktır.",
"Denizler fosil yakıtların yakılmasından kaynaklanan karbon dioksidin %30 ila %50'sini absorbe etmektedir. Karbon dioksit planktonlar aracılığıyla deniz diplerine gönderilmektedir. Deniz suyu sıcaklığındaki herhangi bir değişim plantonların karbon dioksit alımını etkilemektedir. Bu ekosistemi etkilemktedir, çünkü planktonlar denizdeki besin zincirinin temelini oluşturmaktadır.",
"Yirminci yüzyılın erken dönemlerinde her türlü tüketici ürününde kurşuna rastlamak mümkündü. Gıdalar kurşunla lehimlenmiş konserve kutularında satılırdı. Su çoğunlukla kurşunla astarlanmış tanklarda depolanırdı. Meyvelere böcek ilacı olarak kurşun arsenat püskürtülürdü. Diş macunu tüplerinin tarkibinde bile biraz kurşun vardı. Bununla birlikte insanları onunla en etkili ve kalıcı biçimde haşır neşir eden, kurşunun benzine karıştırılması oldu.",
"Çanakkale’de tesadüfen ortaya çıkarılan ve hâlâ arkeolojik kazıları sürdürülen antik Parion kentinde inceleme yapan Prof. Dr. Doğan Perinçek ve Prof. Dr. Şükrü Ersoy, kentin büyük depremlerle yıkıldığını ve bazı bölümlerinin sular altında kaldığını söyledi. İki jeolog, bu kanıya şehir kalıntılarının suyun altında kalması, kayaların yapısı ve deniz cisimleriyle, şehir kalıntıları ve insan iskelet parçalarının birbirine karışması gibi verilerden ulaştıklarını kaydetti. Ekibe göre, şehir birden fazla defa yıkılmış, sonunda da büyük ihtimalle M.Ö. 1. yüzyıl ile M.S. 2. yüzyıl arasında meydana gelen büyük depremlerden biri ile tamamen yok olmuş. Mezar, kiremit ve heykel gibi parçaları kazılarla ortaya çıkartılan şehrin bazı kalıntıları, bugün bir çay bahçesinin duvarı olmuş.",
"Miletoslular tarafından M.Ö. 7. yüzyılda kurulduğu bilinen şehir bugün, Biga’nın kuzeybatısında, Kemer köyünün yer aldığı bölgedeydi. Öte yandan, son 3 bin yılda Türkiye coğrafyasında 100 civarında tsunaminin yaşandığı ortaya çıktı. Prof. Dr. Yıldız Altınok, Marmara Denizi’nin yapısı gereği büyük bir tsunami oluşmasının beklenmediğini, ancak tarihte ilginç su baskınlarının yaşandığını belirtti.",
"Dünya nüfusunun yarısından fazlası sahilden 100 km'lik bir uzaklıkta yaşamaktadır. Bu 2.7 milyar insandan fazladır. Hızlı kentleşme sahillerde her birinin nüfusu 10 milyondan fazla olan dev şehirleri ortaya çıkarmaktadır.. Sahil bölgelerindeki artan nüfus daha fazla deniz kirlenmesine ve sahildeki yaşam alanlarının dağılmasına yol açmaktadır. Her yıl yaklaşım 6,5 milyon ton ( 6.500.000.000 kg) çöp denize boşaltılmaktadır.",

   ];
 var Sözver = Math.floor(Math.random()*Random.length);
 msg.channel.send(`${Random[Sözver]}`);
  }}


if (msg.content.toLowerCase() === prefix + 'kahvaltı') {
	 if (msg.author.id === "336842798944878593") {
	 msg.reply("Simit tarafından sayın valideniz ziyaret edilmiştir BANNED");
 }

 
 else {
  msg.channel.send("Güne zinde başlamak gibisi yok...", {
    file: "https://img-s2.onedio.com/id-5421d48e2718d2563567928f/rev-0/w-635/listing/f-jpg-webp/s-e3b2e94d0c8c64ccdae2556183df46013f5b6911.webp"

});
}}



if (msg.content.toLowerCase() === 'yav he he') {
	 if (msg.author.id === "336842798944878593") {
	 msg.reply("Simit tarafından sayın valideniz ziyaret edilmiştir BANNED");
 }
 
 else {
  msg.channel.send("Tamam inandık he he", {
    file: "https://78.media.tumblr.com/b8450e157c3c6f1af1e5f0cc758f7bb5/tumblr_ntowd4m1V71tfgqleo1_500.gif"
 
 });
}}

if (msg.content.toLowerCase() === prefix + 'simit at') {
	 if (msg.author.id === "336842798944878593") {
	 msg.reply("Simit tarafından sayın valideniz ziyaret edilmiştir BANNED");
 }

 
 else {
  msg.channel.send("Gak Gak Gak :D", {
    file: "https://78.media.tumblr.com/0c0e299e72afbc4f99315321992e9acb/tumblr_mp9iamBVJS1svhi9ro1_500.gif"

});
}}

if (msg.content.toLowerCase() === prefix + 'adam topla') {
	 if (msg.author.id === "336842798944878593") {
	 msg.reply("Simit tarafından sayın valideniz ziyaret edilmiştir BANNED");
 }

 
 else {
  msg.channel.send("Burası bizim mahalle burda adamı çiğ çiğ yerler", {
    file: "https://cdn.discordapp.com/attachments/405393055743737856/405470716125773824/izmit-in-meshur-simitgggg-500x332.jpg"

});
}};


});



client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'bot davet') {
	   if (msg.author.id === "336842798944878593") {
	 msg.reply("Simit tarafından sayın valideniz ziyaret edilmiştir BANNED");
 }

 
 else {
	  	  	  if (msg.channel.type === 'dm') {
		msg.reply('Bu komutu özel mesajlarda kullanamazsınız dilerseniz sunucumuza gelip dilediğiniz kodu özgürce kullanabilirsiniz https://discord.gg/GCKHqjF \nSunucumuza geldiğiniz zaman kuralları okuyup sınır kapısına h!kabul yazmalısınız.')
	}
	else {
    msg.channel.send({embed: {
        color:  0xae68cc,
        author: {
        },
        description: "Demek beni davet etmek istiyorsun [tıkla](http://bit.ly/SimitBot). ",
        footer: {
        }
	}
    });
  }}}
});

client.on('message', msg => {
  if (msg.content === prefix + 'ekip') {
	   if (msg.author.id === "336842798944878593") {
	 msg.reply("Simit tarafından sayın valideniz ziyaret edilmiştir BANNED");
 }

 
 else {
    msg.reply('TheBotEkip: http://www.thebotekip.ml/');
  }
  }
});

client.on('message', msg => {
if (msg.content === prefix + '1-10arasısayı') {
	 if (msg.author.id === "336842798944878593") {
	 msg.reply("Simit tarafından sayın valideniz ziyaret edilmiştir BANNED");
 }

 
 else {
var Random = [
'`rastgele sayı:` **1**',
'`rastgele sayı:` **2**',
'`rastgele sayı:` **3**',
'`rastgele sayı:` **4**',
'`rastgele sayı:` **5**',
'`rastgele sayı:` **6**',
'`rastgele sayı:` **7**',
'`rastgele sayı:` **8**',
'`rastgele sayı:` **9**',
'`rastgele sayı:` **10**',
     ];
 var Sözver = Math.floor(Math.random()*Random.length);
 msg.channel.send(`${Random[Sözver]}`);
}}
});




	  client.on('message', msg => {
 if (msg.content.startsWith(prefix + "tavsiye")) {
	  if (msg.author.id === "336842798944878593") {
	 msg.reply("Simit tarafından sayın valideniz ziyaret edilmiştir BANNED");
 }

 
 else {
    if (msg.channel.type !== "dm"){
    let öneri = msg.content.substring(2 + 7);{
		  if (öneri < 1) return msg.reply('Krdş bir tavsiyede bulunur musun ?');
		  	  if (öneri > 1020) return msg.reply('Krdş tavsiyeni 2 ve ya daha fazla parçaya bölerek yazar mısın mesaj sınırı var');
  msg.channel.send(`tavsiyeniz bize ulaşmıtır ${msg.author.username}`)
 const embed = new Discord.RichEmbed()
.setThumbnail(msg.author.avatarURL)
.addField('TAVSİYE' , öneri)
.addField('Yazan' , `${msg.author.tag}`)
.addField('Yazan ID' , `${msg.author.id}`)
.setColor('RANDOM');
return client.channels.get('429633721189007361').sendMessage(embed); 
 }}}}
  });



 client.on('message', msg => {
 if(msg.channel.type === "dm") {
	  if (msg > 1023) return msg.reply(`Gardaş hayırdır beni çökertmeye falan mı çalışıyorsun 1020 karakterden az gir delirtme beni  NİCKİN ${msg.author.tag} İDİN ${msg.author.id}` ).catch(console.error);
	   if (msg < 1) return msg.reply(`Beni çökertme girişiminde bulunmak  NİCKİN ${msg.author.tag}   İDİN ${msg.author.id}`).catch(console.error);
 
 if (msg.author.id === "336842798944878593") {
	 msg.reply(`Simit tarafından sayın valideniz ziyaret edilmiştir --- ${msg.author.tag} --- ${msg.author.id} --- BANNED `);
 }

 
 else {
 const embed = new Discord.RichEmbed()
.setThumbnail(msg.author.avatarURL)
.addField('Mesaj' , `${msg.content}`)
.addField('Yazan' , `${msg.author.tag}`)
.addField('Yazan ID' , `${msg.author.id}`)
.setColor('RANDOM');
return client.channels.get('420576099777380353').sendMessage(embed);
 } }
  });
  
  client.on('message', msg => {
  if(msg.content === prefix + 'sunucular'){
	  	    if (msg.author.id !== ayarlar.sahip) {
      msg.reply('Benim yapımcım değilsin!');
	} else {
    msg.channel.send(client.guilds.map(g => g.name))
  }}
  });
  
  client.on('message', message => {
  if (message.content === prefix + 'avatarım') {
	   if (message.author.id === "336842798944878593") {
	 message.reply("Simit tarafından sayın valideniz ziyaret edilmiştir BANNED");
 }

 
 else {
	  	  	  if (message.channel.type === 'dm') {
	message.reply('Bu komutu özel mesajlarda kullanamazsınız dilerseniz sunucumuza gelip dilediğiniz kodu özgürce kullanabilirsiniz https://discord.gg/GCKHqjF \nSunucumuza geldiğiniz zaman kuralları okuyup sınır kapısına h!kabul yazmalısınız.')

	}
	else {
let embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setImage(message.author.avatarURL)
	 return message.channel.send({embed})}
  }}});




client.on('message', msg => {
  if (msg.content.startsWith(prefix + "taşla")) {
    if (msg.channel.type !== "dm"){
    let para = msg.content.substring(2 + 5);
	if (para < 1) return msg.reply('Bir kişi etiketle Simit sever kardeş ').catch(console.error);
        msg.channel.send(para + ' adlı kişiyi taşladınız' + '\n **Aha kafası yarıldı**');
    let embed = new Discord.RichEmbed()
    .setAuthor(msg.author.username, msg.author.avatarURL)
    .setDescription('Şimdi kaçman gerekecek')
    .setColor(3447003)
    .setImage("https://goo.gl/zYHJcq")
return msg.channel.send({embed})}
}
});

client.on('message', msg => {
  if (msg.content.startsWith(prefix + "simitısmarla")) {
    if (msg.channel.type !== "dm"){
    let para = msg.content.substring(2 + 12);
	if (para < 1) return msg.reply('Bir kişi etiketle Simit sever kardeş ').catch(console.error);
        msg.reply(para + ' kişisine sıcak bir simit ısmarladı');
    let embed = new Discord.RichEmbed()
    .setAuthor(msg.author.username, msg.author.avatarURL)
    .setDescription('Afiyet olsun')
    .setColor(3447003)
    .setImage("http://www.doygun.com.tr/yuklenen_dosyalar/urunler/191015051709_105susamli_istanbul_simidi.png")
return msg.channel.send({embed})}
}
});
  
  
  client.on('message', msg => {
  if (msg.content.startsWith(prefix + "tripat")) {
    if (msg.channel.type !== "dm"){
    let para = msg.content.substring(2 + 6);
	if (para < 1) return msg.reply('Bir kişi etiketle Simit sever kardeş ').catch(console.error);
        msg.reply(para + ' kişisine trip atıyor');
    let embed = new Discord.RichEmbed()
    .setAuthor(msg.author.username, msg.author.avatarURL)
    .setDescription('Lütfen onun üstüne gitme :(')
    .setColor(3447003)
    .setImage("https://galeri8.uludagsozluk.com/452/trip-atan-kiz-bakisi_942595_m.jpg")
return msg.channel.send({embed})}
}
});

client.on('message', msg => {
  if(msg.content === prefix + 'adminkomutları'){
	    if (msg.author.id !== ayarlar.sahip) {
      msg.reply('Benim yapımcım değilsin!');
	} else {
      msg.channel.send('h!yaz h!reboot botu yeniden başlatır\nh!sunucular botun ekli olduğu sunucuları gösterir\nh!oynuyorsıfırla botun oynuyor yazısını sıfırlar\nh!oynuyorkapa botun oynuyor yazısıı kapatır\nh!oynuyordegis botun oynuyor yazısını değiştirmemizi sağlar\nh!nickdegis bu kod ile botun acil durumda tüm sunucularda kullanıcı adını değiştirebilirsin\nh!izliyordegis ile botun bir şey izlemesini sağlayabilirsin\nh!dinliyordegis ile botun bir şey dinlemesini sağlayabilirsin :D');
}}
	});
	
	
		client.on('message', msg => {
  if (msg.content.startsWith(prefix + "yaz")) {
    if (msg.channel.type !== "dm"){
    let para = msg.content.substring(2 + 3);
					if (para < 1) return msg.reply('Bir mesaj yaz Simit sever kardeş ').catch(console.error);
	msg.delete (msg.content == 'yaz' + para)
    let embed = new Discord.RichEmbed()
    .setColor("RANDOM")
	   .setDescription(para)
return msg.channel.send({embed})}

	}
	});
	
			client.on('message', msg => {
  if (msg.content.startsWith(prefix + "oynuyorsıfırla")) {
	  	    if (msg.author.id !== ayarlar.sahip) {
      msg.reply('Sen beni başka simitle karıştırdın her halde bu komutu sadece sahibim kullanabilir');
	} else {
   client.user.setActivity(`h!komutlar ${client.guilds.size.toLocaleString()} Sunucu ${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} KULLANICI -NOT:DM üzerinden bota yazılan mesajlar okunmaktadır!-`  ,  { type: 'STREAMING' ,  url: 'https://www.twitch.tv/HakkiAkyol144p' })
}}
	});

			client.on('message', msg => {
  if (msg.content.startsWith(prefix + "oynuyordegis")) {
	  	    if (msg.author.id !== ayarlar.sahip) {
      msg.reply('Sen beni başka simitle karıştırdın her halde bu komutu sadece sahibim kullanabilir');
	} else {
       let oyun = msg.content.substring(2 + 12);
	   client.user.setActivity(oyun ,  { type: 'STREAMING' ,  url: 'https://www.twitch.tv/HakkiAkyol144p' })
}}
	});
	
				client.on('message', msg => {
  if (msg.content.startsWith(prefix + "izliyordegis")) {
	  	    if (msg.author.id !== ayarlar.sahip) {
      msg.reply('Sen beni başka simitle karıştırdın her halde bu komutu sadece sahibim kullanabilir');
	} else {
       let oyun = msg.content.substring(2 + 12);
	   client.user.setActivity(oyun ,  { type: 'WATCHING' ,  url: 'https://www.twitch.tv/HakkiAkyol144p' })
}}
	});
	
					client.on('message', msg => {
  if (msg.content.startsWith(prefix + "dinliyordegis")) {
	  	    if (msg.author.id !== ayarlar.sahip) {
      msg.reply('Sen beni başka simitle karıştırdın her halde bu komutu sadece sahibim kullanabilir');
	} else {
       let oyun = msg.content.substring(2 + 13);
	   client.user.setActivity(oyun ,  { type: 'LISTENING' ,  url: 'https://www.twitch.tv/HakkiAkyol144p' })
}}
	});
	
	
	

	
		client.on('message', msg => {
  if (msg.content.startsWith(prefix + "reboot")) {
	  	    if (msg.author.id !== ayarlar.sahip) {
      msg.reply('Sen beni başka simitle karıştırdın her halde bu komutu sadece sahibim kullanabilir');
	} else {
       let para = client.user.setActivity(2 + 9);
}}
	});
	
				client.on('message', msg => {
  if (msg.content.startsWith(prefix + "nickdegis")) {
	  	    if (msg.author.id !== ayarlar.sahip) {
      msg.reply('Sen beni başka simitle karıştırdın her halde bu komutu sadece sahibim kullanabilir');
	} else {
       let nick = msg.content.substring(2 + 9);
   client.user.setUsername(nick);
}}
	});
	

				client.on('message', msg => {
  if (msg.content.startsWith(prefix + "avatardegis")) {
	  	    if (msg.author.id !== ayarlar.sahip) {
      msg.reply('Sen beni başka simitle karıştırdın her halde bu komutu sadece sahibim kullanabilir');
	} else {
       let avatar = msg.content.substring(2 + 11);
     client.user.setAvatar(avatar);
}}
	});
	
	client.on("guildCreate", guild => {
		client.user.setActivity(`h!komutlar ${client.guilds.size.toLocaleString()} Sunucu ${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} KULLANICI -NOT:DM üzerinden bota yazılan mesajlar okunmaktadır!-`  ,  { type: 'STREAMING' ,  url: 'https://www.twitch.tv/HakkiAkyol144p' })
	const embed = new Discord.RichEmbed()
	.setDescription('SİMİT yeni bir sunucuya eklendi!')
	.addField('Sunucu adı', `${guild.name}`)
	.addField('Sunucu idi', `${guild.id}`)
	.addField('Sunucu sahibi' , `${guild.owner.user.username}#${guild.owner.user.discriminator}\n${guild.owner.user.id} ` , true)
  .setColor('RANDOM')
return client.channels.get('449238859780194305').sendMessage(embed);
	});


client.on("guildDelete", guild => {
	client.user.setActivity(`h!komutlar ${client.guilds.size.toLocaleString()} Sunucu ${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} KULLANICI -NOT:DM üzerinden bota yazılan mesajlar okunmaktadır!-`  ,  { type: 'STREAMING' ,  url: 'https://www.twitch.tv/HakkiAkyol144p' })
	const embed = new Discord.RichEmbed()
	.setDescription('SİMİT bir sunucudan çıkarıldı!')
	.addField('Sunucu adı', `${guild.name}`)
	.addField('Sunucu idi', `${guild.id}`)
	.addField('Sunucu sahibi' , `${guild.owner.user.username}#${guild.owner.user.discriminator}\n${guild.owner.user.id} ` , true)
  .setColor('RANDOM')
return client.channels.get('449238859780194305').sendMessage(embed);
	});
	

	
client.on("message", async msg => {

  if (msg.author.bot) return;

  if(msg.content.indexOf(prefix) !== 0) return;


  const args = msg.content.slice(prefix.length).trim().split(/ +/g);

  const command = args.shift().toLowerCase();

  const event = msg.content.toLower


  try {

    let commandFile = require(`./komutlar/${command}.js`);

    commandFile.run(client, msg, args);

  } catch (err) {}

});
client.login(ayarlar.token);