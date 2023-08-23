//Завдання 1.Cтворіть об'єкт person за допомогою конструктора з полями name: "John",age: 25
let person = {name:"John",age:25};

console.log("Завдання 1 ====================================");

console.log("person", person); // Виведе {name: "John", age: 25}

//Завдання 2. Cтворіть об'єкт personLarge який буде мати такі ж поля як person ,
// та вкладений об'єкт address з полями  street: "123 Main St", city: "New York", country: "USA",
let personLarge = {
  ...person,//використовуємо деструктурізацію на об'єкті person
  address : {street: "123 Main St", city: "New York", country: "USA"},//створюємо об'єкт address
};

console.log("Завдання 2 ====================================");
console.log("personLarge", personLarge); // Виведе
// personLarge {
//   name: 'John',
//   age: 25,
//   address: { street: '123 Main St', city: 'New York', country: 'USA' }
// }

//Завдання 3: Створіть функцію, що повертає новий об'єкт з тими ж властивостями, що й переданий у якості аргумента об'єкт.

var animal = {
  type: "Dog",
  breed: "Labrador Retriever",
};

// Функція для створення нового об'єкта з тими ж властивостями
function copyObject(obj) {
  let obj1={...obj};// Використовуємо синтаксис деструктурізації {...person} для створення нового об'єкта з тими ж властивостями
  return obj1;// Повертаємо новий об'єкт
}

console.log("Завдання 3 ====================================");

console.log("copyObject(animal)", copyObject(animal)); // Виведе { type: 'Dog', breed: 'Labrador Retriever' }

////Завдання 4. Перевірте наявність властивості в об'єкті за допомогою оператора in.
let fruit = {
  name: "Banana",
  color: "Yellow",
};
// Функція для перевірки наявності властивості в об'єкті
function hasProperty(obj, property) {
  // Використовуємо оператор "in" для перевірки наявності властивості
  if (property in obj) {return `"Property ${property} exists"`;}// Запишимо умову якщо властивість існує повертає текст Property ${property} exists,
  else {return `"Property ${property} does not exist"`};// інашке повертаємо Property ${property} does not exist.
}

console.log("Завдання 4 ====================================");
console.log(hasProperty(fruit, "name")); // Виведе "Property name exists."
console.log(hasProperty(fruit, "taste")); // Виведе "Property taste does not exist."

// Завдання 5: Створіть функцію, що отримує об'єкт і виводить на консоль всі його ключі та значення.
let country = {
  name: "United States",
  capital: "Washington, D.C.",
};
// Функція для виведення всіх ключів і значень об'єкта
function printKeysAndValues(obj) {
  for (let key in obj) {// Проходимося по всіх ключах об'єкту за допомогою циклу "for in"
  console.log(`"Key: ${key}, Value: ${obj[key]}"`);}// Виводимо ключ та значення на консоль
}

console.log("Завдання 5 ====================================");
printKeysAndValues(country);
// Виведе
// Key: name, Value: United States
// Key: capital, Value: Washington, D.C.

// Завдання 6: Видаліть властивість з об'єкта за допомогою оператора delete.
let movie = {
  title: "Inception",
  director: "Christopher Nolan",
};
// Функція для видалення властивості з об'єкта
function deleteProperty(obj, property) {
  delete obj[property];// Використовуємо оператор "delete" для видалення властивості
  return obj;// Повертаємо об'єкт
}

console.log("Завдання 6 ====================================");
console.log(deleteProperty(movie, "director")); // Виведе { title: 'Inception' }

//Завдання 7: Використайте ключове слово this в об'єкті.
// Створюємо об'єкт
let user = {
  name: "John",
  age: 25,
  introduce: function () {// Створюємо метод introduce, який за допомогою ключового слова this має повернути такий рядок
  return `My name is ${this.name} and I am ${this.age} years old.`;} // My name is John and I am 25 years old.
};

console.log("Завдання 7 ====================================");
// Викликаємо метод introduce об'єкта user
 // Розкоментуйте рядок нижче після виконня завдання для перевірки
console.log(user.introduce());
// Виведе My name is John and I am 25 years old.

// Завдання 8: Створіть функцію, яка додає нове поле до об'єкту.
let book = {
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
};

// Функція для додавання нового поля до об'єкту
function addField(obj, newField, value) {
  let obj1={...obj};// Додаємо нове поле до об'єкту з допомогою квадратних дужок
  obj1[newField]=value;
  return obj1;// Повертаємо об'єкт
}

console.log("Завдання 8 ====================================");
console.log(addField(book, "year", 1960)); // Виведе { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 }

// Завдання 9: Деструктуруйте об'єкт в нові змінні.
let laptop = {
  brand: "Dell",
  model: "XPS 13",
};
// Функція для деструктуризації об'єкту
function destructureObject(obj) {
  const {brand, model} = obj;// Використовуємо деструктуризацію для створення нових змінних з властивостей об'єкту і отримуємо з нього змінні brand та model
  return `Brand: ${brand}, Model: ${model}`; // Повертаємо нові змінні  в форматі 'Brand: ${brand}, Model: ${model}'
}

console.log("Завдання 9 ====================================");
console.log(destructureObject(laptop)); // Виведе Brand: Dell, Model: XPS 13

// Завдання 10: Змініть значення полів об'єкту, що знаходяться в масиві об'єктів.

// Створюємо масив об'єктів userList, першим елементом якого буде об'єкт name:"Jack",role:"reader", а другим об'єкт name: "Jane", role: 'admin'

let userList = [
  { name: "Jack", role: "reader" },
  { name: "Jane", role: "admin" },
];
// Функція для зміни ролі всіх осіб у масиві
function changeRole(array, newRole) {
  for (const num of array) {// Ітеруємося по масиву об'єктів за допомогою циклу "for of"
  num.role=newRole};// Змінюємо роль кожного користувача на нове ім'я
  console.log(array);// Виводимо об'єкт на консоль
}

console.log("Завдання 10 ====================================");
changeRole(userList, "editor");
// Виведе
// { name: 'Jack', role: 'editor' }
// { name: 'Jane', role: 'editor' }

// Завдання 11: Використовуйте вкладені об'єкти для зберігання більш складної інформації.
// Створюємо об'єкт з вкладеним об'єктом
let product = {
  productName: "Smartphone",
  price: 699,
  manufacturer: {
    companyName: "Tech Corp",
    country: "USA",
  },
};
// Функція для виводу деталей людини
function printProductDetails(obj) {
  const {productName, price, manufacturer: { companyName, country } } = obj;// Використовуємо деструктуризацію для отримання значень productName, price i також значень companyName, country вкладеного об'єкту manufacturer
 console.log(` ${productName}, ${price}, ${companyName},  ${country}`); // Виводимо productName, price, companyName та country на консоль
}

console.log("Завдання 11 ====================================");
printProductDetails(product); // Виведе Smartphone 699 Tech Corp USA

// Завдання 12: Показати, що об'єкти будуть дорівнювати один одному лише тоді, коли одному об'єкту присвоїти значення іншого.
// Створіть об'єкт два об'єкти planet1 та planet2 з полями   name: "Земля",radius: 6371,

let planet1 = { name: "Земля", radius: 6371 };
let planet2 = { name: "Земля", radius: 6371 };

// Функція для перевірки рівності об'єктів
function compareObjects(obj1, obj2) {
  console .log(obj1===obj2);// Виводимо результат порівняння об'єктів
  obj1=obj2;// Присвоємо obj2 значення об'єкту obj1
  console.log(obj1===obj2);// Виводимо результат порівняння об'єктів
}

console.log("Завдання 12 ====================================");
compareObjects(planet1, planet2); // Виведе
//false
//true

// Завдання 13: Використовуйте деструктуризацію зі значенням за замовчуванням у аргументах функції для об'єкта.
let car = {
  brand: "BMW",
  year: 2022,
};
// Створюємо функцію, яка приймає об'єкт як аргумент і використовує деструктуризацію зі значенням за замовчуванням
// brand за замовчуванням призначемо Unknown, year за замовчуванням призначемо 0, country за замовчуванням призначемо Unknown

function showCarInfo({
  brand = "Unknown",
  year = 0,
  country = "Unknown",
} = {}) {
  return {brand,year,country};// Повертаємо об'єкт зі значеннями властивостей
}

console.log("Завдання 13 ====================================");
console.log(showCarInfo(car)); // Виведе { brand: 'BMW', year: 2022, country: 'Unknown' }

// Завдання 14: Додайте нову властивість до вбудованого об'єкту Array через літерал.
// Створюємо функцію, яка буде додавати нову властивість до масиву
function addProperty(array) {
  Array.prototype.customProperty = "myProperty";// Додаємо нову властивість customProperty до прототипу Array зі значенням myProperty
  return array;// Повертаємо переданий масив з новою властивістю
}

console.log("Завдання 14 ====================================");
let newArr = addProperty([1, 2, 3, 4, 5]);// Створимо масив newArr з новою властивістю за допомогої нашої функції в яку передамо [1, 2, 3, 4, 5]

// Розкоментуйте рядок нижче після виконня завдання для перевірки
 console.log(newArr.customProperty); // Виведе myProperty
