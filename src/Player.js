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
    const x = hand
    const handObj = {}
    const value = []
    let result = 0
    if (x === 0) {
      return result
    } else {
      for (let i = 0; i < x.length; i++) {
        Object.assign(handObj, x[i])
        const cardRank = handObj[0].rank
        value.push(cardRank)
      }
      result = value.reduce((a, b) => a + b, 0)
      if (value.some(x => x === 1) && result <= 7) {
        const whereAce = value.indexOf(1)
        value[whereAce] = 14
      }
      if (value.some(x => x === 14) && result > 21) {
        const whereAce = value.indexOf(14)
        value[whereAce] = 1
      }
      result = value.reduce((a, b) => a + b, 0)
    }
    return result
  }
}
