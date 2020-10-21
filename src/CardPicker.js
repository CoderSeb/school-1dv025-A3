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
  const shuffleBoard = []
  if (x === hand) {
    return hand
  } else if (deck.length < 1 && playedCards.length > 1) {
    for (const card of playedCards) {
      shuffleBoard.push(card[0])
      playedCards = []
    }
    for (const card of deck) {
      shuffleBoard.push(card)
    }
    deck = shuffleBoard
    console.log(`Out of cards in the draw pile, reshuffling the remaining cards...\nCards remaining: ${deck.length}.`)
    Deck.shuffle(deck)
    hand = deck.splice(0, x)
    return hand
  } else if (playedCards.length < 1 && deck.length < 1) {
    const err = new Error('Not enough cards left in the draw pile!')
    err.name = 'NotEnoughCardsLeft'
    throw err
  } else {
    hand = deck.splice(0, x)
    return hand
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
