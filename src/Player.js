/**
 * Module for the Player class.
 *
 * @author Sebastian Åkerblom <sa224ny@student.lnu.se>
 * @version 1.0.0
 */

/**
 * Class representing a participant.
 *
 * @class Player
 */
export class Player {
  /**
   * Creates an instance of Player.
   *
   * @param {object[]} hand - As the player hand.
   * @memberof Player
   */
  constructor (hand) {
    this.name = this.randomName()
    this.hand = hand
    if (hand === 0) {
      this.hand = []
    }
    this.sum = Player.sum(hand)
  }

  /**
   * A random name method for players.
   *
   * @returns {string} randomPick - As the random name.
   */
  randomName () {
    const nameArray = [
      'Gösta',
      'Kalle',
      'Martin',
      'David',
      'Sebastian',
      'Mats',
      'Johan',
      'Jörgen',
      'Gustav',
      'Nils',
      'Peter',
      'Rune',
      'Lars',
      'Stefan',
      'Tobias'
    ]

    const randomPick = nameArray[Math.floor(Math.random() * nameArray.length)]
    return randomPick
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
