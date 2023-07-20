window.onscroll = function () {
  debounce(() => scrollFunction(), 1000)
};

function debounce(f, ms) {
  let isCooldown = false;  
  return function() {
    if (isCooldown) {
      console.log('return')
      return;
    }  
    console.log('f')
    f.apply(this, arguments);
    isCooldown = true;
    setTimeout(() => isCooldown = false, ms);
  };

}

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("button_top").style.display = "block";
  } else {
    document.getElementById("button_top").style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
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
