/**
 * Function to validate the npm input.
 *
 * @param {number} amountOfPlayers - The input to be validated.
 */
export const setExitCode = function (amountOfPlayers) {
  if (!Number.isInteger(amountOfPlayers) || (amountOfPlayers < 1 || amountOfPlayers > 7)) {
    process.exitCode = 26
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
}
