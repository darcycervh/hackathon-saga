$(document).ready(function() {
  // alert('hola');
  var provider = new firebase.auth.GoogleAuthProvider();
  // provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
  // firebase.auth().signInWithPopup(provider).then(function(result) {
  /* var token = result.credential.accessToken;
        var user = result.user;*/
  // });
  $('#btn-hola').on('click', function() {
    // alert('hola');
    firebase.auth().signInWithPopup(provider).then(function(result) {
      /* var token = result.credential.accessToken;
            var user = result.user;*/
      /* console.log(result);
            console.log(result.user.email);
            console.log(result.user.displayName);
            console.log(result.user.photoURL);
            console.log(result.user.uid);
            console.log(result.additionalUserInfo.profile.gender);*/
      saveData(result.user);
    });
  });
  function saveData(user) {
    var userToSave = {
      uid: user.uid,
      name: user.displayName,
      email: user.email,
      photo: user.photoURL,
      preference: ['ninguno']
    };
    console.log(userToSave);
    firebase.database().ref('users/' + user.uid).set(userToSave);
  };
  // --------------- estrenos ---------------
  
  firebase.database().ref('estrenos').on('value', function(snapshot) {
    console.log(snapshot.val()[0].Title);
    var keysEstrenos = Object.keys(snapshot.val());
    var estrenosLength = keysEstrenos.length;
    var randomNumber = Math.floor(Math.random() * (20 - 0 + 1) + 0);
    var posterEstreno = snapshot.val()[randomNumber]['Poster'];
    $('#estrenos').append('<div data-toggle="modal" data-target="#myModal"> <img class="img-autoplay img-first" src="' + posterEstreno + '" alt=""> </div>');
    var random = Math.floor(Math.random() * (20 - 0 + 1) + 0);
    var posterEstreno = snapshot.val()[randomNumber]['Poster'];
    $('#estrenos').append('<div data-toggle="modal" data-target="#myModal"> <img class="img-autoplay" src="' + posterEstreno + '" alt=""> </div>');
    var random = Math.floor(Math.random() * (20 - 0 + 1) + 0);
    var posterEstreno = snapshot.val()[randomNumber]['Poster'];
    $('#estrenos').append('<div data-toggle="modal" data-target="#myModal"> <img class="img-autoplay" src="' + posterEstreno + '" alt=""> </div>');
  });
  // ----------- imagenes oscars -----------
  
  firebase.database().ref('oscar').on('value', function(snapshot) {
    console.log(snapshot.val()[0].Title);
    var keysOscars = Object.keys(snapshot.val());
    var oscarsLength = keysOscars.length;
    var random = Math.floor(Math.random() * (20 - 0 + 1) + 0);
    var posterOscar = snapshot.val()[random]['Poster'];
    $('#autoplay').append('<div data-toggle="modal" data-target="#myModal"> <img class="img-autoplay img-oscar-first" src="' + posterOscar + '" alt=""> </div>');
    var random = Math.floor(Math.random() * (20 - 0 + 1) + 0);
    var posterOscar = snapshot.val()[random]['Poster'];
    $('#autoplay').append('<div data-toggle="modal" data-target="#myModal"> <img class="img-autoplay" src="' + posterOscar + '" alt=""> </div>');
    var random = Math.floor(Math.random() * (20 - 0 + 1) + 0);
    var posterOscar = snapshot.val()[random]['Poster'];
    $('#autoplay').append('<div data-toggle="modal" data-target="#myModal"> <img class="img-autoplay" src="' + posterOscar + '" alt=""> </div>');
  });
   
  // --------- imagenes las mas premiadas ----------
  $('#btn-oscars').on('click', function() {
    firebase.database().ref('oscar').on('value', function(snapshot) {
      console.log(snapshot.val()[0].Title);
      var keysOscars = Object.keys(snapshot.val());
      var oscarsLength = keysOscars.length;
      for (var i = 0; i < oscarsLength; i++) {
        var posterOscar = snapshot.val()[i]['Poster'];
        // console.log(snapshot.val()[i]['Title']);
        // $('.peliculas').append('<img src="' + poster + '">');
        var $imgMoviesOscars = '<img  class="img-movies" src="' + posterOscar + '">';
        $('.peliculas').append('<div class="div-movies">' + $imgMoviesOscars + '</div>');
      }
    });
  });
  // --------------- imagenes para mis colecciones-------------
  $('#btn-oscars').on('click', function() {
    firebase.database().ref('oscar').on('value', function(snapshot) {
      console.log(snapshot.val()[0].Title);
      var keysOscars = Object.keys(snapshot.val());
      var oscarsLength = keysOscars.length;
      for (var i = 0; i < oscarsLength; i++) {
        var posterOscar = snapshot.val()[i]['Poster'];
        // console.log(snapshot.val()[i]['Title']);
        // $('.peliculas').append('<img src="' + poster + '">');
        var $imgMoviesOscars = '<img  class="img-movies" src="' + posterOscar + '">';
        $('.peliculas').append('<div class="div-movies">' + $imgMoviesOscars + '</div>');
      }
    });
  });
  /* $('#btn-user').on('click', function() {
        firebase.database().ref('users.uid').on('value',function(snapshot){
            console.log('snapshot');
        });
    });*/
  // -------------------------------------------------------------
  $('.autoplay').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
});