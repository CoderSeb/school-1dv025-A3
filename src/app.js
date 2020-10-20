/**
 * The starting point of the application.
 *
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @author Sebastian Åkerblom <sa224ny@student.lnu.se>
 * @version 1.0.0
 */

// Imports
import * as GameLogic from './GameLogic.js'
import { createPlayers } from './PlayerCreation.js'
import ChoosePlayers from './ChoosePlayers.js'
import { createAndShuffle } from './DeckHandler.js'
import { setExitCode } from './CustomErrors.js'

// Main Function
export const main = function () {
  process.on('exit', (code) => {
    console.log('Application is about to exit with code: ', code)
  })
  ChoosePlayers()
  const numberOfPlayers = ChoosePlayers()
  setExitCode(numberOfPlayers)
  console.log(`You have chosen ${numberOfPlayers} players.`)

  const participants = []
  const deck = createAndShuffle()
  createPlayers(numberOfPlayers, participants)
  GameLogic.cardsLeftMessage(deck)

  GameLogic.firstDeal(deck, participants)
  GameLogic.cardsLeftMessage(deck)

  GameLogic.playTurn(deck, participants)
  GameLogic.cardsLeftMessage(deck)
}

try {
  main()
} catch (err) {
  console.error(err)
  process.exit(1)
}
