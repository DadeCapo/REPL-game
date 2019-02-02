const readlineSync = require('readline-sync'),
     input = readlineSync.question,
     responses = [];




console.log( "Hi, My name is Wyncode and I Love Fitness!" );
console.log( "Can you guess my month and year of birth? if you cant, get ready to sweat!" );
while (true) {
  let option = readlineSync.question( "Tip: From 2012 to 2017\n" );

  switch(option) {
  case "2012":
    console.log( "Not close .. 10 Jumping Jacks, try again." );
    break;
  case "2013":
    console.log( "Soooo Close.... but.... you owe me 3 pushups, try again" );
    break;
  case "2014":
    console.log( "Muy BIEN!! but wait...Can you guess the month now?" );
    while (true) {
      let option = readlineSync.question("Tip: 12 months in a year (capitalize the month)\n");
      if(option === "May") {
        console.log("YES! Now you wont forget... and you owe Simon Choren lunch today!");
        return;
      } else {
        console.log("Wrong...5 air squats!..try again!");
      }
      readlineSync.question( "Press enter to continue." )
      console.log('\033c');
    }
    break;
  case "2015":
      console.log( "Nope...5 Jumping Jacks NOW! try again" );
      break;
  case "2016":
      console.log( "OH WOW ..no...7 pushups NOW! try again" );
      break;
  case "2017":
    console.log( "Negative!! 10 air squats, try again!" );
    break;
  default:
    console.log( "Really?...like for real?... you are my student, you dont know?" );
    console.log( "You better ask for help!" );
  }
  readlineSync.question( "Press enter to continue." )
  console.log('\033c');
}
