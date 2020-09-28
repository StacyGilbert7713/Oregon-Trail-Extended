class Traveler {
    constructor (name) {
        this.name = name
        this.food = 1
        this.isHealthy = true
    }

    hunt () {
        return this.food += 2
    }
    
    eat () {
        if (this.food > 0) {
            this.food --
        } else {
            this.isHealthy = false
        }
        return this
    }
}

class Doctor extends Traveler {
    constructor(name, food, isHealthy) {
    super(name, food, isHealthy)
    }

    heal(traveler) {
        return traveler.isHealthy = true
    }
}

class Hunter extends Traveler {
    constructor(name, food, isHealthy) {
        super(name, food, isHealthy)
        this.food = 2
    }

    hunt() {
        return this.food += 5
    }

    eat() {
        if (this.food < 2) {
            this.isHealthy = false
           this.food = 0
        } else {
            this.food -= 2
        }
        return this
    }

    giveFood(traveler, numOfFoodUnits) {
        if (this.food >= numOfFoodUnits) {
            this.food -= numOfFoodUnits
            traveler.food += numOfFoodUnits
        }
    }
}


class Wagon {
    constructor (capacity) {
        this.capacity = capacity
        this.passenger = []
    }

    getAvailableSeatCount() {
        return (this.capacity - this.passenger.length)
        }
    
    join (traveler) {
        if (this.getAvailableSeatCount () <= 0) {
           return 'Wagon is full.' 
        } else {
        return this.passenger.push (traveler)
        }
    }

    shouldQuarantine () {
        const sick = this.passenger.some (passenger =>
            passenger.isHealthy === false)
       return sick
    } 

    totalFood() {
        const food = this.passenger.map(traveler => traveler.food)
        let totalFood = food.reduce((a, b) => a + b, 0)
    
        return totalFood
    }
}

/* Hunter eat method - if the hunter has less than 2 food and they try to eat, the amount of food they have should become 0. Having "this.food=this.food-1" could cause negative amounts of food.
Hunter giveFood method - you need a condition that checks if the hunter at least has the amount of food being given (no need to make sure the hunter has 2 food after the transfer) If that condition is true, the hunters food decreases and the travelers food increases. You have some of this, since the "traveler.food+=numOfFoodUnits" is an else code block, both are not able to happen.
Wagon totalFood method - the totalFood should not start at 4.*/
