//warning massage
function showWarning (id) {
    const tRed = document.getElementById('red');
     tRed.style.display = id
}
showWarning('none')
function isLeapYear() {
    const year = document.getElementById('year')
    const yearCount = parseInt(year.value);
    const leap = document.getElementById('show');

    // error handle of empty input
    if (isNaN(yearCount)) {
       showWarning("block")
        return;        
    }
    // main code
    showWarning("none")

    leap.textContent = ""
    if (((yearCount % 4 == 0) && (yearCount % 100 != 0)) || (yearCount % 400 == 0))
    {
    leap.textContent += "Yup this is a leap year"
    }
    else if (yearCount == 143){
     leap.textContent += "I love you (^_^)"  
    }
    else if (yearCount == 914){
     leap.textContent += "you are damn cute (+_+)"  
    }
    else if (yearCount == 359){
     leap.textContent += "Always remember i am with you ❤💝"  
    }
    else   {
    leap.textContent += "This is not a leap year"
    }
}

function refreash (){
    const year = document.getElementById('year')
    const leap = document.getElementById('show');

    year.value = ""
    leap.textContent = ""
}

   