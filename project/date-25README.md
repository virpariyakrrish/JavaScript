<div align="center">

# 📚 Library Management System

### A Modern Book Management Application Built with HTML, CSS & JavaScript

<p align="center">
<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
</p>

<p>
A simple and interactive Library Management System developed using
<b>HTML</b>, <b>CSS</b>, and <b>JavaScript</b></p>

</div>

---

# 📖 About The Project

Managing books manually can be difficult, especially when tracking availability and quantity.

This **Library Management System** provides an easy solution to manage books through a clean interface. Users can display all books, add new books, issue and return books, delete records, and filter available books.

This project is designed for beginners who want to practice **JavaScript DOM Manipulation**, **Arrays**, **Objects**, and **CRUD Operations**.

---

# ✨ Features

| Feature | Description |
|----------|-------------|
| 📚 Display Books | View all books in a table |
| ➕ Add Book | Add new books instantly |
| 📕 Issue Book | Reduce quantity by issuing books |
| 📗 Return Book | Increase quantity after returning |
| 🗑 Delete Book | Remove books permanently |
| ✅ Available Books | Display only available books |
| 📊 Total Books | Shows total number of books |
| 🔄 Auto Status | Automatically updates book status |

---

# 🛠️ Built With

| Technology | Purpose |
|------------|---------|
| HTML | Page Structure |
| CSS | User Interface |
| JavaScript | Application Logic |

---

# 📂 Folder Structure

```text
Library-Management-System/
│
├── 📄 date-25.html
├── 📄 date-25.js
└── 📄 date-25README.md
```

---

# 📚 Book Object Example

```javascript
{
    id: 1,
    name: "Gujarati Vyakaran",
    author: "Patel",
    category: "Education",
    quantity: 5,
    status: "Available"
}
```

---

# ⚙️ Application Workflow

```text
            Start
              │
              ▼
      Load Book Data
              │
              ▼
      Display Book List
              │
 ┌────────────┼─────────────┐
 │            │             │
 ▼            ▼             ▼
Add Book   Issue Book   Return Book
 │            │             │
 └────────────┼─────────────┘
              │
              ▼
     Update Quantity
              │
              ▼
 Update Book Status Automatically
              │
              ▼
      Refresh Book List
```

---

# 🚀 Functionalities

## 📖 Display Books

Displays every book with

- Book ID
- Book Name
- Author
- Category
- Quantity
- Status

---

## ➕

### Add Book

Users can add a new book by entering

- Book ID
- Book Name
- Author
- Category
- Quantity

The status is generated automatically.

---

## 📕

### Issue Book

✔ Enter Book ID

✔ Quantity decreases by 1

✔ If Quantity becomes **0**

Status changes to

```
Out of Stock
```

---

## 📗

### Return Book

✔ Enter Book ID

✔ Quantity increases by 1

✔ Status becomes

```
Available
```

---

## 🗑

### Delete Book

Deletes the selected book permanently.

---

## ✅

### Book Availability

Displays only books whose quantity is greater than zero.

---

# 📸 User Interface

```
------------------------------------------------------

             Library Management System

             Total Books : 5

------------------------------------------------------

[ Display Books ]

[ Add Book ]

[ Issue Book ]

[ Return Book ]

[ Delete Book ]

[ Book Availability ]

------------------------------------------------------
```

---

# 🎯 JavaScript Topics That Must Be Used

- DOM Manipulation
- Variables (let, const)
- Arrays
- Objects
- Functions
- Conditions (if-else)
- Loops (for-of)
- Array Methods (push, filter, find, sort)
- Template Literals

---

# Functions To Implement

- addBook()
- displayBooks()
- searchBook()
- issueBook()
- returnBook()
- deleteBook()
- getBookStatus()


---

# 🌟 Future Enhancements

- 🔍 Search Book
- ✏️ Edit Book Details

---

# 📊 Project Highlights

✔ Beginner Friendly

✔ Easy to Understand

✔ Clean JavaScript Code

✔ No External Libraries

✔ Fully Frontend Project

✔ Lightweight

---

# 👨‍💻 Developer

## **virpariya krish**

**Frontend Developer • JavaScript Learner**

---

<div align="center">

### ⭐ If you like this project, consider giving it a Star!

Made with ❤️ using HTML, CSS & JavaScript

</div>