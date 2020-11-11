/**
 * Module for the deck handling.
 *
 * @author Sebastian Åkerblom <sa224ny@student.lnu.se>
 * @version 1.0.0
 */

// Imports
import { Deck } from './Deck.js'
import { askForOneCard } from './CardPicker.js'
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

/**
 * Function to deal each player one card.
 *
 * @param {object[]} deck - As the deck to draw cards from.
 * @param {object[]} players - The array of players to get a card each.
 * @param {object[]} playedCards - As the array of used cards.
 * @returns {object[]} as the array of players now with one card in hand.
 */
export function firstDeal (deck, players, playedCards) {
  console.log('Time for first deal! Each player except the dealer gets one card each.')
  for (let i = 1; i < players.length; i++) {
    players[i].hand.push(askForOneCard(deck, playedCards))
  }
  return players
}
