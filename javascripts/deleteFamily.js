define(['jquery'], function($) {
  
	return {
		deleteFamily: function () {
			console.log("DELETED");
			var clicked = event.target;
			var key = $(clicked).prev().attr('id');
			var deleteFile = new Firebase("https://nss-seth-family.firebaseio.com/family/" + key);
			deleteFile.remove();
			}
		};
  });