/**
 * The starting point of the application.
 *
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @author Sebastian Åkerblom <sa224ny@student.lnu.se>
 * @version 1.0.0
 */
// Imports
import * as Player from './Player.js'

export const main = function () {
  const players = []
  let nameAddition = 1
  const numberOfPlayers = 3
  // Loop to create an array of players
  for (let n = 0; n < numberOfPlayers; n++) {
    if (players.length < 1) {
      const dealer = new Player.Player('Dealer', Player.cardPicker(1))
      players.push(dealer)
    }
    const player = new Player.Player(Player.randomName(), Player.cardPicker(2))
    if (players.some(x => x.name === player.name)) {
      player.name += ' #' + nameAddition
      nameAddition++
      players.push(player)
    } else {
      players.push(player)
    }
  }
  console.table(players)
}

try {
  main()
} catch (err) {
  console.error(err.message)
}
