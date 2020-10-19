import { askForOneCard } from './CardPicker.js'
import { Player } from './Player.js'

/**
 * @param player
 * @param deck
 */
export function checkPlayerWin (player, deck) {
  while (player.winStatus === false && player.sum < 14) {
    player.hand.push(askForOneCard(deck))
    player.sum = Player.sum(player.hand)
    console.log(`${player.name} picks another card. Hand is now ${player.hand.join(', ')}.\nCurrent sum is ${player.sum}`)
  }
  if (player.sum === 21) {
    console.log(`${player.name} has got ${player.sum} and won!`)
    player.winStatus = true
  }
  if (player.sum < 21 && player.hand.length === 5) {
    console.log(`${player.name} has ${player.hand.length} cards with a total value under 21 and therefore wins!`)
    player.winStatus = true
  }
  if (player.sum > 21) {
    console.log(`${player.name} has got ${player.sum}... BUSTED!`)
    player.looseStatus = true
  }
}
