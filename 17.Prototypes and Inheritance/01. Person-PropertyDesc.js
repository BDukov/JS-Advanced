function createPerson (firstName, lastName){
    const result = {
        firstName,
        lastName
    }

    Object.defineProperty(result, 'fullName', {
        enumerable: true,
        configurable: true,
        get() {
            return result.firstName + ' ' + result.lastName;
        },
        set(value){
            [result.firstName, result.lastName] = value.split(' ');
        }
    });
    return result;
}

const person = createPerson('John', 'Smith');

console.log(person.fullName);