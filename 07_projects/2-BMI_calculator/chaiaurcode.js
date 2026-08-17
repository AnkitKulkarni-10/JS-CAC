const form = document.querySelector('form')
form.addEventListener('submit', function (e) {
    e.preventDefault(); /*The preventDefault() method of the Event interface tells the user agent that,
    the event is being explicitly handled, so its default action, such as page scrolling, link navigation,
    or pasting text, should not be taken.*/
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    //Checking to get a valid input from the user
    if(height === ''|| height < 0 || isNaN(height)) {
        results.innerHTML = "Please enter a valid height!"
    } else if(weight === ''|| weight < 0 || isNaN(weight)) {
        results.innerHTML = "Please enter a valid weight!"
    } else {
        const bmi = (weight/((height * height)/10000)).toFixed(2)
    //showing the result
    if (bmi < 18.6) {
        results.innerHTML = `BMI: ${bmi}<br>Under Weight!`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
        results.innerHTML = `BMI: ${bmi}<br>Normal range`;
    } else {
        results.innerHTML = `BMI: ${bmi}<br>Over Weight!`;
    }
    }

})