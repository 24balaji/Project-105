var firebaseConfig = {
  apiKey: "AIzaSyDXZrSrzDRQXktJ6jdY08cT_6QRYbJUNCk",
  authDomain: "chat-web-app-4b8b5.firebaseapp.com",
  databaseURL: "https://chat-web-app-4b8b5-default-rtdb.firebaseio.com",
  projectId: "chat-web-app-4b8b5",
  storageBucket: "chat-web-app-4b8b5.appspot.com",
  messagingSenderId: "165937181899",
  appId: "1:165937181899:web:6c90cc34cfeaa7f634174e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// ADD YOUR FIREBASE LINKS

function addUser() {

    user_name = document.getElementById("user_name").value;
  
    localStorage.setItem("user_name", user_name);
    
      window.location = "kwitter_room.html";
  }