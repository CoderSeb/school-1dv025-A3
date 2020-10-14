/**
 * Module for the amount of players to be playing.
 *
 * @returns {number} amountOfPlayers
 */
export default function () {
  let amountOfPlayers
  if (process.argv.length > 2) {
    amountOfPlayers = process.argv.slice(2).map(Number)
    if (isNaN(amountOfPlayers)) {
      console.log('Invalid number!')
      process.exit(0)
    } else {
      return amountOfPlayers
    }
  } else {
    amountOfPlayers = 3
    return amountOfPlayers
  }
}
