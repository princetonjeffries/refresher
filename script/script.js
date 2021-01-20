//question 1 
var input = prompt("input please");
function calculate1(){ 
    let presentList = input.split("\n");
    var newList = [];
    var placeholder = 0;
    var answer = 0; 
    for(var i = 0; i < presentList.length; i++){
        newList.push(presentList[i].replace(/x/g, "*"));
        placeholder = eval(newList[i]);
        answer += placeholder;
    }
    console.log(answer);
}
calculate1();
function calculate2(){
    let presentList = input.split("\n");
    var newList = [];
    var placeholder = 0;
    var answer = 0; 
    for (var i = 0; i < presentList.length; i++){
        newList.push(presentList[i].replace(/x/g, "*"));

    }
    console.log(newList);
}
calculate2();