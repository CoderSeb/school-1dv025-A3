// Random name function
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

// Picks any specified number of cards from the deck
export const cardPicker = function (deck, x) {
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

export class Player {
  constructor (name, hand, sum) {
    this.name = name
    this.hand = hand
    if (hand === 0) {
      this.hand = ''
    }
    this.sum = sum
  }
}
