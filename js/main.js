const initialCupons = [
    {
      name: 'Cupon 1',
      description: 'Description of Cupon 1',
      tags: 'car',
      price: 25000,
      creationDate: new Date('2021-12-10')
    },
    {
      name: 'Cupon 2',
      description: 'Description of Cupon 2',
      tags: 'dress',
      price: 250,
      creationDate: new Date('2021-12-10')
    },
    {
      name: 'Cupon 3',
      description: 'Description of Cupon 3',
      tags: 'phone',
      price: 700,
      creationDate: new Date('2021-12-10')
    },
    {
      name: 'Cupon 4',
      description: 'Description of Cupon 4',
      tags: 'cafe',
      price: 150,
      creationDate: new Date('2021-12-10')
    },
    {
      name: 'Cupon 5',
      description: 'Description of Cupon 5',
      tags: 'movie',
      price: 21,
      creationDate: new Date('2021-12-10')
    },
    {
      name: 'Cupon 6',
      description: 'Description of Cupon 6',
      tags: 'flower',
      price: 15,
      creationDate: new Date('2021-12-10')
    },
    {
      name: 'Cupon 7',
      description: 'Description of Cupon 7',
      tags: 'bird',
      price: 25000,
      creationDate: new Date('2021-12-10')
    },
    {
      name: 'Cupon 8',
      description: 'Description of Cupon 8',
      tags: 'java',
      price: 25000,
      creationDate: new Date('2021-12-10')
    },
    {
      name: 'Cupon 9',
      description: 'Description of Cupon 9',
      tags: 'forest',
      price: 25000,
      creationDate: new Date('2021-12-10')
    },
    {
      name: 'Cupon 10',
      description: 'Description of Cupon 10',
      tags: 'sun',
      price: 25000,
      creationDate: new Date('2021-12-10')
    },
    {
      name: 'Cupon 11',
      description: 'Description of Cupon 11',
      tags: 'weapon',
      price: 25000,
      creationDate: new Date('2021-12-10')
    },
    {
      name: 'Cupon 12',
      description: 'Description of Cupon 12',
      tags: 'ocean',
      price: 25000,
      creationDate: new Date('2021-12-10')
    },
    {
      name: 'Cupon 13',
      description: 'Description of Cupon 13',
      tags: 'book',
      price: 25000,
      creationDate: new Date('2021-12-10')
    },
    {
      name: 'Cupon 14',
      description: 'Description of Cupon 14',
      tags: 'kitchen',
      price: 25000,
      creationDate: new Date('2021-12-10')
    },
    {
      name: 'Cupon 15',
      description: 'Description of Cupon 15',
      tags: 'star',
      price: 25000,
      creationDate: new Date('2021-12-10')
    },
    {
      name: 'Cupon 16',
      description: 'Description of Cupon 16',
      tags: 'music',
      price: 25000,
      creationDate: new Date('2021-12-10')
    },
    {
      name: 'Cupon 17',
      description: 'Description of Cupon 17',
      tags: 'travel',
      price: 25000,
      creationDate: new Date('2021-12-10')
    },
    {
      name: 'Cupon 18',
      description: 'Description of Cupon 18',
      tags: 'diving',
      price: 25000,
      creationDate: new Date('2022-05-10')
    },
   {
      name: 'Cupon 19',
      description: 'Description of Cupon 19',
      tags: 'sail',
      price: 25000,
      creationDate: new Date('2021-12-10')
    },
   {
      name: 'Cupon 20',
      description: 'Description of Cupon 20',
      tags: 'football',
      price: 25000,
      creationDate: new Date('2021-12-14')
    },
  ]
  
{/* <li class="cupons-item">
          <img name="li-1" src="images/cupon.png" alt="" />
          <span class="cupons-title">
            Cupon name
            <i class="fa fa-heart" style="font-size: 15px"></i>
          </span>
          <span class="cupons-title description">
            <p>Some brief description</p>
            <p>Expires in 3 deys</p>
          </span>
          <hr />
          <span class="cupons-title">
            <p>$235</p>
            <button>Add to Cart</button>
          </span>
        </li> */}

document.querySelector('.cupons-bar').innerHTML = `<ul class="cupons"></ul>`
for (let i = 0; i < initialCupons.length; i++) {
  let row = document.createElement('li')
  row.classList.add('cupons-item')
  row.innerHTML = `
    <img name="li-1" src="images/cupon.png" alt="" />
    <span class="cupons-title">
      ${initialCupons[i].name}
      <i class="fa fa-heart" style="font-size: 15px"></i>
    </span>
    <span class="cupons-title description">
      <p>${initialCupons[i].description}</p>
      <p>Expires in 3 deys</p>
    </span>
    <hr />
    <span class="cupons-title">
      <p>${initialCupons[i].price}</p>
      <button>Add to Cart</button>
    </span>`
  document.querySelector('.cupons').appendChild(row)
}