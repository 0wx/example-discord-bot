import { register } from './register/command'
import { Client, Intents } from 'discord.js'
import { handlingInteraction } from './interaction/index.interaction'

const token = process.env.TOKEN!
const client = new Client({ intents: [Intents.FLAGS.GUILDS] })

client.on('ready', () => {
  register()
  console.log(`Logged in as ${client.user!.tag}!`)
})

// Tried both of it
client.on('message', (listener) => {
  console.log(listener.type)
  listener.reply('howdy')
})

client.on('messageCreate', (listener) => {
  console.log(listener.type)
  listener.reply('howdy')
})
// --------------------

client.on('interactionCreate', handlingInteraction)


client.login(token)
