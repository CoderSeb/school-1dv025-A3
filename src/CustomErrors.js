/**
 * Function to validate the npm input.
 *
 * @param {number} amountOfPlayers - The input to be validated.
 */
export const setExitCode = function (amountOfPlayers) {
  if (!Number.isInteger(amountOfPlayers) || (amountOfPlayers < 1 || amountOfPlayers > 7)) {
    process.exitCode = 26
  } else if (amountOfPlayers === 50) {
    process.exitCode = 27
  }
}
