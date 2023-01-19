import { randomBytes } from 'crypto'

let handler = async (m, { conn, text }) => {
  let chats = Object.entries(conn.chats).filter(([jid, chat]) => !jid.endsWith('@g.us') && chat.isChats).map(v => v[0])
  let cc = conn.serializeM(text ? m : m.quoted ? await m.getQuotedObj() : false || m)
  let teks = text ? text : cc.text
  conn.reply(m.chat, `_Mengirim pesan broadcast ke ${chats.length} chat_`, m)
  for (let id of chats) await conn.copyNForward(id, conn.cMod(m.chat, cc, /bc|broadcast/i.test(teks) ? teks : teks + '\n' + readMore + '「 ' + author + ' All Chat Broadcast 」\n' + randomID(32)), true).catch(_ => _)
  m.reply('Selesai Broadcast All Chat :)')
}
handler.help = ['prueba', 'bcchats'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(prueba)$/i

handler.owner = true

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

const randomID = length => randomBytes(Math.ceil(length * .5)).toString('hex').slice(0, length)
/*
import fs from 'fs'
let handler = async (m, { conn, text } ) => {  
let groups = Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats && !chat.metadata?.read_only && !chat.metadata?.announce).map(v => v[0])
let cc = text ? m : m.quoted ? await m.getQuotedObj() : false || m
let teks = text ? text : cc.text
for (let id of groups) { 
await delay(5 * 5000)
conn.sendButton(id, `*╭━━[ 𝘾𝙊𝙈𝙐𝙉𝙄𝘾𝘼𝘿𝙊 | 𝙉𝙊𝙏𝙄𝘾𝙀 ]━━━⬣*\n*┃*\n*┃💌* ${text}\n*┃*\n*╰━━━━━━━━━━━━━━━━━━⬣*`, '✅ *𝘾𝙊𝙈𝙐𝙉𝙄𝘾𝘼𝘿𝙊 𝙊𝙁𝙄𝘾𝙄𝘼𝙇*\n' + wm, fs.readFileSync('./src/avatar_contact.png'), [['🎁 𝙄𝙣𝙛𝙤 𝙊𝙛𝙞𝙘𝙞𝙖𝙡', '.cuentasgb'],['🐈 𝙈𝙚𝙣𝙪', '.menu']], false, { 
contextInfo: { externalAdReply: {
title: '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿 | 𝙂𝙖𝙩𝙖 𝘿𝙞𝙤𝙨',
body: 'Super Bot WhatsApp', 
sourceUrl: `https://www.instagram.com/gata_dios`, 
thumbnail: fs.readFileSync('./media/menus/Menu3.jpg') }}})}
m.reply(`${iig} ✅ *El mensaje fue enviado a ${groups.length} Grupo(s)*\n*Es posible que no se haya enviado a todos los Grupos. Disculpe.*\n\n✅ *The message was sent to ${groups.length} Group's*\n*May not have been sent to all Groups. Excuse me.*`)
}
handler.help = ['broadcastgroup', 'bcgc'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(comunicargrupo|comunicadogrupo|comunicargrupos|comunicadogrupos|broadcastgc|bcgc)$/i
handler.rowner = true
handler.exp = 500
//handler.owner = true
export default handler
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

*/
