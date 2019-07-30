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
    var role = "";
    var startDate = "";
    var monthlyRate = "";

    $("#add-user").on("click", function(event) {
      event.preventDefault();

      name = $("#name-input").val().trim();
      role = $("#role-input").val().trim();
      startDate = $("#start-input").val().trim();
      monthlyRate = $("#monthly-input").val().trim();

      database.ref().push({
        name: name,
        role: role,
        startDate: startDate,
        monthlyRate: monthlyRate,
        dateAdded: firebase.database.ServerValue.
            TIMESTAMP
      });
    });

    database.ref().on("child_added", function(snapshot) {
        // storing the snapshot.val() in a variable for convenience
        var sv = snapshot.val();
  
        // Console.loging the last user's data
        console.log(sv.name);
        console.log(sv.role);
        console.log(sv.startDate);
        console.log(sv.monthlyRate);
  
        // Change the HTML to reflect
        $("#name-display").text(sv.name);
        $("#email-display").text(sv.role);
        $("#start-display").text(sv.startDate);
        $("#monthly-display").text(sv.monthlyRate);
  
        // Handle the errors
      }, function(errorObject) {
        console.log("Errors handled: " + errorObject.code);
      });
  