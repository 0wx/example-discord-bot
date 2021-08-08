import { register } from './register/command'
import { Client, Intents } from 'discord.js'
import { handlingInteraction } from './interaction/index.interaction'

type Flags = keyof typeof Intents.FLAGS

const isValidFlag = (value: string): value is keyof typeof Intents.FLAGS => {
  return value in Intents.FLAGS
}

const intents: Flags[] = Object.keys(Intents.FLAGS).filter(isValidFlag)

const token = process.env.TOKEN!
const client = new Client({ intents })

client.on('ready', () => {
  register()
  console.log(`Logged in as ${client.user!.tag}!`)
})

client.on('messageCreate', (message) => {
  const human = !message.author.bot
  if(human) {
    message.reply('Howdy')
  }
})

client.on('interactionCreate', handlingInteraction)
client.on('error', (listener) => {
  console.log(listener)
})
client.login(token)
