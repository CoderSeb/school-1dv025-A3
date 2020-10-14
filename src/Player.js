import { Deck } from './Deck.js'

const cards = Deck.create()
Deck.shuffle(cards)

const reducer = (a, b) => a + b

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
export const cardPicker = function (x) {
  let hand = 0
  if (x === hand) {
    return hand
  } else {
    if (cards.length < 2) {
      throw new Error('Not enough cards left! Please choose a less amount of players.')
    } else {
      hand = cards.splice(0, x)
      return hand
    }
  }
}

export const sum = function (x) {
  if (x === 0) {
    return x
  } else {
    x = x.reduce(reducer)
    return x
  }
}

export const checkDealer = function (name) {
  if (name === 'Dealer') {
    return true
  } else {
    return false
  }
}

export class Player {
  constructor (name, hand) {
    this.name = name
    this.hand = hand
    if (hand === 0) {
      this.hand = ''
    } else {
      this.hand = hand.join(', ')
    }
    this.sum = sum(hand).toString()
    this.ifDealer = checkDealer(name)
  }
}
