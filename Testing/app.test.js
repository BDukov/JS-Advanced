const { expect, assert } = require('chai');

const sum = require('./app.js');

describe('Main test', function (){
    it('works with whole numbers', function (){
        expect(sum(3, 5 )).to.equal(8);
    });
    it('works with floating-point numbers', function (){
        //assert.equal(sum(0.1, 0.2)).to.equal(0.3);
        expect(sum(0.1, 0.2)).to.closeTo(0.3, 0.0000005);
    }); 
    // it('demo test', () =>{
    //     const a = [1,2,3];
    //     const b = [1,2,3];
    //     console.log(a == b);
    //     expect(a).to.deep.equal(b);
    // });
});