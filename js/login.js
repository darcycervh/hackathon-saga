$(document).ready(function () {

    //  var provider = new firebase.auth.GoogleAuthProvider;
    var provider = new firebase.auth.GoogleAuthProvider();// es una var global

    $('#login').on('click', function () {
        firebase.auth().signInWithPopup(provider).then(function (result) {
            saveData(result.user);
            window.localStorage.setItem('storageUID', result.user.uid);
            // Guardando el UID en el localstorage
            var UID = window.localStorage.getItem('storageUID');
            console.log(UID);
            
        });

        
        function saveData(user) {
            console.log(user);
            var userToSave = {
              uid: user.uid,
              name: user.displayName,
              email: user.email,
              photo: user.photoURL
            };
            firebase.database().ref('user/' + user.uid).set(userToSave); // push añade un registro 
        };
      });

    });

    