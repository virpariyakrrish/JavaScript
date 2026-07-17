<div align="center">

# 📝 JavaScript Quiz Application

### An Interactive Quiz Application Built with HTML, CSS & Vanilla JavaScript

<p align="center">

<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>

<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>

<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>

</p>

<p align="center">

A responsive and interactive <b>JavaScript Quiz Application</b> developed using
<b>HTML</b>, <b>CSS</b>, and <b>Vanilla JavaScript</b>.

The application dynamically displays quiz questions, manages a countdown timer,
stores user answers, calculates scores, and finally displays a detailed result screen.

</p>

</div>

---

# 📖 About The Project

The **JavaScript Quiz Application** is a beginner-friendly frontend project built completely using **HTML**, **CSS**, and **Vanilla JavaScript**.

The project demonstrates how to build a complete quiz system using **DOM Manipulation**, **Arrays of Objects**, **Event Handling**, and **Timer Functions** without using any external libraries or frameworks.

The application loads questions dynamically from a JavaScript array. Every question contains four multiple-choice options, and users can navigate through questions using **Previous** and **Next** buttons.

Each question includes a **60-second countdown timer**. If the timer reaches zero, the question is automatically marked as a **Time Up Question**, and the next question appears automatically.

After completing the quiz, the application calculates:

- Total Questions
- Correct Answers
- Wrong Answers
- Time Up Questions
- Final Score
- Percentage
- Pass / Fail Result

The project is designed to help beginners understand how real-world quiz applications are developed using pure JavaScript.

---

# ✨ Features

| Feature | Description |
|----------|-------------|
| ❓ Dynamic Questions | Questions are generated dynamically using JavaScript |
| 📚 20 MCQs | Includes 20 JavaScript multiple-choice questions |
| 📻 Multiple Choice Options | Four options for every question |
| ⏱️ 60 Seconds Timer | Countdown timer for every question |
| ⏮️ Previous Button | Return to the previous question |
| ⏭️ Next Button | Move to the next question |
| ✅ Submit Quiz | Submit answers at any time |
| 💾 Answer Memory | Stores selected answers while navigating |
| ⚠️ Time Up Detection | Automatically detects unanswered timed-out questions |
| 📊 Score Calculation | Calculates correct answers |
| 📈 Percentage | Calculates percentage automatically |
| 🎯 Pass / Fail Result | Displays final quiz result |
| 🔄 Restart Quiz | Restart the quiz instantly |
| 🎨 Responsive UI | Modern and clean interface |
| ⚡ Vanilla JavaScript | No external libraries used |

---

# 🛠️ Built With

| Technology | Purpose |
|------------|---------|
| HTML5 | Structure of the Quiz Application |
| CSS3 | Styling & Responsive Layout |
| JavaScript | Quiz Logic, Timer, DOM Manipulation & Result Calculation |

---

# 📂 Folder Structure

```text
quizapp/
│
├── 📄 index.html
├── 📄 style.css
├── 📄 script.js
└── 📄 README.md
```

---

# 📋 Quiz Data Structure

The complete quiz is stored inside an **Array of Objects**.

Each object contains:

- Question
- Four Options
- Correct Answer

Example:

```javascript
const quiz = [

    {
        question: "What is JavaScript?",

        options: [

            "Programming Language",
            "Database",
            "Browser",
            "Operating System"

        ],

        answer: "Programming Language"
    }

];
```

Using an Array of Objects makes the application scalable because questions can be added or removed easily without changing the HTML.

---

# ⚙️ Application Workflow

```text
                    Start
                      │
                      ▼
              Load Questions
                      │
                      ▼
          Display First Question
                      │
                      ▼
          Start 60 Second Timer
                      │
          ┌───────────┴───────────┐
          │                       │
          ▼                       ▼
   User Selects Option       Time Reaches Zero
          │                       │
          ▼                       ▼
 Save Selected Answer      Store Time Up Question
          │                       │
          └───────────┬───────────┘
                      ▼
          Next / Previous Question
                      │
                      ▼
        Repeat Until Last Question
                      │
                      ▼
              Submit Quiz
                      │
                      ▼
         Calculate Final Result
                      │
                      ▼
          Display Score & Percentage
```

---

# 🚀 Functionalities

## ❓ Dynamic Question Rendering

All quiz questions are stored inside a JavaScript array.

Whenever the current question changes, JavaScript dynamically creates the HTML using **Template Literals** and **innerHTML**.

Instead of writing static HTML for every question, the application generates everything dynamically using DOM Manipulation.

### Benefits

✔ Easy to add new questions

✔ Less HTML code

✔ Better project scalability

✔ Real-world JavaScript practice

---

## ⏱️ 60 Seconds Countdown Timer

Each question starts with a fresh **60-second countdown timer**.

The timer updates every second using **setInterval()**.

When the timer reaches zero:

- Timer stops automatically
- Question is added to the Time Up array
- Alert message appears
- Next question loads automatically

## ⏭️ Next Question

The **Next** button allows users to move to the next question while preserving their selected answer.

### Working

✔ Saves the currently selected answer.

✔ Increases the current question index.

✔ Loads the next question dynamically.

✔ Resets the timer to **60 seconds**.

✔ Restores the previously selected answer if available.

---

## ⏮️ Previous Question

Users can return to any previously visited question.

The application stores every selected answer inside an **Answers Array**, making navigation smooth.

### Working

✔ Saves the selected answer.

✔ Decreases the current question index.

✔ Loads the previous question.

✔ Automatically checks the previously selected option.

✔ Restarts the timer for the displayed question.

---

## 💾 Answer Storage

The application stores user answers inside an array.

```javascript
let answers = new Array(quiz.length).fill(null);
```

Each selected option is saved using the current question index.

Example

```javascript
answers[index] = selected.value;
```

This allows users to navigate freely without losing answers.

---

## ⏱️ Time Up Detection

Every question has an individual countdown timer.

When the timer reaches **0 seconds**:

✔ Timer stops.

✔ Current question index is stored inside the **Time Up Array**.

✔ Alert message is displayed.

✔ Next question opens automatically.

```javascript
timeup.push(index);
```

This feature helps identify unanswered questions separately.

---

## ✅ Submit Quiz

Users can submit the quiz after answering all questions.

### Working

✔ Saves the currently selected answer.

✔ Stops the timer.

✔ Compares every answer with the correct answer.

✔ Calculates score.

✔ Calculates percentage.

✔ Displays PASS or FAIL result.

---

## 📊 Result Calculation

The application automatically calculates:

- 📋 Total Questions
- ✅ Correct Answers
- ❌ Wrong Answers
- ⌛ Time Up Questions
- 🎯 Final Score
- 📈 Percentage
- 🏆 Pass / Fail Result

### Formula

```javascript
percentage = (score / totalQuestions) * 100;
```

If percentage is **40% or above**, the user passes the quiz.

Otherwise the result is **FAIL**.

---

## 🔄 Restart Quiz

After displaying the result, users can restart the quiz.

The Restart button simply reloads the page.

```javascript
location.reload();
```

This resets:

- Current Question
- Timer
- Score
- Selected Answers
- Time Up Questions

---

# 📸 User Interface

```text
 ------------------------------------------------------------

                    📝 JavaScript Quiz

                  ⏱️ 01 : 00 Timer

 ------------------------------------------------------------

          What is JavaScript?

   ○ Programming Language

   ○ Database

   ○ Browser

   ○ Operating System

 ------------------------------------------------------------

      ◀ Previous      Next      Submit

 ------------------------------------------------------------
```

---

# 🎯 JavaScript Concepts Used

- Variables (`let`, `const`)
- Arrays
- Array of Objects
- DOM Manipulation
- Event Handling
- Radio Buttons
- Functions
- Loops
- Conditional Statements
- Template Literals
- Arrow Functions
- querySelector()
- querySelectorAll()
- innerHTML
- setInterval()
- clearInterval()
- push()
- fill()
- location.reload()
- Timer Logic
- Score Calculation
- Percentage Calculation

---

# 🎨 CSS Concepts Used

- Universal Selector
- Flexbox
- Background Colors
- Border Radius
- Padding
- Margin
- Box Model
- Hover Effects
- Button Styling
- Responsive Layout
- Cursor Pointer
- Font Styling
- Border
- Gap Property

---

# 🏗️ HTML Elements Used

- div
- section
- article
- main
- aside
- h2
- button
- input
- label
- span
- script
- link
- head
- body

---

# 📋 Main Variables Used

| Variable | Purpose |
|-----------|----------|
| `quiz` | Stores all quiz questions |
| `index` | Current question index |
| `score` | Stores correct answers |
| `timer` | Countdown timer |
| `timeLeft` | Remaining seconds |
| `answers` | Stores selected answers |
| `timeup` | Stores timed-out questions |

---

# 📋 Functions Used

| Function | Purpose |
|-----------|----------|
| `loadQuestion()` | Loads current question dynamically |
| `setInterval()` | Starts countdown timer |
| `clearInterval()` | Stops running timer |
| `Next Button` | Moves to next question |
| `Previous Button` | Loads previous question |
| `Submit Button` | Calculates final result |
| `location.reload()` | Restarts the quiz |

---

# 🔄 Quiz Working Logic

```text
Start Quiz
      │
      ▼
Load Current Question
      │
      ▼
Display Four Options
      │
      ▼
Start Countdown Timer
      │
 ┌────┴────┐
 │         │
 ▼         ▼
Answer   Time Up
 │         │
 ▼         ▼
Store    Store
Answer   Question
 │         │
 └────┬────┘
      ▼
Next / Previous
      │
      ▼
Submit Quiz
      │
      ▼
Calculate Score
      │
      ▼
Show Result
```

# 💡 Key Concepts Learned

By building this project, you will gain hands-on experience with many important JavaScript concepts used in real-world frontend development.

### Concepts Covered

- Dynamic DOM Manipulation
- Arrays and Array of Objects
- JavaScript Variables
- Event Handling
- Functions
- Conditional Statements
- Loops
- Radio Button Handling
- Timer Implementation
- Form Validation
- Score Calculation
- Percentage Calculation
- Dynamic HTML Generation
- User Interaction
- Data Storage Using Arrays

---

# 📊 Project Highlights

✔ Beginner Friendly

✔ Responsive User Interface

✔ Dynamic Question Rendering

✔ 20 JavaScript MCQs

✔ Four Multiple Choice Options

✔ Previous & Next Navigation

✔ Stores Selected Answers

✔ 60 Seconds Countdown Timer

✔ Automatic Time Up Detection

✔ Dynamic Result Screen

✔ Score Calculation

✔ Percentage Calculation

✔ Pass / Fail Result

✔ Restart Quiz Feature

✔ Pure JavaScript Project

✔ No External Libraries

✔ DOM Manipulation Practice

✔ Clean Folder Structure

✔ Easy to Understand Code

✔ Reusable JavaScript Logic

---

# 🎯 Why This Project?

This project is perfect for beginners who want to improve their JavaScript skills by creating a practical frontend application.

Instead of writing static HTML for every question, the application dynamically generates the complete quiz using JavaScript.

Through this project, developers learn how JavaScript controls the HTML page, updates the DOM dynamically, stores user data, manages timers, and calculates quiz results.

The project also introduces real-world concepts like dynamic rendering, event handling, answer storage, countdown timers, and navigation between questions.

---

# 🧠 What You'll Learn

After completing this project, you will understand:

- How to create a complete quiz application
- How to work with Arrays of Objects
- How to generate HTML dynamically
- How to use DOM Manipulation
- How to use querySelector() & querySelectorAll()
- How to work with radio buttons
- How to store user answers
- How to implement Previous & Next functionality
- How to create countdown timers
- How to use setInterval() and clearInterval()
- How to validate user input
- How to calculate quiz scores
- How to calculate percentages
- How to display dynamic result screens
- How HTML, CSS, and JavaScript work together

---

# 📸 Project Preview

```text

                 ┌──────────────────────────────────────────┐
                 │                                          │
                 │        📝 JavaScript Quiz App            │
                 │                                          │
                 │            ⏱️ 01 : 00 Timer              │
                 │                                          │
                 │   1. What is JavaScript?                 │
                 │                                          │
                 │   ○ Programming Language                 │
                 │   ○ Database                             │
                 │   ○ Browser                              │
                 │   ○ Operating System                     │
                 │                                          │
                 │  ◀ Previous   Next   Submit ▶           │
                 │                                          │
                 └──────────────────────────────────────────┘

```

---

# 🌟 Future Enhancements

Future improvements that can be added to this project:

- 🔢 Question Number Indicator
- 📍 Progress Bar
- 🎨 Dark Mode
- 🌙 Light/Dark Theme Toggle
- 🔀 Shuffle Questions
- 🔀 Shuffle Options
- 💾 Save User Progress
- 📝 Review Answers Before Submit
- 📊 Detailed Performance Report
- 📈 Statistics Dashboard
- 👤 User Login System
- 🏆 Leaderboard
- ☁️ Database Integration
- 🌐 Online Quiz Support
- 🔊 Sound Effects
- 🎵 Background Music
- 📱 Better Mobile Optimization
- 🎖️ Achievement Badges
- 📤 Export Quiz Result as PDF
- 📧 Email Result Feature

---

# 🚀 Project Advantages

This project provides practical experience in frontend development and strengthens JavaScript fundamentals.

### Advantages

- Easy to Understand
- Beginner Friendly
- Lightweight
- Fast Performance
- Responsive Design
- Clean Code Structure
- Reusable Components
- Real-World Project
- No Framework Required
- Excellent JavaScript Practice

---

# 📚 Learning Outcome

By completing this project, you will confidently understand:

✔ Dynamic Web Applications

✔ DOM Manipulation

✔ Event Listeners

✔ Arrays

✔ Objects

✔ Timer Functions

✔ Conditional Logic

✔ User Input Handling

✔ Dynamic HTML Rendering

✔ JavaScript Project Structure

✔ Frontend Development Basics

✔ Problem Solving with JavaScript

---

# 📈 Skills Improved

This project helps improve the following skills:

- HTML5
- CSS3
- JavaScript
- DOM Manipulation
- Logical Thinking
- Problem Solving
- UI Development
- Responsive Design
- Event Handling
- Timer Logic
- Project Structure
- Frontend Development

---

# 📌 Project Information

| Property | Details |
|----------|---------|
| **Project Name** | JavaScript Quiz Application |
| **Project Type** | Frontend Web Application |
| **Category** | JavaScript Project |
| **Languages Used** | HTML5, CSS3, JavaScript |
| **Difficulty Level** | Beginner to Intermediate |
| **Questions** | 20 Multiple Choice Questions |
| **Question Type** | MCQ |
| **Timer** | 60 Seconds Per Question |
| **Navigation** | Previous & Next |
| **Result System** | Score, Percentage & Pass/Fail |
| **Answer Storage** | JavaScript Array |
| **Timer Logic** | setInterval() |
| **Responsive** | Yes |
| **External Libraries** | None |

---

# 📷 Screenshots

> Add your project screenshots here.

## Quiz Screen

```
📸 screenshots/quiz.png
```

## Result Screen

```
📸 screenshots/result.png
```

---

# 🎥 Project Demo

If you have uploaded a demo video, replace the link below.

```text
https://your-demo-link.com
```

Example:

- Google Drive
- YouTube
- GitHub Video
- Loom

---

# 🚀 Getting Started

Clone the repository.

```bash
git clone https://github.com/your-username/javascript-quiz-app.git
```

Open the project folder.

```bash
cd javascript-quiz-app
```

Run the project by opening **index.html** in your browser.

No installation is required.

---

# 📂 Project Structure

```text
JavaScript-Quiz-App
│
├── index.html
├── style.css
├── script.js
├── README.md
│
└── screenshots
    ├── quiz.png
    └── result.png
```

---

# 🤝 Contributing

Contributions are always welcome.

If you'd like to improve this project:

1. Fork the repository.
2. Create your feature branch.

```bash
git checkout -b feature/NewFeature
```

3. Commit your changes.

```bash
git commit -m "Added New Feature"
```

4. Push to GitHub.

```bash
git push origin feature/NewFeature
```

5. Create a Pull Request.

---

# 📄 License

This project is licensed under the **MIT License**.

You are free to use, modify, and distribute this project for learning and personal purposes.

---

# ❓ Frequently Asked Questions

### Why is this project useful?

It helps beginners understand how to build a complete JavaScript application using DOM Manipulation, timers, events, arrays, and dynamic rendering.

---

### Is this project responsive?

✅ Yes.

The layout works on desktop and can easily be improved further for tablets and mobile devices.

---

### Does this project use any framework?

❌ No.

Everything is built using **Vanilla JavaScript**.

---

### Can I add more questions?

✅ Yes.

Simply add another object inside the **quiz array**.

---

### Can I change the timer?

✅ Yes.

Modify the following variable inside **script.js**.

```javascript
timeLeft = 60;
```

---

# 📖 Learning Resources

Useful resources for learning the technologies used in this project.

- HTML Documentation
- CSS Documentation
- JavaScript Documentation
- MDN Web Docs
- W3Schools
- freeCodeCamp

---

# 👨‍💻 Developer

## **Your Name**

### Frontend Developer

### 💻 Technologies

- HTML5
- CSS3
- JavaScript
- Git
- GitHub

---

# 🌟 Show Your Support

If you found this project helpful:

⭐ Star this repository.

🍴 Fork this project.

📢 Share it with your friends.

Your support motivates me to build more useful frontend projects.

---

# 📬 Feedback

If you have any suggestions or feedback, feel free to open an issue or create a pull request.

Every contribution is appreciated.

---

# ❤️ Acknowledgements

Special thanks to everyone who contributes to the open-source community and creates amazing learning resources for developers.

---

# ⭐ Repository Highlights

- Beginner Friendly
- Easy to Understand
- Well Structured Code
- Dynamic Quiz System
- DOM Manipulation Practice
- Timer Functionality
- Modern UI Design
- Responsive Layout
- Pure JavaScript
- Real-World Mini Project

---

<div align="center">

# ⭐ Thank You for Visiting ⭐

### JavaScript Quiz Application

Built with ❤️ using **HTML5**, **CSS3**, and **Vanilla JavaScript**

🚀 Happy Coding!

If you enjoyed this project, don't forget to **⭐ Star** the repository.

</div>