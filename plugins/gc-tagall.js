let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
  if (!(isAdmin || isOwner)) {
  global.dfail('admin', m, conn)
  throw false
  }
  let pesan = args.join` `
  let oi = `*𝗔𝗖𝗧𝗜𝗩𝗔𝗧𝗘:* ${pesan}`
  let teks = `*La que puede puede y como tu no pudiste te toca soportar🫦🔥*\n\n ${oi}\n\n➥ _*𝗟𝗜𝗦𝗧𝗔 𝗗𝗘 𝗕𝗢𝗠𝗕𝗢𝗡𝗘𝗦 🍭:*_\n`
  for (let mem of participants) {
  teks += `🌺 ⇝ @${mem.id.split('@')[0]}\n`}
  teks += `└ *Sᴏғɪ-Bᴏᴛ ⇝ @𝗯𝘆.𝗺𝗮𝘆*`
  conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
  }
  handler.help = ['tagall <mesaje>','invocar <mesaje>']
  handler.tags = ['group']
  handler.command = /^(tagall|invocar|invocacion|todos|invocación|aviso|despierten|putos|animales)$/i
  handler.admin = true
  handler.group = true
  export default handler