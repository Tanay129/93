var firebaseConfig = {
    apiKey: "AIzaSyBIeXgfvvyFYYVUWX-Xb_ZoQcfXR0XmxBs",
    authDomain: "kwitter-1ffa0.firebaseapp.com",
    databaseURL: "https://kwitter-1ffa0-default-rtdb.firebaseio.com",
    projectId: "kwitter-1ffa0",
    storageBucket: "kwitter-1ffa0.appspot.com",
    messagingSenderId: "1020635053754",
    appId: "1:1020635053754:web:84f822ffad852289138c83"
  };
  
  firebase.initializeApp(firebaseConfig);



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
   

  
    });});}
getData();