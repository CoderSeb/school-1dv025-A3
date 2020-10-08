/**
 * The module for the players.
 * 
 * 
 * @author Sebastian Åkerblom <sa224ny@student.lnu.se>
*/

import { Deck } from './Deck.js'

// Create a deck of 52 cards
const playingCards = Deck.create()

// Shuffle the deck
Deck.shuffle(playingCards)

// Reduce argument
const reducer = (a, b) => a + b

// Player name library array
const names = [
  'pelle', 'sven', 'gösta', 'anton', 'niklas', 'johan', 'mats', 'sebastian', 'ida', 'ellen'
]

// Random name generator
const nameGen = function (namesArray) {
  const randomIndex = Math.floor(Math.random() * Math.floor(namesArray.length))
  let randomName = namesArray[randomIndex]
  randomName = randomName[0].toUpperCase() + randomName.slice(1)
  return randomName
}

export default class Player {
  constructor () {
    this.name = `${nameGen(names)}`,
    this.hand = playingCards.splice(0, 2).join(', '),
  } // Fortsätt här

  presentation() {
    console.log(`I am ${this.name}.`)
  }
}

