# Library Program

## Problem Statement:

You are tasked with building a simple program for a library. Below are the requirements for the program:

### Initial Interaction:

1. Greet the user with a "Hello, world!" message.
2. Ask the user for their name and store it in a variable.
3. Display a message saying, "Welcome, [user's name]!" using template strings.

### Book Search:

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

### Browsing:

5. Implement a `for` loop to simulate the user browsing through 5 books. Display the book number they are currently viewing.
6. Post browsing, question the user if they desire to continue looking or exit.
   - Implement a `do...while` loop to facilitate continuous browsing until they opt to leave.

### Conclusion:

7. On their decision to depart, display the message: "Goodbye, [user's name]! See you next time."

### Constraints:

- Appropriately employ `let`, `const`, and `var`.
- Integrate template strings, truthy/falsy values, and the ternary operator where apt.
- Handle potential truthy/falsy values like null or undefined.
- Incorporate the `&&` and `||` operators for conditions when required.
- Ensure error handling using `if...else if...else` and nested `if` statements.
