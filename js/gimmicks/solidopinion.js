(function($) {
    var solidopinionGimmick = {
        name: 'solidopinion',
        version: $.md.version,
        once: function() {
            $.md.linkGimmick(this, 'solidopinion', solidopinion);
        }
    };
    $.md.registerGimmick(solidopinionGimmick);

    var alreadyDone = false;
    var solidopinion = function($links, opt, text) {
        var default_options = {
            identifier: ''
        };
        var options = $.extend (default_options, opt);
        return $links.each(function(i,link) {
            if (alreadyDone === true) {
                return;
            }

            alreadyDone = true;

            var $link = $(link);
            var data_sitename = $link.attr('href');

            $link.remove ();

            var solidopinion_div = $('<div class="so_comments" data-sitename="'+data_sitename+'"></div> ');

            if (data_sitename !== undefined && data_sitename.length > 0) {

                $('#md-content').append(solidopinion_div);
                var dsq = document.createElement('script');
                dsq.type = 'text/javascript';
                dsq.async = true;
                dsq.src = 'https://api.solidopinion.com/widget/embed.js';
                (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
            }
        });
    };
}(jQuery));
