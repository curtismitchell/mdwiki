(function($) {
    var filedateGimmick = {
        name: 'filedate',
        version: $.md.version,
        once: function() {
            $.md.linkGimmick(this, 'filedate', filedate);
        } 
    };
    $.md.registerGimmick(filedateGimmick);

	var alreadyDone = false;
    var filedate = function($links, opt, text) {
		return $links.each(function(i,link) {
            if (alreadyDone === true) {
                return;
            }
			var $link = $(link);
            var format = $link.attr('href');

            alreadyDone = true;
			if (window.location.search.startsWith('?')) {
				var href = window.location.search.substring(1);
				$link.remove ();
				
				$.ajax({
				type: "GET",
				async: true,
				timeout: 5000,
				url : href,
				dataType : "text",
				success: function(data, textStatus, request){
					var lastModified = request.getResponseHeader("Last-Modified");
					var language = window.navigator.userLanguage || window.navigator.language;
					var filedate_div = '<div id="filedate" class="md-external md-external-noheight md-external-nowidth text-right">' + 'Last modified : '+ moment(lastModified, format).locale(language).format("LLLL") +'</div>';
					$('#md-content').html(filedate_div + $('#md-content').html());
					}
				});
			}
		});
    };
}(jQuery));

