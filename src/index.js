const Telegraf = require('telegraf')
const HttpsProxyAgent = require('https-proxy-agent')

const { BOT_TOKEN, HTTPS_PROXY_HOST, HTTPS_PROXY_PORT } = process.env

if (!BOT_TOKEN) {
    console.log('ERROR: BOT_TOKEN environment variable required')
    process.exit(1)
}

let startup_options = {}

if (HTTPS_PROXY_HOST && HTTPS_PROXY_PORT) {
    startup_options.agent = new HttpsProxyAgent({
        host: HTTPS_PROXY_HOST,
        port: HTTPS_PROXY_PORT
    })
}

const bot = new Telegraf(BOT_TOKEN, startup_options)

bot.start(ctx => ctx.reply(`Welcome ${ctx.chat.username}`))

bot.on('text', ctx => {
    console.log(ctx.message)
    ctx.reply('Nice')
})

bot.launch()

