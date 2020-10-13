import readline from 'readline'
// From https://nodejs.org/api/readline.html
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })

export const howManyPlayers = function (x) {
  const amountOfPlayers = x
  // rl.question('How many players? ', (input) => {
  //   amountOfPlayers = parseInt(input)

  //   if (typeof amountOfPlayers !== 'number' || amountOfPlayers > 100 || Number.isNaN(amountOfPlayers)) {
  //     console.log('Please enter a valid number, 100 or less.')
  //     rl.close()
  //   } else {
  //     console.log(`Number of players will be ${amountOfPlayers}`)
  //     rl.close()
  //   }
  // })
  // console.log(amountOfPlayers)
  return amountOfPlayers
}
