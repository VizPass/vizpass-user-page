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

   document.getElementById("upload_snapshot").click();
  // await sleep(1200);
  // document.location.href = "shopping/shopping.html";
}

function whichButton(state) {
  if (state == "snap") {
    $('#take_snapshots').hide();
    $('.webcamBtn').hide();
    $('#show_stream').show();
    $('.repeatBtn').show();
  } else if (state == "stream") {
    $('#take_snapshots').show();
    $('.webcamBtn').show();
    $('#show_stream').hide();
    $('.repeatBtn').hide();
  }
}
