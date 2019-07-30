var config = {
    apiKey: "AIzaSyACyjZR80fGfMU6E8m9wp-2GZoTm37xkc4",
    authDomain: "activity-9bee5.firebaseapp.com",
    databaseURL: "https://activity-9bee5.firebaseio.com",
    projectId: "activity-9bee5",
    storageBucket: "",
    messagingSenderId: "107365426255",
    appId: "1:107365426255:web:ea28b339d9c4eb40"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

    var name = "";
    var email = "";
    var age = 0;
    var comment = "";

    $("#add-user").on("click", function(event) {
      event.preventDefault();

      name = $("#name-input").val().trim();
      email = $("#email-input").val().trim();
      age = $("#age-input").val().trim();
      comment = $("#comment-input").val().trim();

      database.ref().push({
        name: name,
        email: email,
        age: age,
        comment: comment,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
      });
    });