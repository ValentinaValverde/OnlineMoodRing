import "./styles.css";

const submitMood = document.querySelector('#submitMood');

//we are creating a function that will reset the class and add the new one
function toggleClasses(element, className, ){
  if(element.classList.contains(className)){
    element.classList.remove(className);
  } else {
    element.classList.add(className);
  }
  console.log(element);
  console.log(className);

}


submitMood.addEventListener('click', function(event){
  event.preventDefault();
  const moodInput = document.querySelector("[name=mood]:checked")
  const myMood = document.querySelector('#myMood');
  const moodValue = moodInput.value;


  myMood.innerHTML = moodValue;
  console.log(moodInput.value); 
  console.log(myMood.classList);
  const classes = myMood.classList;
  classes.remove('default-mood')

  switch(moodValue){
    case 'veryHappy':
      classes.add('very-happy') 
      classes.remove('happy-mood', 'not-so-happy-mood')
      console.log(classes);
      toggleClasses(moodInput, moodValue);
    break;
    case 'Happy':
      classes.add('happy-mood')
      classes.remove('very-happy', 'not-so-happy-mood')
      console.log(classes);
      toggleClasses(moodInput, moodValue);

    break;
    case'notSoHappy':
      classes.add('not-so-happy-mood')
      classes.remove('very-happy', 'happy-mood')
      console.log(classes);
      toggleClasses(moodInput, moodValue);
    break;
    default:
      console.log("IT'S A SWITCH")
  }
}) 
