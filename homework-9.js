import { comments } from "./comments.js";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filtired = numbers.filter(num => num >=5);
console.log(filtired);

const clothes = ['Шляпа', 'Галстук', 'Перчатки', 'Костюм', 'Туфли'];
const searchClothes = 'Костюм';
const exists = clothes.includes(searchClothes);
console.log(exists);

function reverseArray(array) {
    return array.reverse();
}

const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const clothesArray = [
    "Шляпа",
    "Галстук",
    "Перчатки",
    "Костюм",
    "Туфли",
];

const reversedNumbersArray = reverseArray (numbersArray);
const reversedClothesArray = reverseArray (clothesArray);

console.log(reversedNumbersArray);
console.log(reversedClothesArray);

const commentsWithDotCom = comments.filter(comment => comment.email.includes('.com'));
console.log(commentsWithDotCom);


const updatedComments = comments.map(comment => ({
  ...comment,
  postId: comment.id <= 5 ? 2 : 1
}));

console.log(updatedComments);

const idAndName = comments.map(comment => {
    return {
        id: comment.id,
        name: comment.name
    };
});

console.log(idAndName);

const commentsWithValid = comments.map(comment => ({
    ...comment,
    isInvalid: comment.body.length > 180
}));

console.log(commentsWithValid);


const emailsReduce = comments.reduce((arr, comment) => [...arr, comment.email], []);
const emailsMap = comments.map(comment => comment.email);

console.log(emailsReduce);
console.log(emailsMap);

const taskArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const stringJoin = taskArray.join(' - ');
const stringToString = taskArray.toString();

console.log(stringJoin);
console.log(stringToString);
