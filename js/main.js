const cupons = JSON.parse(localStorage.getItem("cupons"));
const tags = JSON.parse(localStorage.getItem("tags"));
tagsShow(currentTag);
cuponsShow(cupons);
fillContantToSelect();
tagsLength = tags.length;

// output cupons list
function cuponsShow(cuponsToShow) { 
  document.querySelector(".cupons-bar").innerHTML = '';
  for (let i = 0; i < cuponsToShow.length; i++) {
    console.log(`i: ${i} cupon: ${cuponsToShow[i].name}`)
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
        <p>Expires in 3 deys</p>
      </span>
      <hr />
      <span class="cupons-title">
        <p>${cuponsToShow[i].price}</p>
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

function changingSelect(selectedTag) {
  const select = document
    .querySelector(".center-field")
    .querySelector(".select_categories");
  select.value = selectedTag;
  filteringByPatternAndTags();
}

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
