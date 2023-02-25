function personAndTeacher() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }
    }

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }
    }

    return {
        Person,
        Teacher,
    };


}

class Person {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

class Teacher extends Person {
    constructor(name, email, subject) {
        super(name, email);
        this.subject = subject;
    }
}

let person = new Person('Rosen', 'rosendobrev@mail.bg')
console.log(`Person: ${person.name} (${person.email})`)

let teacher = new Teacher('Yordanka', 'yordanka_tr@abv.bg', 'Geography')
console.log(`Teacher: ${teacher.name} (${teacher.email}), teaches ${teacher.subject}`)