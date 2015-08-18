define(['jquery'], function($) {
  
	return {
		addFamily: function () {
			console.log("added Family");
			var nameValue = $("#nameInput").val();
			var ageValue = $("#ageInput").val();
			var genderValue = $("#genderInput").val();
			var skillsValue = $("#skillsInput").val();
			var skillsArray = [];
			skillsArray.push(skillsValue.split(", "));
			var newFamilyOBJ = {
				"name": nameValue,
				"age": ageValue,
				"gender": genderValue,
				"skills": skillsArray	
			};

			console.log(newFamilyOBJ);

			return newFamilyOBJ;

			}
		};
  });