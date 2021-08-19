const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

console.log(" was rented ?")
let value = false
books.forEach(bookContent => {
  rented = bookContent.rented;
  if(rented === 0)
  {
    return value = true 
  }
});

  if(value === true)
  {
    console.log("Un ou plusieurs livres n'ont pas été loués au moins une fois")
  }
  else
  {
    console.log("Tout les livres ont été loués au moins une fois")
  }

console.log(" Most rented ?")
books.sort(function(a,b) {
    return b.rented - a.rented;
});
mostRented = books[0]
console.log(mostRented);


console.log(" Least rented ?")
leastRented = books.slice(-1)[0]
console.log(leastRented);

console.log(" Find by Id")
let y = 873495
books.forEach(bookContent => {
  id = bookContent.id;
  title = bookContent.title;
  if(id === y) {
  console.log(title)
  }
});

console.log(" Erase by Id")
let z = 133712
let r = 0
books.forEach(bookContent => {
  id = bookContent.id;
  title = bookContent.title;
  if(id === z) 
  {
  console.log(title)
  delete books[r]
  return cleanedBooks = books.filter(x => x);
  }
  r++
});
  console.log(cleanedBooks)


  console.log(" Sort by title ")
function dynamicSort(property) {
  return function (a,b) {
      {
          return a[property].localeCompare(b[property]);
      }
  }
}
cleanedBooks.sort(dynamicSort("title"));
console.log(cleanedBooks);



