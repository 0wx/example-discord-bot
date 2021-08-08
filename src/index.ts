import { register } from './register/command'
import { Client, Intents } from 'discord.js'

register()
const token = process.env.TOKEN!
const client = new Client({ intents: [Intents.FLAGS.GUILDS] })

client.on('ready', () => {
  console.log(`Logged in as ${client.user!.tag}!`)
})

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isCommand()) return

  if (interaction.commandName === 'ping2') {
    await interaction.reply('Pong!')
  }
})

client.login(token)
