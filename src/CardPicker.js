/**
 * Module for giving cards.
 *
 * @author Sebastian Åkerblom <sa224ny@student.lnu.se>
 * @version 1.0.0
 */

// Imports
import { Deck } from './Deck.js'

/**
 * Function to pick any amount of cards from the deck.
 *
 * @param {object[]} deck - The deck to be drawn from.
 * @param {number} x - Amount of cards to be picked.
 * @returns {object[]} hand - as the card(s) picked.
 */
export function cardPicker (deck, x) {
  const hand = deck.splice(0, x)
  return hand
}

/**
 * Function that uses the cardPicker function but only picks one card.
 *
 * @param {object[]} deck - The deck of cards to be picked from.
 * @param {object[]} playedCards - The deck of used cards
 * @returns {object} card - The returned card.
 */
export function askForOneCard (deck, playedCards) {
  if (deck.length < 2 && playedCards.length > 1) {
    let shuffleBoard = []
    for (const playCard of playedCards) {
      shuffleBoard.push(playCard[0])
    }
    for (const playCard of deck) {
      shuffleBoard.push(playCard)
    }
    playedCards.splice(0, playedCards.length)
    deck.splice(0, deck.length)
    for (const card of shuffleBoard) {
      deck.push(card)
    }
    shuffleBoard = []
    console.log(`\nOut of cards in the draw pile, reshuffling the remaining cards...\nCards remaining: ${deck.length}.\n`)
    Deck.shuffle(deck)
    const card = cardPicker(deck, 1)
    return card
  } else if (playedCards.length < 1 && deck.length < 1) {
    const err = new Error('Not enough cards left in the draw pile!')
    err.name = 'NotEnoughCardsLeft'
    throw err
  } else {
    const card = cardPicker(deck, 1)
    return card
  }
}
