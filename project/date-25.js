let books = [

{id:1,
name:"Gujarati Vyakaran",
author:"Patel",
status:"Available"
},

{id:2,
name:"Hindi Vyakaran",
author:"Sharma",
status:"Issued"
},

{id:3,
name:"Gujarati Sahitya",
author:"Joshi",
status:"Issued"
},

{id:4,
name:"Bal Varta",
author:"Nayak",
status:"Available"
},

{id:5,
name:"Mahabharat",
author:"Vyas",
status:"Issued"
}


];

// console.log(books);


document.querySelector(".display").onclick=function(){
document.querySelector("table").classList.add("show");
document.querySelector("tbody").innerHTML="";
for(const book of books){
document.querySelector("tbody").innerHTML+=`
<tr>
<td>${book.id}</td>
<td>${book.name}</td>
<td>${book.author}</td>
<td>${book.status}</td>
</tr>`;}
}


document.querySelector(".add").onclick=function(){
var book={
id:Number(prompt("Enter Book ID : ")),
name:prompt("Enter Book Name : "),
author:prompt("Enter Author Name : "),
status:"Available"};
books.push(book);
console.log(books);
}


document.querySelector(".issue").onclick=function(){
var id=Number(prompt("Enter Book ID : "));
for(const book of books){
if(book.id==id){
book.status="Issued";}
}
}


document.querySelector(".return").onclick=function(){
var id=Number(prompt("Enter Book ID : "));
for(const book of books){
if(book.id==id){
book.status="Available";}
}
}


document.querySelector(".delete").onclick=function(){
var id=Number(prompt("Enter Book ID : "));
books=books.filter((book)=>{
return book.id!=id;});
}


document.querySelector(".available").onclick=function(){
document.querySelector("table").classList.add("show");
document.querySelector("tbody").innerHTML="";
for(const book of books){
if(book.status=="Available"){
document.querySelector("tbody").innerHTML+=`
<tr>
<td>${book.id}</td>
<td>${book.name}</td>
<td>${book.author}</td>
<td>${book.status}</td>
</tr>`;
}
}
}


document.querySelector("main").innerHTML+=books.length;