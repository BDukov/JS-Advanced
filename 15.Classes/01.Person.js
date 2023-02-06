class Person {
    constructor(firstName, lasteName, age, email) {
        this.firstName = firstName;
        this.lasteName = lasteName;
        this.age = age;
        this.email = email;
    }
    toString() {
        return `${this.firstName} ${this.lasteName} (age: ${this.age}, email: ${this.email})`;
    }
}

let person = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');
console.log(person.toString());
