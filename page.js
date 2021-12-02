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

user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
function Send(){
    Message = document.getElementById("Message").value;
    firebase.database().ref(room_name.push)({
        name:user_name,
        message:Message,
        like:0
    });
    document.getElementById("Message").value="";
}

function Logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
}