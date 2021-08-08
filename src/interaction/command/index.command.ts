import { CommandInteraction } from 'discord.js'
import { ping } from './ping.command'

export const handlingCommand = async (
  interaction: CommandInteraction
): Promise<void> => {
  if (interaction.commandName === 'ping') ping(interaction)
}
