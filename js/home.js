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
    var keysOscars = Object.keys(snapshot.val());
    var oscarsLength = keysOscars.length;
  

    for (i = 0;i < 3;i++) {
      var random = Math.floor(Math.random() * (20 - 0 + 1) + 0);
      var posterOscar = snapshot.val()[random]['Poster'];
      $('#estrenos').append('<div data-toggle="modal" data-target="#myModal1"> <img class="img-autoplay" src="' + posterOscar + '" alt=""> </div>');
    }
      
    $('.img-autoplay').on('click', function() {
      console.log();
      $('#modal-data').empty();
      $('#modal-data').append('<img class="img-autoplay" src="' + $(this).attr('src') + '" alt="">');
      $('#modal').modal('show');
    });
  });    


  // ----------- imagenes oscars -----------
  
  firebase.database().ref('oscar').on('value', function(snapshot) {
    console.log(snapshot.val()[0].Title);
    var keys = Object.keys(snapshot.val());
    var oscar = keys.length;
  

    for (i = 0;i < 3;i++) {
      var random = Math.floor(Math.random() * (20 - 0 + 1) + 0);
      var poster = snapshot.val()[random]['Poster'];
      $('#autoplay').append('<div data-toggle="modal" data-target="#myModal2"> <img class="img-autoplay" src="' + poster + '" alt=""> </div>');
    }
      
    $('.img-autoplay').on('click', function() {
      console.log();
      $('#modal-data').empty();
      $('#modal-data').append('<img class="img-autoplay" src="' + $(this).attr('src') + '" alt="">');
      $('#modal').modal('show').css({
        position: 'absolute',
        width: '25vh',
        height: '20vh',
        display: 'flex',
        justifyContent: 'center',
        margin: 'auto',
        overflow: 'hidden'
      });
    });
  });    
   
  // --------- imagenes las mas premiadas ----------
  firebase.database().ref('estrenos').on('value', function(snapshot) {
    console.log(snapshot.val()[0].Title);
    var keysOscars = Object.keys(snapshot.val());
    var oscarsLength = keysOscars.length;
    var random = Math.floor(Math.random() * (20 - 0 + 1) + 0);
    var posterOscar = snapshot.val()[random]['Poster'];
    $('#recomendadas').append('<div data-toggle="modal" data-target="#myModal"> <img class="img-autoplay" src="' + posterOscar + '" alt=""> </div>');
    var random = Math.floor(Math.random() * (20 - 0 + 1) + 0);
    var posterOscar = snapshot.val()[random]['Poster'];
    $('#recomendadas').append('<div data-toggle="modal" data-target="#myModal"> <img class="img-autoplay" src="' + posterOscar + '" alt=""> </div>');
    var random = Math.floor(Math.random() * (20 - 0 + 1) + 0);
    var posterOscar = snapshot.val()[random]['Poster'];
    $('#recomendadas').append('<div data-toggle="modal" data-target="#myModal"> <img class="img-autoplay" src="' + posterOscar + '" alt=""> </div>');
      
    // console.log(snapshot.val()[i]['Title']);
    // $('.peliculas').append('<img src="' + poster + '">');
    // '<img  class="img-autoplay" src="' + posterOscar + '">';
      
    // .append('<img class="img-autoplay" src="' + posterOscar + '" alt="">');
  });  
  // --------------- imagenes para mis colecciones-------------

  firebase.database().ref('estrenos').on('value', function(snapshot) {
    console.log(snapshot.val()[0].Title);
    var keysOscars = Object.keys(snapshot.val());
    var oscarsLength = keysOscars.length;
    var random = Math.floor(Math.random() * (20 - 0 + 1) + 0);
    var posterOscar = snapshot.val()[random]['Poster'];
    $('#colecciones').append('<div data-toggle="modal" data-target="#myModal"> <img class="img-autoplay" src="' + posterOscar + '" alt=""> </div>');
    var random = Math.floor(Math.random() * (20 - 0 + 1) + 0);
    var posterOscar = snapshot.val()[random]['Poster'];
    $('#colecciones').append('<div data-toggle="modal" data-target="#myModal"> <img class="img-autoplay" src="' + posterOscar + '" alt=""> </div>');
    var random = Math.floor(Math.random() * (20 - 0 + 1) + 0);
    var posterOscar = snapshot.val()[random]['Poster'];
    $('#colecciones').append('<div data-toggle="modal" data-target="#myModal"> <img class="img-autoplay" src="' + posterOscar + '" alt=""> </div>');
      
    // console.log(snapshot.val()[i]['Title']);
    // $('.peliculas').append('<img src="' + poster + '">');
    // '<img  class="img-autoplay" src="' + posterOscar + '">';
      
    // .append('<img class="img-autoplay" src="' + posterOscar + '" alt="">');
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