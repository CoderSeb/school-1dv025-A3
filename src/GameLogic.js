import * as mainApp from './app.js'
import { Deck } from './Deck.js'
import * as Player from './Player.js'
import { PlayingCard } from './PlayingCard.js'

export function createPlayers (numberOfPlayers, deck, players) {
  let nameAddition = 2
  // Loop to create an array of players
  for (let n = 0; n < numberOfPlayers; n++) {
    if (players.length < 1) {
      const dealer = new Player.Player('Dealer', 0)
      players.push(dealer)
    }
    const player = new Player.Player(Player.randomName(), 0)
    if (players.some(x => x.name === player.name)) {
      player.name += ' #' + nameAddition
      nameAddition++
      players.push(player)
    } else {
      players.push(player)
    }
  }
  return players
}

function askForOneCard (deck) {
  const card = Player.cardPicker(deck, 1)
  return card
}

export function firstDeal (deck, players) {
  for (let i = 1; i < players.length; i++) {
    players[i].hand.push(askForOneCard(deck))
  }
  return players
}

export function playTurn (deck, players) {
  for (let i = 1; i < players.length; i++) {
    const thisPlayer = players[i]
    const dealer = players[0]
    thisPlayer.hand.push(askForOneCard(deck))
    thisPlayer.sum = Player.Player.sum(thisPlayer.hand)
    thisPlayer.winStatus = false
    console.log(thisPlayer.hand.join(', '))
    if (thisPlayer.sum === 21) {
      console.log(`${thisPlayer.name} has got ${thisPlayer.sum} and won!`)
      thisPlayer.winStatus = true
    }
    if (thisPlayer.sum < 21 && thisPlayer.hand.length === 5) {
      console.log(`${thisPlayer.name} has ${thisPlayer.hand.length} cards with a total value under 21 and therefore wins!`)
      thisPlayer.winStatus = true
    }
    if (thisPlayer.sum > 21) {
      console.log(`${thisPlayer.name} has got ${thisPlayer.sum}... BUSTED!`)
    }
    if (thisPlayer.winStatus === false && thisPlayer.sum < 16) {
      thisPlayer.hand.push(askForOneCard(deck))
    } else {
      console.log(`${thisPlayer.name} is satisfied with his cards ${thisPlayer.hand.join(', ')}. Let's see what the dealer has.`)
    }
    // Dealer turn!
    for (let i = 0; i < 2; i++) {
      dealer.hand.push(askForOneCard(deck))
      dealer.sum = Player.Player.sum(dealer.hand)
    }
  }
}
