window.onscroll = function () {
  scrollFunction();
};

function debounce(f, ms) {
  let isCooldown = false;
  return function () {
    if (isCooldown) {
      return;
    }
    f.apply(this, arguments);
    isCooldown = true;
    setTimeout(() => (isCooldown = false), ms);
  };
}

function scrollFunction() {
  localStorage.setItem(
    "position",
    JSON.stringify(document.documentElement.scrollTop)
  );
  localStorage.setItem("cuponsOnScreen", JSON.stringify(cuponsOnScreen));
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("button_top").style.display = "block";
  } else {
    document.getElementById("button_top").style.display = "none";
  }

  if (
    window.scrollY + window.innerHeight >=
    document.documentElement.scrollHeight - 1
  ) {
    console.log(`scroll`);
    cuponsShowFunction(cuponsOnScreen, cuponsInRow);
    cuponsOnScreen += cuponsInRow;
    if (cuponsOnScreen >= cuponsToShow.length) {
      cuponsOnScreen = cuponsToShow.length;
    }
  }
}

function scrollToFunction(position) {
  console.log(`position: ${position}`);
  document.body.scrollTop = position;
  document.documentElement.scrollTop = position;
}

function scrollTags(direction) {
  if (direction === "left") {
    if (currentTag > 0) {
      currentTag--;
    }
  } else {
    if (currentTag < tagsLength - tagsToShow) {
      currentTag++;
    }
  }

  if (currentTag === 0) {
    document.getElementById("button_left").style.display = "none";
  } else {
    document.getElementById("button_left").style.display = "block";
  }

  if (currentTag === tagsLength - tagsToShow) {
    document.getElementById("button_right").style.display = "none";
  } else {
    document.getElementById("button_right").style.display = "block";
  }
  tagsShow(currentTag);
}
