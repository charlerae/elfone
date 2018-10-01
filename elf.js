

/* determining choice of first button  */
school.addEventListener('click', function studychoice(){
    console.log(Math.floor(Math.random() * 10));
    
if (studychoice() < 6){
    onClick="javascript: windo.location.href = '/schoolcongrats'";
    } else {
        onClick="javascript: windo.location.href = '/schoolsorry'";
    }
});

market.addEventListener('click', function marketchoice(){
    console.log(Math.floor(Math.random() * 10));
    
if (marketchoice() < 6){
    onClick="javascript: windo.location.href = '/marketcongrats'";
    } else {
        onClick="javascript: windo.location.href = '/marketsorry'";
    }
});

/* determining choice of second button  */
school.addEventListener('click', function warchoice(){
    console.log(Math.floor(Math.random() * 10));
    
if (warchoice() < 6){
    onClick="javascript: windo.location.href = '/warcongrats'";
    } else {
        onClick="javascript: windo.location.href = '/warsorry'";
    }
});

market.addEventListener('click', function queenchoice(){
    console.log(Math.floor(Math.random() * 10));
    
if (queenchoice() < 6){
    onClick="javascript: windo.location.href = '/armscongrats'";
    } else {
        onClick="javascript: windo.location.href = '/armssorry'";
    }
});