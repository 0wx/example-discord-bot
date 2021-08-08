import { CommandInteraction } from 'discord.js'

export const ping = async (interaction: CommandInteraction): Promise<void> => {
  console.log(interaction.options)
  await interaction.reply('Pong!')
}
