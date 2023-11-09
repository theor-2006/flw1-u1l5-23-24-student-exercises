function quizGame() {
    let answer1 = prompt("What is the capital of France?").toLowerCase();
  
    if (answer1 === "paris") {answer1 = "Correct!"};
    if (answer1 !== "paris") {answer1 = "Wrong!"};
  
    // 1. Write a conditonal statement that checks if answer 1 is equal to "paris".
    //  - If true, alert "Correct!"
    //  - Else, alert "Wrong!"
    //  - Note: here's an example of what using an alert looks like: alert("Correct!")

  
    

    let answer2 = parseInt(prompt("How many legs does an insect have? (Enter a number)"));

    // 2. Write a conditonal statement that checks if answer2 is 6.
    //  - If true, alert "Correct!"
    //  - Else if answer2 is less than 6, alert "Too low! Insects have 6 legs."
    //  - Else, alert "Too high! Insects have 6 legs."
   




    alert("Thanks for playing the quiz game!");
}


// 3. Once you've completed the conditionals, uncomment the line below and run your code.
// quizGame();
