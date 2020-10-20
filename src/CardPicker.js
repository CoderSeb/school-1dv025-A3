import { Deck } from './Deck.js'

/**
 * Function to pick any amount of cards from the deck.
 *
 * @param {object[]} deck - The deck to be drawn from.
 * @param {number} x - Amount of cards to be picked.
 * @param {object[]} playedCards - The array of played cards.
 * @returns {object[]} hand - as the card(s) picked.
 */
export function cardPicker (deck, x, playedCards) {
  let hand = 0
  if (x === hand) {
    return hand
  } else {
    if (deck.length < 2) {
      if (playedCards.length > 1) {
        for (let i = 0; i < playedCards.length; i++) {
          deck.push(playedCards.splice(0, 1))
        }
        Deck.shuffle(deck)
      } else {
        throw new Error('Not enough cards left, please choose a valid number of players!')
      }
    } else {
      hand = deck.splice(0, x)
      return hand
    }
  }
}

/**
 * Function that uses the cardPicker function but only picks one card.
 *
 * @param {object[]} deck - The deck of cards to be picked from.
 * @param {object[]} playedCards - The deck of used cards
 * @returns {object} card - The returned card.
 */
export function askForOneCard (deck, playedCards) {
  const card = cardPicker(deck, 1, playedCards)
  return card
}
