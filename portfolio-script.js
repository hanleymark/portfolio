function showHideCardText(textID, textIntroID, buttonID) {
    var text = document.querySelector(textID);
    var textIntro = document.querySelector(textIntroID);
    var button = document.querySelector(buttonID);

    if (text.style.display === "none") {
      text.style.display = "block";
      button.innerHTML="Show less";
    } else {
      text.style.display = "none";
      button.innerHTML="Show more";
    }
    // Make sure first words of card text are displayed
    textIntro.style.display = "block";
  }

  function collapseAllCardText() {
    var allCardTexts = document.querySelectorAll(".card-text");

    allCardTexts.forEach(element => {
        element.style.display = "none";
    });
  }

  collapseAllCardText();