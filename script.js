
document.addEventListener("DOMContentLoaded", function() {

    // Create the main test container
    const testBox = document.createElement("div");
    testBox.className = "test-box";

    // Create the heading
    const heading = document.createElement("h2");
    heading.textContent = "Group 24 - Construction Website";

    // Create a description
    const description = document.createElement("p");
    description.textContent = "Welcome to our construction website test page.";

    // Create a test button
    const button = document.createElement("button");
    button.className = "test-button";
    button.textContent = "Click to Test JavaScript";

    // Create a message that will appear after clicking
    const message = document.createElement("p");
    message.id = "test-message";

    // Add functionality to the button
    button.addEventListener("click", function() {
        message.textContent = "Success! JavaScript is working correctly.";
        message.style.color = "green";

        console.log("Group 24 JavaScript test successful!");
    });

    // Add elements to the test container
    testBox.appendChild(heading);
    testBox.appendChild(description);
    testBox.appendChild(button);
    testBox.appendChild(message);

    // Display the test container on the webpage
    document.body.appendChild(testBox);

    console.log("Group 24 website JavaScript loaded successfully!");

});
