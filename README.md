# Responsive To-Do List App

This is a simple to-do list web app that allows users to add, edit, and delete tasks. It is built using HTML, CSS, JavaScript, and Bootstrap for responsiveness.

## Functionality

- Users can add a new to-do task by typing into the text input and clicking the 'Add Task' button
- The new task will be added to the task list with default styling
- Each task has an 'Edit' and 'Delete' button
- Clicking the 'Edit' button allows the user to update the task text
- Clicking the 'Delete' button will remove the task from the list
- The 'Remove All' button clears the entire task list
- The task list uses ordered list markup with custom styled numbering
- Tasks persist in the list thanks to the JavaScript code

## Responsiveness

The app is designed to work seamlessly on mobile, tablet, and desktop screens thanks to Bootstrap and media queries in the CSS.

- On narrow screens, the input field expands to take up more width
- The Add and Remove All buttons do not expand and stack vertically to save space
- The task list height is limited with scrolling enabled to improve mobile use

## Code Structure

**HTML**

- `index.html` contains the overall structure and container elements 
- Includes the text input, buttons, and empty ordered list for tasks
- Links Bootstrap CSS & JS along with custom CSS and JS files

**CSS**

- `styles.css` has styling for the look and feel
- Uses background image, colors, shadows, borders, etc.  
- Media queries added to create responsiveness
- Custom list style type for numbered tasks

**JS**

- `script.js` handles all the logic and manipulation
- Functions to add, edit, delete tasks
- Stores tasks in the DOM rather than an array
- Uses DOM methods like `createElement`, `appendChild`, etc.
- Event listeners trigger the functions 

## Usage

To use the app:

1. Open `index.html` in a browser
2. Type a task into the text input
3. Click **'Add Task'** to add it to the list  
4. **Edit** or **delete** tasks using the buttons
5. Click **'Remove All'** to clear the list
6. Resize browser to see responsive design
