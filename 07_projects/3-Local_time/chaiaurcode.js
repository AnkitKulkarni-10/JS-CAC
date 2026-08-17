const clock = document.getElementById('clock')
//We have a direct Date Object in js
//console.log(date.toLocaleTimeString());
setInterval(function () {
    //We have a direct Date Object in js
    const date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
} , 1000)
