MDwiki
======

100% static single file CMS/Wiki done purely with client-side Javascript and HTML5.

See http://www.mdwiki.info for more info and documentation.
------


TM Fork
-------

Taemin Lee Fork based on MDWiki 0.6, because of current master branch doesn't render md page correctly.

Changes

- Hash (!#) to Search (?) (e.g- http://tm.dataknow.net/r/?index.md)
    - In result, external embedding services (e.g. disqus, solidOpinion, etc) are works well in each page separately
- Added filedate gimmicks
- Added solidopinion gimmicks
    - more reliable service in this time
- Update highlight.js (8.4)
    - does not hanging on highlighting code block
    - 100+ languages support
- Mathjax.js fixed
    - $$$ : inline, $$ : block
    - marked.js support mathjax to render mathjax correctly
- document has <h1> text (e.g- MDWiki - index)
- and more minor fixes


Download
--------

[Download : save as new file](http://tm.dataknow.net/index.html)

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