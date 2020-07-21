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
    constructor (name) {
    super(name)
    }
    heal(traveler){
        return traveler.isHealthy = true
    }
}

class Hunter extends Traveler {
    constructor(name) {
        super(name)
        this.food = 2
        this.isHealthy = true
    }

    hunt() {
        return this.food += 5
    }

    eat() {
        if (this.food < 2) {
            this.isHealthy = false
            this.food = this.food - 1
        } else {
            this.isHealthy = true
            this.food = this.food - 2
        }
    }

     giveFood(traveler, numOfFoodUnits) { 
        if (this.food> 2) {
            this.food -= numOfFoodUnits
        } else {
             if(this.food < 2) {
            return 0
            }
        return traveler.food += numOfFoodUnits
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

    totalFood () {
        const food = this.passenger.map (traveler => traveler.food)
        let totalFood = 4
        for (let index = 0; index < food.length; index++) {
            totalFood = totalFood += food [index]
        }
        return totalFood
    }
}

/*You are passing the tests, however the getAvailableSeatCount is not set up to handle wagon instances with 
capacities greater than 2. Really you do not need a conditional, you just need to always` return this.capacity
- this.passenger.length`. This will give 0 when the the length of this.passengers is equal to this.capacity.*/