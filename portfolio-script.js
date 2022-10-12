function showHideCardText(textID, buttonID) {
    const text = document.querySelector(textID);
    const button = document.querySelector(buttonID);

    if (text.style.display === "none") {
      text.style.display = "block";
      button.innerHTML="Show less";
    } else {
      text.style.display = "none";
      button.innerHTML="Show more";
    }
  }

  function collapseAllCardText() {
    var allCardTexts = document.querySelectorAll(".card-text");

    allCardTexts.forEach(element => {
        element.style.display = "none";
    });
  }

  collapseAllCardText();