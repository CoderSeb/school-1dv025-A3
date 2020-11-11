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
import { createAndShuffle, firstDeal } from './DeckHandler.js'
import { checkError, checkInput } from './CustomErrors.js'

// Main Function
const main = function () {
  process.on('exit', (code) => {
    console.log('Application is about to exit with code: ', code)
  })
  const numberOfPlayers = ChoosePlayers()
  checkInput(numberOfPlayers)
  console.log(`You have chosen ${numberOfPlayers} players.`)

  const participants = []
  const deck = createAndShuffle()
  const throwPile = []

  createPlayers(numberOfPlayers, participants)
  GameLogic.cardsLeftMessage(deck, throwPile)

  firstDeal(deck, participants, throwPile)
  GameLogic.cardsLeftMessage(deck, throwPile)

  GameLogic.playTurn(deck, participants, throwPile)
}

try {
  main()
} catch (err) {
  checkError(err)
  console.error(err.message)
}
