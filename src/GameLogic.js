import { Player } from './Player.js'
import { askForOneCard } from './CardPicker.js'
import { checkPlayerWin } from './PlayerLogic.js'

export function firstDeal (deck, players) {
  console.log('Time for first deal! Each player except the dealer gets one card each.')
  for (let i = 1; i < players.length; i++) {
    players[i].hand.push(askForOneCard(deck))
  }
  return players
}

export function cardsLeftMessage (deck) {
  console.log(`Cards left in the deck: ${deck.length}`)
}

export function consoleThis (name) {
  console.log(`\n${name.name}\nHand: ${name.hand.join(', ')}\nSum: ${name.sum}`)
}

export function throwCardsToBin (playerhand, playedCards) {
  playedCards.push(playerhand)
  playerhand = []
}

function dealerWon (player, dealer) {
  console.log(`Dealer got ${dealer.sum}\nDealer has won! ${player.name} is out...`)
}

const winners = []
const playedCards = []



export function playTurn (deck, players) {
  let thisPlayer = {}
  let dealer = {}
  for (let i = 1; i < players.length; i++) {
    thisPlayer = players[i]
    thisPlayer.hand.push(askForOneCard(deck))
    thisPlayer.sum = Player.sum(thisPlayer.hand)
    thisPlayer.winStatus = false
    consoleThis(thisPlayer)
    checkPlayerWin(thisPlayer, deck, playedCards)
  }
  for (let i = 1; i < players.length; i++) {
    dealer = players[0]
    thisPlayer = players[i]
    console.log(`\nTime for dealer to play against ${thisPlayer.name}`)
    for (let n = 0; n < 2; n++) {
      dealer.hand.push(askForOneCard(deck))
      dealer.sum = Player.sum(dealer.hand)
    }
  }
}
