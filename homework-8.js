const userName = {
  name: "Abdurahim",
  surname: "Umalatov",
  age: 35,
  job: "Frontend Developer",
  position: "Middle",
  mail: "abdurahim.umalatov@example.com",
  maritalStatus: "Married",
  country: "Russia",
  city: "Makhachkala",
};

const carData = {
  brand: "Lada",
  model: "Calina",
  year: 2011,
  color: "White",
  engine: "1.6L",
  transmission: "Manual",
  mileage: 145000,
  fuelType: "Petrol92",
  price: 350000,
};
carData.carOwner = userName;

const MaxSpeed = automobile => {
  if ('maxSpeed' in automobile) {
    return;
  };
  automobile.maxSpeed = 180;
}
MaxSpeed(carData);
console.log(carData);

const fruitPrice = {
  fruit: "Banana",
  price: 140,
};

const productName = {
  name: "Saudi dates",
};

const book1 = {
  title: "The Fundamental of Tawheed",
  author: "Shaykh Solih Al Fawzan",
  year: 1994,
  genre: "Religious",
};
const book2 = {
  title: "Four rules of the Shariah",
  author: "Shaykh Abdul-Aziz bin Abdullah bin Baz",
  year: 1999,
  genre: "Religious",
};
const book3 = {
  title: "MonotheWelcome o Student of Knowledge",
  author: "Shaykh Rabee bin Haadee al-Madkhali",
  year: 2000,
  genre: "Religious",
};
const book4 = {
  title: "O' God!",
  author: "Ahmad Shawki",
  year: 1927,
  genre: "Poetry",
};
const book5 = {
  title: "I’m sorry, Maryam",
  author: "Kamal Abukov",
  year: 1967,
  genre: "Novella",
};

const library = [book1, book2, book3, book4, book5];


function addIsRare(array) {
  return array.map(book => {
    return {
      ...book,
      isRare: book.year > 2000
    };
  });
}

const booksWithRare = addIsRare(library);

console.log(userName);
console.log(carData);
console.log(fruitPrice);
console.log(library);
console.log(booksWithRare);