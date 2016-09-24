const chai = require('chai');
const expect = chai.expect;
const bubbleFunc = require('../index.js');

describe('bubblesort',() => {

  it('should be a function', () => {
    expect(bubbleFunc).to.be.a('function');
  });

  it('should bubble sort a number', () =>{
    expect(bubbleFunc([5,1,4])).to.deep.equal([1,4,5]);
    expect(bubbleFunc([5,1,4,2,8])).to.deep.equal([1,2,4,5,8]);
    expect(bubbleFunc([5,1,4,2,6,9,8])).to.deep.equal([1,2,4,5,6,8,9]);
    expect(bubbleFunc([6,7,9,3,5,8,1,2,4,0])).to.deep.equal([0,1,2,3,4,5,6,7,8,9]);
    expect(bubbleFunc([6,7,9,3,5,8,1,2,4,0,-1,-4,-9])).to.deep.equal([-9,-4,-1,0,1,2,3,4,5,6,7,8,9]);
  });

});