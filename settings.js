/*

  #- QOUPAYDEV *BACA DI Mydev.txt
  
*/

const fs = require('fs');
const chalk = require('chalk');
const { version } = require("./package.json")

//~~~~~~~~~~~ Settings Bot ~~~~~~~~~~~//
global.owner = '6285167089173'
global.versi = "6.0.0"
global.namaOwner = "𝐐𝐎𝐔𝐏𝐀𝐘 𝐎𝐅𝐅𝐈𝐂𝐈𝐀𝐋"
global.packname = 'Qoupay Offical'
global.botname = 'Qoupay Official'
global.botname2 = 'Qoupay Offcial'
global.openaiKey = ''

//~~~~~~~~~~~ Settings Link ~~~~~~~~~~//
global.linkOwner = "https://wa.me/6285167089173"
global.linkWebsite = ""
global.linkGrup = "https://chat.whatsapp.com/Coxha5bBVrqJNRQU5HnaV5"

//~~~~~~~~~~~ Settings Jeda ~~~~~~~~~~//
global.delayJpm = 3500
global.delayPushkontak = 6000

//~~~~~~~~~~ Settings Saluran ~~~~~~~~~//
global.linkSaluran = "https://whatsapp.com/channel/0029Vb1y0Q8KQuJCu059Il15"
global.idSaluran = "@newsletter"
global.namaSaluran = "𝐐𝐎𝐔𝐏𝐀𝐘 𝐎𝐅𝐅𝐈𝐂𝐈𝐀𝐋 || Testimoni"

//~~~~~~~~~ Settings Orderkuota ~~~~~~~~//
global.pinH2H = ""
global.passwordH2H = ""
global.merchantIdOrderKuota = "OK1930061"
global.apiOrderKuota = "264532717411393231930061OKCTEA2858AE6A2AB7EE07D76E005EBA9F90"
global.qrisOrderKuota = "00020101021126670016COM.NOBUBANK.WWW01189360050300000879140214501293961406740303UMI51440014ID.CO.QRIS.WWW0215ID20243329452840303UMI5204541153033605802ID5922TOKO DIGITAL OK19300616005NGAWI61056321162070703A016304F3EF"
//========= Settings Apikey Smm Nusantara ============//
global.apiID = ''
global.apiKey = '' 
//========= Settings Apikey VirtuSIM ============//
global.apivirtu = ''

//~~~~~~~~~~ Settings Apikey ~~~~~~~~~~//
global.apiDigitalOcean = "-"

///~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
global.linkgrupresellerpanel = ""

//======================WILAYAH APIKEY -_-
global.restapi = "MinQoupay" //Pkae Aikey Sendiri
global.webapi = "https://restapi.qoupaystore.web.id" //Jangan Di Rubah Kalo Gak Mau Eror !
/*
Pembelian Apikey & Token Hanya Di Qoupay Store
Chat Admin
Tele : @Qpyakn2
Whatshapp : +62 851-6708-9173
Atau Bisa Buy Langsung Di Website(Hanya Apikey)
*/

//~~~~~~~~~ Settings Payment ~~~~~~~~~//
global.dana = ""
global.ovo = ""
global.gopay = ""

//~~~~~~~~~~ Settings Image ~~~~~~~~~~//
global.image = {
menu: "https://img5.pixhost.to/images/3040/569384019_gisnaxd.jpg", 
reply: "https://img5.pixhost.to/images/3040/569384019_gisnaxd.jpg", 
logo: "https://img5.pixhost.to/images/3040/569384019_gisnaxd.jpg", 
qris: "https://img5.pixhost.to/images/3040/569384019_gisnaxd.jpg"
}
//~~~~~~~~~Settings Keuntungan 
global.buyer_pre = 700
global.reseller_pre = 500
global.special_pre = 2000
global.keuntungan_vip = 2000
global.untung2 = 2500
//~~~~~~~~Settings Api Vip Payment 
global.vipa_url = 'https://vip-reseller.co.id'
global.vipa_api_id = ''
global.vipa_role = 'basic'
global.vipa_api_key = ''
//~~~~~ Settings Api Panel Buy Panel Pub ~~~~~//
global.egg = "15" // Egg ID
global.nestid = "5" // nest ID
global.loc = "1" // Location ID
global.domain = "https://-"
global.apikey = "" //ptla
global.capikey = "" //ptlc
//~~~~~ Settings Api Panel Buy Panel Priv ~~~~~//
global.eggV2 = "15" // Egg ID
global.nestidV2 = "5" // nest ID
global.locV2 = "1" // Location ID
global.domainV2 = "https://-"
global.apikeyV2 = "" //ptla
global.capikeyV2 = "" //ptlc

//~~~~~~~ Settings Api Subdomain ~~~~~~~//
global.subdomain = {
"serverku.biz.id": {
"zone": "4e4feaba70b41ed78295d2dcc090dd3a", 
"apitoken": "d6kmqwlvi0qwCyMxoGuc3EBAYRYvbulhjhR9T0I7"
}, 
"privatserver.my.id": {
"zone": "699bb9eb65046a886399c91daacb1968", 
"apitoken": "fnl7ixlJ-Y-7zxJ7EUGEXitfmfLiPGW985iXobdu"
}, 
"panelwebsite.biz.id": {
"zone": "2d6aab40136299392d66eed44a7b1122", 
"apitoken": "ImdyjF7XVU7ObDbdCr7LwSUZ4eDQJ-QozAbUIWoF"
}, 
"mypanelstore.web.id": {
"zone": "c61c442d70392500611499c5af816532", 
"apitoken": "ImdyjF7XVU7ObDbdCr7LwSUZ4eDQJ-QozAbUIWoF"
}, 
"pteroserver.us.kg": {
"zone": "f693559a94aebc553a68c27a3ffe3b55", 
"apitoken": "ImdyjF7XVU7ObDbdCr7LwSUZ4eDQJ-QozAbUIWoF"
}, 
"digitalserver.us.kg": {
"zone": "df13e6e4faa4de9edaeb8e1f05cf1a36", 
"apitoken": "ImdyjF7XVU7ObDbdCr7LwSUZ4eDQJ-QozAbUIWoF"
}, 
"shopserver.us.kg": {
"zone": "54ca38e266bfdf2dcdb7f51fd79c2db5", 
"apitoken": "ImdyjF7XVU7ObDbdCr7LwSUZ4eDQJ-QozAbUIWoF"
}
}

//======≈===SETTING BUYDOMAIN=======//
global.domain1 = ""
global.zona1 = ""
global.apitoken1 = ""
//==============
global.domain2 = ""
global.zona2 = ""
global.apitoken2 = ""
//==============
global.domain3 = ""
global.zona3 = ""
global.apitoken3 = ""
//==============
global.domain4 = ""
global.zona4 = ""
global.apitoken4 = ""
//==============
global.domain5 = ""
global.zona5 = ""
global.apitoken5 = ""
//=============

//~~~~~~~~~~ Settings Message ~~~~~~~~//
global.mess = {
	owner: "*[ Akses Ditolak ]*\nFitur ini hanya untuk owner bot!",
	admin: "*[ Akses Ditolak ]*\nFitur ini hanya untuk admin grup!",
	botAdmin: "*[ Akses Ditolak ]*\nFitur ini hanya untuk ketika bot menjadi admin!",
	group: "*[ Akses Ditolak ]*\nFitur ini hanya untuk dalam grup!",
	private: "*[ Akses Ditolak ]*\nFitur ini hanya untuk dalam private chat!",
	prem: "*[ Akses Ditolak ]*\nFitur ini hanya untuk user premium!",
	wait: 'Loading...',
	error: 'Error!',
	done: 'Done'
}

global.layananVirtuSIM = [
  { id: "716", nama: "Nokos WhatsApp Indonesia", harga: 5000 },
  { id: "1537", nama: "Nokos WhatsApp China", harga: 20000 },
  { id: "313", nama: "Nokos WhatsApp Malaysia", harga: 10000 },
  { id: "2257", nama: "Nokos WhatsApp India", harga: 10000 },
  { id: "4063", nama: "Nokos WhatsApp Inggris", harga: 10000 },
  { id: "556", nama: "Nokos WhatsApp Thailand", harga: 10000 },
  { id: "733", nama: "Nokos Telegram Indonesia", harga: 5000 },
  { id: "344", nama: "Nokos Telegram Malaysia", harga: 10000 },
  { id: "2415", nama: "Nokos Telegram China", harga: 20000 },
  { id: "1875", nama: "Nokos Telegram Amerika", harga: 8000 }
];


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})