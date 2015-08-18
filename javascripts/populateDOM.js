define(['jquery'], function($) {
  
	return {
		makeTemplate: function (object) {
			require(['hbs!../templates/handlebars'], function(panelTemplate) {
				var $domMain = $("#maincontent");
				$domMain.html(panelTemplate({family: object}));
			});
		}
	};


  });