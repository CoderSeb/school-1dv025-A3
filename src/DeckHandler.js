// Imports
import { Deck } from './Deck.js'

/**
 * Function to create and shuffle a new deck.
 *
 * @returns {object[]} deck as the created and shuffled deck.
 */
export function createAndShuffle () {
  const deck = Deck.create()
  Deck.shuffle(deck)
  return deck
}
