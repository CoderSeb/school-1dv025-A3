import { askForOneCard } from './CardPicker.js'
import { Player } from './Player.js'

/**
 * Function that returns a random number between the given parameters.
 *
 * @param {number} topValue - The maximum value to return.
 * @param {number} bottomValue - The minimum value to return.
 * @returns {number} a random number.
 */
const rndNumber = function (topValue, bottomValue) {
  return Math.floor(Math.random() * (topValue - bottomValue + 1)) + bottomValue
}

/**
 * Function check if player has a winning or loosing hand.
 *
 * @param {object} player - The player object.
 * @param {object[]} deck - The deck to draw cards from.
 * @param {object[]} playedCards - The deck of used cards.
 */
export function checkPlayerWin (player, deck, playedCards) {
  while (player.winStatus === false && player.sum < rndNumber(17, 9)) {
    player.hand.push(askForOneCard(deck, playedCards))
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
