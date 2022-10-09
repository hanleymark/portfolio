function showHideCardText(textID, textIntroID) {
    var text = document.getElementById(textID);
    var textIntro = document.getElementById(textIntroID);

    if (text.style.display === "none") {
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
    // Make sure first words of card text are displayed
    textIntro.style.display = "block";
  }