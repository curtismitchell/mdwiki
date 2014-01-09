(function($) {
    var highlightGimmick = {
        name: 'highlight',
        load: function() {
            $.md.stage('gimmick').subscribe(function(done) {
                highlight();
                done();
            });
        }
    };
    $.md.registerGimmick(highlightGimmick);


    function highlight () {
        // marked adds lang-ruby, lang-csharp etc to the <code> block like in GFM
        var $codeblocks = $('pre code[class^=language-]');
        return $codeblocks.each(function(i, e) {
            console.log(e);
            Prism.highlightElement(e);
            console.log(e);
        });
    }

}(jQuery));
