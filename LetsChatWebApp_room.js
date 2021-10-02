var firebaseConfig = {
  apiKey: "AIzaSyD5GxIxN4yc71Cgtf6BlVNoUA1Oeyi4tr8",
  authDomain: "letschatwebapp-f9ca1.firebaseapp.com",
  projectId: "letschatwebapp-f9ca1",
  storageBucket: "letschatwebapp-f9ca1.appspot.com",
  messagingSenderId: "675553109100",
  appId: "1:675553109100:web:48d14527146e9c49be6449"
};

firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

    function addRoom()
    {
          room_name = document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                porpuse : "adding room name"
          });
          localStorage.setItem("room_name", room_name);
          window.location = "LetsChatWebApp_room.html";
    }

    function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
console.log("room name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
});});}
getData();

function redirectToRoomName(name)
     {
           console.log(name);
           localStorage.setItem("room_name", name);
           window.location = "kwitter_page.html";
     }