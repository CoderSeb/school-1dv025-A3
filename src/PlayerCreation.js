/**
 * Module for the creation of players and one dealer.
 *
 * @author Sebastian Åkerblom <sa224ny@student.lnu.se>
 * @version 1.0.0
 */

// Imports
import { Player } from './Player.js'

/**
 * Function to create the amount of players specified in the parameter aswell as a Dealer on first index of the returned array.
 *
 * @param {number} numberOfPlayers - Number of players to be created.
 * @param {object[]} players - The array of players and dealer.
 * @returns {object[]} players as the array of players and one dealer.
 */
export function createPlayers (numberOfPlayers, players) {
  let nameAddition = 2
  // Loop to create an array of players
  for (let n = 0; n < numberOfPlayers; n++) {
    if (players.length < 1) {
      const dealer = new Player(0)
      dealer.name = 'Dealer'
      players.push(dealer)
    }
    const player = new Player(0)
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
