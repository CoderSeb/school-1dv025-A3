import * as mainApp from './app.js'
import { Deck } from './Deck.js'
import * as Player from './Player.js'
import { PlayingCard } from './PlayingCard.js'

export function createPlayers (numberOfPlayers, deck, players) {
  let nameAddition = 2
  // Loop to create an array of players
  for (let n = 0; n < numberOfPlayers; n++) {
    if (players.length < 1) {
      const dealer = new Player.Player('Dealer', 0)
      players.push(dealer)
    }
    const player = new Player.Player(Player.randomName(), 0)
    if (players.some(x => x.name === player.name)) {
      player.name += ' #' + nameAddition
      nameAddition++
      players.push(player)
    } else {
      players.push(player)
    }
  }
  return players
}

function askForOneCard (deck) {
  const card = Player.cardPicker(deck, 1)
  return card
}

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

function checkPlayerWin (player, deck) {
  if (player.winStatus === false && player.sum < 16) {
    player.hand.push(askForOneCard(deck))
    player.sum = Player.Player.sum(player.hand)
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
    throwCardsToBin(player.hand, playedCards)
    winners.push(player.name)
  }
  if (player.sum > 21) {
    console.log(`${player.name} has got ${player.sum}... BUSTED!`)
    throwCardsToBin(player.hand, playedCards)
  }
}

export function playTurn (deck, players) {
  let thisPlayer = {}
  let dealer = {}
  for (let i = 1; i < players.length; i++) {
    thisPlayer = players[i]
    thisPlayer.hand.push(askForOneCard(deck))
    thisPlayer.sum = Player.Player.sum(thisPlayer.hand)
    thisPlayer.winStatus = false
    consoleThis(thisPlayer)
    checkPlayerWin(thisPlayer, deck)
  }
  for (let i = 1; i < players.length; i++) {
    dealer = players[0]
    thisPlayer = players[i]
    console.log(`\nTime for dealer to play against ${thisPlayer.name}`)
    for (let n = 0; n < 2; n++) {
      dealer.hand.push(askForOneCard(deck))
      dealer.sum = Player.Player.sum(dealer.hand)
    }
  }
}
