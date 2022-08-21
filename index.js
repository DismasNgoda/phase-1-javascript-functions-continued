// code your solution here
function saturdayFun(a = "roller-skate"){
    return `This Saturday, I want to ${a}!`;
};


function mondayWork(b = "go to the office"){
    return `This Monday, I will ${b}.`    
};

function wrapAdjective(d = "*"){

    return function (c = "a hard worker") {
 
        return `You are ${d}${c}${d}!`;
     }
    
   }