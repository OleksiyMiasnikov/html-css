const cupons = JSON.parse(localStorage.getItem("cupons"));
const tags = JSON.parse(localStorage.getItem("tags"));
tagsShow(currentTag);
tagsLength = tags.length;

// output cupons list
document.querySelector(".cupons-bar").innerHTML = `<ul class="cupons"></ul>`;
for (let i = 0; i < cupons.length; i++) {
  let row = document.createElement("li");
  row.classList.add("cupons-item");
  row.innerHTML = `
    <img name="li-1" src="images/cupon.png" alt="" />
    <span class="cupons-title">
      ${cupons[i].name}
      <i class="fa fa-heart" style="font-size: 15px"></i>
    </span>
    <span class="cupons-title description">
      <p>${cupons[i].description}</p>
      <p>Expires in 3 deys</p>
    </span>
    <hr />
    <span class="cupons-title">
      <p>${cupons[i].price}</p>
      <button>Add to Cart</button>
    </span>`;
  document.querySelector(".cupons").appendChild(row);
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
    <img name="li-1" src="images/category.png" alt="" />          
    <span>${tags[i]}</span>`;
    document.querySelector(".tags").appendChild(row);
  }
}
