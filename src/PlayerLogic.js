import { askForOneCard } from './CardPicker.js'
import { Player } from './Player.js'
import { throwCardsToBin } from './GameLogic.js'

export function checkPlayerWin (player, deck, usedCards) {
  if (player.winStatus === false && player.sum < 16) {
    player.hand.push(askForOneCard(deck))
    player.sum = Player.sum(player.hand)
    console.log(`${player.name} picks another card. Hand is now ${player.hand.join(', ')}.`)
  } else {
    console.log(`${player.name} is satisfied with his cards ${player.hand.join(', ')}.`)
  }
  if (player.sum === 21) {
    console.log(`${player.name} has got ${player.sum} and won!`)
    player.winStatus = true
  }
  if (player.sum < 21 && player.hand.length === 5) {
    console.log(`${player.name} has ${player.hand.length} cards with a total value under 21 and therefore wins!`)
    player.winStatus = true
  }
  if (player.winStatus === true) {
    throwCardsToBin(player.hand, usedCards)
  }
  if (player.sum > 21) {
    console.log(`${player.name} has got ${player.sum}... BUSTED!`)
    throwCardsToBin(player.hand, usedCards)
  }
}