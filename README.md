# Books

## Description 
React page to loop through JSON data to dynamically create Bootstrap cards

## Purpose 
This was done as an assignment in the MIT course - Full Stack Development with Mern

---------

## Technologies Used 
- HTML
- CSS
- Javascript

---------

## Installation 
- Clone this repository to your local machine
- Open a command line on your computer and run the command cd path-to-project-root (this should be the actual directory where the repository is located on your local machine)
- Within the same command-line window, run npm install http-server which will allow you to fire up a web server to access the paage
- Once the command completes successfully, run http-server -c-1
- Open your browser of choice and browse to http://127.0.0.1:8080/

## How to Run 
- When the page is loaded in your browser, you will notice a list of cards with information about various books

---------

## Improvements Made
- 2022-04-15: changed hard coded rows in table layout to grab data from the json file
- 2022-04-15: if data is a website, creating a hyperlink
- 2022-04-15: if data is published (date), stripping out the time value


---------

## Files 
- **/index.html** - Start-up file to be opened by browser
- **/books.js** - Contains the React code to build the Bootstrap cards containing the book(s) information
- **/books.json** - Contains the data for the books that is parsed in books.js
- **styles.css** - Stylesheet file that positions objects, controls text, colors, and layout

---------

## Contributing 
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[The MIT License (MIT)](https://github.com/slumpbuster/Formik/blob/main/LICENSE)