/**
 * Function to pick a random name from the array of names created in the function.
 *
 * @returns {string} randomPick - As the random name.
 */
export const randomName = function () {
  const nameArray = [
    'Gösta',
    'Kalle',
    'Martin',
    'David',
    'Sebastian',
    'Ida',
    'Susanne',
    'Mats',
    'Johan',
    'Jörgen',
    'Gustav'
  ]

  const randomPick = nameArray[Math.floor(Math.random() * nameArray.length)]
  return randomPick
}

/**
 * Class representing a participant.
 *
 * @class Player
 */
export class Player {
  /**
   * Creates an instance of Player.
   *
   * @param {string} name - The name of the created player.
   * @param {object[]} hand - The cards on hand of created player.
   * @memberof Player
   */
  constructor (name, hand) {
    this.name = name
    this.hand = hand
    if (hand === 0) {
      this.hand = []
    }
    this.sum = Player.sum(hand)
  }

  /**
   * A static method to get the sum of the players hand.
   *
   * @param {object[]} hand - The array of cards to be summed up.
   * @returns {number} result - As the sum of the players hand.
   * @memberof Player
   */
  static sum (hand) {
    const value = []
    let result = 0
    if (hand === 0) {
      return result
    } else {
      for (const card of hand) {
        value.push(card[0])
      }
      result = value.reduce((a, b) => a + b, 0)
      if (value.some(x => x.rank === 1) && result <= 8) {
        result = result + 13
      }
      if (value.some(x => x.rank === 14) && result > 21) {
        result = result - 13
      }
      return result
    }
  }
}
