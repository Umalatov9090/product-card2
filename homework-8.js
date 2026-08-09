const user = {
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
carData.carOwner = user.name;

const setMaxSpeed = automobile => {
  if ('maxSpeed' in automobile) {
    return;
  };
  automobile.maxSpeed = 180;
}
setMaxSpeed(carData);
console.log(carData);

const fruitPrice = {
  fruit: "Banana",
  price: 140,
};

const productName = {
  name: "Saudi dates",
};

const islamicBooks = [
  {
    title: "The Fundamental of Tawheed",
    author: "Shaykh Solih Al Fawzan",
    year: 1994,
    genre: "Religious",
  },
  {
    title: "Four rules of the Shariah",
    author: "Shaykh Abdul-Aziz bin Abdullah bin Baz",
    year: 1999,
    genre: "Religious",
  },
  {
    title: "MonotheWelcome o Student of Knowledge",
    author: "Shaykh Rabee bin Haadee al-Madkhali",
    year: 2000,
    genre: "Religious",
  }  
];
islamicBooks.push({
  title: "Highlights on the Path of the Islamic Call",
  author: "Shaykh Muhammad Aman al Jami",
  year: 1952,
  genre: "Religious",
});

const arabicLiterature = [
  {
    title: "The way’s insight.",
    author: "Mahmud Shakir",
    year: 1963,
    genre: "Islamic history and ideologies.",
  },
  {
    title: "O' God!",
    author: "Ahmad Shawki",
    year: 1927,
    genre: "Poetry",
  },
  {
    title: "I’m sorry, Maryam",
    author: "Kamal Abukov",
    year: 1967,
    genre: "Novella",
  },
];

const library = [...islamicBooks, ...arabicLiterature];


function addIsRare(array) {
  return array.map(book => {
    return {
      ...book,
      isRare: book.year > 2000
    };
  });
}

const booksWithRare = addIsRare(library);

console.log(user);
console.log(carData);
console.log(fruitPrice);
console.log(library);
console.log(booksWithRare); 
