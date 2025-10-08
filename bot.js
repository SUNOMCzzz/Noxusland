const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'noxusland.id.vn', // IP server
  port: 26200,              // Cổng server
  username: 'SUNOMCzzz',    // Tên nhân vật
})

bot.once('spawn', () => {
  console.log('✅ Bot SUNOMCzzz đã vào server NoxusLand và đang đứng AFK...')
})

bot.on('end', () => {
  console.log('⚠️ Mất kết nối, đang thử vào lại...')
  setTimeout(() => {
    process.exit(1)
  }, 5000)
})
