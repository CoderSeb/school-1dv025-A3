/**
 * Module for the validation of input and error checking.
 *
 * @author Sebastian Åkerblom <sa224ny@student.lnu.se>
 * @version 1.0.0
 */

/**
 * Function to validate the start input.
 *
 * @param {number} amountOfPlayers - The input to be validated.
 * @throws {TypeError} as InvalidPlayersError
 */
export const checkInput = function (amountOfPlayers) {
  const err = new TypeError('Invalid number of players!')
  err.name = 'InvalidPlayersError'
  if (!Number.isInteger(amountOfPlayers)) {
    throw err
  }
  if ((amountOfPlayers !== 20 && amountOfPlayers !== 50) && (amountOfPlayers < 1 || amountOfPlayers > 7)) {
    throw err
  }
}

/**
 * Function to check if the object argument is a certain name and if so then change the exit code.
 *
 * @param {object} err - As the error object to be checked.
 */
export const checkError = function (err) {
  if (err.name === 'NotEnoughCardsLeft') {
    process.exitCode = 27
  }
  if (err.name === 'InvalidPlayersError') {
    process.exitCode = 26
  }
}
