const PingCommand = require('./PingCommand')

class CommandHandler {
  constructor(minecraft) {
    this.commands = [
      {
        trigger: ['!ping'],
        handler: new PingCommand(minecraft),
      },
    ]
  }

  handle(player, message) {
    const commandTrigger = message.toLowerCase().split(' ')[0]

    for (let command of this.commands) {
      for (let trigger of command.trigger) {
        if (trigger == commandTrigger) {
          this.runCommand(command, player, message)

          return true
        }
      }
    }

    return false
  }

  runCommand(command, player, message) {
    console.log(`Minecraft Command Handler > [${command.handler.constructor.name}] ${message}`)

    command.handler.onCommand(player, message)
  }
}

module.exports = CommandHandler