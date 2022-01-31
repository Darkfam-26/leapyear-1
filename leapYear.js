function isLeapYear() {
    const yearCount = parseInt(document.getElementById('year').value);
    const leap = document.getElementById('show');
    if (((yearCount % 4 == 0) && (yearCount % 100 != 0)) || (yearCount % 400 == 0))
    {
    leap.textContent += "Yup this is a leap year"
    }
    else if (yearCount == 143){
     leap.textContent += "I love you (^_^)"  
    }
    else if (yearCount == 359){
     leap.textContent += "Always remember i am with you ❤💝"  
    }
    else   {
    leap.textContent += "This is not a leap year"
    }
}

function refreash (){
    window.location.reload();
}

   