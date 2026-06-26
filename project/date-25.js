let books = [

{
id:1,
name:"Gujarati Vyakaran",
author:"Patel",
category:"Education",
quantity:5,
status:"Available"
},

{
id:2,
name:"Hindi Vyakaran",
author:"Sharma",
category:"Language",
quantity:0,
status:"Out of Stock"
},

{
id:3,
name:"Gujarati Vyakaran",
author:"Joshi",
category:"Language",
quantity:2,
status:"Available"
},

{
id:4,
name:"Bal Varta",
author:"Nayak",
category:"Story",
quantity:4,
status:"Available"
},

{
id:5,
name:"Mahabharat",
author:"Vyas",
category:"Religious",
quantity:0,
status:"Out of Stock"
}

];

// console.log(books);

document.querySelector(".display").onclick=function(){
document.querySelector("table").classList.add("show");
document.querySelector("tbody").innerHTML="";
for(const book of books){
book.status=(book.quantity>0)?"Available":"Out of Stock";
document.querySelector("tbody").innerHTML+=`
<tr>
<td>${book.id}</td>
<td>${book.name}</td>
<td>${book.author}</td>
<td>${book.category}</td>
<td>${book.quantity}</td>
<td>${book.status}</td>
</tr>`;
}
}

document.querySelector(".add").onclick=function(){
var book={
id:Number(prompt("Enter Book ID : ")),
name:prompt("Enter Book Name : "),
author:prompt("Enter Author Name : "),
category:prompt("Enter Category : "),
quantity:Number(prompt("Enter Quantity : "))};
book.status=(book.quantity>0)?"Available":"Out of Stock";
books.push(book);
console.log(books);
}

document.querySelector(".issue").onclick=function(){
var id=Number(prompt("Enter Book ID : "));
for(const book of books){
if(book.id==id){
if(book.quantity>0){
book.quantity--;}
book.status=(book.quantity>0)?"Available":"Out of Stock";
}
}
}


document.querySelector(".return").onclick=function(){
var id=Number(prompt("Enter Book ID : "));
for(const book of books){
if(book.id==id){
book.quantity++;
book.status=(book.quantity>0)?"Available":"Out of Stock";
}
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
book.status=(book.quantity>0)?"Available":"Out of Stock";
if(book.quantity>0){
document.querySelector("tbody").innerHTML+=`
<tr>
<td>${book.id}</td>
<td>${book.name}</td>
<td>${book.author}</td>
<td>${book.category}</td>
<td>${book.quantity}</td>
<td>${book.status}</td>
</tr>`;
}
}
}

document.querySelector("main").innerHTML+=books.length;