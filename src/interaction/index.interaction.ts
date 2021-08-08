import { Interaction } from 'discord.js'
import { handlingCommand } from './command/index.command'
import { handlingButton } from './button/index.button'
import { handlingMessage } from './messag/index.message'
import { handlingSelectMenu } from './selectMenu/index.selecMenu'

export const handlingInteraction = async (
  interaction: Interaction
): Promise<void> => {
  console.log(interaction.type)
  if (interaction.isCommand()) handlingCommand(interaction)
  if (interaction.isButton()) handlingButton(interaction)
  if (interaction.isMessageComponent()) handlingMessage(interaction)
  if (interaction.isSelectMenu()) handlingSelectMenu(interaction)
}
