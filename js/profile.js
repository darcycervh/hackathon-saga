$(document).ready(function() {
  UID = '06afMdYxxPPg7DKm3t6o1gwPhxI2'; // Por cambiar a una variable

  firebase.database().ref('users/' + UID).on('value', function(snap) {
    
    $('#txt-edit-name').attr('value', snap.val()['name']);
    $('#img-user').attr('src', snap.val()['photo']);
  });


});