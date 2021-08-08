import { REST } from '@discordjs/rest'
import { Routes } from 'discord-api-types/v9'

const token = process.env.TOKEN!
const appId = process.env.APP_ID!
const guildId = process.env.GUILD_ID!
const commands = [
  {
    name: 'ping',
    description: 'Replies with your input!',
    options: [{
      name: 'input',
      type: 'INTEGER',
      description: 'The input to echo back',
      required: true,
    }]
  },
  {
    name: 'version',
    description: 'Print interaction version',
  },
]

const rest = new REST({ version: '9' }).setToken(token)

export const register = async () => {
  try {
    console.log('Started refreshing application (/) commands.')

    await rest.put(Routes.applicationGuildCommands(appId, guildId), {
      body: commands,
    })

    console.log('Successfully reloaded application (/) commands.')
  } catch (error) {
    console.error(error)
  }
}
