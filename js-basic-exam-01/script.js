/* 1. Greet the user with a "Hello, world!" message. */
alert("Hello, world!");

/* 2. Ask the user for their name and store it in a variable. */
let name = prompt("What is your name?");

/* 3. Display a message saying, "Welcome, [user's name]!" using template strings. */
alert(`Welcome, ${name}!`);

/* 
4. Ask the user if they are looking for a book. (Yes/No)

   - **If they answer "Yes":**

     - Prompt them for the book title.
     - Check the first letter of the book title:
       - If it's 'A' to 'M', inform them to check the left section of the library.
       - If it's 'N' to 'Z', guide them to the right section.
       - (Ensure you use string indexing and comparison operators for this task.)
     - If the book title is "undefined", respond with "Sorry, we couldn't find the book title."
     - If the book title starts with a number or special character, direct them to the front desk.

   - **If they answer "No":**
     - Inquire if they wish to return a book or just browse (options: Return/Browse).
     - Utilize a switch statement to manage their choice. 

*/
let answer = prompt("Are you looking for a book? (Yes/No)");

if (answer === "Yes") {
  let bookTitle = prompt("Enter your book Name...");
  let firstLetter = bookTitle.charAt(0);
  if (firstLetter >= "A" && firstLetter <= "M") {
    alert("Check the left section of the library");
  } else if (firstLetter >= "N" && firstLetter <= "Z") {
    alert("Check the right section of the library");
  } else if (bookTitle === "undefined") {
    alert("Sorry, we couldn't find the book title.");
  } else if (firstLetter >= "0" && firstLetter <= "9") {
    alert("Direct them to the front desk.");
  } else {
    alert("Direct them to the front desk.");
  }
} else if (answer === "No") {
  let choice = prompt(
    "Do you wish to return a book or just browse? (Return/Browse)"
  );
  switch (choice) {
    case "Return":
      alert("Return");
      break;
    case "Browse":
      alert("Browse");
      break;
    default:
      alert("Invalid Choice");
      break;
  }
}

/*  
5. Implement a `for` loop to simulate the user browsing through 5 books. Display the book number they are currently viewing. 
*/

for (let i = 1; i <= 5; i++) {
  alert(`You are currently viewing book number ${i}`);
}

/* 6. Post browsing, question the user if they desire to continue looking or exit.
   - Implement a `do...while` loop to facilitate continuous browsing until they opt to leave. */

let choice = prompt("Do you wish to continue looking or exit? (Continue/Exit)");

do {
  alert("Continue");
  choice = prompt("Do you wish to continue looking or exit? (Continue/Exit)");
} while (choice === "Continue");
{
  alert("Exit");
}

/* 7. On their decision to depart, display the message: "Goodbye, [user's name]! See you next time." */

alert(`Goodbye, ${name}! See you next time.`);