import * as mainApp from './app.js'
import { Deck } from './Deck.js'
import * as Player from './Player.js'

export function createPlayers (numberOfPlayers, deck, players) {
  let nameAddition = 2
  // Loop to create an array of players
  for (let n = 0; n < numberOfPlayers; n++) {
    if (players.length < 1) {
      const dealer = new Player.Player('Dealer', Player.cardPicker(deck, 0))
      players.push(dealer)
    }
    const player = new Player.Player(Player.randomName(), Player.cardPicker(deck, 0))
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

export function firstDeal (deck, players) {
  for (let i = 1; i < players.length; i++) {
    const card = Player.cardPicker(deck, 1)
    players[i].hand += card
  }

  return players
}
