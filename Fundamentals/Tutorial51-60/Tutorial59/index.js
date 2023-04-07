// get = binds an object property to a function when that property is accessed

class Car {
    constructor(power) {
        this._gas = 25
        this._power = power
    }//_ mean the the variable is protected and let developers know that they should not mess with it
    get power() {
        return `${this._power}hp`
    }

    get gas() {
        return `${this._gas}L (${this._gas / 50 * 100}%)`
    }

    set gas(value) {
        if (value > 50) {
            value = 50
        } else if (value < 0) {
            value = 0
        }
        this._gas = value
    }
}

let car = new Car(400)

car.gas = 100000

console.log(car.power)
console.log(car.gas)