#! /usr/bin/env node
import * as readline from 'readline';

// Array of color names
const colors: string[] = ["red", "orange", "yellow", "green", "blue", "indigo", "violet", "purple", "pink", "turquoise", "cyan", "magenta", "lime", "teal", "maroon", "navy", "gold", "silver", "gray", "black"];

// Create interface for reading user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask user for their name
rl.question("Please enter your name: ", (userName: string) => {
  // Ask user for their favorite color
  rl.question(`Hello ${userName}! Please enter your favorite color: `, (userColor: string) => {
    // Check if the entered color exists in the array
    const index: number = colors.findIndex(color => color.toLowerCase() === userColor.toLowerCase());

    // If the color exists, show a message with the lucky color
    if (index !== -1) {
      console.log(`Your lucky color is ${colors[index]}!`);
    } else {
      console.log("Sorry, we couldn't find your lucky color. But remember, every color can be lucky!");
    }

    // Close the interface
    rl.close();
  });
});
