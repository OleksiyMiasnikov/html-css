const newCupons = [
  {
    name: "Cupon 1",
    description: "Description of Cupon 1. cap - clothes",
    tags: ["cap","clothes"],
    price: 25230,
    creationDate: new Date("2021-12-10"),
  },
  {
    name: "Cupon 2",
    description: "Description of Cupon 2. Dress - clothes",
    tags: ["dress","clothes"],
    price: 250,
    creationDate: new Date("2021-12-10"),
  },
  {
    name: "Cupon 3",
    description: "Description of Cupon 3. Python - IT",
    tags: ["Python", "IT"],
    price: 700,
    creationDate: new Date("2021-12-10"),
  },
  {
    name: "Cupon 4",
    description: "Description of Cupon 4. t-short - clothes",
    tags: ["t-short","clothes"],
    price: 150,
    creationDate: new Date("2021-12-10"),
  },
  {
    name: "Cupon 5",
    description: "Description of Cupon 5. movie - art",
    tags: ["movie","art"],
    price: 21,
    creationDate: new Date("2021-12-10"),
  },
  {
    name: "Cupon 6",
    description: "Description of Cupon 6. flower - nature",
    tags: ["flower","nature"],
    price: 15,
    creationDate: new Date("2021-12-10"),
  },
  {
    name: "Cupon 7",
    description: "Description of Cupon 7. bird - nature",
    tags: ["bird","nature"],
    price: 25000,
    creationDate: new Date("2021-12-10"),
  },
  {
    name: "Cupon 8",
    description: "Description of Cupon 8. Java - IT",
    tags: ["Java","IT"],
    price: 25000,
    creationDate: new Date("2021-12-10"),
  },
  {
    name: "Cupon 9",
    description: "Description of Cupon 9. forest - nature",
    tags: ["forest","nature"],
    price: 25000,
    creationDate: new Date("2021-12-10"),
  },
  {
    name: "Cupon 10",
    description: "Description of Cupon 10. sun - nature",
    tags: ["sun","nature"],
    price: 25000,
    creationDate: new Date("2021-12-10"),
  },
  {
    name: "Cupon 11",
    description: "Description of Cupon 11. HTML - IT",
    tags: ["HTML","IT"],
    price: 25000,
    creationDate: new Date("2021-12-10"),
  },
  {
    name: "Cupon 12",
    description: "Description of Cupon 12. ocean - nature",
    tags: ["ocean", "nature"],
    price: 25000,
    creationDate: new Date("2021-12-10"),
  },
  {
    name: "Cupon 13",
    description: "Description of Cupon 13. poetry - art",
    tags: ["poetry", "art"],
    price: 25000,
    creationDate: new Date("2021-12-10"),
  },
  {
    name: "Cupon 14",
    description: "Description of Cupon 14. TCP/IP - IT",
    tags: ["TCP/IP","IT"],
    price: 25000,
    creationDate: new Date("2021-12-10"),
  },
  {
    name: "Cupon 15",
    description: "Description of Cupon 15. painting - art",
    tags: ["painting","art"],
    price: 25000,
    creationDate: new Date("2021-12-10"),
  },
  {
    name: "Cupon 16",
    description: "Description of Cupon 16. music - art",
    tags: ["music","art"],
    price: 25000,
    creationDate: new Date("2021-12-10"),
  },
  {
    name: "Cupon 17",
    description: "Description of Cupon 17. cycling - sport",
    tags: ["cycling","sport"],
    price: 25000,
    creationDate: new Date("2021-12-10"),
  },
  {
    name: "Cupon 18",
    description: "Description of Cupon 18. sport - diving",
    tags: ["diving","sport"],
    price: 25000,
    creationDate: new Date("2022-05-10"),
  },
  {
    name: "Cupon 19",
    description: "Description of Cupon 19. sail - sport",
    tags: ["sail","sport"],
    price: 25000,
    creationDate: new Date("2021-12-10"),
  },
  {
    name: "Cupon 20",
    description: "Description of Cupon 20. Football - sport",
    tags: ["football","sport"],
    price: 25000,
    creationDate: new Date("2021-12-14"),
  },
];

// const newTags = [
//   "car",
//   "dress",
//   "phone",
//   "cafe",
//   "movie",
//   "flower",
//   "bird",
//   "java",
//   "forest",
//   "sun",
//   "weapon",
//   "ocean",
//   "book",
//   "kitchen",
//   "star",
//   "music",
//   "travel",
//   "diving",
//   "sail",
//   "football",
// ];

const newTags = initTagsFunction();
localStorage.removeItem("cupons")
localStorage.removeItem("tags")
localStorage.setItem("cupons", JSON.stringify(newCupons));
localStorage.setItem("tags", JSON.stringify(newTags));

let currentTag = 0;
let tagsLength = 0;
let tagsToShow = 6;

function initTagsFunction() {
  let tags = new Set() 
  for (let i = 0; i < newCupons.length; i++) {
    for (let j = 0; j < newCupons[i].tags.length; j++){
      tags.add(newCupons[i].tags[j])
    }      
  }
  return Array
    .from(tags)
    .sort((a, b) => {
    if (a.toLowerCase() < b.toLowerCase()) return -1;
    if (a.toLowerCase() > b.toLowerCase()) return 1;
    return 0;
  })
}
