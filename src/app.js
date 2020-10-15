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
import ChoosePlayers from './ChoosePlayers.js'
import { Deck } from './Deck.js'

export const main = function () {
  process.on('exit', (code) => {
    console.log(`About to exit with code: ${code}. Good bye!`)
  })
  ChoosePlayers()
  const numberOfPlayers = ChoosePlayers()
  console.log(`You have chosen ${numberOfPlayers} players.`)

  const participants = []

  const deck = Deck.create()
  Deck.shuffle(deck)

  GameLogic.createPlayers(numberOfPlayers, deck, participants)
  console.table(participants)

  GameLogic.firstDeal(deck, participants)
  console.table(participants)
}

try {
  main()
} catch (err) {
  console.error(err.message)
}
