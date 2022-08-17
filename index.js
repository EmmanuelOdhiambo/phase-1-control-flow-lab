function scuberGreetingForFeet(distance){     //if and else if block
  if (distance <= 400) {
    return 'This one is on me!';
  }else if (distance < 2500) {
      return 'I will gladly take your thirty bucks.';
    } else if(distance > 2500) {
      return 'No can do.';
    }}
 



function ternaryCheckCity(city){                     //using ternary operator
  return city==='NYC' ? "Ok, sounds good." : "No go."
}

function switchOnCharmFromTip(tip){    //using switch statements 
  switch(tip){
    case 'generous':
      return 'Thank you so much.'
    case 'not as generous':
      return 'Thank you.'
    default:
      return 'Bye.'
  
  }

  
  
}