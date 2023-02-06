class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    get diameter() {
        return this.radius * 2;
    }

    set diameter(value) {
        if(value <= 0) {
            throw new Error('Diameter must be positive');
        }
        this.radius = value / 2;
    }
    get area() {
        return Math.PI * this.radius * this.radius;
    }
}


