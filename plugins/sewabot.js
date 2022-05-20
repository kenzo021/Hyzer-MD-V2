let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
	conn.send2ButtonLoc(m.chat, await (await fetch(fla + 'sewa bot')).buffer(), `                「 Xylrnd BOT 」

╭━━━━「 *SEWA* 」
┊⫹⫺ *Hemat:* _5k/grup (1 minggu)_
┊⫹⫺ *Normal:* _15k/grup (1 bulan)_
┊⫹⫺ *Standar:* _30k/grup (2 bulan)_
┊⫹⫺ *Pro:* _35k/grup (4 bulan)_                                                      
┊⫹⫺ *Vip:* = _65k/grup (12 bulan)_
╰═┅═━––––––๑

╭━━━━「 *PREMIUM* 」
┊⫹⫺ *Hemat:* _5k (1 minggu)_
┊⫹⫺ *Normal:* _20k (1 bulan)_
┊⫹⫺ *Pro:* _40k (4 bulan)_
┊⫹⫺ *Vip:* _50k (8 bulan)_                                               
┊⫹⫺ *Permanent:* = _70k (Unlimited)_
╰═┅═━––––––๑

*⫹⫺ PAYMENT:*
• *Pulsa:* [085251626154]
• *Dana:* [085251626154]
• *OVO:* [085251626154]
• *Gopay:* [085251626154]

–––––– *🐾 Kebijakan* ––––––
🗣️: Kak, Kok harganya mahal banget?
💬: Mau tawar menawar? boleh, silahkan chat owner aja

🗣️: Scam ga nih kak?
💬: Enggalah, Owner 100% Tepati janji #STAYHALAL

Tertarik untuk menyewa Bot Ini?
➥ Hubungi Owner ➡️ https://wa.me/6285251626154?text=Permisi+mau+sewa+bot

╠═〘 Xylrnd-Bot 〙 ═`.trim(), wm, 'Ovo', '.viaovo', 'Dana', '.viadana', m)
}

handler.command = /^sewabot$/i

module.exports = handler
