function add_element_firebase(col_, index_, text_){
  var db = firebase.firestore();
  db.collection("db").doc(col_).update({
    value:{
      text: 'aaa',
      index: index_
    }
  });
}
function firebase_init(){
  var config = {
    apiKey: "AIzaSyC7elL3FYPlcVj7PvN9ecGpvVUVg6L1fKg",
    authDomain: "worklist-app.firebaseapp.com",
    databaseURL: "https://worklist-app.firebaseio.com",
    projectId: "worklist-app",
    storageBucket: "worklist-app.appspot.com",
    messagingSenderId: "740341135888"
  };
  firebase.initializeApp(config);

  firebase.firestore().settings({
    timestampsInSnapshots: true
  });
}
function getData_firebase(){
  firebase.firestore().collection("db").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        if(doc.data() > 0){
          console.log('as')
        }
        try {
          add_child(doc.id, doc.data().value.index, doc.data().value.text)
        }
        catch(e){
        }
    });
  });
}
