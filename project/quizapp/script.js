let questions = [

{
    que:"What is JavaScript?",
    a:"Programming Language",
    b:"Database",
    c:"Browser",
    d:"Operating System"
},

{
    que:"JavaScript file extension is?",
    a:".java",
    b:".js",
    c:".html",
    d:".css"
},

{
    que:"Which tag is used to connect JavaScript in HTML?",
    a:"style",
    b:"script",
    c:"link",
    d:"js"
},

{
    que:"Which keyword is used to declare variable?",
    a:"var",
    b:"int",
    c:"text",
    d:"number"
},

{
    que:"Which is not a JavaScript data type?",
    a:"String",
    b:"Boolean",
    c:"Number",
    d:"Float"
},

{
    que:"Which method is used for output in console?",
    a:"console.log()",
    b:"print()",
    c:"echo()",
    d:"show()"
},

{
    que:"DOM full form?",
    a:"Document Object Model",
    b:"Data Object Model",
    c:"Digital Object Method",
    d:"Document Order Method"
},

{
    que:"Which method selects first matching element?",
    a:"getElement()",
    b:"querySelector()",
    c:"select()",
    d:"find()"
},

{
    que:"Which event is used for mouse click?",
    a:"hover",
    b:"click",
    c:"change",
    d:"load"
},

{
    que:"Which symbol is used for single line comment?",
    a:"//",
    b:"/* */",
    c:"##",
    d:"<>"
},

{
    que:"Array index starts from?",
    a:"0",
    b:"1",
    c:"2",
    d:"-1"
},

{
    que:"Which brackets are used for array?",
    a:"{}",
    b:"[]",
    c:"()",
    d:"<>"
},

{
    que:"Which method adds value at end of array?",
    a:"push()",
    b:"pop()",
    c:"shift()",
    d:"slice()"
},

{
    que:"Which method removes last array value?",
    a:"delete()",
    b:"remove()",
    c:"pop()",
    d:"clear()"
},

{
    que:"Which loop checks condition first?",
    a:"for loop",
    b:"do while",
    c:"function",
    d:"array"
},

{
    que:"Which keyword stops loop execution?",
    a:"stop",
    b:"break",
    c:"close",
    d:"end"
},

{
    que:"Which keyword creates function?",
    a:"function",
    b:"method",
    c:"create",
    d:"make"
},

{
    que:"Which operator checks value and datatype?",
    a:"=",
    b:"==",
    c:"===",
    d:"!="
},

{
    que:"Which value represents no value?",
    a:"undefined",
    b:"empty",
    c:"zero",
    d:"space"
},

{
    que:"JavaScript is mainly used for?",
    a:"Adding interactivity",
    b:"Database only",
    c:"Styling only",
    d:"Operating System"
}

];

let question = document.querySelector("h2");

let option1 = document.querySelector(".op-1");
let option2 = document.querySelector(".op-2");
let option3 = document.querySelector(".op-3");
let option4 = document.querySelector(".op-4");

let next = document.querySelector(".next");
let Previous = document.querySelector(".Previous");

let index = 0;

function showquestion(){

    question.innerHTML = questions[index].que;

    option1.innerHTML = questions[index].a;
    option2.innerHTML = questions[index].b;
    option3.innerHTML = questions[index].c;
    option4.innerHTML = questions[index].d;

    if(index == 0){
        // Previous.disabled = true;
        Previous.classList.add("no-cursor");
    }
    else{
        // Previous.disabled = false;
        Previous.classList.remove("no-cursor");
    }

    if(index == questions.length - 1){
        next.classList.add("no-cursor");
        next.disabled = true;
    }
    else{
        next.classList.remove("no-cursor");
        next.disabled = false;
    }
}

    next.addEventListener("click",function(){
        if(index < questions.length - 1){
            index++;
            showquestion();
        }
    });

    Previous.addEventListener("click",function(){
        if(index > 0){
            index--;
            showquestion();
        }
    });


showquestion();