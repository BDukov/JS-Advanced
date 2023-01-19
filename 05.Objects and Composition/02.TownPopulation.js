function townPopulation(townAsStrings) {
    const result = {};

    for (const line of townAsStrings) {
        const tokens = line.split(" <-> ");
        let name = tokens[0];
        let population = Number(tokens[1]);

        if (name in result) {
            result[name] += population;
        } else {
            result[name] = population;
        }
    }
    for (const name in result) {
        console.log(`${name} : ${result[name]}`);
    }
}

townPopulation([
    "Istanbul <-> 100000",
    "Honk Kong <-> 2100004",
    "Jerusalem <-> 2352344",
    "Mexico City <-> 23401925",
    "Istanbul <-> 1000",
]);
