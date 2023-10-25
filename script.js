'use strict';


let userName = prompt("What is your name?");
console.log(`Name entered: ${userName}`);

if (userName) {
  let live = prompt(`${userName}, well done! Does Steph live in Atlanta? (Type 'yes' or 'no')`).toLowerCase();
  console.log(`Steph lives in Atlanta: ${live}`);
  alert(`Steph lives in Atlanta: ${live}`);

  //switch statement
  switch (live) {
    case "yes":
    case "y":
      let children = prompt('Does she have children? (Type "yes" or "no")').toLowerCase();
      console.log(`Steph has children: ${children}`);
      alert(`Steph has children: ${children}`);

      if (children === "no" || children === "n") { 
        let pets = prompt(`Right...again, ${userName}! Does Steph have a pet? (Type 'yes' or 'no')`).toLowerCase();
        console.log(`Steph has a pet: ${pets}`);
        alert(`Steph has a pet: ${pets}`);

        if (pets === "yes" || pets === "y") {
          let bar = prompt(`Correct ${userName}! Steph is an attorney. Did she pass the state bar exam? (Type 'yes' or 'no')`).toLowerCase();
          console.log(`Steph passed the state bar exam: ${bar}`);
          alert(`Steph passed the state bar exam: ${bar}`);

          if (bar === "yes" || bar === "y") {
            let sure = prompt('Are you sure? (Type "yes" or "no")').toLowerCase();

            if (sure === "yes" || sure === "y") {
              alert("Congratulations! You are so right.");
            } else {
              alert("Sorry. Maybe next time.");
            }

          } else {
            alert("Please type 'yes' or 'no'.");
          }

        } else {
          alert("Please type 'yes' or 'no'.");
        }

      } else {
        alert("Please type 'yes' or 'no'.");
      }
      break;

    case "no":
    case "n":
        alert("Please type 'yes' or 'no'.");
        break;
    
    default:
      alert("Please type 'yes' or 'no'.");
      break;
  }  

} else {
  alert("Please enter your name to continue.");
}














/*let userName = prompt('What is your name?');
console.log(`Name entered: ${userName}`);

if (userName) {
  let live = prompt(`${userName}, well done! Does Steph live in Atlanta? (Type 'yes' or 'no')`);
  console.log(`Steph lives in Atlanta: ${live}`);

  if (live.toLowerCase() === 'yes') {
    let children = prompt('Does she have children?(Type 'yes' or 'no')');
    console.log(`Steph has children:${children}`);


      if (children.toLowerCase() === 'yes'){
        let pets = prompt (`Right...again, ${userName}! Does Steph have a pet?(Type 'yes' or 'no')`);
          
        if (pets.toLowerCase() === 'yes'){
        let bar = prompt (`Correct ${userName}! Steph is an attorney. Did she pass the state bar exam?(Type 'yes' or 'no')`);
            
          if (bar.toLowerCase() === 'yes'){
              
              let sure = prompt ('Are you sure?(Type 'yes' or 'no')');
              if (sure.toLowerCase() === 'yes'){
                alert('Congratulations! You are so right.');

              } else {
                alert('Sorry. Maybe next time.');
              }

          } else (bar.toLowerCase() === 'no');  {
              alert ("Please type 'yes' or 'no'.");

        } else  (pets.toLowerCase() === 'no'); {
          alert("Please type 'yes' or 'no'.");

      } else  (children.toLowerCase() === 'no'); {
        alert("Please type 'yes' or 'no'.");

  } else (live.toLowerCase() === 'no'); {
    alert("Please type 'yes' or 'no'.");

} else {
  alert("Please enter your name to continue.");
} */

/* alert(`Hi, ${userName}, I'm Steph`);

Does Steph live in Atlanta?
  let live = prompt('${name}, well done! Does Steph live in Atlanta? (Type 'yes' or 'no')`);
  if (live){
    let children = prompt('Does she have children?(Type 'yes' or 'no')');
  } else {
    alert('Sorry. That's not quite right.');
  }
Does she have children?
Does she have a pet?
Did she pass the state bar exam?
Are you sure?