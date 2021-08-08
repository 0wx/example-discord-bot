import { MessageComponentInteraction } from 'discord.js'

export const handlingMessage = async (
  interaction: MessageComponentInteraction
): Promise<void> => {
  console.log(interaction.type)
}
