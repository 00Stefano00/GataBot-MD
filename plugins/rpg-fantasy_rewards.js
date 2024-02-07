const fantasyDBPath = './fantasy.json'
let usuarioExistente, logro, fake = null
export async function before(m,{ conn }) {
const userId = m.sender
let user = global.db.data.users[userId]
let fantasyDB = []
if (fs.existsSync(fantasyDBPath)) {
const data = fs.readFileSync(fantasyDBPath, 'utf8')
fantasyDB = JSON.parse(data)
}
const rewards = {
exp: 0,
limit: 0,
diamond: 0,
joincount: 0,
emerald: 0,
berlian: 0,
kyubi: 0,
gold: 0,
money: 0,
tiketcoin: 0,
stamina: 0
}
  
// Si el usuario no existe en la base de datos borra su contador de registro
usuarioExistente = fantasyDB.find((user) => Object.keys(user)[0] === userId)
if (!usuarioExistente) {
user.fantasy_character = 0
user.fantasy_character2 = 0
user.fantasy_character3 = 0
user.fantasy_character4 = 0
user.fantasy_character5 = 0
}

// Verifica si el usuario existe en la base de datos y si tiene la estructura fantasy
usuarioExistente = fantasyDB.find((user) => Object.keys(user)[0] === userId && user[userId].fantasy)
if (usuarioExistente && user.fantasy_character === 0) {
fake = { contextInfo: { externalAdReply: { title: `🌟 RECOMPENSA 🌟`, body: `Califica persoanjes, es gratis ❤️`, sourceUrl: accountsgb.getRandom(), thumbnailUrl: gataMenu.getRandom() }}}
await conn.reply(m.chat, `\`\`\`Desafío desbloqueado 🔓\`\`\`\n\n*${conn.getName(userId)} ahora puedes calificar personajes*`, m, fake)
user.fantasy_character++
}

// Verifica si el conjunto fantasy tiene id como cadena de texto y status como true
usuarioExistente = fantasyDB.find((user) => Object.keys(user)[0] === userId)
if (usuarioExistente) {
const fantasyArray = usuarioExistente[userId].fantasy
fake = { contextInfo: { externalAdReply: { title: `🌟 RECOMPENSA 🌟`, body: `Usa #fymy para ver más desafíos`, sourceUrl: accountsgb.getRandom(), thumbnailUrl: gataMenu.getRandom() }}}
logro = `\`\`\`Desafío desbloqueado 🔓\`\`\`\n\n*${conn.getName(userId)} recompensa por comprar ${fantasyArray.length} personajes*\n\n🌟 *Recompensas:*`
for (const [reward, icon] of Object.entries(rewards)) {
let min, max
switch (reward) {
case 'exp':
min = 100
max = 2000
break
case 'money':
min = 100
max = 1000
break
case 'limit':
min = 5
max = 30
break
default:
min = 1
max = 25
break
}
const amount = Math.floor(Math.random() * (max - min + 1) + min)
// Multiplicar la cantidad de acuerdo a user.fantasy_character2
const multipliedAmount = amount * (user.fantasy_character2 + 1)
user[reward] += multipliedAmount
logro += `\n*${rpgshop.emoticon(reward)}* » \`\`\`${multipliedAmount}\`\`\``
}
if (fantasyArray.length >= 5 && typeof fantasyArray[4].id === 'string' && fantasyArray[4].status === true && user.fantasy_character2 === 0) {
await conn.reply(m.chat, logro, m, fake)
user.fantasy_character2++
} else if (fantasyArray.length >= 10 && typeof fantasyArray[9].id === 'string' && fantasyArray[9].status === true && user.fantasy_character2 === 1) {
await conn.reply(m.chat, logro, m, fake)
user.fantasy_character2++
} else if (fantasyArray.length >= 15 && typeof fantasyArray[14].id === 'string' && fantasyArray[14].status === true && user.fantasy_character2 === 2) {
await conn.reply(m.chat, logro, m, fake)
user.fantasy_character2++
} else if (fantasyArray.length >= 20 && typeof fantasyArray[19].id === 'string' && fantasyArray[19].status === true && user.fantasy_character2 === 3) {
await conn.reply(m.chat, logro, m, fake)
user.fantasy_character2++
} else if (fantasyArray.length >= 30 && typeof fantasyArray[29].id === 'string' && fantasyArray[29].status === true && user.fantasy_character2 === 4) {
await conn.reply(m.chat, logro, m, fake)
user.fantasy_character2++
}}

// Cuenta la cantidad de veces que se ha dado "like"
usuarioExistente = fantasyDB.find((user) => Object.keys(user)[0] === userId)
if (usuarioExistente) {
const flowArray = usuarioExistente[userId].flow || []
const likesCount = flowArray.filter(voto => voto.like).length
fake = { contextInfo: { externalAdReply: { title: `SIGUE DANDO 👍`, body: `Califica persoanjes, es gratis 👍`, sourceUrl: accountsgb.getRandom(), thumbnailUrl: gataMenu.getRandom() }}}
logro = `\`\`\`Desafío desbloqueado 🔓\`\`\`\n\n*${conn.getName(userId)} recompensa por calificar ${likesCount} veces "👍"*`
if (likesCount === 3 && user.fantasy_character3 === 0) {
await conn.reply(m.chat, logro, m, fake)
user.fantasy_character3++
} else if (likesCount === 8 && user.fantasy_character3 === 1) {
await conn.reply(m.chat, logro, m, fake)
user.fantasy_character3++
} else if (likesCount === 13 && user.fantasy_character3 === 2) {
await conn.reply(m.chat, logro, m, fake)
user.fantasy_character3++
} else if (likesCount === 18 && user.fantasy_character3 === 3) {
await conn.reply(m.chat, logro, m, fake)
user.fantasy_character3++
} else if (likesCount === 25 && user.fantasy_character3 === 4) {
await conn.reply(m.chat, logro, m, fake)
user.fantasy_character3++
} else if (likesCount === 35 && user.fantasy_character3 === 5) {
await conn.reply(m.chat, logro, m, fake)
user.fantasy_character3++
} else if (likesCount === 40 && user.fantasy_character3 === 6) {
await conn.reply(m.chat, logro, m, fake)
user.fantasy_character3++
} else if (likesCount === 55 && user.fantasy_character3 === 7) {
await conn.reply(m.chat, logro, m, fake)
user.fantasy_character3++
} else if (likesCount === 65 && user.fantasy_character3 === 8) {
await conn.reply(m.chat, logro, m, fake)
user.fantasy_character3++
} else if (likesCount === 80 && user.fantasy_character3 === 9) {
await conn.reply(m.chat, logro, m, fake)
user.fantasy_character3++
} else if (likesCount === 100 && user.fantasy_character3 === 10) {
await conn.reply(m.chat, logro, m, fake)
user.fantasy_character3++
}}

// Cuenta la cantidad de veces que se ha dado "superlike"
usuarioExistente = fantasyDB.find((user) => Object.keys(user)[0] === userId)
if (usuarioExistente) {
const flowArray = usuarioExistente[userId].flow || []
const superlikesCount = flowArray.filter(voto => voto.superlike).length
fake = { contextInfo: { externalAdReply: { title: `SIGUE DANDO ❤️`, body: `Califica persoanjes, es gratis ❤️`, sourceUrl: accountsgb.getRandom(), thumbnailUrl: gataMenu.getRandom() }}}
logro = `\`\`\`Desafío desbloqueado 🔓\`\`\`\n\n*${conn.getName(userId)} recompensa por calificar ${superlikesCount} veces "❤️"*`
if (superlikesCount === 3 && user.fantasy_character4 === 0) {
await conn.reply(m.chat, logro, m, fake)
user.fantasy_character4++
} else if (superlikesCount === 8 && user.fantasy_character4 === 1) {
await conn.reply(m.chat, logro, m, fake)
user.fantasy_character4++
} else if (superlikesCount === 13 && user.fantasy_character4 === 2) {
await conn.reply(m.chat, logro, m, fake)
user.fantasy_character4++
} else if (superlikesCount === 18 && user.fantasy_character4 === 3) {
await conn.reply(m.chat, logro, m, fake)
user.fantasy_character4++
} else if (superlikesCount === 25 && user.fantasy_character4 === 4) {
await conn.reply(m.chat, logro, m, fake)
user.fantasy_character4++
} else if (superlikesCount === 35 && user.fantasy_character4 === 5) {
await conn.reply(m.chat, logro, m, fake)
user.fantasy_character4++
} else if (superlikesCount === 40 && user.fantasy_character4 === 6) {
await conn.reply(m.chat, logro, m, fake)
user.fantasy_character4++
} else if (superlikesCount === 55 && user.fantasy_character4 === 7) {
await conn.reply(m.chat, logro, m, fake)
user.fantasy_character4++
} else if (superlikesCount === 65 && user.fantasy_character4 === 8) {
await conn.reply(m.chat, logro, m, fake)
user.fantasy_character4++
} else if (superlikesCount === 80 && user.fantasy_character4 === 9) {
await conn.reply(m.chat, logro, m, fake)
user.fantasy_character4++
} else if (superlikesCount === 100 && user.fantasy_character4 === 10) {
await conn.reply(m.chat, logro, m, fake)
user.fantasy_character4++
}}

// Cuenta la cantidad de veces que se ha dado "dislike"
usuarioExistente = fantasyDB.find((user) => Object.keys(user)[0] === userId)
if (usuarioExistente) {
const flowArray = usuarioExistente[userId].flow || []
const disLikeCount = flowArray.filter(voto => voto.dislike).length
fake = { contextInfo: { externalAdReply: { title: `SIGUE DANDO 👎`, body: `Califica persoanjes, es gratis 😅`, sourceUrl: accountsgb.getRandom(), thumbnailUrl: gataMenu.getRandom() }}}
logro = `\`\`\`Desafío desbloqueado 🔓\`\`\`\n\n*${conn.getName(userId)} recompensa por calificar ${disLikeCount} veces "👎"*`   
if (disLikeCount === 3 && user.fantasy_character5 === 0) {
await conn.reply(m.chat, logro, m, fake)
user.fantasy_character5++
} else if (disLikeCount === 8 && user.fantasy_character5 === 1) {
await conn.reply(m.chat, logro, m, fake)
user.fantasy_character5++
} else if (disLikeCount === 13 && user.fantasy_character5 === 2) {
await conn.reply(m.chat, logro, m, fake)
user.fantasy_character5++
} else if (disLikeCount === 18 && user.fantasy_character5 === 3) {
await conn.reply(m.chat, logro, m, fake)
user.fantasy_character5++
} else if (disLikeCount === 25 && user.fantasy_character5 === 4) {
await conn.reply(m.chat, logro, m, fake)
user.fantasy_character5++
} else if (disLikeCount === 35 && user.fantasy_character5 === 5) {
await conn.reply(m.chat, logro, m, fake)
user.fantasy_character5++
} else if (disLikeCount === 40 && user.fantasy_character5 === 6) {
await conn.reply(m.chat, logro, m, fake)
user.fantasy_character5++
} else if (disLikeCount === 55 && user.fantasy_character5 === 7) {
await conn.reply(m.chat, logro, m, fake)
user.fantasy_character5++
} else if (disLikeCount === 65 && user.fantasy_character5 === 8) {
await conn.reply(m.chat, logro, m, fake)
user.fantasy_character5++
} else if (disLikeCount === 80 && user.fantasy_character5 === 9) {
await conn.reply(m.chat, logro, m, fake)
user.fantasy_character5++
} else if (disLikeCount === 100 && user.fantasy_character5 === 10) {
await conn.reply(m.chat, logro, m, fake)
user.fantasy_character5++
}}

}

