import { Player } from './Player.js'
import { askForOneCard } from './CardPicker.js'
import { checkPlayerWin } from './PlayerLogic.js'
import { checkDealerWin } from './DealerLogic.js'

const playedCards = []

/**
 * Function to deal each player one card.
 *
 * @param {object[]} deck - As the deck to draw cards from.
 * @param {object[]} players - The array of players to get a card each.
 * @returns {object[]} as the array of players now with one card in hand.
 */
export function firstDeal (deck, players) {
  console.log('Time for first deal! Each player except the dealer gets one card each.')
  for (let i = 1; i < players.length; i++) {
    players[i].hand.push(askForOneCard(deck, playedCards))
  }
  return players
}

/**
 * Function that prints out the amount of cards left in the deck.
 *
 * @param {object[]} deck - The array of cards.
 */
export function cardsLeftMessage (deck) {
  console.log(`\nCards left in the deck: ${deck.length}`)
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
 * Function that removes cards from the players hand and puts them in a new array of used cards.
 *
 * @param {object[]} playerhand - The players cards.
 */
export function throwCardsToBin (playerhand) {
  for (let i = 0; i < playerhand.length; i++) {
    playedCards.push(playerhand.splice(0, 1))
  }
  playerhand = []
}

/**
 * Function that plays a turn. It takes in the deck of cards and array of players
 * then have them play a turn.
 *
 * @param {object[]} deck - The deck of cards.
 * @param {object[]} players - The array of players.
 */
export function playTurn (deck, players) {
  let thisPlayer = {}
  let dealer = {}
  for (let i = 1; i < players.length; i++) {
    thisPlayer = players[i]
    thisPlayer.hand.push(askForOneCard(deck, playedCards))
    thisPlayer.sum = Player.sum(thisPlayer.hand)
    thisPlayer.winStatus = false
    thisPlayer.looseStatus = false
    consoleThis(thisPlayer)
    checkPlayerWin(thisPlayer, deck, playedCards)
  }

  for (let i = 0; i < players.length; i++) {
    if (players[i].winStatus === true || players[i].looseStatus === true) {
      throwCardsToBin(players[i].hand)
      players.splice(i, 1)
      i -= 1
    }
  }

  for (let i = 1; i < players.length; i++) {
    dealer = players[0]
    thisPlayer = players[i]
    dealer.winStatus = false
    dealer.looseStatus = false
    console.log(`\nTime for dealer to play against ${thisPlayer.name}`)
    consoleThis(thisPlayer)
    throwCardsToBin(dealer.hand)
    for (let n = 0; n < 2; n++) {
      dealer.hand.push(askForOneCard(deck, playedCards))
      dealer.sum = Player.sum(dealer.hand)
    }
    consoleThis(dealer)
    checkDealerWin(thisPlayer, dealer, deck, playedCards)
  }
}
