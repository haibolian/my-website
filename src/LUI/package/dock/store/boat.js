class Boat {
  constructor() {
    this.sign = 0
    this.current = null
  }

  getSign() {
    this.sign++
    return this.sign
  }
}

export default new Boat()