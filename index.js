// Add your Circle class here

class Circle {
  constructor(radius) {
    this.radius = radius
  }

  get diameter(radius) {
    return 2 * Math.PI
  }

  get circumference(radius) {
    return 2 * Math.PI * this.radius
  }

  get area(radius) {

  }

}
