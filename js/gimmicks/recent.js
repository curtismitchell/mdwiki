(function($){
    'use strict';
    var recentGimmick = {
        name: 'recent',
        once: function() {
            $.md.linkGimmick(this, 'recent', gist);
        }
    };
    $.md.registerGimmick(recentGimmick);

    function gist($links, opt, href) {
        $().lazygist('init');
        return $links.each(function(i,link) {
            var $link = $(link);
            var ajaxReq = {
                url: 'recent.php',
                dataType: 'text',
                async: false
            };
            $.ajax(ajaxReq).done(function(data) {
                $link.replaceWith(data);
            });
        });
    }
}(jQuery));
