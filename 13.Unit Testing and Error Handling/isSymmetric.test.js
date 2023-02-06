
const { expect } = require('chai');
const isSymmetric = require('./isSymmetric');

describe ('Symmetry checker', function () {
    it ('return true for symmetrics array', () =>{
        const arr = [1,2,2,1];
        expect(isSymmetric(arr)).to.be.true;
    });

    it ('return false for non-symmetrics array', () =>{
        const arr = [1,2,3];
        expect(isSymmetric(arr)).to.be.false;
    });

    it ('return false with non-array argument', () =>{
        const data = 121;
        expect(isSymmetric(data)).to.be.false;
    });

    it ('return true when lenght is odd', () =>{
        const arr = [1,2,1];
        expect(isSymmetric(arr)).to.be.true;
    });
    
    it ('return false for array-like arguments', () =>{
        const data = '1221';
        expect(isSymmetric(data)).to.be.false;
    });
});