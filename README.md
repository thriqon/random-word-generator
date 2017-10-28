Random Word Generator
=====================

[![Build Status](https://travis-ci.org/thriqon/random-word-generator.png)](https://travis-ci.org/thriqon/random-word-generator)

Installation
------------

    npm install random-word-generator

That's it...

Usage
-----

    > var Rwg = require('random-word-generator');
    > var generator = new Rwg();

    > generator.generate(); // yields something like Takalonazu

    > for (var i = 0; i < 10; i++) { console.log(generator.generate()); }
    Megebetipu
    Yirovijajo
    Jorehaheku
    Rogevehojo
    Sewurovipe
    Monawoweno
    Lahuvilufe
    Ramufovuha
    Xunobawiqa
    Covuyosayu

Each call to `generate()` generates a random solution for the pattern. By default,
this leads to a somehow pronounceable word. It is only by accident that this word
may be found in a dictionary.

Documentation
-------------

see http://thriqon.github.com/random-word-generator/apidocs

License
-------

see LICENSE for details
