import { askForOneCard } from './CardPicker.js'
import { Player } from './Player.js'
import { throwCardsToBin } from './GameLogic.js'

/**
 * Function to check if the dealer wins.
 *
 * @param {object} player - The player to play against the dealer.
 * @param {object} dealer - The dealer to play against the player.
 * @param {object[]} deck - The deck to draw cards from.
 * @param {object[]} playedCards - The deck of used cards.
 */
export function checkDealerWin (player, dealer, deck, playedCards) {
  while (dealer.sum < 16) {
    dealer.hand.push(askForOneCard(deck, playedCards))
    dealer.sum = Player.sum(dealer.hand)
    console.log(`Dealer picks another card. New hand is ${dealer.hand.join(', ')}. Current value is ${dealer.sum}`)
  }
  if (dealer.hand.length === 5 && dealer.sum < 21) {
    console.log(`Dealer has ${dealer.hand.length} cards on hand with a value less than 21 and therefore the Dealer wins!\n${player.name} is out!`)
    player.looseStatus = true
  }
  if (dealer.sum === 21) {
    console.log(`Dealer got 21! Dealer wins! ${player.name} looses.`)
    player.looseStatus = true
  }
  if (dealer.sum === player.sum) {
    console.log(`Dealer and player have the same value on hand and therefore the Dealer wins!\n${player.name} is out!`)
    player.looseStatus = true
  }
  if (dealer.sum < 21 && dealer.sum > player.sum) {
    console.log(`Dealer got ${dealer.sum} and ${player.name} got ${player.sum}, Dealer wins!`)
    player.looseStatus = true
  }
  if (dealer.sum > 21) {
    console.log(`Dealer busted! ${player.name} wins!`)
    player.winStatus = true
  }
  if (dealer.sum < player.sum) {
    console.log(`${player.name} wins!`)
    player.winStatus = true
  }
  dealer.hand = throwCardsToBin(dealer.hand, playedCards)
}
