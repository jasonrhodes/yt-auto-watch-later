window.addEventListener("load", function () {
  waitForElement("#top-level-buttons", 250, function (videoButtons) {
    console.log("Found video buttons", videoButtons);
    var saveButton = videoButtons.querySelectorAll("a.yt-simple-endpoint")[3];
    console.log("save button?", saveButton);

    saveButton.addEventListener("click", function () {
      waitForElement(
        "ytd-add-to-playlist-renderer #playlists",
        250,
        function (playlists) {
          console.log("found playlists", playlists);
          var lists = playlists.querySelectorAll(
            "ytd-playlist-add-to-option-renderer"
          );
          lists[0].querySelectorAll("#checkbox")[0].click();
          document.querySelector("yt-icon-button#close-button").click();
        }
      );
    });
  });
});

function waitForElement(selector, checkInterval, cb) {
  var playlists = document.querySelector(selector);
  if (playlists) {
    cb(playlists);
  } else {
    setTimeout(function () {
      waitForElement(selector, checkInterval, cb);
    }, checkInterval);
  }
}
