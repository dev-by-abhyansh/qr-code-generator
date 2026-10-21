/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from 'inquirer';
import qr from "qr-image";
import fs from "fs";
inquirer
  .prompt([
    {
        //We are defining a question object and it has two properties , 1st is the message which will displayed and the name which we mention here is the name used for storing the information entered by the user 
        message:"Type in your URL: ",
        name:"URL",
    },
  ])
  .then((answers) => {//The answers parameter stores the object storing the user response sent by the .prompt 
    // Use user feedback for... whatever!!
    const url=answers.URL;//Now we will store the URL property of the object in variable url and console.log it 
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr_img.svg'));

    fs.writeFile('URL.txt', url, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
    }); 
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });