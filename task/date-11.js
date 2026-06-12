var products = ["Pen", "Pencil", "Bottle"];

var choice = prompt("1. for Pen\n2. for Pencil\n3. for Bottle\n4. exit\n\nEnter your Choice : ");
var bill = 0;

switch (choice) {
    case '1': choice = Number(prompt("Enter Quantity : "));
        if (choice <= 10) {
            bill += (10 * choice);
        } else {
            bill += (10 * choice - (10 * choice * 0.05));
        }
        break;
    case '2': choice = Number(prompt("Enter Quantity : "));
        if (choice <= 10) {
            bill += (5 * choice);
        } else {
            bill += (5 * choice - (5 * choice * 0.05));
        }
        break;
    case '3': choice = Number(prompt("Enter Quantity : "));
        if (choice <= 10) {
            bill += (20 * choice);
        } else {
            bill += (20 * choice - (20 * choice * 0.05));
        }
        break;

    case '4':
    console.log("Program Closed");
    break;

    default:
    console.log("Invalid Choice");
}

    if (choice != '4') {
    console.log(bill);
}