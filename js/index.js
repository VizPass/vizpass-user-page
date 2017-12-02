$(document).ready(function() {
  var pictureTaken = false;
  $('#show_stream').hide();
});

function sleep(ms) {
  return new Promise(
    resolve => setTimeout(resolve, ms)
  );
}

async function firebaseSaveData() {
  var fName_preValue = document.getElementById("first_name");
  var lName_preValue = document.getElementById("last_name");
  var fName_value = fName_preValue.value;
  var lName_value = lName_preValue.value;

  var fName = fName_value.charAt(0).toUpperCase() + fName_value.slice(1);
  var lName = lName_value.charAt(0).toUpperCase() + lName_value.slice(1);

  var fullName = fName + " " + lName;
  var id = fName.concat(lName).toLowerCase();

  var firebaseRef = firebase.database().ref("tasks/3H9ibes1zagsg1EE1wUYMop7tWD3/" + id);
  //var usersRef = firebaseRef.child("tasks").child("3H9ibes1zagsg1EE1wUYMop7tWD3");
  //usersRef.push().set({
    firebaseRef.set ({
    first_name: fName,
    title: fullName
  });

  document.getElementById("upload_snapshot").click();
  await sleep(1200);
  document.location.href = "thanks/thankyou.html";
}
