const findNewApartment = require('./findApartment.js');
const assert = require('chai').assert;

describe('findNewApartment', function () {
    describe('isGoodLocation', function () {
        it('Not suitable location', function () {
            assert.equal(findNewApartment.isGoodLocation('Dimitrovgrad', true), 'This location is not suitable for you.');
            assert.equal(findNewApartment.isGoodLocation('Dimitrovgrad', false), 'This location is not suitable for you.');
        });
        it('Falsy boolean', function () {
            assert.equal(findNewApartment.isGoodLocation('Sofia', false), 'There is no public transport in area.');
        });
        it('You can go', function () {
            assert.equal(findNewApartment.isGoodLocation('Sofia', true), 'You can go on home tour!');
            assert.equal(findNewApartment.isGoodLocation('Plovdiv', true), 'You can go on home tour!');
            assert.equal(findNewApartment.isGoodLocation('Varna', true), 'You can go on home tour!');
        });
        it('Invalid city input', function () {
            assert.throw(() => findNewApartment.isGoodLocation(5, true), 'Invalid input!');
            assert.throw(() => findNewApartment.isGoodLocation(true, true), 'Invalid input!');
        });
        it('Invalid boolean input', function () {
            assert.throw(() => findNewApartment.isGoodLocation('Sofia', 'false'), 'Invalid input!');
            assert.throw(() => findNewApartment.isGoodLocation('Sofia', 5), 'Invalid input!');
        });
    });

    describe('isLargeEnough', function () {
        it('Store the area in resultARR', function () {
            assert.equal(findNewApartment.isLargeEnough([40, 50, 60], 50), '50, 60');
        });

        it('Return a empty array if there are no equal or larger apartments', function () {
            assert.deepEqual(findNewApartment.isLargeEnough([40, 50, 60], 70), '');
        });

        it('Throw an error if apartments is not an array or is empty array or not a number', function () {
            assert.throw(() => findNewApartment.isLargeEnough('string', 50), 'Invalid input!');
            assert.throw(() => findNewApartment.isLargeEnough([], 50), 'Invalid input!');
            assert.throw(() => findNewApartment.isLargeEnough([40, 50, 60], '50'), 'Invalid input!');
        });
    });

    describe('isItAffotdable', function () {
        it(`If you have enough money`, function () {
            assert.equal(findNewApartment.isItAffordable(50, 100), `You can afford this home!`);
            assert.equal(findNewApartment.isItAffordable(100, 100), `You can afford this home!`);
        });

        it(`If you don't have enough money`, function () {
            assert.equal(findNewApartment.isItAffordable(100, 50), `You don't have enough money for this house!`);
        });

        it(`Throw an error if price or budget is not a number or is less than 0`, function () {
            assert.throw(() => findNewApartment.isItAffordable('50', 100), 'Invalid input!');
            assert.throw(() => findNewApartment.isItAffordable(50, '100'), 'Invalid input!');
            assert.throw(() => findNewApartment.isItAffordable(-50, 100), 'Invalid input!');
            assert.throw(() => findNewApartment.isItAffordable(50, -100), 'Invalid input!');
        });
    });
});