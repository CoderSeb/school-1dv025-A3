import * as mainApp from './app.js'
import { Deck } from './Deck.js'
import * as Player from './Player.js'

export function createPlayers (numberOfPlayers, players) {
  let nameAddition = 2
  // Loop to create an array of players
  for (let n = 0; n < numberOfPlayers; n++) {
    if (players.length < 1) {
      const dealer = new Player.Player('Dealer', Player.cardPicker(0))
      players.push(dealer)
    }
    const player = new Player.Player(Player.randomName(), Player.cardPicker(0))
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
