const cupons = JSON.parse(localStorage.getItem("cupons"));
const tags = JSON.parse(localStorage.getItem("tags"));
cuponsToShow = [...cupons];
tagsShow(currentTag);

//get quantity of cupons on the previous page from localstorege
const sizeFromLocal = JSON.parse(localStorage.getItem("cuponsOnScreen"));
const startPosition = JSON.parse(localStorage.getItem("position"));
console.log(`sizeFromLocal ${sizeFromLocal}`);
if (sizeFromLocal && startPosition > 0) {
  startCupon = 0;
  cuponsOnScreen = sizeFromLocal;
}
startCuponsShowFunction(cupons);
fillContantToSelect();
tagsLength = tags.length;

//return to the last scroll position on the page
if (startPosition) {
  scrollToFunction(startPosition);
}

const startInputFunction = debounce(() => filteringByPatternAndTags());
const input = document.querySelector("#search-field");
input.addEventListener("input", () => startInputFunction());
window.onresize = function(){ location.reload(); }

function debounce(func, timeout = 500) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this);
    }, timeout);
  };
}

//comporator for cupons
function compare(cupon1, cupon2) {
  if (cupon1.creationDate < cupon2.creationDate) {
    return 1;
  }
  if (cupon1.creationDate > cupon2.creationDate) {
    return -1;
  }
  return 0;
}

// output cupons list
function startCuponsShowFunction() {
  cuponsToShow.sort(compare);
  document.querySelector(".cupons-bar").innerHTML = "";
  startCupon = cuponsOnScreen;
  cuponsShowFunction(0, cuponsOnScreen);
}

// output cupons list
function cuponsShowFunction(start, size) {
  console.log(`start: ${start}, size: ${size}`);
  if (start + size >= cuponsToShow.length) {
    size = cuponsToShow.length - start;
  }
  for (let i = start; i < size + start; i++) {
    let row = document.createElement("div");
    row.classList.add("cupons-item");
    row.innerHTML = `
      <img src="images/cupon.png"/>
      <span class="cupons-title">
         ${cuponsToShow[i].name}
        <i class="fa fa-heart" style="font-size: 15px"></i>
      </span>
      <span class="cupons-title description">
        <p>${cuponsToShow[i].description}</p>
        <p>${new Date(cuponsToShow[i].creationDate).toJSON().slice(0, 10)}</p>
      </span>
      <hr />
      <span class="cupons-title">
        <p>$${cuponsToShow[i].price}</p>
        <button>Add to Cart</button>
      </span>`;
    document.querySelector(".cupons-bar").appendChild(row);
  }
}

// output tags list
function tagsShow(start) {
  document.querySelector(
    ".categories-bar"
  ).innerHTML = `<ul class="tags"></ul>`;
  for (let i = start; i < start + tagsToShow; i++) {
    let row = document.createElement("li");
    row.classList.add("category-item");
    row.innerHTML = `
    <img name="li-1" src="images/category.png" alt="" onclick="changingSelect('${tags[i]}')"/>          
    <span>${tags[i]}</span>`;
    document.querySelector(".tags").appendChild(row);
  }
}

// filling select by tags
function fillContantToSelect() {
  for (let i = 0; i < tags.length; i++) {
    console.log(`tgs[${i}] = ${tags[i]}`);
    let row = document.createElement("option");
    row.value = `${tags[i]}`;
    row.innerHTML = `${tags[i]}`;
    console.log(`row = ${row}`);
    document.querySelector(".center-field .select_categories").appendChild(row);
  }
}

//changing select value when tag was picked
function changingSelect(selectedTag) {
  const select = document
    .querySelector(".center-field")
    .querySelector(".select_categories");
  select.value = selectedTag;
  filteringByPatternAndTags();
}

//filtering cupuns by part of name or description and tag
function filteringByPatternAndTags() {
  let selectedTag = document.getElementById("select_categories").value;
  if (selectedTag) {
    cuponsToShow = cupons.filter((cupon) => {
      return cupon.tags.includes(selectedTag);
    });
  } else {
    cuponsToShow = cupons;
  }
  let pattern = document.getElementById("search-field").value;
  if (pattern) {
    cuponsToShow = cuponsToShow.filter((cupon) => {
      return (
        cupon.name.includes(pattern) || cupon.description.includes(pattern)
      );
    });
  }
  startCuponsShowFunction();
}
