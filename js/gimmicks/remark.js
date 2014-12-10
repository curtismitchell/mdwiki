/**
 * Created by tm on 2014-12-09.
 * As MDWiki display clean document, this gimmicks aims removing ReMark grammar in a MD file
 * note : ReMark is presentation tool using MD file
 */

(function($) {
    'use strict';
    var remarkGimmick = {
        name: 'remark',
        version: $.md.version,
        once: function() {
            $.md.linkGimmick(this, 'remark', remark);
        }
    };
    $.md.registerGimmick(remarkGimmick);

    function remark($links, opt, ref) {
        $links.remove();

        $(".md-text:contains(':')").filter(function() {
            var text = $(this).text().split(":")[0].trim();
            switch(text) {
                case "name" : return true;
                case "layout" : return true;
                case "class" : return true;
                default : return false;
            }
        }).remove();

        $(".md-text:contains('--')").filter(function() {
            if($(this).text() == "--") return true;
        }).remove();

        $("hr").filter(function() {
            if($(this).next("h2").length == 0) return true;
        }).remove();
    }
}(jQuery));
