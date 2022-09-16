var firebaseConfig = {
    apiKey: "AIzaSyArZIthQ6_clc9th04PhUqdpUeMgssQtoY",
    authDomain: "practie-test.firebaseapp.com",
    databaseURL: "https://practie-test-default-rtdb.firebaseio.com",
    projectId: "practie-test",
    storageBucket: "practie-test.appspot.com",
    messagingSenderId: "48821441941",
    appId: "1:48821441941:web:82ca2acdb5f0a21659d29c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser() {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose: "adding user"
    });

    localStorage.setItem("user_name", user_name);

    window.location = "index.html";

}