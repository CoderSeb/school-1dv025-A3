/**
 * Module for the main game logic.
 *
 * @author Sebastian Åkerblom <sa224ny@student.lnu.se>
 * @version 1.0.0
 */

// Imports
import { Player } from './Player.js'
import { askForOneCard } from './CardPicker.js'
import { checkPlayerWin } from './PlayerLogic.js'
import { checkDealerWin } from './DealerLogic.js'
import { throwCardsToBin } from './DeckHandler.js'

/**
 * Function that prints out the amount of cards left in the deck.
 *
 * @param {object[]} deck - The array of cards.
 * @param {object[]} playedCards - As the array of used cards.
 */
export function cardsLeftMessage (deck, playedCards) {
  console.log(`\nCards left in the deck: ${deck.length + playedCards.length}`)
}

/**
 * Function that prints out the name, hand and sum of the player.
 *
 * @param {object} name - The player to be printed out.
 */
export function consoleThis (name) {
  console.log(`\n${name.name}\nHand: ${name.hand.join(', ')}\nSum: ${name.sum}`)
}

/**
 * Function that plays a turn. It takes in the deck of cards and array of players
 * then have them play a turn.
 *
 * @param {object[]} deck - The deck of cards.
 * @param {object[]} players - The array of players.
 * @param {object[]} playedCards - The array of used cards.
 */
export function playTurn (deck, players, playedCards) {
  let thisPlayer = {}
  let dealer = {}
  for (let i = 1; i < players.length; i++) {
    if (i < players.length) {
      let line = ''
      for (let n = 0; n < 80; n++) {
        line += '-'
      }
      console.log(line)
    }
    dealer = players[0]
    thisPlayer = players[i]
    thisPlayer.hand.push(askForOneCard(deck, playedCards))
    thisPlayer.sum = Player.sum(thisPlayer.hand)
    thisPlayer.winStatus = false
    thisPlayer.looseStatus = false
    consoleThis(thisPlayer)
    checkPlayerWin(thisPlayer, deck, playedCards)
    if (thisPlayer.winStatus === true || thisPlayer.looseStatus === true) {
      thisPlayer.hand = throwCardsToBin(thisPlayer.hand, playedCards)
      players.splice(i, 1)
      i -= 1
    } else {
      console.log(`\nTime for dealer to play against ${thisPlayer.name}`)
      for (let n = 0; n < 2; n++) {
        dealer.hand.push(askForOneCard(deck, playedCards))
        dealer.sum = Player.sum(dealer.hand)
      }
      consoleThis(dealer)
      checkDealerWin(thisPlayer, dealer, deck, playedCards)
      thisPlayer.hand = throwCardsToBin(thisPlayer.hand, playedCards)
    }
  }
}
