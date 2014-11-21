[![Build Status](https://travis-ci.org/Dynalon/mdwiki.png?branch=master)](https://travis-ci.org/Dynalon/mdwiki)


MDwiki
======

100% static single file CMS/Wiki done purely with client-side Javascript and HTML5.

See http://www.mdwiki.info for more info and documentation.
------


TM Fork
-------

- Hash (!#) to Search (?) (e.g- http://tm.dataknow.net/r/?20041110 MDWiki.md)
- Added filedate gimmicks
- Update highlight.js (8.4)
- Fix Mathjax.js


Download
--------

See <https://github.com/Dynalon/mdwiki/releases> for readily precompiled releases.

How to build from source
------------------------

1. Install node.js >= 0.8 and npm (if not included)
2. Clone this repo
3. Install deps:

    npm install

4. Install components

    bower install

    (or if not installed globally)
    ./node_modules/.bin/bower install

5. Build MDwiki

    grunt release

    (or if not installed globally)
    ./node_modules/.bin/grunt release --force

    (highlight 8.4 js has some minor syntactic errors. Therefore please use --force option)

6. Find the `mdwiki.html` in the `release/` and `dist/` folder



[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/Dynalon/mdwiki/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

