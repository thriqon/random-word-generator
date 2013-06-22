/*!
 * random-word-generator  -- 0.9.0 -- 2013
 * http://github.com/thriqon/random-word-generator
 *
 * Copyright (C) 2013 "thriqon" Jonas Weber
 * Licensed under MIT
 * see file `LICENSE` for details
 */

var expect = require('chai').expect;

describe('characteristics', function () {
	var Generator = {};

	before(function () {
		Generator = require('../index.js');
	});

	describe('generation function', function () {
		it('should return a value', function () {
			expect(Generator.generate()).to.be.a('string');
			expect(new Generator().generate()).to.be.a('string');
		});

		it('should call a given callback giving the value (default)', function (done) {
			Generator.generate(function (err, result) {
				expect(err).to.be.null;
				expect(result).to.be.a('string');
				done();
			});
		});
		it('should call a given callback giving the value (instance)', function (done) {
			new Generator().generate(function (err, result) {
				expect(err).to.be.null;
				expect(result).to.be.a('string');
				done();
			});
		});
	});

});
