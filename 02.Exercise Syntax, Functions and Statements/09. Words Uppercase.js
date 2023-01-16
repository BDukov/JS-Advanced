function wordsUppercase(input){
    const regex = /[A-z0-9]+/g
    let result = input.match(regex);
    console.log(result.join(', ').toUpperCase());
}
wordsUppercase('Hi, how are you?');
wordsUppercase('hello');