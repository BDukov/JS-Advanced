function roadRadar(speed, area) {
    let limit = 0;
    switch (area) {
        case 'motorway':
            limit = 130;
            break;
        case 'interstate':
            limit = 90;
            break;
        case 'city':
            limit = 50;
            break;
        case 'residential':
            limit = 20;
            break;

    }

    const speeding = speed - limit;
    if (speeding <= 0) {
        return `Driving ${speed} km/h in a ${limit} zone`
    }

    let status = '';
    if(speeding <= 20){
        status = 'speeding';
    } else if (speeding > 20 && speeding <= 40){
        status = 'excessive speeding';
    } else {
        status = 'reckless driving';
    } 
    console.log(`The speed is ${speeding} km/h faster than the allowed speed of ${limit} - ${status}`);
    return `The speed is ${speeding} km/h faster than the allowed speed of ${limit} - ${status}`
}
roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate');
roadRadar(200, 'motorway');
