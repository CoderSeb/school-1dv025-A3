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

/**
 * Function that removes cards from the players hand and puts them in a new array of used cards.
 *
 * @param {object[]} playerhand - The players cards.
 * @param {object[]} playedCards - The array of used cards.
 * @returns {any[]} as an empty array.
 */
export function throwCardsToBin (playerhand, playedCards) {
  for (const card of playerhand) {
    playedCards.push(card)
  }
  playerhand = []
  return playerhand
}
