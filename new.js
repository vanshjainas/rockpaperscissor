let userscore=0;
let computerscore=0;
let userchoice="";
let compchoice="";
let rock=document.querySelector("#rock");
let paper=document.querySelector("#paper");
let scissor=document.querySelector("#scissor");
let result="";
let user=document.querySelector("#user");
let computer=document.querySelector("#computer");
let output=document.querySelector(".result");
function  randomchoice(){
    let a ;
    a = Math.floor(Math.random()*3);
    if(a==0){
        compchoice= "rock";
    }
    else if (a==1){
        compchoice = "paper";
    }
    else {
        compchoice ="scissor";
    }
}
function results(){
    if(userchoice=="rock" && compchoice=="rock"){
       result=0;
    }
    else if(userchoice=="rock" && compchoice=="paper"){
        result=2;
    }
    else if(userchoice=="rock" && compchoice=="scissor"){
        result=1;
    }
    else if(userchoice=="paper" && compchoice=="rock"){
        result=1;
    }
    else if(userchoice=="paper" && compchoice=="paper"){
        result=0;
    }
    else if(userchoice=="paper" && compchoice=="scissor"){
        result=2;
    }
    else if(userchoice=="scissor" && compchoice=="rock"){
        result=2;
    }
    else if(userchoice=="scissor" && compchoice=="paper"){
        result=1;
    }
    else if(userchoice=="scissor" && compchoice=="scissor"){
        result=0;
    }
};
function resultaction(){
    if(result==0){
        output.innerText=`Draw! both chose ${compchoice} `;
        output.setAttribute("class","result");
    }
    else if(result==1){
      userscore ++;
      output.innerText=`User won as computer choice is ${compchoice} `;
      output.setAttribute("class","won");
    }
    else if(result==2){
      computerscore ++;
      output.innerText=`user lost as computer choice ${compchoice} is`;
      output.setAttribute("class","lost");
    }

user.innerText=userscore;
computer.innerText=computerscore;
}
rock.addEventListener("click",()=>{
    userchoice="rock";
    randomchoice();
    results();
    resultaction();
});
paper.addEventListener("click",()=>{
    userchoice="paper";
    randomchoice();
    results();
    resultaction();
})
scissor.addEventListener("click",()=>{
    userchoice="scissor";
    randomchoice();
    results();
    resultaction();
})
