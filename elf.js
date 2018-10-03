

/* Defend City Button */
function fight() {
    return (Math.floor(Math.random() * 10));
} 

function defend() {
    if (fight() < 6) {
    alert (' Congratulations You Were Promoted!! You were integral in defending our city. You even earned a promotion that lands you squarly in the Vahnahlahs noble class. This is huge for you, it means you get to meet the queen!!');
    } else { 
        alert ('I am sorry to inform you that you were lost in battle. While you will be remembered as a part of Vahnahlas history your game ends here.');
    };
}

/* Sell At Market Button */
function learn() {
    return (Math.floor(Math.random() * 10));
} 

function sale() {
    if (learn() < 6) {
    alert ('Congratulations You Made BooKoo Bucks!! You were able to pay your taxes to become a citizen of Vahnahlah!  However, this is a critical time for our city as war has broken out with a neighboring city. Will you defend your new city and fight in the war, or will you do business selling arms?');
    } else { 
        alert ('Your Merchandise Sucks!!  Sorry but it seems you don’t have merchandise the citizens want to buy. Better Luck Next Time Grunt!');
    };
}

/* Go To School Button */
function learn() {
    return (Math.floor(Math.random() * 10));
}    

function gotoschool() {
    if (learn() < 6) {
    alert ('Congratulations You Graduated!! You are now a degree carrying citizen of Vahnahlah!  However, this is a critical time for our city as war has broken out with a neighboring city. Will you defend your new city and fight in the war, or will you do business selling arms?');
    } else { 
        alert ('You Flunked Out!!  Sorry but it seems you don’t have what it takes to make it through school. Better Luck Next Time Grunt!');
    };
}

/* Meet The Queen Button */
function queenchoice() {
    console.log(Math.floor(Math.random() * 10));
}

function meetqueen() {
    if (queenchoice() < 6) {
    alert ('Congratulations The Queen Just Added You To Her Court. You can retire and relax. Enjoy your new life of luxury, or you could always play again..');
    } else { 
        alert ('The Queen’s In A Funny Mood! She has decided to make you the Official Court Jester. An opportunity you literally cannot refuse.');
    };
};

