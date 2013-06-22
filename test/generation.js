/*!
 * random-word-generator  -- 0.9.0 -- 2013
 * http://github.com/thriqon/random-word-generator
 *
 * Copyright (C) 2013 "thriqon" Jonas Weber
 * Licensed under MIT
 * see file `LICENSE` for details
 */

var expect = require('chai').expect;

describe('generator', function() {
	var Generator = {};

	before(function() {
		Generator = require('../index.js');
	});

	it('should generate strings (default instance)', function() {
		expect(Generator.generate()).to.be.a('string');
	});

	it('should generate strings (new instance)', function() {
		expect(new Generator().generate()).to.be.a('string');
	});

	describe('defaults', function() {
		var alphabet = "abcdefghijklmnopqrstuvwxyz";
		var vowels = "aeiou";

		it('should have a capital first letter', function() {
			var generated = Generator.generate();
			expect(generated[0]).to.be.equal(generated[0].toUpperCase());
		});
		it('should switch between consonant and vowel', function() {
			var next_is_consonant = true;
			var generated = Generator.generate().toLowerCase();
			for (var i = 0; i < generated.length; i++)
			{
				expect(alphabet.indexOf(generated[0])).to.not.be.equal(-1);
				expect(vowels.indexOf(generated[0])).to.satisfy(function (pos) { return (pos == -1) || next_is_consonant; });

				next_is_consonant = !next_is_consonant;
			}
		});

		it('should generate 20 different names (default)', function() {
			var generated_names = [];
	
			for (var i = 0; i < 20; i++)
			{
				var g = Generator.generate();
	
				expect(generated_names.indexOf(g)).to.be.equal(-1);
	
				generated_names.push(g);
			}
			expect(generated_names.length).to.be.equal(20);
		});
		it('should generate 20 different names (instance)', function() {
			var generated_names = [];
	
			for (var i = 0; i < 20; i++)
			{
				var g = new Generator().generate();
	
				expect(generated_names.indexOf(g)).to.be.equal(-1);
	
				generated_names.push(g);
			}
			expect(generated_names.length).to.be.equal(20);
		});
	});

	describe('harnessed', function() {
		it('should generate very simple words', function () {
			var G = new Generator();

			G.pattern('aaa'); G.group('a', ['x']);

			expect(G.generate()).to.be.equal('xxx');
		});
		it('should generate capitalized words', function () {
			var G = new Generator();
			G.pattern('aAa'); G.group('a', ['x']);

			expect(G.generate()).to.be.equal('xXx');
		});
		it('should generate more complex words', function () {
			var G = new Generator();
			G.pattern('asdASD');
			G.group('a', ['a']);
			G.group('s', ['s']);
			G.group('d', ['d']);

			expect(G.generate()).to.be.equal('asdASD');
		});
	});
});
