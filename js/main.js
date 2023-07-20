const cupons = JSON.parse(localStorage.getItem("cupons"));
const tags = JSON.parse(localStorage.getItem("tags"));
tagsShow(currentTag);
cuponsShow(cupons);
fillContantToSelect();
tagsLength = tags.length;

const startInputFunction = debounce(() => filteringByPatternAndTags());
const input = document.querySelector("#search-field");
input.addEventListener("input", () => startInputFunction());

function debounce(func, timeout = 500) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this); }, timeout);
  };
}

//comporator for cupons
function compare(cupon1, cupon2) {
  if ( cupon1.creationDate < cupon2.creationDate ){
    return 1;
  }
  if ( cupon1.creationDate > cupon2.creationDate ){
    return -1;
  }
  return 0;
}

// output cupons list
function cuponsShow(cuponsToShow) { 
  cuponsToShow.sort( compare );
  document.querySelector(".cupons-bar").innerHTML = '';
  for (let i = 0; i < cuponsToShow.length; i++) {    
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
    let row = document.createElement("option");
    row.value = `${tags[i]}`;
    row.innerHTML = `${tags[i]}`;
    document
      .querySelector(".center-field")
      .querySelector(".select_categories")
      .appendChild(row);
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
  let cuponsFiltered;
  let selectedTag = document.getElementById("select_categories").value; 
  if (selectedTag) {
    cuponsFiltered = cupons.filter((cupon) => {
      return cupon.tags.includes(selectedTag);
    });
  } else {
    cuponsFiltered = cupons;
  }
  let pattern = document.getElementById("search-field").value;
  if (pattern) {
    cuponsFiltered = cuponsFiltered.filter((cupon) => {
      return (
        cupon.name.includes(pattern) || cupon.description.includes(pattern)
      );
    });
  }
  cuponsShow(cuponsFiltered);
}
