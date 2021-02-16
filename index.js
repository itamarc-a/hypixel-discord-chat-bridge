'use strict'
process.title = 'Hypixel Skyblock Leaderboard Generator'

const app = require('./src/Application')

app
  .register()
  .then(() => {
    app.connect()
  })
  .catch(err => {
    console.error(err)
  })
// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret