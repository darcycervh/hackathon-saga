$(document).ready(function () {

    var provider = new firebase.auth.GoogleAuthProvider();// es una var global


        firebase.auth().signInWithPopup(provider).then(function (result) {


            //  alert('hola');
            //para popear
        });

   


      $('#show').on('click', function () {
        firebase.database().ref('colecciones').on('value', function (snapshot) {
            var arr = Object.keys(snapshot.val());
            console.log(arr);
            console.log(snapshot.val());
            console.log(snapshot.val()[arr[0]]);
            var arr2 =Object.keys(snapshot.val()[arr[0]]);
            console.log(snapshot.val()[arr[0]]['coleccion1']);//jalando codigo usuarios0
           
            // for (i = 0; i < arr.length; i++) {
            //     console.log(snapshot.val()[i]['colecciones']);

            // };







        });
    });

});