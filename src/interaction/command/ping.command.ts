import { CommandInteraction } from 'discord.js'

export const ping = async (interaction: CommandInteraction): Promise<void> => {
  await interaction.reply('Pong!')
}
