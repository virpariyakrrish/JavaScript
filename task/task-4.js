    document.getElementById("heading").innerHTML =
    'Welcome to <span>JavaScript DOM</span>';

    document.getElementById("paragraph").innerText =
    'Learning Content Modification in JavaScript';

    document.getElementById("content").textContent =
    'Frontend Development with JavaScript';

    console.log("Updated Heading:");
    console.log(document.getElementById("heading").innerHTML);

    console.log("Updated Paragraph:");
    console.log(document.getElementById("paragraph").innerText);

    console.log("Updated Content:");
    console.log(document.getElementById("content").textContent);