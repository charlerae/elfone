

/* determining choice of first button  
school.addEventListener('click', function studychoice(){
    console.log(Math.floor(Math.random() * 10));
    
if (studychoice() < 6){
    onClick="javascript: window.location.href = '/schoolcongrats'";
    } else {
        onClick="javascript: window.location.href = '/schoolsorry'";
    }
});*/

/* market.addEventListener('click', function marketchoice(){
    console.log(Math.floor(Math.random() * 10));
    
if (marketchoice() < 6){
    onClick="javascript: window.location.href = '/marketcongrats'";
    } else {
        onClick="javascript: window.location.href = '/marketsorry'";
    }
});


war.addEventListener('click', function warchoice(){
    console.log(Math.floor(Math.random() * 10));
    
if (warchoice() < 6){
    onClick="javascript: window.location.href = '/warcongrats'";
    } else {
        onClick="javascript: window.location.href = '/warsorry'";
    }
});

arms.addEventListener('click', function queenchoice(){
    console.log(Math.floor(Math.random() * 10));
    
if (queenchoice() < 6){
    onClick="javascript: window.location.href = '/armscongrats'";
    } else {
        onClick="javascript: window.location.href = '/armssorry'";
    }
}); */

function queenchoice() {
    return (Math.floor(Math.random() * 10));
}

let queen = document.querySelector('.queen');    

function meetqueen() {
    if (queenchoice() < 6) {
    alert ('Congratulations The Queen Just Added You To Her Court. You can retire and relax. Enjoy your new life of luxury, or you could always play again..');
    } else { 
        alert ('The Queen’s In A Funny Mood! She has decided to make you the Official Court Jester. An opportunity you literally cannot refuse.');
    };
};

queen.addEventListener("click", meetqueen);


let tryagain = document.querySelector('.tryagain');


function restart() {
    
    alert ('You Lose!!')
    
};

tryagain.addEventListener("click", restart);