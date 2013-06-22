/*!
 * random-word-generator  -- 0.9.0 -- 2013
 * http://github.com/thriqon/random-word-generator
 *
 * Copyright (C) 2013 "thriqon" Jonas Weber
 * Licensed under MIT
 * see file `LICENSE` for details
 */

var expect = require('chai').expect;

describe('data', function() {
	var Generator = {};

	before(function() {
		Generator = require('../index.js');
	});
	describe('consonants', function() {
	
		it('should have a default of 21 characters', function() {
			expect(new Generator().group('c')).to.have.length(21);
		});
		it('should allow the switching of consonants to other set', function() {
			var generator = new Generator();
			var old_cons = generator.group('c');
	
			var new_cons = ['a', 'b'];
			expect(generator.group('c', new_cons)).to.be.eql(old_cons);

	
			expect(generator.group('c')).to.be.eql(new_cons);
			expect(generator.group('c')).to.be.eql(new_cons);
		});
		it('should still have the default after a switch', function() {
			var gen1 = new Generator();
			gen1.group('c', ['a', 'b']);
	
			var gen2 = new Generator();
			expect(gen2.group('c')).to.not.be.eql(['a', 'b']);
		});
	});
	
	describe('vowels', function() {
		it('should have a default of 5 characters', function() {
			expect(new Generator().group('v')).to.have.length(5);
		});
	
		it('should allow the switching of vowels to other set', function() {
			var generator = new Generator();
			var old_vowels = generator.group('v');
	
			var new_vows = ['a', 'b'];
			expect(generator.group('v', new_vows)).to.be.eql(old_vowels);
	
			expect(generator.group('v')).to.be.eql(new_vows);
			expect(generator.group('v')).to.be.eql(new_vows);
		});
	
		it('should still have the default after a switch', function() {
			var gen1 = new Generator();
			gen1.group('v', ['a', 'b']);
	
			var gen2 = new Generator();
			expect(gen2.group('v')).to.not.be.eql(['a', 'b']);
		});
	});

	describe('pattern', function() {
		it('should have a default pattern', function () {
			expect(new Generator().pattern()).to.not.have.length(0);
		});

		it('should allow the switching of the pattern', function () {
			var G = new Generator();
			var oldp = G.pattern();

			expect(G.pattern('asd')).to.be.equal(oldp);

			expect(G.pattern()).to.be.equal('asd');
		});

		it('should still have default after a switch', function () {
			var G1 = new Generator();
			G1.pattern('asd');

			var G2 = new Generator();
			expect(G2.pattern()).to.be.not.equal('asd');
			
		});
	});
});
