/**
 * Function to pick any amount of cards from the deck.
 *
 * @param {object[]} deck - The deck to be drawn from.
 * @param {number} x - Amount of cards to be picked.
 * @returns {object[]} hand - as the card(s) picked.
 */
function cardPicker (deck, x) {
  let hand = 0
  if (x === hand) {
    return hand
  } else {
    if (deck.length < 2) {
      throw new Error('Not enough cards left! Please choose a less amount of players.')
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
 * @returns {object} card - The returned card.
 */
export function askForOneCard (deck) {
  const card = cardPicker(deck, 1)
  return card
}
