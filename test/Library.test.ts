import * as chai from 'chai';
import Library from '../src/Library';

const expect = chai.expect;

describe('Library', () => {
  it('should run perfectly', () => {
    expect(new Library().world()).to.eql({ text: 'world' });
  });
});
