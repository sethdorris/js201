requirejs.config({
  baseUrl: './javascripts',
  paths: {
    'jquery': '../bower_components/jquery/dist/jquery.min',
    'hbs': '../bower_components/require-handlebars-plugin/hbs',
    'bootstrap': '../bower_components/bootstrap/dist/js/bootstrap.min',
    'firebase': '../bower_components/firebase/firebase',
  },
  shim: {
    'bootstrap': ['jquery'],
    'firebase': {
      exports: 'Firebase'
    }
  }
});


requirejs(
  ["jquery", "firebase", "hbs", "bootstrap", "populateDOM", "addFamily", "deleteFamily"],
  function($, _firebase, Handlebars, bootstrap, pop, add, deleteFamily) {

    var $domMain = $("#maincontent");
    var myFirebase = new Firebase("https://nss-seth-family.firebaseio.com/");
    
    myFirebase.child("family").on("value", function(snapshot) {
      var database = snapshot.val();

    console.log(database);  

    pop.makeTemplate(database);

      $("#addFamily").click(function(){
        var myFirebaseFamily = new Firebase("https://nss-seth-family.firebaseio.com/family");
        myFirebaseFamily.push(add.addFamily());
      });

      $(document).on('click', '#delete', function() {
        deleteFamily.deleteFamily();
      });

    });
  });