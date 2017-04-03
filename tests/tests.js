'use strict';

const expect = require('chai').expect;
const pad = require('../');

describe('pad.left', function () {

  it('Should perform a basic pad', function () {
    const string = 'a';
    const length = 3;
    const char = 'x';
    const padded = pad.left(string, length, char);
    expect(padded).to.equal('xxa');
  });

  it('Should skip padding', function () {
    const string = 'aaa';
    const length = 3;
    const char = 'x';
    const padded = pad.left(string, length, char);
    expect(padded).to.equal('aaa');
  });

  it('Should pad with a number', function () {
    const string = '1';
    const length = 3;
    const char = 0;
    const padded = pad.left(string, length, char);
    expect(padded).to.equal('001');
  });

  it('Should pad a number', function () {
    const string = 1;
    const length = 3;
    const char = 0;
    const padded = pad.left(string, length, char);
    expect(padded).to.equal('001');
  });

});

describe('pad.right', function () {

  it('Should perform a basic pad', function () {
    const string = 'a';
    const length = 3;
    const char = 'x';
    const padded = pad.right(string, length, char);
    expect(padded).to.equal('axx');
  });

  it('Should skip padding', function () {
    const string = 'aaa';
    const length = 3;
    const char = 'x';
    const padded = pad.right(string, length, char);
    expect(padded).to.equal('aaa');
  });

  it('Should pad with a number', function () {
    const string = '1';
    const length = 3;
    const char = 0;
    const padded = pad.right(string, length, char);
    expect(padded).to.equal('100');
  });

  it('Should pad a number', function () {
    const string = 1;
    const length = 3;
    const char = 0;
    const padded = pad.right(string, length, char);
    expect(padded).to.equal('100');
  });

});
