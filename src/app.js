/**
 * The starting point of the application.
 *
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @author Sebastian Åkerblom <sa224ny@student.lnu.se>
 * @version 1.0.0
 */
// Imports
import { howManyPlayers } from './PromptModule.js'
import * as Player from './Player.js'

export const main = function () {
  const players = []

  // Loop to create an array of players
  for (let n = 0; n < howManyPlayers(10); n++) {
    const player = new Player.Player(Player.randomName(), Player.cardPicker(2))
    players.push(player)
  }
  console.table(players)
}

main()
