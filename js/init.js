const initCupons = [
  {
    name: "Cupon 1",
    description: "Description of Cupon 1",
    tags: ["car"],
    price: 25230,
    creationDate: new Date("2021-12-10"),
  },
  {
    name: "Cupon 2",
    description: "Description of Cupon 2",
    tags: ["dress"],
    price: 250,
    creationDate: new Date("2021-12-10"),
  },
  {
    name: "Cupon 3",
    description: "Description of Cupon 3",
    tags: ["phone"],
    price: 700,
    creationDate: new Date("2021-12-10"),
  },
  {
    name: "Cupon 4",
    description: "Description of Cupon 4",
    tags: ["cafe"],
    price: 150,
    creationDate: new Date("2021-12-10"),
  },
  {
    name: "Cupon 5",
    description: "Description of Cupon 5",
    tags: ["movie"],
    price: 21,
    creationDate: new Date("2021-12-10"),
  },
  {
    name: "Cupon 6",
    description: "Description of Cupon 6",
    tags: ["flower"],
    price: 15,
    creationDate: new Date("2021-12-10"),
  },
  {
    name: "Cupon 7",
    description: "Description of Cupon 7",
    tags: ["bird"],
    price: 25000,
    creationDate: new Date("2021-12-10"),
  },
  {
    name: "Cupon 8",
    description: "Description of Cupon 8",
    tags: ["java"],
    price: 25000,
    creationDate: new Date("2021-12-10"),
  },
  {
    name: "Cupon 9",
    description: "Description of Cupon 9",
    tags: ["forest"],
    price: 25000,
    creationDate: new Date("2021-12-10"),
  },
  {
    name: "Cupon 10",
    description: "Description of Cupon 10",
    tags: ["sun"],
    price: 25000,
    creationDate: new Date("2021-12-10"),
  },
  {
    name: "Cupon 11",
    description: "Description of Cupon 11",
    tags: ["weapon"],
    price: 25000,
    creationDate: new Date("2021-12-10"),
  },
  {
    name: "Cupon 12",
    description: "Description of Cupon 12",
    tags: ["ocean", "travel"],
    price: 25000,
    creationDate: new Date("2021-12-10"),
  },
  {
    name: "Cupon 13",
    description: "Description of Cupon 13",
    tags: ["book"],
    price: 25000,
    creationDate: new Date("2021-12-10"),
  },
  {
    name: "Cupon 14",
    description: "Description of Cupon 14",
    tags: ["kitchen"],
    price: 25000,
    creationDate: new Date("2021-12-10"),
  },
  {
    name: "Cupon 15",
    description: "Description of Cupon 15",
    tags: ["star"],
    price: 25000,
    creationDate: new Date("2021-12-10"),
  },
  {
    name: "Cupon 16",
    description: "Description of Cupon 16",
    tags: ["music"],
    price: 25000,
    creationDate: new Date("2021-12-10"),
  },
  {
    name: "Cupon 17",
    description: "Description of Cupon 17",
    tags: ["travel"],
    price: 25000,
    creationDate: new Date("2021-12-10"),
  },
  {
    name: "Cupon 18",
    description: "Description of Cupon 18",
    tags: ["diving", "travel"],
    price: 25000,
    creationDate: new Date("2022-05-10"),
  },
  {
    name: "Cupon 19",
    description: "Description of Cupon 19",
    tags: ["sail", "travel"],
    price: 25000,
    creationDate: new Date("2021-12-10"),
  },
  {
    name: "Cupon 20",
    description: "Description of Cupon 20",
    tags: ["football"],
    price: 25000,
    creationDate: new Date("2021-12-14"),
  },
];

const initTags = [
  "car",
  "dress",
  "phone",
  "cafe",
  "movie",
  "flower",
  "bird",
  "java",
  "forest",
  "sun",
  "weapon",
  "ocean",
  "book",
  "kitchen",
  "star",
  "music",
  "travel",
  "diving",
  "sail",
  "football",
];
localStorage.clear();
localStorage.setItem("cupons", JSON.stringify(initCupons));
localStorage.setItem("tags", JSON.stringify(initTags));

let currentTag = 0;
let tagsLength = 0;
let tagsToShow = 6;
