import { Player } from './Player.js'
import { askForOneCard } from './CardPicker.js'
import { checkPlayerWin } from './PlayerLogic.js'
import { checkDealerWin } from './DealerLogic.js'

/**
 * @param deck
 * @param players
 */
export function firstDeal (deck, players) {
  console.log('Time for first deal! Each player except the dealer gets one card each.')
  for (let i = 1; i < players.length; i++) {
    players[i].hand.push(askForOneCard(deck))
  }
  return players
}

/**
 * @param deck
 */
export function cardsLeftMessage (deck) {
  console.log(`\nCards left in the deck: ${deck.length}`)
}

/**
 * @param name
 */
export function consoleThis (name) {
  console.log(`\n${name.name}\nHand: ${name.hand.join(', ')}\nSum: ${name.sum}`)
}

/**
 * @param playerhand
 * @param playedCards
 */
export function throwCardsToBin (playerhand, playedCards) {
  playedCards.push(playerhand.splice(0, playerhand.length))
  playerhand = []
}

const playedCards = []

/**
 * @param deck
 * @param players
 */
export function playTurn (deck, players) {
  let thisPlayer = {}
  let dealer = {}
  for (let i = 1; i < players.length; i++) {
    thisPlayer = players[i]
    thisPlayer.hand.push(askForOneCard(deck))
    thisPlayer.sum = Player.sum(thisPlayer.hand)
    thisPlayer.winStatus = false
    thisPlayer.looseStatus = false
    consoleThis(thisPlayer)
    checkPlayerWin(thisPlayer, deck)
  }

  for (let i = 0; i < players.length; i++) {
    if (players[i].winStatus === true || players[i].looseStatus === true) {
      throwCardsToBin(players[i].hand, playedCards)
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
    throwCardsToBin(dealer.hand, playedCards)
    for (let n = 0; n < 2; n++) {
      dealer.hand.push(askForOneCard(deck))
      dealer.sum = Player.sum(dealer.hand)
    }
    consoleThis(dealer)
    checkDealerWin(thisPlayer, dealer, deck)
  }
}
