'use strict'

class Player {
  constructor(ship, time) {
    this.ship = ship
    this.time = time
    Player.all.push(this)
    this.id = Player.all.length -1
  }

  get finishMessage () {
    return `Player ${this.id} flew for: ${this.time}`
  }

}

Player.all = (Player.all || [])
