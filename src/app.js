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
  process.on('exit', (code) => {
    console.log(`About to exit with code: ${code}. Good bye!`)
  })

  let numberOfPlayers
  if (process.argv.length > 2) {
    numberOfPlayers = process.argv.slice(2).map(Number)
    if (isNaN(numberOfPlayers)) {
      console.log('Invalid number!')
      process.exit(0)
    }
  } else {
    numberOfPlayers = 3
  }

  console.log(`You have chosen ${numberOfPlayers} players.`)
  const players = []
  let nameAddition = 2
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
