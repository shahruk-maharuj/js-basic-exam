/* ### 1. Store Introduction:

- Greet the user upon entering the online store.

### 2. Product Display:

- Showcase the following products and their prices:
  - **T-shirt**: $10
  - **Jeans**: $30
  - **Hat**: $5
  - **Shoes**: $50

### 3. Shopping Experience:

- Prompt the user to select an item to add to their cart or to view their current cart.
- Allow continuous shopping: let the user add as many items as they desire.

*/

/* alert("Welcome to the online store!");

let tShirt = 10;
let jeans = 30;
let hat = 5;
let shoes = 50;

let cart = [];
function displayProducts() { 
  let product = prompt("Select an item to add to your cart or view your current cart. (T-shirt/Jeans/Hat/Shoes/View Cart)");
  switch (product) {
    case "T-shirt":
      cart.push("T-shirt");
      alert("T-shirt added to cart!");
      break;
    case "Jeans":
      cart.push("Jeans");
      alert("Jeans added to cart!");
      break;
    case "Hat":
      cart.push("Hat");
      alert("Hat added to cart!");
      break;
    case "Shoes":
      cart.push("Shoes");
      alert("Shoes added to cart!");
      break;
    case "View Cart":
      alert("Your cart contains: " + cart);
      break;
    default:
      alert("Invalid Choice");
      break;
  }
  displayProducts();
}

displayProducts(); */

/* ### 4. Cart Management:

- Display the total cost of the items in the cart.
- Offer options to either proceed to checkout or continue shopping.
- If an item not on the list is added, inform the user of its unavailability.
- Facilitate the removal of items from the cart if the user changes their mind.

### 5. Checkout:

- If the user decides to checkout, present a thank you message along with the total amount due. */

/* let bigNum = 343434424249242942948294n; 
console.log(typeof bigNum); */

/* You have a variable temperature set to 15. Write an if...else statement that logs "Wear a jacket" if the temperature is below 20 and "Wear shorts" otherwise. */

/* let temperature = 15;

if (temperature < 20) {
  console.log("Wear a jacket");
} else {
  console.log("Wear shorts");
} */

/* You have a variable score set to 85. Use the ternary operator to determine and log whether the score is "Pass" (if score is 50 or above) or "Fail". */

/* let score = 85;
let scoreConditon = score >= 50
let check = scoreConditon ?  "Pass" : "Fail"

console.log(check); */

/* You have two variables: hasMoney = true and storeIsOpen = false. Write a condition to check if you can buy a toy. You can buy a toy if you have money AND the store is open. */

/* let hasMoney = true;
let storeIsOpen = false;

if (hasMoney && storeIsOpen) {
  console.log("you can buy a toy");
} else {
  console.log ("You cannot buy this product") ; 
} */

/* You have two variables: isDaytime = true and isSunny = false. Write a nested if...else statement to decide if you should wear sunglasses. You'll wear them if it's daytime and sunny. */

/* let isDaytime = true;
let isSunny = false;

if (isDaytime) {
  if (isSunny) {
    console.log("you should wear sunglasses");
  } else {
    console.log("you light glass");
  }
} else {
  console.log("Do anything in night");
} */

/* You have a variable score set to 75. Write an if...else if...else statement to determine the grade:

90 and above is an "A"
80 to 89 is a "B"
70 to 79 is a "C"
60 to 69 is a "D"
Below 60 is an "F" */

/* let score = 75;

if (score >= 90) {
  console.log("A");
} else if (score >= 80 && score <= 89) {
  console.log("B");
} else if (score >= 70 && score <= 79) {
  console.log("C");
} else if (score >= 60 && score <= 69) {
  console.log("D");
} else if (score < 60) {
  console.log("F");
}  */

/* You have a variable day set to "Wednesday". Use a switch statement to print a message for each day of the week. For example, for "Monday", print "Start of the work week!". */

/* let day = "Wednesday";

switch (day) {
  case "Saturday":
    console.log("Start of the work Saturday!");
    break;
  case "Sunday":
    console.log("Start of the work Sunday!");
    break;
  case "Monday":
    console.log("Start of the work Monday!");
    break;
  case "Tuesday":
    console.log("Start of the work Tuesday!");
    break;
  case "Wednesday":
    console.log("Start of the work Wednesday!");
    break;
  case "Thursday":
    console.log("Start of the work Thursday!");
    break;
  case "Friday":
    console.log("Start of the work Friday!");
    break;
  default:
    break;
} */

/* You have a variable count set to 3. Write a while loop that decrements count and prints "Counting down: [current value of count]" until count reaches 0. */

/* let count = 3;

while (count > 0) {
  console.log("Counting down:", count);
  count--;
} */

/* You have a variable booksToRead set to 5. Write a while loop that decrements booksToRead and prints "Reading a book..." until booksToRead reaches 0. */

/* let booksToRead = 5;

while (booksToRead > 0) {
  console.log(`Reading a book... ${booksToRead}`);
  booksToRead--;
} */

/* Write a for loop that prints the numbers from 1 to 10. */

/* for (let i = 0; i <= 10; i++) {
  console.log(` prints the numbers from ${i}`); 
}
 */
/* You decide to write down the multiplication table for the number 3. Write a for loop that prints the multiplication of 3 from 1 to 10 (e.g., 3 x 1 = 3, 3 x 2 = 6, ...). */

/* for (let i = 1; i <= 10; i++) {
  console.log(`3 * ${i} = ${3 * i}`);
}
 */

/* You have a loop that counts from 1 to 10. Use the break statement to stop the loop when the count reaches 7. Use the continue statement to skip the number 4. */

/* for (let i = 1; i <= 10; i++) {
  if (i === 7) {
    console.log(`${i}!`);
    break
  }
  if (i === 4) {
    console.log( `${i}!`)
    continue;
  }
  console.log(`checking ${i}`);
} */

/* Write a do...while loop that prompts the user for their name. The loop should continue asking until the user provides a name (i.e., the input is not an empty string). */

/* let name;
do {
    name = prompt('What is your name?');
} while (!name); */

/* Create an array named colors that contains three of your favorite colors. Then, log the second color in the array. */

/* let colors = ["red", "green", "purple", "gray", "black"];
console.log(colors[1]);  // Outputs: green */


/* Using the fruits array from the previous example, add "grape" to the end of the array and remove "apple" from the beginning of the array. Then, log the updated array. */

/* let fruits = ["banana", "apple", "mango", "orange"];
fruits.push("grape");
fruits.shift();  // This removes the first element, which is "banana" in this case.

console.log(fruits);  // Outputs: ["apple", "mango", "orange", "grape"] */

/* Create an object named car that has properties for brand, model, and year. Then, log the car's model. */

let car = {
  brand : 'Ford',
  model:'Mustang',
  year: 2020
}

console.log(car.year);