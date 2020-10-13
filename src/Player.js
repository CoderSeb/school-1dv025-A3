import { howManyPlayers } from './PromptModule.js'
import { Deck } from './Deck.js'
import { Ranks } from './Ranks.js'

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
    'Johan'
  ]

  const randomPick = nameArray[Math.floor(Math.random() * nameArray.length)]
  return randomPick
}

// Picks any specified number of cards from the deck
export const cardPicker = function (x) {
  const hand = cards.splice(0, x).join(', ')
  return hand
}

export const playerId = function () {
  return '_' + Math.random().toString(36).substr(4, 17)
}

export const sum = function (x) {
  x = x.split(',').map(x => valueOf(x))
  return x
}

export class Player {
  constructor (name, hand) {
    this.id = playerId()
    this.name = name
    this.hand = hand
    this.sum = sum(hand)
  }
}

// export const makePlayer = function (numberOfPlayers) {
//   // numberOfPlayers = howManyPlayers()
//   const sumOfHand = function (x) {
//     x.split(',').map(Number)
//     return x.reduce(reducer)
//   }

//   const player = new Player(`${randomName()}`, `${cardPicker(2)}`, `${sumOfHand(Player.hand)}`)
//   // const playersArray = []
//   // for (let n = 0; n < numberOfPlayers; n++) {
//   //   playersArray.push(Player().create())
//   // }

//   return player
// }
