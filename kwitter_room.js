// C95

var firebaseConfig = {
  apiKey: "AIzaSyCbFamv6yK8qAFK7sov8oC3nkgGbY8C198",
  authDomain: "kwitterwebapp-16250.firebaseapp.com",
  projectId: "kwitterwebapp-16250",
  storageBucket: "kwitterwebapp-16250.appspot.com",
  messagingSenderId: "370540126686",
  appId: "1:370540126686:web:9cfbf471c42d36ee273d4f",
  measurementId: "G-FZLVFEEXX6",
  databaseURL: "https://kwitterwebapp-16250-default-rtdb.firebaseio.com/",
       
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name"
  });

  localStorage.setItem("room_name", room_name);

  window.location = "kwitter_page.html";
}

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

// C96

function logout() 
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "kwitter.html";
}