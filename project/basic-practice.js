//  task-1
// let studentName = "Krish virpariya";
// const collegeName = "darshan University";
// var age = 19;

// console.log(studentName);
// console.log(collegeName);
// console.log(age);


//  task-2
// let city = 'Ahmedabad';
// console.log("Before change:", city);
// city = 'Rajkot';
// console.log("After change:", city);



// task-3
const country = "India";

console.log(country); // India

country = "canada"; // Error

console.log(country);

// task-4

// let a = 20;
// let b = 15;

// console.log("Addition:", a + b);
// console.log("Subtraction:", a - b);
// console.log("Multiplication:", a * b);
// console.log("Division:", a / b);
// console.log("Modulus:", a % b);


// task-5
// let count = 5;
// console.log("Initial count:", count);

// count++;
// console.log("After count++:", count);

// count--;
// console.log("After count--:", count);


// // task-6
// let marks = 40;
// console.log("Initial marks:", marks);

// marks += 20;
// console.log("After += 10:", marks);

// marks -= 5;
// console.log("After -= 5:", marks);

// marks *= 2;
// console.log("After *= 2:", marks);

// marks /= 3;
// console.log("After /= 3:", marks);


// // task-7
// let salary = 50000;
// console.log("Initial salary:", salary);

// salary += 2000;
// console.log("Salary after increase:", salary);


// // task-8
// let x = 20;
// let y = 30;

// console.log("x == y:", x == y);
// console.log("x != y:", x != y);
// console.log("x > y:", x > y);
// console.log("x < y:", x < y);
// console.log("x >= y:", x >= y);
// console.log("x <= y:", x <= y);


// // task-9
// let num1 = '10';
// let num2 = 10;

// console.log("num1 == num2:", num1 == num2);  // true (compares value only)
// console.log("num1 === num2:", num1 === num2); // false (compares value and type)


// // task-10
// let age = 22;
// let hasLicense = true;

// let canDrive = age >= 18 && hasLicense;
// console.log("Can the person drive?", canDrive);


// // task-11
// let isWeekend = false;
// let isHoliday = true;

// let isOfficeClosed = isWeekend || isHoliday;
// console.log("Is office closed?", isOfficeClosed);


// // task-12
// let isLoggedIn = false;
// let isLoggedOut = !isLoggedIn;

// console.log("Original isLoggedIn:", isLoggedIn);
// console.log("After ! operator:", isLoggedOut);


// task-13
// console.log("This is a normal message.");
// console.warn("This is a warning message.");
// console.error("This is an error message.");

// // task-14
// let students = ["Alice", "Bob", "Charlie", "David", "Emma"];
// console.table(students);


// task-15
// let students = [
// "Krish",
// "Dipak",
// "Het",
// "Yana",
// "Darshit"
// ];

// console.table(students);

// task-16
//  console.log("Message 1");
// console.log("Message 2");

// console.clear();

// task-17
// let headingElement = document.getElementById('mainHeading');
//  console.log(headingElement);


// task-18
        // let paragraphs = document.getElementsByClassName('info');
        // console.log(paragraphs);
        
        // // Loop through all paragraphs
        // for(let i = 0; i < paragraphs.length; i++) {
        //     console.log(paragraphs[i]);
        // }

// task-19
//    let listItems = document.getElementsByTagName('li');
//         console.log(listItems);
        
//         // Loop through all list items
//         for(let i = 0; i < listItems.length; i++) {
//             console.log(listItems[i].textContent);
//         }

// task-20
  // Using querySelector
        // let element1 = document.querySelector('#title');
        // console.log("Using querySelector:", element1);
        
        // // Using querySelectorAll
        // let elements = document.querySelectorAll('h1');
        // console.log("Using querySelectorAll:", elements);
        
        // // Changing content using innerHTML
        // element1.innerHTML = "<span>Updated with innerHTML</span>";
        // console.log("After innerHTML:", element1.innerHTML);
        
        // // Changing content using innerText
        // element1.innerText = "Updated with innerText";
        // console.log("After innerText:", element1.innerText);
        
        // // Changing content using textContent
        // element1.textContent = "Updated with textContent";
        // console.log("After textContent:", element1.textContent);
        
        // // Various typeof examples
        // console.log("typeof 'Hello':", typeof "Hello");
        // console.log("typeof 42:", typeof 42);
        // console.log("typeof true:", typeof true);
        // console.log("typeof undefined:", typeof undefined);
        // console.log("typeof null:", typeof null);
        // console.log("typeof {name:'John'}:", typeof {name:'John'});
        // console.log("typeof [1,2,3]:", typeof [1,2,3]);
        // console.log("typeof function(){}:", typeof function(){});