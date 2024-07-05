// Import the readline module
const readline = require('readline');

// Create an interface to read input from the terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


// Function to generate student grades based on marks input
function studentGradeGenerator(marks) {
    // Check if marks is not a number, or if it's less than 0 or greater than 100
    if (isNaN(marks) || marks < 0 || marks > 100) {
        return 'Invalid input!';
    }

    let grade; // Declare a variable to store the grade

    // Determine grade based on marks range
    if (marks > 79) {
        grade = 'A'; 
    } else if (marks >= 60 && marks <= 79) {
        grade = 'B';
    } else if (marks >= 50 && marks <= 59) {
        grade = 'C'; 
    } else if (marks >= 40 && marks <= 49) {
        grade = 'D'; 
    } else {
        grade = 'E';
    }

    console.log(`The grade is: ${grade}`); // Print the determined grade to the console
    return grade; 
}

// Prompt the user for input
rl.question('Enter students marks: ', (input)=> {
    const marks = parseFloat(input);

    //GEnerate the grade
    studentGradeGenerator(marks);

    //close the readline interface
    rl.close();
});


