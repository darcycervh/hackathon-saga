
$(document).ready(function(){
  
//  var provider = new firebase.auth.GoogleAuthProvider;
 var provider = new firebase.auth.GoogleAuthProvider();// es una var global

     $('#boton').on('click', function(){
         firebase.auth().signInWithPopup(provider).then(function(result) {  
             
          saveData(result.user);
        
        //  alert('hola');
         //para popear
         });

        });
        function saveData(user){
            var userToSave = {
                uid: user.uid,
                name: user.displayName ,
                email: user.email ,
                photo:user.photoURL ,
                preferences:['ninguna']
            }
            console.log(userToSave);
        //guardar, meter mano al obj
        firebase.database().ref('users/' + user.uid).set(userToSave);//le estoy referenciando a la base de datos, meterme a la base de datos
        
        };

        //recorrer el obj

             $('#estrenos').on('click', function(){
                firebase.database().ref('estrenos').on('value', function(snapshot){


                var arr = Object.keys(snapshot.val());
                // console.log(snapshot.val()[0]['Year']);
               for (i = 0; i < arr.length; i++) {  
                console.log(snapshot.val()[i]['Year']);    
                
               };
            });

            // for (i = 0; i < (snapshot.val()).length; i++) {
            //     (snapshot.val()[i]['title']);


            //las imagenes
            $('#imagenes').click(function(){
                firebase.database().ref('estrenos').on('value', function(snapshot){
                    var arr = Object.keys(snapshot.val());
                    // console.log(snapshot.val()[0]['Year']);
                   for (i = 0; i < arr.length; i++) {  
                    console.log(snapshot.val()[i]['Poster']);  
                };
            });

