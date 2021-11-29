var firebaseConfig = {
    apiKey: "AIzaSyDhT4CWBXWIbc71OGATJYDoJLx2eI6oYrc",
    authDomain: "chatting-c2959.firebaseapp.com",
    databaseURL: "https://chatting-c2959-default-rtdb.firebaseio.com",
    projectId: "chatting-c2959",
    storageBucket: "chatting-c2959.appspot.com",
    messagingSenderId: "39406088982",
    appId: "1:39406088982:web:60d75349fa12a5f0971637"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            console.log("room_name"+ Room_names);
            row="<div class='room_name' id="+ Room_names + "onclick='redirectToRoomName(this.id)'>#"+ Room_names + "</div> <hr>";
            document.getElementById("output").innerHTML += row;
        });
    });
}
getData();

function addRoom(){
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose:"adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location="room.html"
}
function redirctToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location="page.html"
}

function Logout(){
    window.location="index.html"
}