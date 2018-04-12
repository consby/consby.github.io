var myimage = document.querySelector('img');

myimage.onmouseover = function(){
    var mySrc = myimage.getAttribute('src');
    if(mySrc === 'images/bamberg.jpg') {
      myimage.setAttribute ('src','images/rathaus.jpg');
    } else {
      myimage.setAttribute ('src','images/bamberg.jpg');
    }
}


var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Bitte geben Sie Ihren Namen ein.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Herzlich Willkommen, ' + myName;
}

if(!localStorage.getItem('name')){
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Willkommen zurück, ' + storedName;
}

myButton.onmousedown = function() {
    setUserName();
}