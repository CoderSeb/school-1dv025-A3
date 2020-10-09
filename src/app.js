/**
 * The starting point of the application.
 *
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @author Sebastian Åkerblom <sa224ny@student.lnu.se>
 * @version 1.0.0
 */
// Imports
import { Deck } from './Deck.js'
// From https://nodejs.org/api/readline.html
import readline from 'readline'
// Readline interface?
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

// Create a deck of 52 cards
const playingCards = Deck.create()
// Shuffle the deck
Deck.shuffle(playingCards)

// Reduce function to be used multiple times
const reducer = (a, b) => a + b

const main = function () {
  rl.question('How many players? ', (answer) => {
    console.log(`Number of players will be ${answer}`)

    rl.close()
  })
}

main()
